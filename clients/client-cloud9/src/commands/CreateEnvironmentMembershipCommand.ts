// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEnvironmentMembershipRequest, CreateEnvironmentMembershipResult } from "../models/models_0";
import { de_CreateEnvironmentMembershipCommand, se_CreateEnvironmentMembershipCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentMembershipCommand}.
 */
export interface CreateEnvironmentMembershipCommandInput extends CreateEnvironmentMembershipRequest {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentMembershipCommand}.
 */
export interface CreateEnvironmentMembershipCommandOutput extends CreateEnvironmentMembershipResult, __MetadataBearer {}

/**
 * <p>Adds an environment member to an Cloud9 development environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, CreateEnvironmentMembershipCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, CreateEnvironmentMembershipCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const input = { // CreateEnvironmentMembershipRequest
 *   environmentId: "STRING_VALUE", // required
 *   userArn: "STRING_VALUE", // required
 *   permissions: "read-write" || "read-only", // required
 * };
 * const command = new CreateEnvironmentMembershipCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentMembershipResult
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
 * @param CreateEnvironmentMembershipCommandInput - {@link CreateEnvironmentMembershipCommandInput}
 * @returns {@link CreateEnvironmentMembershipCommandOutput}
 * @see {@link CreateEnvironmentMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentMembershipCommandOutput} for command's `response` shape.
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
 * @example CreateEnvironmentMembership
 * ```javascript
 * //
 * const input = {
 *   "environmentId": "8d9967e2f0624182b74e7690ad69ebEX",
 *   "permissions": "read-write",
 *   "userArn": "arn:aws:iam::123456789012:user/AnotherDemoUser"
 * };
 * const command = new CreateEnvironmentMembershipCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "membership": {
 *     "environmentId": "8d9967e2f0624182b74e7690ad69ebEX",
 *     "permissions": "read-write",
 *     "userArn": "arn:aws:iam::123456789012:user/AnotherDemoUser",
 *     "userId": "AIDAJ3BA6O2FMJWCWXHEX"
 *   }
 * }
 * *\/
 * // example id: createenvironmentmembership-1516822583452
 * ```
 *
 */
export class CreateEnvironmentMembershipCommand extends $Command
  .classBuilder<
    CreateEnvironmentMembershipCommandInput,
    CreateEnvironmentMembershipCommandOutput,
    Cloud9ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Cloud9ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCloud9WorkspaceManagementService", "CreateEnvironmentMembership", {})
  .n("Cloud9Client", "CreateEnvironmentMembershipCommand")
  .f(void 0, void 0)
  .ser(se_CreateEnvironmentMembershipCommand)
  .de(de_CreateEnvironmentMembershipCommand)
  .build() {}
