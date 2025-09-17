// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeResourcePermissionsRequest,
  DescribeResourcePermissionsRequestFilterSensitiveLog,
  DescribeResourcePermissionsResponse,
} from "../models/models_0";
import {
  de_DescribeResourcePermissionsCommand,
  se_DescribeResourcePermissionsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeResourcePermissionsCommand}.
 */
export interface DescribeResourcePermissionsCommandInput extends DescribeResourcePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeResourcePermissionsCommand}.
 */
export interface DescribeResourcePermissionsCommandOutput
  extends DescribeResourcePermissionsResponse,
    __MetadataBearer {}

/**
 * <p>Describes the permissions of a specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeResourcePermissionsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeResourcePermissionsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // DescribeResourcePermissionsRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   ResourceId: "STRING_VALUE", // required
 *   PrincipalId: "STRING_VALUE",
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeResourcePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourcePermissionsResponse
 * //   Principals: [ // PrincipalList
 * //     { // Principal
 * //       Id: "STRING_VALUE",
 * //       Type: "USER" || "GROUP" || "INVITE" || "ANONYMOUS" || "ORGANIZATION",
 * //       Roles: [ // PermissionInfoList
 * //         { // PermissionInfo
 * //           Role: "VIEWER" || "CONTRIBUTOR" || "OWNER" || "COOWNER",
 * //           Type: "DIRECT" || "INHERITED",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeResourcePermissionsCommandInput - {@link DescribeResourcePermissionsCommandInput}
 * @returns {@link DescribeResourcePermissionsCommandOutput}
 * @see {@link DescribeResourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeResourcePermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The pagination marker or limit fields are not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>The operation is not permitted.</p>
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *  <p>The caller does not have access to perform the action on the resource.</p>
 *
 * @throws {@link WorkDocsServiceException}
 * <p>Base exception class for all service exceptions from WorkDocs service.</p>
 *
 *
 * @public
 */
export class DescribeResourcePermissionsCommand extends $Command
  .classBuilder<
    DescribeResourcePermissionsCommandInput,
    DescribeResourcePermissionsCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGorillaBoyService", "DescribeResourcePermissions", {})
  .n("WorkDocsClient", "DescribeResourcePermissionsCommand")
  .f(DescribeResourcePermissionsRequestFilterSensitiveLog, void 0)
  .ser(se_DescribeResourcePermissionsCommand)
  .de(de_DescribeResourcePermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeResourcePermissionsRequest;
      output: DescribeResourcePermissionsResponse;
    };
    sdk: {
      input: DescribeResourcePermissionsCommandInput;
      output: DescribeResourcePermissionsCommandOutput;
    };
  };
}
