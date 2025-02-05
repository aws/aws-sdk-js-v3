// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateStudioSessionMappingInput } from "../models/models_0";
import { de_CreateStudioSessionMappingCommand, se_CreateStudioSessionMappingCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStudioSessionMappingCommand}.
 */
export interface CreateStudioSessionMappingCommandInput extends CreateStudioSessionMappingInput {}
/**
 * @public
 *
 * The output of {@link CreateStudioSessionMappingCommand}.
 */
export interface CreateStudioSessionMappingCommandOutput extends __MetadataBearer {}

/**
 * <p>Maps a user or group to the Amazon EMR Studio specified by
 *          <code>StudioId</code>, and applies a session policy to refine Studio permissions for that
 *          user or group. Use <code>CreateStudioSessionMapping</code> to assign users to a Studio when
 *          you use IAM Identity Center authentication. For instructions on how to assign users to a
 *          Studio when you use IAM authentication, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-manage-users.html#emr-studio-assign-users-groups">Assign a user or group to your EMR Studio</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, CreateStudioSessionMappingCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, CreateStudioSessionMappingCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EMRClient(config);
 * const input = { // CreateStudioSessionMappingInput
 *   StudioId: "STRING_VALUE", // required
 *   IdentityId: "STRING_VALUE",
 *   IdentityName: "STRING_VALUE",
 *   IdentityType: "USER" || "GROUP", // required
 *   SessionPolicyArn: "STRING_VALUE", // required
 * };
 * const command = new CreateStudioSessionMappingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateStudioSessionMappingCommandInput - {@link CreateStudioSessionMappingCommandInput}
 * @returns {@link CreateStudioSessionMappingCommandOutput}
 * @see {@link CreateStudioSessionMappingCommandInput} for command's `input` shape.
 * @see {@link CreateStudioSessionMappingCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 * @public
 */
export class CreateStudioSessionMappingCommand extends $Command
  .classBuilder<
    CreateStudioSessionMappingCommandInput,
    CreateStudioSessionMappingCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "CreateStudioSessionMapping", {})
  .n("EMRClient", "CreateStudioSessionMappingCommand")
  .f(void 0, void 0)
  .ser(se_CreateStudioSessionMappingCommand)
  .de(de_CreateStudioSessionMappingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStudioSessionMappingInput;
      output: {};
    };
    sdk: {
      input: CreateStudioSessionMappingCommandInput;
      output: CreateStudioSessionMappingCommandOutput;
    };
  };
}
