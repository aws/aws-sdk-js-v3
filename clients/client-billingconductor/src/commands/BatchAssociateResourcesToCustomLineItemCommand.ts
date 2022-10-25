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
  BatchAssociateResourcesToCustomLineItemInput,
  BatchAssociateResourcesToCustomLineItemInputFilterSensitiveLog,
  BatchAssociateResourcesToCustomLineItemOutput,
  BatchAssociateResourcesToCustomLineItemOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchAssociateResourcesToCustomLineItemCommand,
  serializeAws_restJson1BatchAssociateResourcesToCustomLineItemCommand,
} from "../protocols/Aws_restJson1";

export interface BatchAssociateResourcesToCustomLineItemCommandInput
  extends BatchAssociateResourcesToCustomLineItemInput {}
export interface BatchAssociateResourcesToCustomLineItemCommandOutput
  extends BatchAssociateResourcesToCustomLineItemOutput,
    __MetadataBearer {}

/**
 * <p>
 *       Associates a batch of resources to a percentage custom line item.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, BatchAssociateResourcesToCustomLineItemCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, BatchAssociateResourcesToCustomLineItemCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const command = new BatchAssociateResourcesToCustomLineItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAssociateResourcesToCustomLineItemCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateResourcesToCustomLineItemCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 */
export class BatchAssociateResourcesToCustomLineItemCommand extends $Command<
  BatchAssociateResourcesToCustomLineItemCommandInput,
  BatchAssociateResourcesToCustomLineItemCommandOutput,
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

  constructor(readonly input: BatchAssociateResourcesToCustomLineItemCommandInput) {
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
    BatchAssociateResourcesToCustomLineItemCommandInput,
    BatchAssociateResourcesToCustomLineItemCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        BatchAssociateResourcesToCustomLineItemCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "BatchAssociateResourcesToCustomLineItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchAssociateResourcesToCustomLineItemInputFilterSensitiveLog,
      outputFilterSensitiveLog: BatchAssociateResourcesToCustomLineItemOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchAssociateResourcesToCustomLineItemCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchAssociateResourcesToCustomLineItemCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAssociateResourcesToCustomLineItemCommandOutput> {
    return deserializeAws_restJson1BatchAssociateResourcesToCustomLineItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
