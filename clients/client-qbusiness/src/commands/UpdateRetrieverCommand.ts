// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRetrieverRequest, UpdateRetrieverResponse } from "../models/models_0";
import { de_UpdateRetrieverCommand, se_UpdateRetrieverCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRetrieverCommand}.
 */
export interface UpdateRetrieverCommandInput extends UpdateRetrieverRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRetrieverCommand}.
 */
export interface UpdateRetrieverCommandOutput extends UpdateRetrieverResponse, __MetadataBearer {}

/**
 * <p>Updates the retriever used for your Amazon Q Business application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, UpdateRetrieverCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, UpdateRetrieverCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // UpdateRetrieverRequest
 *   applicationId: "STRING_VALUE", // required
 *   retrieverId: "STRING_VALUE", // required
 *   configuration: { // RetrieverConfiguration Union: only one key present
 *     nativeIndexConfiguration: { // NativeIndexConfiguration
 *       indexId: "STRING_VALUE", // required
 *       boostingOverride: { // DocumentAttributeBoostingOverrideMap
 *         "<keys>": { // DocumentAttributeBoostingConfiguration Union: only one key present
 *           numberConfiguration: { // NumberAttributeBoostingConfiguration
 *             boostingLevel: "NONE" || "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH", // required
 *             boostingType: "PRIORITIZE_LARGER_VALUES" || "PRIORITIZE_SMALLER_VALUES",
 *           },
 *           stringConfiguration: { // StringAttributeBoostingConfiguration
 *             boostingLevel: "NONE" || "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH", // required
 *             attributeValueBoosting: { // StringAttributeValueBoosting
 *               "<keys>": "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH",
 *             },
 *           },
 *           dateConfiguration: { // DateAttributeBoostingConfiguration
 *             boostingLevel: "NONE" || "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH", // required
 *             boostingDurationInSeconds: Number("long"),
 *           },
 *           stringListConfiguration: { // StringListAttributeBoostingConfiguration
 *             boostingLevel: "NONE" || "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH", // required
 *           },
 *         },
 *       },
 *     },
 *     kendraIndexConfiguration: { // KendraIndexConfiguration
 *       indexId: "STRING_VALUE", // required
 *     },
 *   },
 *   displayName: "STRING_VALUE",
 *   roleArn: "STRING_VALUE",
 * };
 * const command = new UpdateRetrieverCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRetrieverCommandInput - {@link UpdateRetrieverCommandInput}
 * @returns {@link UpdateRetrieverCommandOutput}
 * @see {@link UpdateRetrieverCommandInput} for command's `input` shape.
 * @see {@link UpdateRetrieverCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have
 *             provided the correct resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Q Business service. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 * @public
 */
export class UpdateRetrieverCommand extends $Command
  .classBuilder<
    UpdateRetrieverCommandInput,
    UpdateRetrieverCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "UpdateRetriever", {})
  .n("QBusinessClient", "UpdateRetrieverCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRetrieverCommand)
  .de(de_UpdateRetrieverCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRetrieverRequest;
      output: {};
    };
    sdk: {
      input: UpdateRetrieverCommandInput;
      output: UpdateRetrieverCommandOutput;
    };
  };
}
