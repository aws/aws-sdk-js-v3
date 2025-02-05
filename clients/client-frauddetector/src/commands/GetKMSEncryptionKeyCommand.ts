// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetKMSEncryptionKeyResult } from "../models/models_0";
import { de_GetKMSEncryptionKeyCommand, se_GetKMSEncryptionKeyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetKMSEncryptionKeyCommand}.
 */
export interface GetKMSEncryptionKeyCommandInput {}
/**
 * @public
 *
 * The output of {@link GetKMSEncryptionKeyCommand}.
 */
export interface GetKMSEncryptionKeyCommandOutput extends GetKMSEncryptionKeyResult, __MetadataBearer {}

/**
 * <p>Gets the encryption key if a KMS key has been specified to be used to encrypt content in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetKMSEncryptionKeyCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetKMSEncryptionKeyCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FraudDetectorClient(config);
 * const input = {};
 * const command = new GetKMSEncryptionKeyCommand(input);
 * const response = await client.send(command);
 * // { // GetKMSEncryptionKeyResult
 * //   kmsKey: { // KMSKey
 * //     kmsEncryptionKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetKMSEncryptionKeyCommandInput - {@link GetKMSEncryptionKeyCommandInput}
 * @returns {@link GetKMSEncryptionKeyCommandOutput}
 * @see {@link GetKMSEncryptionKeyCommandInput} for command's `input` shape.
 * @see {@link GetKMSEncryptionKeyCommandOutput} for command's `response` shape.
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
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 * @public
 */
export class GetKMSEncryptionKeyCommand extends $Command
  .classBuilder<
    GetKMSEncryptionKeyCommandInput,
    GetKMSEncryptionKeyCommandOutput,
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
  .s("AWSHawksNestServiceFacade", "GetKMSEncryptionKey", {})
  .n("FraudDetectorClient", "GetKMSEncryptionKeyCommand")
  .f(void 0, void 0)
  .ser(se_GetKMSEncryptionKeyCommand)
  .de(de_GetKMSEncryptionKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetKMSEncryptionKeyResult;
    };
    sdk: {
      input: GetKMSEncryptionKeyCommandInput;
      output: GetKMSEncryptionKeyCommandOutput;
    };
  };
}
