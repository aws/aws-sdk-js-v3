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

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import {
  ListPartnerEventSourceAccountsRequest,
  ListPartnerEventSourceAccountsRequestFilterSensitiveLog,
  ListPartnerEventSourceAccountsResponse,
  ListPartnerEventSourceAccountsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListPartnerEventSourceAccountsCommand,
  serializeAws_json1_1ListPartnerEventSourceAccountsCommand,
} from "../protocols/Aws_json1_1";

export interface ListPartnerEventSourceAccountsCommandInput extends ListPartnerEventSourceAccountsRequest {}
export interface ListPartnerEventSourceAccountsCommandOutput
  extends ListPartnerEventSourceAccountsResponse,
    __MetadataBearer {}

/**
 * <p>An SaaS partner can use this operation to display the Amazon Web Services account ID that a particular
 *       partner event source name is associated with. This operation is not used by Amazon Web Services
 *       customers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListPartnerEventSourceAccountsCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListPartnerEventSourceAccountsCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new ListPartnerEventSourceAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPartnerEventSourceAccountsCommandInput} for command's `input` shape.
 * @see {@link ListPartnerEventSourceAccountsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 */
export class ListPartnerEventSourceAccountsCommand extends $Command<
  ListPartnerEventSourceAccountsCommandInput,
  ListPartnerEventSourceAccountsCommandOutput,
  CloudWatchEventsClientResolvedConfig
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

  constructor(readonly input: ListPartnerEventSourceAccountsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPartnerEventSourceAccountsCommandInput, ListPartnerEventSourceAccountsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPartnerEventSourceAccountsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "ListPartnerEventSourceAccountsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPartnerEventSourceAccountsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPartnerEventSourceAccountsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListPartnerEventSourceAccountsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPartnerEventSourceAccountsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPartnerEventSourceAccountsCommandOutput> {
    return deserializeAws_json1_1ListPartnerEventSourceAccountsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
