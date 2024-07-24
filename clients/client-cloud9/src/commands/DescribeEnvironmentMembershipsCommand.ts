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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, DescribeEnvironmentMembershipsCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, DescribeEnvironmentMembershipsCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
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
 */
export class DescribeEnvironmentMembershipsCommand extends $Command
  .classBuilder<
    DescribeEnvironmentMembershipsCommandInput,
    DescribeEnvironmentMembershipsCommandOutput,
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
  .s("AWSCloud9WorkspaceManagementService", "DescribeEnvironmentMemberships", {})
  .n("Cloud9Client", "DescribeEnvironmentMembershipsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEnvironmentMembershipsCommand)
  .de(de_DescribeEnvironmentMembershipsCommand)
  .build() {}
