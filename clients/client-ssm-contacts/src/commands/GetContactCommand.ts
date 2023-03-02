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
  GetContactRequest,
  GetContactRequestFilterSensitiveLog,
  GetContactResult,
  GetContactResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetContactCommand,
  serializeAws_json1_1GetContactCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * The input for {@link GetContactCommand}.
 */
export interface GetContactCommandInput extends GetContactRequest {}
/**
 * The output of {@link GetContactCommand}.
 */
export interface GetContactCommandOutput extends GetContactResult, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified contact or escalation plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, GetContactCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, GetContactCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new GetContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContactCommandInput} for command's `input` shape.
 * @see {@link GetContactCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @example Example 1: To describe a contact plan
 * ```javascript
 * // The following get-contact example describes a contact.
 * const input = {
 *   "ContactId": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/akuam"
 * };
 * const command = new GetContactCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Alias": "akuam",
 *   "ContactArn": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/akuam",
 *   "DisplayName": "Akua Mansa",
 *   "Plan": {
 *     "Stages": [
 *       {
 *         "DurationInMinutes": 5,
 *         "Targets": [
 *           {
 *             "ChannelTargetInfo": {
 *               "ContactChannelId": "arn:aws:ssm-contacts:us-east-2:111122223333:contact-channel/akuam/beb25840-5ac8-4644-95cc-7a8de390fa65",
 *               "RetryIntervalInMinutes": 1
 *             }
 *           }
 *         ]
 *       },
 *       {
 *         "DurationInMinutes": 5,
 *         "Targets": [
 *           {
 *             "ChannelTargetInfo": {
 *               "ContactChannelId": "arn:aws:ssm-contacts:us-east-2:111122223333:contact-channel/akuam/49f3c24d-5f9f-4638-ae25-3f49e04229ad",
 *               "RetryIntervalInMinutes": 1
 *             }
 *           }
 *         ]
 *       },
 *       {
 *         "DurationInMinutes": 5,
 *         "Targets": [
 *           {
 *             "ChannelTargetInfo": {
 *               "ContactChannelId": "arn:aws:ssm-contacts:us-east-2:111122223333:contact-channel/akuam/77d4f447-f619-4954-afff-85551e369c2a",
 *               "RetryIntervalInMinutes": 1
 *             }
 *           }
 *         ]
 *       }
 *     ]
 *   },
 *   "Type": "PERSONAL"
 * }
 * *\/
 * // example id: example-1-to-describe-a-contact-plan-1630365360005
 * ```
 *
 * @example Example 2: To describe an escalation plan
 * ```javascript
 * // The following get-contact example describes an escalation plan.
 * const input = {
 *   "ContactId": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/example_escalation"
 * };
 * const command = new GetContactCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Alias": "example_escalation",
 *   "ContactArn": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/example_escalation",
 *   "DisplayName": "Example Escalation Plan",
 *   "Plan": {
 *     "Stages": [
 *       {
 *         "DurationInMinutes": 5,
 *         "Targets": [
 *           {
 *             "ContactTargetInfo": {
 *               "ContactId": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/akuam",
 *               "IsEssential": true
 *             }
 *           }
 *         ]
 *       },
 *       {
 *         "DurationInMinutes": 5,
 *         "Targets": [
 *           {
 *             "ContactTargetInfo": {
 *               "ContactId": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/alejr",
 *               "IsEssential": false
 *             }
 *           }
 *         ]
 *       },
 *       {
 *         "DurationInMinutes": 0,
 *         "Targets": [
 *           {
 *             "ContactTargetInfo": {
 *               "ContactId": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/anasi",
 *               "IsEssential": false
 *             }
 *           }
 *         ]
 *       }
 *     ]
 *   },
 *   "Type": "ESCALATION"
 * }
 * *\/
 * // example id: example-2-to-describe-an-escalation-plan-1630365515731
 * ```
 *
 */
export class GetContactCommand extends $Command<
  GetContactCommandInput,
  GetContactCommandOutput,
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

  constructor(readonly input: GetContactCommandInput) {
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
  ): Handler<GetContactCommandInput, GetContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetContactCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "GetContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContactRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetContactResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetContactCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetContactCommandOutput> {
    return deserializeAws_json1_1GetContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
