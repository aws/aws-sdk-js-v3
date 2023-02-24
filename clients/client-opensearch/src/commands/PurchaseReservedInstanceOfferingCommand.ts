// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  PurchaseReservedInstanceOfferingRequest,
  PurchaseReservedInstanceOfferingRequestFilterSensitiveLog,
  PurchaseReservedInstanceOfferingResponse,
  PurchaseReservedInstanceOfferingResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  deserializeAws_restJson1PurchaseReservedInstanceOfferingCommand,
  serializeAws_restJson1PurchaseReservedInstanceOfferingCommand,
} from "../protocols/Aws_restJson1";

export interface PurchaseReservedInstanceOfferingCommandInput extends PurchaseReservedInstanceOfferingRequest {}
export interface PurchaseReservedInstanceOfferingCommandOutput
  extends PurchaseReservedInstanceOfferingResponse,
    __MetadataBearer {}

/**
 * <p>Allows you to purchase Amazon OpenSearch Service Reserved Instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, PurchaseReservedInstanceOfferingCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, PurchaseReservedInstanceOfferingCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new PurchaseReservedInstanceOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseReservedInstanceOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedInstanceOfferingCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 */
export class PurchaseReservedInstanceOfferingCommand extends $Command<
  PurchaseReservedInstanceOfferingCommandInput,
  PurchaseReservedInstanceOfferingCommandOutput,
  OpenSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: PurchaseReservedInstanceOfferingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PurchaseReservedInstanceOfferingCommandInput, PurchaseReservedInstanceOfferingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PurchaseReservedInstanceOfferingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "PurchaseReservedInstanceOfferingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PurchaseReservedInstanceOfferingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PurchaseReservedInstanceOfferingResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PurchaseReservedInstanceOfferingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PurchaseReservedInstanceOfferingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PurchaseReservedInstanceOfferingCommandOutput> {
    return deserializeAws_restJson1PurchaseReservedInstanceOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
