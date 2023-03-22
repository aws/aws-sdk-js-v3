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
  StartEngagementRequest,
  StartEngagementRequestFilterSensitiveLog,
  StartEngagementResult,
  StartEngagementResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartEngagementCommand,
  serializeAws_json1_1StartEngagementCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 *
 * The input for {@link StartEngagementCommand}.
 */
export interface StartEngagementCommandInput extends StartEngagementRequest {}
/**
 * @public
 *
 * The output of {@link StartEngagementCommand}.
 */
export interface StartEngagementCommandOutput extends StartEngagementResult, __MetadataBearer {}

/**
 * @public
 * <p>Starts an engagement to a contact or escalation plan. The engagement engages each
 *          contact specified in the incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, StartEngagementCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, StartEngagementCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new StartEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartEngagementCommandInput - {@link StartEngagementCommandInput}
 * @returns {@link StartEngagementCommandOutput}
 * @see {@link StartEngagementCommandInput} for command's `input` shape.
 * @see {@link StartEngagementCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link DataEncryptionException} (client fault)
 *  <p>The operation failed to due an encryption key error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while
 *          processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 *
 * @example Example 1: To page a contact's contact channels
 * ```javascript
 * // The following start-engagement pages contact's contact channels. Sender, subject, public-subject, and public-content are all free from fields. Incident Manager sends the subject and content to the provided VOICE or EMAIL contact channels. Incident Manager sends the public-subject and public-content to the provided SMS contact channels. Sender is used to track who started the engagement.
 * const input = {
 *   "ContactId": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/akuam",
 *   "Content": "Testing engagements",
 *   "PublicContent": "Testing engagements",
 *   "PublicSubject": "test",
 *   "Sender": "tester",
 *   "Subject": "test"
 * };
 * const command = new StartEngagementCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EngagementArn": "arn:aws:ssm-contacts:us-east-2:111122223333:engagement/akuam/607ced0e-e8fa-4ea7-8958-a237b8803f8f"
 * }
 * *\/
 * // example id: example-1-to-page-a-contacts-contact-channels-1630436634872
 * ```
 *
 * @example Example 2: To page a contact in the provided escalation plan.
 * ```javascript
 * // The following start-engagement engages contact's through an escalation plan. Each contact is paged according to their engagement plan.
 * const input = {
 *   "ContactId": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/example_escalation",
 *   "Content": "Testing engagements",
 *   "PublicContent": "Testing engagements",
 *   "PublicSubject": "test",
 *   "Sender": "tester",
 *   "Subject": "test"
 * };
 * const command = new StartEngagementCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EngagementArn": "arn:aws:ssm-contacts:us-east-2:111122223333:engagement/example_escalation/69e40ce1-8dbb-4d57-8962-5fbe7fc53356"
 * }
 * *\/
 * // example id: example-2-to-page-a-contact-in-the-provided-escalation-plan-1630436808480
 * ```
 *
 */
export class StartEngagementCommand extends $Command<
  StartEngagementCommandInput,
  StartEngagementCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: StartEngagementCommandInput) {
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
  ): Handler<StartEngagementCommandInput, StartEngagementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartEngagementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "StartEngagementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartEngagementRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartEngagementResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StartEngagementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartEngagementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartEngagementCommandOutput> {
    return deserializeAws_json1_1StartEngagementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
