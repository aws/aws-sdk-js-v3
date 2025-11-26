// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateRetrieverRequest, CreateRetrieverResponse } from "../models/models_0";
import type { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { CreateRetriever } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRetrieverCommand}.
 */
export interface CreateRetrieverCommandInput extends CreateRetrieverRequest {}
/**
 * @public
 *
 * The output of {@link CreateRetrieverCommand}.
 */
export interface CreateRetrieverCommandOutput extends CreateRetrieverResponse, __MetadataBearer {}

/**
 * <p>Adds a retriever to your Amazon Q Business application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, CreateRetrieverCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, CreateRetrieverCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // CreateRetrieverRequest
 *   applicationId: "STRING_VALUE", // required
 *   type: "NATIVE_INDEX" || "KENDRA_INDEX", // required
 *   displayName: "STRING_VALUE", // required
 *   configuration: { // RetrieverConfiguration Union: only one key present
 *     nativeIndexConfiguration: { // NativeIndexConfiguration
 *       indexId: "STRING_VALUE", // required
 *       version: Number("long"),
 *       boostingOverride: { // DocumentAttributeBoostingOverrideMap
 *         "<keys>": { // DocumentAttributeBoostingConfiguration Union: only one key present
 *           numberConfiguration: { // NumberAttributeBoostingConfiguration
 *             boostingLevel: "NONE" || "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH" || "ONE" || "TWO", // required
 *             boostingType: "PRIORITIZE_LARGER_VALUES" || "PRIORITIZE_SMALLER_VALUES",
 *           },
 *           stringConfiguration: { // StringAttributeBoostingConfiguration
 *             boostingLevel: "NONE" || "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH" || "ONE" || "TWO", // required
 *             attributeValueBoosting: { // StringAttributeValueBoosting
 *               "<keys>": "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH" || "ONE" || "TWO" || "THREE" || "FOUR" || "FIVE",
 *             },
 *           },
 *           dateConfiguration: { // DateAttributeBoostingConfiguration
 *             boostingLevel: "NONE" || "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH" || "ONE" || "TWO", // required
 *             boostingDurationInSeconds: Number("long"),
 *           },
 *           stringListConfiguration: { // StringListAttributeBoostingConfiguration
 *             boostingLevel: "NONE" || "LOW" || "MEDIUM" || "HIGH" || "VERY_HIGH" || "ONE" || "TWO", // required
 *           },
 *         },
 *       },
 *     },
 *     kendraIndexConfiguration: { // KendraIndexConfiguration
 *       indexId: "STRING_VALUE", // required
 *     },
 *   },
 *   roleArn: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateRetrieverCommand(input);
 * const response = await client.send(command);
 * // { // CreateRetrieverResponse
 * //   retrieverId: "STRING_VALUE",
 * //   retrieverArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateRetrieverCommandInput - {@link CreateRetrieverCommandInput}
 * @returns {@link CreateRetrieverCommandOutput}
 * @see {@link CreateRetrieverCommandInput} for command's `input` shape.
 * @see {@link CreateRetrieverCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Q Business service. </p>
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
export class CreateRetrieverCommand extends $Command
  .classBuilder<
    CreateRetrieverCommandInput,
    CreateRetrieverCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "CreateRetriever", {})
  .n("QBusinessClient", "CreateRetrieverCommand")
  .sc(CreateRetriever)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRetrieverRequest;
      output: CreateRetrieverResponse;
    };
    sdk: {
      input: CreateRetrieverCommandInput;
      output: CreateRetrieverCommandOutput;
    };
  };
}
