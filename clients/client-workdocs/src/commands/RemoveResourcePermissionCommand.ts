// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveResourcePermissionRequest, RemoveResourcePermissionRequestFilterSensitiveLog } from "../models/models_0";
import { de_RemoveResourcePermissionCommand, se_RemoveResourcePermissionCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveResourcePermissionCommand}.
 */
export interface RemoveResourcePermissionCommandInput extends RemoveResourcePermissionRequest {}
/**
 * @public
 *
 * The output of {@link RemoveResourcePermissionCommand}.
 */
export interface RemoveResourcePermissionCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the permission for the specified principal from the specified
 *             resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, RemoveResourcePermissionCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, RemoveResourcePermissionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const input = { // RemoveResourcePermissionRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   ResourceId: "STRING_VALUE", // required
 *   PrincipalId: "STRING_VALUE", // required
 *   PrincipalType: "USER" || "GROUP" || "INVITE" || "ANONYMOUS" || "ORGANIZATION",
 * };
 * const command = new RemoveResourcePermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveResourcePermissionCommandInput - {@link RemoveResourcePermissionCommandInput}
 * @returns {@link RemoveResourcePermissionCommandOutput}
 * @see {@link RemoveResourcePermissionCommandInput} for command's `input` shape.
 * @see {@link RemoveResourcePermissionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
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
 * @public
 */
export class RemoveResourcePermissionCommand extends $Command
  .classBuilder<
    RemoveResourcePermissionCommandInput,
    RemoveResourcePermissionCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGorillaBoyService", "RemoveResourcePermission", {})
  .n("WorkDocsClient", "RemoveResourcePermissionCommand")
  .f(RemoveResourcePermissionRequestFilterSensitiveLog, void 0)
  .ser(se_RemoveResourcePermissionCommand)
  .de(de_RemoveResourcePermissionCommand)
  .build() {}
