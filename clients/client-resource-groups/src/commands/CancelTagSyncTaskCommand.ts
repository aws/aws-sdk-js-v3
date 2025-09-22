// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelTagSyncTaskInput } from "../models/models_0";
import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";
import { CancelTagSyncTask } from "../schemas/schemas_2_TagSync";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelTagSyncTaskCommand}.
 */
export interface CancelTagSyncTaskCommandInput extends CancelTagSyncTaskInput {}
/**
 * @public
 *
 * The output of {@link CancelTagSyncTaskCommand}.
 */
export interface CancelTagSyncTaskCommandOutput extends __MetadataBearer {}

/**
 * <p>Cancels the specified tag-sync task. </p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:CancelTagSyncTask</code> on the application group</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>resource-groups:DeleteGroup</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, CancelTagSyncTaskCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, CancelTagSyncTaskCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // CancelTagSyncTaskInput
 *   TaskArn: "STRING_VALUE", // required
 * };
 * const command = new CancelTagSyncTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelTagSyncTaskCommandInput - {@link CancelTagSyncTaskCommandInput}
 * @returns {@link CancelTagSyncTaskCommandOutput}
 * @see {@link CancelTagSyncTaskCommandInput} for command's `input` shape.
 * @see {@link CancelTagSyncTaskCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for ResourceGroupsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request includes one or more parameters that violate validation rules.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request. Check permissions.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error occurred while processing the request. Try again later.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>The request uses an HTTP method that isn't allowed for the specified resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>You've exceeded throttling limits by making too many requests in a period of
 *             time.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request was rejected because it doesn't have valid credentials for the target
 *             resource.</p>
 *
 * @throws {@link ResourceGroupsServiceException}
 * <p>Base exception class for all service exceptions from ResourceGroups service.</p>
 *
 *
 * @public
 */
export class CancelTagSyncTaskCommand extends $Command
  .classBuilder<
    CancelTagSyncTaskCommandInput,
    CancelTagSyncTaskCommandOutput,
    ResourceGroupsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Ardi", "CancelTagSyncTask", {})
  .n("ResourceGroupsClient", "CancelTagSyncTaskCommand")
  .sc(CancelTagSyncTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelTagSyncTaskInput;
      output: {};
    };
    sdk: {
      input: CancelTagSyncTaskCommandInput;
      output: CancelTagSyncTaskCommandOutput;
    };
  };
}
