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
  ListAccountAssociationsInput,
  ListAccountAssociationsInputFilterSensitiveLog,
  ListAccountAssociationsOutput,
  ListAccountAssociationsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAccountAssociationsCommand,
  serializeAws_restJson1ListAccountAssociationsCommand,
} from "../protocols/Aws_restJson1";

export interface ListAccountAssociationsCommandInput extends ListAccountAssociationsInput {}
export interface ListAccountAssociationsCommandOutput extends ListAccountAssociationsOutput, __MetadataBearer {}

/**
 * <p> This is a paginated call to list linked accounts that are linked to the payer account for
 *       the specified time period. If no information is provided, the current billing period is used.
 *       The response will optionally include the billing group that's associated with the linked
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListAccountAssociationsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListAccountAssociationsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const command = new ListAccountAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListAccountAssociationsCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 */
export class ListAccountAssociationsCommand extends $Command<
  ListAccountAssociationsCommandInput,
  ListAccountAssociationsCommandOutput,
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

  constructor(readonly input: ListAccountAssociationsCommandInput) {
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
  ): Handler<ListAccountAssociationsCommandInput, ListAccountAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAccountAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "ListAccountAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccountAssociationsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListAccountAssociationsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccountAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAccountAssociationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccountAssociationsCommandOutput> {
    return deserializeAws_restJson1ListAccountAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
