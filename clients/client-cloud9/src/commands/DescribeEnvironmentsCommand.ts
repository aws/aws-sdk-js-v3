// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeEnvironmentsRequest,
  DescribeEnvironmentsResult,
  DescribeEnvironmentsResultFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeEnvironmentsCommand, se_DescribeEnvironmentsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEnvironmentsCommand}.
 */
export interface DescribeEnvironmentsCommandInput extends DescribeEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEnvironmentsCommand}.
 */
export interface DescribeEnvironmentsCommandOutput extends DescribeEnvironmentsResult, __MetadataBearer {}

/**
 * <p>Gets information about Cloud9 development environments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, DescribeEnvironmentsCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, DescribeEnvironmentsCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const input = { // DescribeEnvironmentsRequest
 *   environmentIds: [ // BoundedEnvironmentIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEnvironmentsResult
 * //   environments: [ // EnvironmentList
 * //     { // Environment
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       type: "ssh" || "ec2", // required
 * //       connectionType: "CONNECT_SSH" || "CONNECT_SSM",
 * //       arn: "STRING_VALUE", // required
 * //       ownerArn: "STRING_VALUE", // required
 * //       lifecycle: { // EnvironmentLifecycle
 * //         status: "CREATING" || "CREATED" || "CREATE_FAILED" || "DELETING" || "DELETE_FAILED",
 * //         reason: "STRING_VALUE",
 * //         failureResource: "STRING_VALUE",
 * //       },
 * //       managedCredentialsStatus: "ENABLED_ON_CREATE" || "ENABLED_BY_OWNER" || "DISABLED_BY_DEFAULT" || "DISABLED_BY_OWNER" || "DISABLED_BY_COLLABORATOR" || "PENDING_REMOVAL_BY_COLLABORATOR" || "PENDING_START_REMOVAL_BY_COLLABORATOR" || "PENDING_REMOVAL_BY_OWNER" || "PENDING_START_REMOVAL_BY_OWNER" || "FAILED_REMOVAL_BY_COLLABORATOR" || "FAILED_REMOVAL_BY_OWNER",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEnvironmentsCommandInput - {@link DescribeEnvironmentsCommandInput}
 * @returns {@link DescribeEnvironmentsCommandOutput}
 * @see {@link DescribeEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentsCommandOutput} for command's `response` shape.
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
 * @example DescribeEnvironments
 * ```javascript
 * //
 * const input = {
 *   "environmentIds": [
 *     "8d9967e2f0624182b74e7690ad69ebEX",
 *     "349c86d4579e4e7298d500ff57a6b2EX"
 *   ]
 * };
 * const command = new DescribeEnvironmentsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "environments": [
 *     {
 *       "name": "my-demo-environment",
 *       "type": "ec2",
 *       "arn": "arn:aws:cloud9:us-east-2:123456789012:environment:8d9967e2f0624182b74e7690ad69ebEX",
 *       "description": "This is my demonstration environment.",
 *       "id": "8d9967e2f0624182b74e7690ad69ebEX",
 *       "lifecycle": {
 *         "status": "CREATED"
 *       },
 *       "ownerArn": "arn:aws:iam::123456789012:user/MyDemoUser"
 *     },
 *     {
 *       "name": "another-demo-environment",
 *       "type": "ssh",
 *       "arn": "arn:aws:cloud9:us-east-2:123456789012:environment:349c86d4579e4e7298d500ff57a6b2EX",
 *       "description": "",
 *       "id": "349c86d4579e4e7298d500ff57a6b2EX",
 *       "lifecycle": {
 *         "status": "CREATED"
 *       },
 *       "ownerArn": "arn:aws:sts::123456789012:assumed-role/AnotherDemoUser/AnotherDemoUser"
 *     }
 *   ]
 * }
 * *\/
 * // example id: describeenvironments-1516823568291
 * ```
 *
 */
export class DescribeEnvironmentsCommand extends $Command
  .classBuilder<
    DescribeEnvironmentsCommandInput,
    DescribeEnvironmentsCommandOutput,
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
  .s("AWSCloud9WorkspaceManagementService", "DescribeEnvironments", {})
  .n("Cloud9Client", "DescribeEnvironmentsCommand")
  .f(void 0, DescribeEnvironmentsResultFilterSensitiveLog)
  .ser(se_DescribeEnvironmentsCommand)
  .de(de_DescribeEnvironmentsCommand)
  .build() {}
