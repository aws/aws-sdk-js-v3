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
  UpdatePolicyRequest,
  UpdatePolicyRequestFilterSensitiveLog,
  UpdatePolicyResponse,
  UpdatePolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1UpdatePolicyCommand,
  serializeAws_json1_1UpdatePolicyCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link UpdatePolicyCommand}.
 */
export interface UpdatePolicyCommandInput extends UpdatePolicyRequest {}
/**
 * The output of {@link UpdatePolicyCommand}.
 */
export interface UpdatePolicyCommandOutput extends UpdatePolicyResponse, __MetadataBearer {}

/**
 * <p>Updates an existing policy with a new name, description, or content. If you don't
 *             supply any parameter, that value remains unchanged. You can't change a policy's
 *             type.</p>
 *          <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, UpdatePolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, UpdatePolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new UpdatePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdatePolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 * @example To update the details of a policy
 * ```javascript
 * // The following example shows how to rename a policy and give it a new description and new content. The output confirms the new name and description text:/n/n
 * const input = {
 *   "Description": "This description replaces the original.",
 *   "Name": "Renamed-Policy",
 *   "PolicyId": "p-examplepolicyid111"
 * };
 * const command = new UpdatePolicyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Policy": {
 *     "Content": "{ \"Version\": \"2012-10-17\", \"Statement\": { \"Effect\": \"Allow\", \"Action\": \"ec2:*\", \"Resource\": \"*\" } }",
 *     "PolicySummary": {
 *       "Arn": "arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid111",
 *       "AwsManaged": false,
 *       "Description": "This description replaces the original.",
 *       "Id": "p-examplepolicyid111",
 *       "Name": "Renamed-Policy",
 *       "Type": "SERVICE_CONTROL_POLICY"
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @example To update the content of a policy
 * ```javascript
 * // The following example shows how to replace the JSON text of the SCP from the preceding example with a new JSON policy text string that allows S3 actions instead of EC2 actions:/n/n
 * const input = {
 *   "Content": "{ \\\"Version\\\": \\\"2012-10-17\\\", \\\"Statement\\\": {\\\"Effect\\\": \\\"Allow\\\", \\\"Action\\\": \\\"s3:*\\\", \\\"Resource\\\": \\\"*\\\" } }",
 *   "PolicyId": "p-examplepolicyid111"
 * };
 * const command = new UpdatePolicyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Policy": {
 *     "Content": "{ \\\"Version\\\": \\\"2012-10-17\\\", \\\"Statement\\\": { \\\"Effect\\\": \\\"Allow\\\", \\\"Action\\\": \\\"s3:*\\\", \\\"Resource\\\": \\\"*\\\" } }",
 *     "PolicySummary": {
 *       "Arn": "arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid111",
 *       "AwsManaged": false,
 *       "Description": "This description replaces the original.",
 *       "Id": "p-examplepolicyid111",
 *       "Name": "Renamed-Policy",
 *       "Type": "SERVICE_CONTROL_POLICY"
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 */
export class UpdatePolicyCommand extends $Command<
  UpdatePolicyCommandInput,
  UpdatePolicyCommandOutput,
  OrganizationsClientResolvedConfig
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

  constructor(readonly input: UpdatePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePolicyCommandInput, UpdatePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdatePolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "UpdatePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdatePolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePolicyCommandOutput> {
    return deserializeAws_json1_1UpdatePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
