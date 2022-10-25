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

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import {
  BatchDisassociateResourcesFromCustomLineItemInput,
  BatchDisassociateResourcesFromCustomLineItemInputFilterSensitiveLog,
  BatchDisassociateResourcesFromCustomLineItemOutput,
  BatchDisassociateResourcesFromCustomLineItemOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchDisassociateResourcesFromCustomLineItemCommand,
  serializeAws_restJson1BatchDisassociateResourcesFromCustomLineItemCommand,
} from "../protocols/Aws_restJson1";

export interface BatchDisassociateResourcesFromCustomLineItemCommandInput
  extends BatchDisassociateResourcesFromCustomLineItemInput {}
export interface BatchDisassociateResourcesFromCustomLineItemCommandOutput
  extends BatchDisassociateResourcesFromCustomLineItemOutput,
    __MetadataBearer {}

/**
 * <p>
 *       Disassociates a batch of resources from a percentage custom line item.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, BatchDisassociateResourcesFromCustomLineItemCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, BatchDisassociateResourcesFromCustomLineItemCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const command = new BatchDisassociateResourcesFromCustomLineItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisassociateResourcesFromCustomLineItemCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateResourcesFromCustomLineItemCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 */
export class BatchDisassociateResourcesFromCustomLineItemCommand extends $Command<
  BatchDisassociateResourcesFromCustomLineItemCommandInput,
  BatchDisassociateResourcesFromCustomLineItemCommandOutput,
  BillingconductorClientResolvedConfig
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

  constructor(readonly input: BatchDisassociateResourcesFromCustomLineItemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BillingconductorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchDisassociateResourcesFromCustomLineItemCommandInput,
    BatchDisassociateResourcesFromCustomLineItemCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        BatchDisassociateResourcesFromCustomLineItemCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "BatchDisassociateResourcesFromCustomLineItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDisassociateResourcesFromCustomLineItemInputFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDisassociateResourcesFromCustomLineItemOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchDisassociateResourcesFromCustomLineItemCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDisassociateResourcesFromCustomLineItemCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDisassociateResourcesFromCustomLineItemCommandOutput> {
    return deserializeAws_restJson1BatchDisassociateResourcesFromCustomLineItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
