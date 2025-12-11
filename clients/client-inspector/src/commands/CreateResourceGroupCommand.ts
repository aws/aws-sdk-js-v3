// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import type { CreateResourceGroupRequest, CreateResourceGroupResponse } from "../models/models_0";
import { CreateResourceGroup } from "../schemas/schemas_0";

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
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
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
 *
 * @example Create resource group
 * ```javascript
 * // Creates a resource group using the specified set of tags (key and value pairs) that are used to select the EC2 instances to be included in an Amazon Inspector assessment target. The created resource group is then used to create an Amazon Inspector assessment target.
 * const input = {
 *   resourceGroupTags: [
 *     {
 *       key: "Name",
 *       value: "example"
 *     }
 *   ]
 * };
 * const command = new CreateResourceGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   resourceGroupArn: "arn:aws:inspector:us-west-2:123456789012:resourcegroup/0-AB6DMKnv"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateResourceGroupCommand extends $Command
  .classBuilder<
    CreateResourceGroupCommandInput,
    CreateResourceGroupCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InspectorService", "CreateResourceGroup", {})
  .n("InspectorClient", "CreateResourceGroupCommand")
  .sc(CreateResourceGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResourceGroupRequest;
      output: CreateResourceGroupResponse;
    };
    sdk: {
      input: CreateResourceGroupCommandInput;
      output: CreateResourceGroupCommandOutput;
    };
  };
}
