// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRetrieverRequest, GetRetrieverResponse } from "../models/models_0";
import { de_GetRetrieverCommand, se_GetRetrieverCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRetrieverCommand}.
 */
export interface GetRetrieverCommandInput extends GetRetrieverRequest {}
/**
 * @public
 *
 * The output of {@link GetRetrieverCommand}.
 */
export interface GetRetrieverCommandOutput extends GetRetrieverResponse, __MetadataBearer {}

/**
 * <p>Gets information about an existing retriever used by an Amazon Q Business application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, GetRetrieverCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, GetRetrieverCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // GetRetrieverRequest
 *   applicationId: "STRING_VALUE", // required
 *   retrieverId: "STRING_VALUE", // required
 * };
 * const command = new GetRetrieverCommand(input);
 * const response = await client.send(command);
 * // { // GetRetrieverResponse
 * //   applicationId: "STRING_VALUE",
 * //   retrieverId: "STRING_VALUE",
 * //   retrieverArn: "STRING_VALUE",
 * //   type: "NATIVE_INDEX" || "KENDRA_INDEX",
 * //   status: "CREATING" || "ACTIVE" || "FAILED",
 * //   displayName: "STRING_VALUE",
 * //   configuration: { // RetrieverConfiguration Union: only one key present
 * //     nativeIndexConfiguration: { // NativeIndexConfiguration
 * //       indexId: "STRING_VALUE", // required
 * //       version: Number("long"),
 * //       boostingOverride: { // DocumentAttributeBoostingOverrideMap
 * //         "<keys>": { // DocumentAttributeBoostingConfiguration Union: only one key present
 * //           numberConfiguration: { // NumberAttributeBoostingConfiguration
 * //             boostingLevel: "NONE" || "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH" || "ONE" || "TWO", // required
 * //             boostingType: "PRIORITIZE_LARGER_VALUES" || "PRIORITIZE_SMALLER_VALUES",
 * //           },
 * //           stringConfiguration: { // StringAttributeBoostingConfiguration
 * //             boostingLevel: "NONE" || "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH" || "ONE" || "TWO", // required
 * //             attributeValueBoosting: { // StringAttributeValueBoosting
 * //               "<keys>": "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH" || "ONE" || "TWO" || "THREE" || "FOUR" || "FIVE",
 * //             },
 * //           },
 * //           dateConfiguration: { // DateAttributeBoostingConfiguration
 * //             boostingLevel: "NONE" || "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH" || "ONE" || "TWO", // required
 * //             boostingDurationInSeconds: Number("long"),
 * //           },
 * //           stringListConfiguration: { // StringListAttributeBoostingConfiguration
 * //             boostingLevel: "NONE" || "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH" || "ONE" || "TWO", // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //     kendraIndexConfiguration: { // KendraIndexConfiguration
 * //       indexId: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   roleArn: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetRetrieverCommandInput - {@link GetRetrieverCommandInput}
 * @returns {@link GetRetrieverCommandOutput}
 * @see {@link GetRetrieverCommandInput} for command's `input` shape.
 * @see {@link GetRetrieverCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class GetRetrieverCommand extends $Command
  .classBuilder<
    GetRetrieverCommandInput,
    GetRetrieverCommandOutput,
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
  .s("ExpertQ", "GetRetriever", {})
  .n("QBusinessClient", "GetRetrieverCommand")
  .f(void 0, void 0)
  .ser(se_GetRetrieverCommand)
  .de(de_GetRetrieverCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRetrieverRequest;
      output: GetRetrieverResponse;
    };
    sdk: {
      input: GetRetrieverCommandInput;
      output: GetRetrieverCommandOutput;
    };
  };
}
