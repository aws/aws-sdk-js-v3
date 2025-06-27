// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { PutEncryptionConfigurationRequest, PutEncryptionConfigurationResponse } from "../models/models_0";
import { de_PutEncryptionConfigurationCommand, se_PutEncryptionConfigurationCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutEncryptionConfigurationCommand}.
 */
export interface PutEncryptionConfigurationCommandInput extends PutEncryptionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutEncryptionConfigurationCommand}.
 */
export interface PutEncryptionConfigurationCommandOutput extends PutEncryptionConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates or updates the encryption configuration. Amazon Web Services IoT FleetWise can encrypt your data and
 *             resources using an Amazon Web Services managed key. Or, you can use a KMS key that you own and
 *             manage. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/data-encryption.html">Data
 *                 encryption</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, PutEncryptionConfigurationCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, PutEncryptionConfigurationCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // PutEncryptionConfigurationRequest
 *   kmsKeyId: "STRING_VALUE",
 *   encryptionType: "KMS_BASED_ENCRYPTION" || "FLEETWISE_DEFAULT_ENCRYPTION", // required
 * };
 * const command = new PutEncryptionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutEncryptionConfigurationResponse
 * //   kmsKeyId: "STRING_VALUE",
 * //   encryptionStatus: "PENDING" || "SUCCESS" || "FAILURE", // required
 * //   encryptionType: "KMS_BASED_ENCRYPTION" || "FLEETWISE_DEFAULT_ENCRYPTION", // required
 * // };
 *
 * ```
 *
 * @param PutEncryptionConfigurationCommandInput - {@link PutEncryptionConfigurationCommandInput}
 * @returns {@link PutEncryptionConfigurationCommandOutput}
 * @see {@link PutEncryptionConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutEncryptionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 *
 * @public
 */
export class PutEncryptionConfigurationCommand extends $Command
  .classBuilder<
    PutEncryptionConfigurationCommandInput,
    PutEncryptionConfigurationCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTAutobahnControlPlane", "PutEncryptionConfiguration", {})
  .n("IoTFleetWiseClient", "PutEncryptionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutEncryptionConfigurationCommand)
  .de(de_PutEncryptionConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEncryptionConfigurationRequest;
      output: PutEncryptionConfigurationResponse;
    };
    sdk: {
      input: PutEncryptionConfigurationCommandInput;
      output: PutEncryptionConfigurationCommandOutput;
    };
  };
}
