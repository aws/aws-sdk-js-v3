// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveAllResourcePermissionsRequest } from "../models/models_0";
import { RemoveAllResourcePermissions } from "../schemas/schemas_10_RemoveAllResourcePermissions";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveAllResourcePermissionsCommand}.
 */
export interface RemoveAllResourcePermissionsCommandInput extends RemoveAllResourcePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link RemoveAllResourcePermissionsCommand}.
 */
export interface RemoveAllResourcePermissionsCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes all the permissions from the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, RemoveAllResourcePermissionsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, RemoveAllResourcePermissionsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // RemoveAllResourcePermissionsRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   ResourceId: "STRING_VALUE", // required
 * };
 * const command = new RemoveAllResourcePermissionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveAllResourcePermissionsCommandInput - {@link RemoveAllResourcePermissionsCommandInput}
 * @returns {@link RemoveAllResourcePermissionsCommandOutput}
 * @see {@link RemoveAllResourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link RemoveAllResourcePermissionsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class RemoveAllResourcePermissionsCommand extends $Command
  .classBuilder<
    RemoveAllResourcePermissionsCommandInput,
    RemoveAllResourcePermissionsCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGorillaBoyService", "RemoveAllResourcePermissions", {})
  .n("WorkDocsClient", "RemoveAllResourcePermissionsCommand")
  .sc(RemoveAllResourcePermissions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveAllResourcePermissionsRequest;
      output: {};
    };
    sdk: {
      input: RemoveAllResourcePermissionsCommandInput;
      output: RemoveAllResourcePermissionsCommandOutput;
    };
  };
}
