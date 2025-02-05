// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEnvironmentMembershipsRequest, DescribeEnvironmentMembershipsResult } from "../models/models_0";
import {
  de_DescribeEnvironmentMembershipsCommand,
  se_DescribeEnvironmentMembershipsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEnvironmentMembershipsCommand}.
 */
export interface DescribeEnvironmentMembershipsCommandInput extends DescribeEnvironmentMembershipsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEnvironmentMembershipsCommand}.
 */
export interface DescribeEnvironmentMembershipsCommandOutput
  extends DescribeEnvironmentMembershipsResult,
    __MetadataBearer {}

/**
 * <p>Gets information about environment members for an Cloud9 development environment.</p>
 *          <important>
 *             <p>Cloud9 is no longer available to new customers. Existing customers of
 *         Cloud9 can continue to use the service as normal.
 *         <a href="http://aws.amazon.com/blogs/devops/how-to-migrate-from-aws-cloud9-to-aws-ide-toolkits-or-aws-cloudshell/">Learn more"</a>
 *             </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, DescribeEnvironmentMembershipsCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, DescribeEnvironmentMembershipsCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Cloud9Client(config);
 * const input = { // DescribeEnvironmentMembershipsRequest
 *   userArn: "STRING_VALUE",
 *   environmentId: "STRING_VALUE",
 *   permissions: [ // PermissionsList
 *     "owner" || "read-write" || "read-only",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeEnvironmentMembershipsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEnvironmentMembershipsResult
 * //   memberships: [ // EnvironmentMembersList
 * //     { // EnvironmentMember
 * //       permissions: "owner" || "read-write" || "read-only", // required
 * //       userId: "STRING_VALUE", // required
 * //       userArn: "STRING_VALUE", // required
 * //       environmentId: "STRING_VALUE", // required
 * //       lastAccess: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEnvironmentMembershipsCommandInput - {@link DescribeEnvironmentMembershipsCommandInput}
 * @returns {@link DescribeEnvironmentMembershipsCommandOutput}
 * @see {@link DescribeEnvironmentMembershipsCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentMembershipsCommandOutput} for command's `response` shape.
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
 * @example DescribeEnvironmentMemberships1
 * ```javascript
 * // The following example gets information about all of the environment members for the specified development environment.
 * const input = {
 *   "environmentId": "8d9967e2f0624182b74e7690ad69ebEX"
 * };
 * const command = new DescribeEnvironmentMembershipsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "memberships": [
 *     {
 *       "environmentId": "8d9967e2f0624182b74e7690ad69ebEX",
 *       "permissions": "read-write",
 *       "userArn": "arn:aws:iam::123456789012:user/AnotherDemoUser",
 *       "userId": "AIDAJ3BA6O2FMJWCWXHEX"
 *     },
 *     {
 *       "environmentId": "8d9967e2f0624182b74e7690ad69ebEX",
 *       "permissions": "owner",
 *       "userArn": "arn:aws:iam::123456789012:user/MyDemoUser",
 *       "userId": "AIDAJNUEDQAQWFELJDLEX"
 *     }
 *   ]
 * }
 * *\/
 * // example id: describeenvironmentmemberships1-1516823070453
 * ```
 *
 * @example DescribeEnvironmentMemberships2
 * ```javascript
 * // The following example gets information about the owner of the specified development environment.
 * const input = {
 *   "environmentId": "8d9967e2f0624182b74e7690ad69ebEX",
 *   "permissions": [
 *     "owner"
 *   ]
 * };
 * const command = new DescribeEnvironmentMembershipsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "memberships": [
 *     {
 *       "environmentId": "8d9967e2f0624182b74e7690ad69ebEX",
 *       "permissions": "owner",
 *       "userArn": "arn:aws:iam::123456789012:user/MyDemoUser",
 *       "userId": "AIDAJNUEDQAQWFELJDLEX"
 *     }
 *   ]
 * }
 * *\/
 * // example id: describeenvironmentmemberships2-1516823191355
 * ```
 *
 * @example DescribeEnvironmentMemberships3
 * ```javascript
 * // The following example gets development environment membership information for the specified user.
 * const input = {
 *   "userArn": "arn:aws:iam::123456789012:user/MyDemoUser"
 * };
 * const command = new DescribeEnvironmentMembershipsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "memberships": [
 *     {
 *       "environmentId": "10a75714bd494714929e7f5ec4125aEX",
 *       "lastAccess": "2018-01-19T11:06:13Z",
 *       "permissions": "owner",
 *       "userArn": "arn:aws:iam::123456789012:user/MyDemoUser",
 *       "userId": "AIDAJNUEDQAQWFELJDLEX"
 *     },
 *     {
 *       "environmentId": "12bfc3cd537f41cb9776f8af5525c9EX",
 *       "lastAccess": "2018-01-19T11:39:19Z",
 *       "permissions": "owner",
 *       "userArn": "arn:aws:iam::123456789012:user/MyDemoUser",
 *       "userId": "AIDAJNUEDQAQWFELJDLEX"
 *     }
 *   ]
 * }
 * *\/
 * // example id: describeenvironmentmemberships3-1516823268793
 * ```
 *
 */
export class DescribeEnvironmentMembershipsCommand extends $Command
  .classBuilder<
    DescribeEnvironmentMembershipsCommandInput,
    DescribeEnvironmentMembershipsCommandOutput,
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
  .s("AWSCloud9WorkspaceManagementService", "DescribeEnvironmentMemberships", {})
  .n("Cloud9Client", "DescribeEnvironmentMembershipsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEnvironmentMembershipsCommand)
  .de(de_DescribeEnvironmentMembershipsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEnvironmentMembershipsRequest;
      output: DescribeEnvironmentMembershipsResult;
    };
    sdk: {
      input: DescribeEnvironmentMembershipsCommandInput;
      output: DescribeEnvironmentMembershipsCommandOutput;
    };
  };
}
