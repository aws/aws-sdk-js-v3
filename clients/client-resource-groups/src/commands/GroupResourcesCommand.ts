// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroupResourcesInput, GroupResourcesOutput } from "../models/models_0";
import { de_GroupResourcesCommand, se_GroupResourcesCommand } from "../protocols/Aws_restJson1";
import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GroupResourcesCommand}.
 */
export interface GroupResourcesCommandInput extends GroupResourcesInput {}
/**
 * @public
 *
 * The output of {@link GroupResourcesCommand}.
 */
export interface GroupResourcesCommandOutput extends GroupResourcesOutput, __MetadataBearer {}

/**
 * <p>Adds the specified resources to the specified group.</p>
 *          <important>
 *             <p>You can only use this operation with the following groups:</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <code>AWS::EC2::HostManagement</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>AWS::EC2::CapacityReservationPool</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>AWS::ResourceGroups::ApplicationGroup</code>
 *                   </p>
 *                </li>
 *             </ul>
 *             <p>Other resource group types and resource types are not currently supported by this
 *                 operation.</p>
 *          </important>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:GroupResources</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, GroupResourcesCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, GroupResourcesCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // GroupResourcesInput
 *   Group: "STRING_VALUE", // required
 *   ResourceArns: [ // ResourceArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GroupResourcesCommand(input);
 * const response = await client.send(command);
 * // { // GroupResourcesOutput
 * //   Succeeded: [ // ResourceArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   Failed: [ // FailedResourceList
 * //     { // FailedResource
 * //       ResourceArn: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Pending: [ // PendingResourceList
 * //     { // PendingResource
 * //       ResourceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GroupResourcesCommandInput - {@link GroupResourcesCommandInput}
 * @returns {@link GroupResourcesCommandOutput}
 * @see {@link GroupResourcesCommandInput} for command's `input` shape.
 * @see {@link GroupResourcesCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceGroupsServiceException}
 * <p>Base exception class for all service exceptions from ResourceGroups service.</p>
 *
 *
 * @public
 */
export class GroupResourcesCommand extends $Command
  .classBuilder<
    GroupResourcesCommandInput,
    GroupResourcesCommandOutput,
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
  .s("Ardi", "GroupResources", {})
  .n("ResourceGroupsClient", "GroupResourcesCommand")
  .f(void 0, void 0)
  .ser(se_GroupResourcesCommand)
  .de(de_GroupResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GroupResourcesInput;
      output: GroupResourcesOutput;
    };
    sdk: {
      input: GroupResourcesCommandInput;
      output: GroupResourcesCommandOutput;
    };
  };
}
