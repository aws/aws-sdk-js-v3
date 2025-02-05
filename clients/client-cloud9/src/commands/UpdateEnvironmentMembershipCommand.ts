// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEnvironmentMembershipRequest, UpdateEnvironmentMembershipResult } from "../models/models_0";
import { de_UpdateEnvironmentMembershipCommand, se_UpdateEnvironmentMembershipCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEnvironmentMembershipCommand}.
 */
export interface UpdateEnvironmentMembershipCommandInput extends UpdateEnvironmentMembershipRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentMembershipCommand}.
 */
export interface UpdateEnvironmentMembershipCommandOutput extends UpdateEnvironmentMembershipResult, __MetadataBearer {}

/**
 * <p>Changes the settings of an existing environment member for an Cloud9 development
 *       environment.</p>
 *          <important>
 *             <p>Cloud9 is no longer available to new customers. Existing customers of
 *         Cloud9 can continue to use the service as normal.
 *         <a href="http://aws.amazon.com/blogs/devops/how-to-migrate-from-aws-cloud9-to-aws-ide-toolkits-or-aws-cloudshell/">Learn more"</a>
 *             </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, UpdateEnvironmentMembershipCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, UpdateEnvironmentMembershipCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Cloud9Client(config);
 * const input = { // UpdateEnvironmentMembershipRequest
 *   environmentId: "STRING_VALUE", // required
 *   userArn: "STRING_VALUE", // required
 *   permissions: "read-write" || "read-only", // required
 * };
 * const command = new UpdateEnvironmentMembershipCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnvironmentMembershipResult
 * //   membership: { // EnvironmentMember
 * //     permissions: "owner" || "read-write" || "read-only", // required
 * //     userId: "STRING_VALUE", // required
 * //     userArn: "STRING_VALUE", // required
 * //     environmentId: "STRING_VALUE", // required
 * //     lastAccess: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateEnvironmentMembershipCommandInput - {@link UpdateEnvironmentMembershipCommandInput}
 * @returns {@link UpdateEnvironmentMembershipCommandOutput}
 * @see {@link UpdateEnvironmentMembershipCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentMembershipCommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for Cloud9Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The target request is invalid.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>An access permissions issue occurred.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The target resource cannot be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many service requests were made over the given time period.</p>
 *
 * @throws {@link Cloud9ServiceException}
 * <p>Base exception class for all service exceptions from Cloud9 service.</p>
 *
 * @public
 * @example UpdateEnvironmentMembership
 * ```javascript
 * //
 * const input = {
 *   "environmentId": "8d9967e2f0624182b74e7690ad69ebEX",
 *   "permissions": "read-only",
 *   "userArn": "arn:aws:iam::123456789012:user/AnotherDemoUser"
 * };
 * const command = new UpdateEnvironmentMembershipCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "membership": {
 *     "environmentId": "8d9967e2f0624182b74e7690ad69eb31",
 *     "permissions": "read-only",
 *     "userArn": "arn:aws:iam::123456789012:user/AnotherDemoUser",
 *     "userId": "AIDAJ3BA6O2FMJWCWXHEX"
 *   }
 * }
 * *\/
 * // example id: updateenvironmentmembership-1516823876645
 * ```
 *
 */
export class UpdateEnvironmentMembershipCommand extends $Command
  .classBuilder<
    UpdateEnvironmentMembershipCommandInput,
    UpdateEnvironmentMembershipCommandOutput,
    Cloud9ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Cloud9ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCloud9WorkspaceManagementService", "UpdateEnvironmentMembership", {})
  .n("Cloud9Client", "UpdateEnvironmentMembershipCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEnvironmentMembershipCommand)
  .de(de_UpdateEnvironmentMembershipCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnvironmentMembershipRequest;
      output: UpdateEnvironmentMembershipResult;
    };
    sdk: {
      input: UpdateEnvironmentMembershipCommandInput;
      output: UpdateEnvironmentMembershipCommandOutput;
    };
  };
}
