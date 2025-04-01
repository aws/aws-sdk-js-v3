// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTagSyncTaskInput, GetTagSyncTaskOutput } from "../models/models_0";
import { de_GetTagSyncTaskCommand, se_GetTagSyncTaskCommand } from "../protocols/Aws_restJson1";
import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTagSyncTaskCommand}.
 */
export interface GetTagSyncTaskCommandInput extends GetTagSyncTaskInput {}
/**
 * @public
 *
 * The output of {@link GetTagSyncTaskCommand}.
 */
export interface GetTagSyncTaskCommandOutput extends GetTagSyncTaskOutput, __MetadataBearer {}

/**
 * <p>Returns information about a specified tag-sync task. </p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:GetTagSyncTask</code> on the application group</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, GetTagSyncTaskCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, GetTagSyncTaskCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const input = { // GetTagSyncTaskInput
 *   TaskArn: "STRING_VALUE", // required
 * };
 * const command = new GetTagSyncTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetTagSyncTaskOutput
 * //   GroupArn: "STRING_VALUE",
 * //   GroupName: "STRING_VALUE",
 * //   TaskArn: "STRING_VALUE",
 * //   TagKey: "STRING_VALUE",
 * //   TagValue: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   Status: "ACTIVE" || "ERROR",
 * //   ErrorMessage: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetTagSyncTaskCommandInput - {@link GetTagSyncTaskCommandInput}
 * @returns {@link GetTagSyncTaskCommandOutput}
 * @see {@link GetTagSyncTaskCommandInput} for command's `input` shape.
 * @see {@link GetTagSyncTaskCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the specified resources don't exist.</p>
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
export class GetTagSyncTaskCommand extends $Command
  .classBuilder<
    GetTagSyncTaskCommandInput,
    GetTagSyncTaskCommandOutput,
    ResourceGroupsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Ardi", "GetTagSyncTask", {})
  .n("ResourceGroupsClient", "GetTagSyncTaskCommand")
  .f(void 0, void 0)
  .ser(se_GetTagSyncTaskCommand)
  .de(de_GetTagSyncTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTagSyncTaskInput;
      output: GetTagSyncTaskOutput;
    };
    sdk: {
      input: GetTagSyncTaskCommandInput;
      output: GetTagSyncTaskCommandOutput;
    };
  };
}
