// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutAttributesRequest, PutAttributesResponse } from "../models/models_0";
import { de_PutAttributesCommand, se_PutAttributesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAttributesCommand}.
 */
export interface PutAttributesCommandInput extends PutAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutAttributesCommand}.
 */
export interface PutAttributesCommandOutput extends PutAttributesResponse, __MetadataBearer {}

/**
 * <p>Create or update an attribute on an Amazon ECS resource. If the attribute doesn't exist,
 * 			it's created. If the attribute exists, its value is replaced with the specified value.
 * 			To delete an attribute, use <a>DeleteAttributes</a>. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, PutAttributesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, PutAttributesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // PutAttributesRequest
 *   cluster: "STRING_VALUE",
 *   attributes: [ // Attributes // required
 *     { // Attribute
 *       name: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *       targetType: "container-instance",
 *       targetId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutAttributesCommand(input);
 * const response = await client.send(command);
 * // { // PutAttributesResponse
 * //   attributes: [ // Attributes
 * //     { // Attribute
 * //       name: "STRING_VALUE", // required
 * //       value: "STRING_VALUE",
 * //       targetType: "container-instance",
 * //       targetId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutAttributesCommandInput - {@link PutAttributesCommandInput}
 * @returns {@link PutAttributesCommandOutput}
 * @see {@link PutAttributesCommandInput} for command's `input` shape.
 * @see {@link PutAttributesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AttributeLimitExceededException} (client fault)
 *  <p>You can apply up to 10 custom attributes for each resource. You can view the
 * 			attributes of a resource with <a>ListAttributes</a>. You can remove existing
 * 			attributes on a resource with <a>DeleteAttributes</a>.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link TargetNotFoundException} (client fault)
 *  <p>The specified target wasn't found. You can view your available container instances
 * 			with <a>ListContainerInstances</a>. Amazon ECS container instances are
 * 			cluster-specific and Region-specific.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @public
 */
export class PutAttributesCommand extends $Command
  .classBuilder<
    PutAttributesCommandInput,
    PutAttributesCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerServiceV20141113", "PutAttributes", {})
  .n("ECSClient", "PutAttributesCommand")
  .f(void 0, void 0)
  .ser(se_PutAttributesCommand)
  .de(de_PutAttributesCommand)
  .build() {}
