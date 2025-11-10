// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetModelVersionRequest, GetModelVersionResult } from "../models/models_0";
import { GetModelVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetModelVersionCommand}.
 */
export interface GetModelVersionCommandInput extends GetModelVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetModelVersionCommand}.
 */
export interface GetModelVersionCommandOutput extends GetModelVersionResult, __MetadataBearer {}

/**
 * <p>Gets the details of the specified model version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetModelVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetModelVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // GetModelVersionRequest
 *   modelId: "STRING_VALUE", // required
 *   modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS", // required
 *   modelVersionNumber: "STRING_VALUE", // required
 * };
 * const command = new GetModelVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetModelVersionResult
 * //   modelId: "STRING_VALUE",
 * //   modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS",
 * //   modelVersionNumber: "STRING_VALUE",
 * //   trainingDataSource: "EXTERNAL_EVENTS" || "INGESTED_EVENTS",
 * //   trainingDataSchema: { // TrainingDataSchema
 * //     modelVariables: [ // ListOfStrings // required
 * //       "STRING_VALUE",
 * //     ],
 * //     labelSchema: { // LabelSchema
 * //       labelMapper: { // labelMapper
 * //         "<keys>": [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       unlabeledEventsTreatment: "IGNORE" || "FRAUD" || "LEGIT" || "AUTO",
 * //     },
 * //   },
 * //   externalEventsDetail: { // ExternalEventsDetail
 * //     dataLocation: "STRING_VALUE", // required
 * //     dataAccessRoleArn: "STRING_VALUE", // required
 * //   },
 * //   ingestedEventsDetail: { // IngestedEventsDetail
 * //     ingestedEventsTimeWindow: { // IngestedEventsTimeWindow
 * //       startTime: "STRING_VALUE", // required
 * //       endTime: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   status: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetModelVersionCommandInput - {@link GetModelVersionCommandInput}
 * @returns {@link GetModelVersionCommandOutput}
 * @see {@link GetModelVersionCommandInput} for command's `input` shape.
 * @see {@link GetModelVersionCommandOutput} for command's `response` shape.
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
export class GetModelVersionCommand extends $Command
  .classBuilder<
    GetModelVersionCommandInput,
    GetModelVersionCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "GetModelVersion", {})
  .n("FraudDetectorClient", "GetModelVersionCommand")
  .sc(GetModelVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetModelVersionRequest;
      output: GetModelVersionResult;
    };
    sdk: {
      input: GetModelVersionCommandInput;
      output: GetModelVersionCommandOutput;
    };
  };
}
