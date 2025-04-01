// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CreateModelVersionRequest, CreateModelVersionResult } from "../models/models_0";
import { de_CreateModelVersionCommand, se_CreateModelVersionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateModelVersionCommand}.
 */
export interface CreateModelVersionCommandInput extends CreateModelVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateModelVersionCommand}.
 */
export interface CreateModelVersionCommandOutput extends CreateModelVersionResult, __MetadataBearer {}

/**
 * <p>Creates a version of the model using the specified model type and model id.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateModelVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateModelVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // CreateModelVersionRequest
 *   modelId: "STRING_VALUE", // required
 *   modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS", // required
 *   trainingDataSource: "EXTERNAL_EVENTS" || "INGESTED_EVENTS", // required
 *   trainingDataSchema: { // TrainingDataSchema
 *     modelVariables: [ // ListOfStrings // required
 *       "STRING_VALUE",
 *     ],
 *     labelSchema: { // LabelSchema
 *       labelMapper: { // labelMapper
 *         "<keys>": [
 *           "STRING_VALUE",
 *         ],
 *       },
 *       unlabeledEventsTreatment: "IGNORE" || "FRAUD" || "LEGIT" || "AUTO",
 *     },
 *   },
 *   externalEventsDetail: { // ExternalEventsDetail
 *     dataLocation: "STRING_VALUE", // required
 *     dataAccessRoleArn: "STRING_VALUE", // required
 *   },
 *   ingestedEventsDetail: { // IngestedEventsDetail
 *     ingestedEventsTimeWindow: { // IngestedEventsTimeWindow
 *       startTime: "STRING_VALUE", // required
 *       endTime: "STRING_VALUE", // required
 *     },
 *   },
 *   tags: [ // tagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateModelVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateModelVersionResult
 * //   modelId: "STRING_VALUE",
 * //   modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS",
 * //   modelVersionNumber: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateModelVersionCommandInput - {@link CreateModelVersionCommandInput}
 * @returns {@link CreateModelVersionCommandOutput}
 * @see {@link CreateModelVersionCommandInput} for command's `input` shape.
 * @see {@link CreateModelVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 *
 * @public
 */
export class CreateModelVersionCommand extends $Command
  .classBuilder<
    CreateModelVersionCommandInput,
    CreateModelVersionCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHawksNestServiceFacade", "CreateModelVersion", {})
  .n("FraudDetectorClient", "CreateModelVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreateModelVersionCommand)
  .de(de_CreateModelVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateModelVersionRequest;
      output: CreateModelVersionResult;
    };
    sdk: {
      input: CreateModelVersionCommandInput;
      output: CreateModelVersionCommandOutput;
    };
  };
}
