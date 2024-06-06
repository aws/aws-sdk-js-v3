// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { CreateResourceGroupRequest, CreateResourceGroupResponse } from "../models/models_0";
import { de_CreateResourceGroupCommand, se_CreateResourceGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateResourceGroupCommand}.
 */
export interface CreateResourceGroupCommandInput extends CreateResourceGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceGroupCommand}.
 */
export interface CreateResourceGroupCommandOutput extends CreateResourceGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a resource group using the specified set of tags (key and value pairs) that
 *          are used to select the EC2 instances to be included in an Amazon Inspector assessment
 *          target. The created resource group is then used to create an Amazon Inspector assessment
 *          target. For more information, see <a>CreateAssessmentTarget</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, CreateResourceGroupCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, CreateResourceGroupCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // CreateResourceGroupRequest
 *   resourceGroupTags: [ // ResourceGroupTags // required
 *     { // ResourceGroupTag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateResourceGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourceGroupResponse
 * //   resourceGroupArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateResourceGroupCommandInput - {@link CreateResourceGroupCommandInput}
 * @returns {@link CreateResourceGroupCommandOutput}
 * @see {@link CreateResourceGroupCommandInput} for command's `input` shape.
 * @see {@link CreateResourceGroupCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *          AWS account limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *  <p>The serice is temporary unavailable.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @public
 * @example Create resource group
 * ```javascript
 * // Creates a resource group using the specified set of tags (key and value pairs) that are used to select the EC2 instances to be included in an Amazon Inspector assessment target. The created resource group is then used to create an Amazon Inspector assessment target.
 * const input = {
 *   "resourceGroupTags": [
 *     {
 *       "key": "Name",
 *       "value": "example"
 *     }
 *   ]
 * };
 * const command = new CreateResourceGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "resourceGroupArn": "arn:aws:inspector:us-west-2:123456789012:resourcegroup/0-AB6DMKnv"
 * }
 * *\/
 * // example id: create-resource-group-1481064169037
 * ```
 *
 */
export class CreateResourceGroupCommand extends $Command
  .classBuilder<
    CreateResourceGroupCommandInput,
    CreateResourceGroupCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "CreateResourceGroup", {})
  .n("InspectorClient", "CreateResourceGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateResourceGroupCommand)
  .de(de_CreateResourceGroupCommand)
  .build() {}
