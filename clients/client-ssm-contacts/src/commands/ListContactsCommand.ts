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
  ListContactsRequest,
  ListContactsRequestFilterSensitiveLog,
  ListContactsResult,
  ListContactsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListContactsCommand,
  serializeAws_json1_1ListContactsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * The input for {@link ListContactsCommand}.
 */
export interface ListContactsCommandInput extends ListContactsRequest {}
/**
 * The output of {@link ListContactsCommand}.
 */
export interface ListContactsCommandOutput extends ListContactsResult, __MetadataBearer {}

/**
 * <p>Lists all contacts and escalation plans in Incident Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListContactsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListContactsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ListContactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContactsCommandInput} for command's `input` shape.
 * @see {@link ListContactsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @example To list all escalation plans and contacts
 * ```javascript
 * // The following list-contacts example lists the contacts and escalation plans in your account.
 * const input = {};
 * const command = new ListContactsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Contacts": [
 *     {
 *       "Alias": "akuam",
 *       "ContactArn": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/akuam",
 *       "DisplayName": "Akua Mansa",
 *       "Type": "PERSONAL"
 *     },
 *     {
 *       "Alias": "alejr",
 *       "ContactArn": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/alejr",
 *       "DisplayName": "Alejandro Rosalez",
 *       "Type": "PERSONAL"
 *     },
 *     {
 *       "Alias": "anasi",
 *       "ContactArn": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/anasi",
 *       "DisplayName": "Ana Carolina Silva",
 *       "Type": "PERSONAL"
 *     },
 *     {
 *       "Alias": "example_escalation",
 *       "ContactArn": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/example_escalation",
 *       "DisplayName": "Example Escalation",
 *       "Type": "ESCALATION"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-all-escalation-plans-and-contacts-1630367103082
 * ```
 *
 */
export class ListContactsCommand extends $Command<
  ListContactsCommandInput,
  ListContactsCommandOutput,
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

  constructor(readonly input: ListContactsCommandInput) {
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
  ): Handler<ListContactsCommandInput, ListContactsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListContactsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "ListContactsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListContactsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListContactsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListContactsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListContactsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListContactsCommandOutput> {
    return deserializeAws_json1_1ListContactsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
