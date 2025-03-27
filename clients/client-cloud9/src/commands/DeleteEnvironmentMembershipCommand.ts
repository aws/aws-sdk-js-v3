// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEnvironmentMembershipRequest, DeleteEnvironmentMembershipResult } from "../models/models_0";
import { de_DeleteEnvironmentMembershipCommand, se_DeleteEnvironmentMembershipCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentMembershipCommand}.
 */
export interface DeleteEnvironmentMembershipCommandInput extends DeleteEnvironmentMembershipRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentMembershipCommand}.
 */
export interface DeleteEnvironmentMembershipCommandOutput extends DeleteEnvironmentMembershipResult, __MetadataBearer {}

/**
 * <p>Deletes an environment member from a development environment.</p>
 *          <important>
 *             <p>Cloud9 is no longer available to new customers. Existing customers of
 *         Cloud9 can continue to use the service as normal.
 *         <a href="http://aws.amazon.com/blogs/devops/how-to-migrate-from-aws-cloud9-to-aws-ide-toolkits-or-aws-cloudshell/">Learn more"</a>
 *             </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, DeleteEnvironmentMembershipCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, DeleteEnvironmentMembershipCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const input = { // DeleteEnvironmentMembershipRequest
 *   environmentId: "STRING_VALUE", // required
 *   userArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentMembershipCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEnvironmentMembershipCommandInput - {@link DeleteEnvironmentMembershipCommandInput}
 * @returns {@link DeleteEnvironmentMembershipCommandOutput}
 * @see {@link DeleteEnvironmentMembershipCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentMembershipCommandOutput} for command's `response` shape.
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
 *
 * @example DeleteEnvironmentMembership
 * ```javascript
 * //
 * const input = {
 *   environmentId: "8d9967e2f0624182b74e7690ad69ebEX",
 *   userArn: "arn:aws:iam::123456789012:user/AnotherDemoUser"
 * };
 * const command = new DeleteEnvironmentMembershipCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteEnvironmentMembershipCommand extends $Command
  .classBuilder<
    DeleteEnvironmentMembershipCommandInput,
    DeleteEnvironmentMembershipCommandOutput,
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
  .s("AWSCloud9WorkspaceManagementService", "DeleteEnvironmentMembership", {})
  .n("Cloud9Client", "DeleteEnvironmentMembershipCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEnvironmentMembershipCommand)
  .de(de_DeleteEnvironmentMembershipCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentMembershipRequest;
      output: {};
    };
    sdk: {
      input: DeleteEnvironmentMembershipCommandInput;
      output: DeleteEnvironmentMembershipCommandOutput;
    };
  };
}
