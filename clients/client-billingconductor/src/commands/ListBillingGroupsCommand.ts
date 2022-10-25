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
  ListBillingGroupsInput,
  ListBillingGroupsInputFilterSensitiveLog,
  ListBillingGroupsOutput,
  ListBillingGroupsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListBillingGroupsCommand,
  serializeAws_restJson1ListBillingGroupsCommand,
} from "../protocols/Aws_restJson1";

export interface ListBillingGroupsCommandInput extends ListBillingGroupsInput {}
export interface ListBillingGroupsCommandOutput extends ListBillingGroupsOutput, __MetadataBearer {}

/**
 * <p>A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListBillingGroupsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListBillingGroupsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const command = new ListBillingGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBillingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListBillingGroupsCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 */
export class ListBillingGroupsCommand extends $Command<
  ListBillingGroupsCommandInput,
  ListBillingGroupsCommandOutput,
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

  constructor(readonly input: ListBillingGroupsCommandInput) {
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
  ): Handler<ListBillingGroupsCommandInput, ListBillingGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBillingGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "ListBillingGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBillingGroupsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListBillingGroupsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBillingGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBillingGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBillingGroupsCommandOutput> {
    return deserializeAws_restJson1ListBillingGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
