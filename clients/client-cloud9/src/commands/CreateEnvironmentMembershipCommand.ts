// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateEnvironmentMembershipRequest, CreateEnvironmentMembershipResult } from "../models/models_0";
import { CreateEnvironmentMembership$ } from "../schemas/schemas_0";

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
 *          <important>
 *             <p>Cloud9 is no longer available to new customers. Existing customers of
 *         Cloud9 can continue to use the service as normal.
 *         <a href="http://aws.amazon.com/blogs/devops/how-to-migrate-from-aws-cloud9-to-aws-ide-toolkits-or-aws-cloudshell/">Learn more"</a>
 *             </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, CreateEnvironmentMembershipCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, CreateEnvironmentMembershipCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * // import type { Cloud9ClientConfig } from "@aws-sdk/client-cloud9";
 * const config = {}; // type is Cloud9ClientConfig
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
 *
 * @example CreateEnvironmentMembership
 * ```javascript
 * //
 * const input = {
 *   environmentId: "8d9967e2f0624182b74e7690ad69ebEX",
 *   permissions: "read-write",
 *   userArn: "arn:aws:iam::123456789012:user/AnotherDemoUser"
 * };
 * const command = new CreateEnvironmentMembershipCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   membership: {
 *     environmentId: "8d9967e2f0624182b74e7690ad69ebEX",
 *     permissions: "read-write",
 *     userArn: "arn:aws:iam::123456789012:user/AnotherDemoUser",
 *     userId: "AIDAJ3BA6O2FMJWCWXHEX"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateEnvironmentMembershipCommand extends $Command
  .classBuilder<
    CreateEnvironmentMembershipCommandInput,
    CreateEnvironmentMembershipCommandOutput,
    Cloud9ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Cloud9ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCloud9WorkspaceManagementService", "CreateEnvironmentMembership", {})
  .n("Cloud9Client", "CreateEnvironmentMembershipCommand")
  .sc(CreateEnvironmentMembership$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEnvironmentMembershipRequest;
      output: CreateEnvironmentMembershipResult;
    };
    sdk: {
      input: CreateEnvironmentMembershipCommandInput;
      output: CreateEnvironmentMembershipCommandOutput;
    };
  };
}
