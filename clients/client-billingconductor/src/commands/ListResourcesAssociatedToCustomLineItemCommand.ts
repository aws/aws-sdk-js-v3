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
  ListResourcesAssociatedToCustomLineItemInput,
  ListResourcesAssociatedToCustomLineItemInputFilterSensitiveLog,
  ListResourcesAssociatedToCustomLineItemOutput,
  ListResourcesAssociatedToCustomLineItemOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListResourcesAssociatedToCustomLineItemCommand,
  serializeAws_restJson1ListResourcesAssociatedToCustomLineItemCommand,
} from "../protocols/Aws_restJson1";

export interface ListResourcesAssociatedToCustomLineItemCommandInput
  extends ListResourcesAssociatedToCustomLineItemInput {}
export interface ListResourcesAssociatedToCustomLineItemCommandOutput
  extends ListResourcesAssociatedToCustomLineItemOutput,
    __MetadataBearer {}

/**
 * <p>
 *       List the resources that are associated to a custom line item.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListResourcesAssociatedToCustomLineItemCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListResourcesAssociatedToCustomLineItemCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const command = new ListResourcesAssociatedToCustomLineItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourcesAssociatedToCustomLineItemCommandInput} for command's `input` shape.
 * @see {@link ListResourcesAssociatedToCustomLineItemCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 */
export class ListResourcesAssociatedToCustomLineItemCommand extends $Command<
  ListResourcesAssociatedToCustomLineItemCommandInput,
  ListResourcesAssociatedToCustomLineItemCommandOutput,
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

  constructor(readonly input: ListResourcesAssociatedToCustomLineItemCommandInput) {
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
    ListResourcesAssociatedToCustomLineItemCommandInput,
    ListResourcesAssociatedToCustomLineItemCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListResourcesAssociatedToCustomLineItemCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "ListResourcesAssociatedToCustomLineItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResourcesAssociatedToCustomLineItemInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListResourcesAssociatedToCustomLineItemOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListResourcesAssociatedToCustomLineItemCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListResourcesAssociatedToCustomLineItemCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResourcesAssociatedToCustomLineItemCommandOutput> {
    return deserializeAws_restJson1ListResourcesAssociatedToCustomLineItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
