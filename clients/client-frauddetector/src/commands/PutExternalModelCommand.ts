// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { PutExternalModelRequest, PutExternalModelResult } from "../models/models_0";
import { de_PutExternalModelCommand, se_PutExternalModelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutExternalModelCommand}.
 */
export interface PutExternalModelCommandInput extends PutExternalModelRequest {}
/**
 * @public
 *
 * The output of {@link PutExternalModelCommand}.
 */
export interface PutExternalModelCommandOutput extends PutExternalModelResult, __MetadataBearer {}

/**
 * <p>Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutExternalModelCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutExternalModelCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FraudDetectorClient(config);
 * const input = { // PutExternalModelRequest
 *   modelEndpoint: "STRING_VALUE", // required
 *   modelSource: "SAGEMAKER", // required
 *   invokeModelEndpointRoleArn: "STRING_VALUE", // required
 *   inputConfiguration: { // ModelInputConfiguration
 *     eventTypeName: "STRING_VALUE",
 *     format: "TEXT_CSV" || "APPLICATION_JSON",
 *     useEventVariables: true || false, // required
 *     jsonInputTemplate: "STRING_VALUE",
 *     csvInputTemplate: "STRING_VALUE",
 *   },
 *   outputConfiguration: { // ModelOutputConfiguration
 *     format: "TEXT_CSV" || "APPLICATION_JSONLINES", // required
 *     jsonKeyToVariableMap: { // JsonKeyToVariableMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     csvIndexToVariableMap: { // CsvIndexToVariableMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   modelEndpointStatus: "ASSOCIATED" || "DISSOCIATED", // required
 *   tags: [ // tagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutExternalModelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutExternalModelCommandInput - {@link PutExternalModelCommandInput}
 * @returns {@link PutExternalModelCommandOutput}
 * @see {@link PutExternalModelCommandInput} for command's `input` shape.
 * @see {@link PutExternalModelCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An exception indicating there was a conflict during a delete operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
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
 * @public
 */
export class PutExternalModelCommand extends $Command
  .classBuilder<
    PutExternalModelCommandInput,
    PutExternalModelCommandOutput,
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
  .s("AWSHawksNestServiceFacade", "PutExternalModel", {})
  .n("FraudDetectorClient", "PutExternalModelCommand")
  .f(void 0, void 0)
  .ser(se_PutExternalModelCommand)
  .de(de_PutExternalModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutExternalModelRequest;
      output: {};
    };
    sdk: {
      input: PutExternalModelCommandInput;
      output: PutExternalModelCommandOutput;
    };
  };
}
