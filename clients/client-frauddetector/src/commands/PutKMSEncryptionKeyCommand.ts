// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { PutKMSEncryptionKeyRequest, PutKMSEncryptionKeyResult } from "../models/models_0";
import { de_PutKMSEncryptionKeyCommand, se_PutKMSEncryptionKeyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutKMSEncryptionKeyCommand}.
 */
export interface PutKMSEncryptionKeyCommandInput extends PutKMSEncryptionKeyRequest {}
/**
 * @public
 *
 * The output of {@link PutKMSEncryptionKeyCommand}.
 */
export interface PutKMSEncryptionKeyCommandOutput extends PutKMSEncryptionKeyResult, __MetadataBearer {}

/**
 * <p>Specifies the KMS key to be used to encrypt content in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutKMSEncryptionKeyCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutKMSEncryptionKeyCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FraudDetectorClient(config);
 * const input = { // PutKMSEncryptionKeyRequest
 *   kmsEncryptionKeyArn: "STRING_VALUE", // required
 * };
 * const command = new PutKMSEncryptionKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutKMSEncryptionKeyCommandInput - {@link PutKMSEncryptionKeyCommandInput}
 * @returns {@link PutKMSEncryptionKeyCommandOutput}
 * @see {@link PutKMSEncryptionKeyCommandInput} for command's `input` shape.
 * @see {@link PutKMSEncryptionKeyCommandOutput} for command's `response` shape.
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
 * @public
 */
export class PutKMSEncryptionKeyCommand extends $Command
  .classBuilder<
    PutKMSEncryptionKeyCommandInput,
    PutKMSEncryptionKeyCommandOutput,
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
  .s("AWSHawksNestServiceFacade", "PutKMSEncryptionKey", {})
  .n("FraudDetectorClient", "PutKMSEncryptionKeyCommand")
  .f(void 0, void 0)
  .ser(se_PutKMSEncryptionKeyCommand)
  .de(de_PutKMSEncryptionKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutKMSEncryptionKeyRequest;
      output: {};
    };
    sdk: {
      input: PutKMSEncryptionKeyCommandInput;
      output: PutKMSEncryptionKeyCommandOutput;
    };
  };
}
