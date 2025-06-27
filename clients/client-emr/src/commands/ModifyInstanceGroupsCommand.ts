// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstanceGroupsInput } from "../models/models_0";
import { de_ModifyInstanceGroupsCommand, se_ModifyInstanceGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceGroupsCommand}.
 */
export interface ModifyInstanceGroupsCommandInput extends ModifyInstanceGroupsInput {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceGroupsCommand}.
 */
export interface ModifyInstanceGroupsCommandOutput extends __MetadataBearer {}

/**
 * <p>ModifyInstanceGroups modifies the number of nodes and configuration settings of an
 *          instance group. The input parameters include the new target instance count for the group
 *          and the instance group ID. The call will either succeed or fail atomically.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ModifyInstanceGroupsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ModifyInstanceGroupsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ModifyInstanceGroupsInput
 *   ClusterId: "STRING_VALUE",
 *   InstanceGroups: [ // InstanceGroupModifyConfigList
 *     { // InstanceGroupModifyConfig
 *       InstanceGroupId: "STRING_VALUE", // required
 *       InstanceCount: Number("int"),
 *       EC2InstanceIdsToTerminate: [ // EC2InstanceIdsToTerminateList
 *         "STRING_VALUE",
 *       ],
 *       ShrinkPolicy: { // ShrinkPolicy
 *         DecommissionTimeout: Number("int"),
 *         InstanceResizePolicy: { // InstanceResizePolicy
 *           InstancesToTerminate: [ // EC2InstanceIdsList
 *             "STRING_VALUE",
 *           ],
 *           InstancesToProtect: [
 *             "STRING_VALUE",
 *           ],
 *           InstanceTerminationTimeout: Number("int"),
 *         },
 *       },
 *       ReconfigurationType: "OVERWRITE" || "MERGE",
 *       Configurations: [ // ConfigurationList
 *         { // Configuration
 *           Classification: "STRING_VALUE",
 *           Configurations: [
 *             {
 *               Classification: "STRING_VALUE",
 *               Configurations: "<ConfigurationList>",
 *               Properties: { // StringMap
 *                 "<keys>": "STRING_VALUE",
 *               },
 *             },
 *           ],
 *           Properties: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new ModifyInstanceGroupsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyInstanceGroupsCommandInput - {@link ModifyInstanceGroupsCommandInput}
 * @returns {@link ModifyInstanceGroupsCommandOutput}
 * @see {@link ModifyInstanceGroupsCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceGroupsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class ModifyInstanceGroupsCommand extends $Command
  .classBuilder<
    ModifyInstanceGroupsCommandInput,
    ModifyInstanceGroupsCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "ModifyInstanceGroups", {})
  .n("EMRClient", "ModifyInstanceGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ModifyInstanceGroupsCommand)
  .de(de_ModifyInstanceGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyInstanceGroupsInput;
      output: {};
    };
    sdk: {
      input: ModifyInstanceGroupsCommandInput;
      output: ModifyInstanceGroupsCommandOutput;
    };
  };
}
