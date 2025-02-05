// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  RemoveAllResourcePermissionsRequest,
  RemoveAllResourcePermissionsRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  de_RemoveAllResourcePermissionsCommand,
  se_RemoveAllResourcePermissionsCommand,
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGorillaBoyService", "RemoveAllResourcePermissions", {})
  .n("WorkDocsClient", "RemoveAllResourcePermissionsCommand")
  .f(RemoveAllResourcePermissionsRequestFilterSensitiveLog, void 0)
  .ser(se_RemoveAllResourcePermissionsCommand)
  .de(de_RemoveAllResourcePermissionsCommand)
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
