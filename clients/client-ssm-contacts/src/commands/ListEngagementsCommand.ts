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
  ListEngagementsRequest,
  ListEngagementsRequestFilterSensitiveLog,
  ListEngagementsResult,
  ListEngagementsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListEngagementsCommand,
  serializeAws_json1_1ListEngagementsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * The input for {@link ListEngagementsCommand}.
 */
export interface ListEngagementsCommandInput extends ListEngagementsRequest {}
/**
 * The output of {@link ListEngagementsCommand}.
 */
export interface ListEngagementsCommandOutput extends ListEngagementsResult, __MetadataBearer {}

/**
 * <p>Lists all engagements that have happened in an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListEngagementsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListEngagementsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ListEngagementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEngagementsCommandInput} for command's `input` shape.
 * @see {@link ListEngagementsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 *
 * @example To list all engagements
 * ```javascript
 * // The following list-engagements example lists engagements to escalation plans and contacts. You can also list engagements for a single incident.
 * const input = {};
 * const command = new ListEngagementsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Engagements": [
 *     {
 *       "ContactArn": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/akuam",
 *       "EngagementArn": "arn:aws:ssm-contacts:us-east-2:111122223333:engagement/akuam/91792571-0b53-4821-9f73-d25d13d9e529",
 *       "Sender": "cli",
 *       "StartTime": "2021-05-18T20:37:50.300000+00:00"
 *     },
 *     {
 *       "ContactArn": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/akuam",
 *       "EngagementArn": "arn:aws:ssm-contacts:us-east-2:111122223333:engagement/akuam/78a29753-3674-4ac5-9f83-0468563567f0",
 *       "Sender": "cli",
 *       "StartTime": "2021-05-18T18:40:26.666000+00:00"
 *     },
 *     {
 *       "ContactArn": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/example_escalation",
 *       "EngagementArn": "arn:aws:ssm-contacts:us-east-2:111122223333:engagement/example_escalation/69e40ce1-8dbb-4d57-8962-5fbe7fc53356",
 *       "Sender": "cli",
 *       "StartTime": "2021-05-18T18:25:41.151000+00:00"
 *     },
 *     {
 *       "ContactArn": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/akuam",
 *       "EngagementArn": "arn:aws:ssm-contacts:us-east-2:111122223333:engagement/akuam/607ced0e-e8fa-4ea7-8958-a237b8803f8f",
 *       "Sender": "cli",
 *       "StartTime": "2021-05-18T18:20:58.093000+00:00"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 */
export class ListEngagementsCommand extends $Command<
  ListEngagementsCommandInput,
  ListEngagementsCommandOutput,
  SSMContactsClientResolvedConfig
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

  constructor(readonly input: ListEngagementsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEngagementsCommandInput, ListEngagementsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEngagementsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "ListEngagementsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEngagementsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListEngagementsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEngagementsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListEngagementsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEngagementsCommandOutput> {
    return deserializeAws_json1_1ListEngagementsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
