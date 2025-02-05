// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { GetEncryptionConfigurationRequest, GetEncryptionConfigurationResponse } from "../models/models_0";
import { de_GetEncryptionConfigurationCommand, se_GetEncryptionConfigurationCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEncryptionConfigurationCommand}.
 */
export interface GetEncryptionConfigurationCommandInput extends GetEncryptionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetEncryptionConfigurationCommand}.
 */
export interface GetEncryptionConfigurationCommandOutput extends GetEncryptionConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the encryption configuration for resources and data in Amazon Web Services IoT FleetWise.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetEncryptionConfigurationCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetEncryptionConfigurationCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTFleetWiseClient(config);
 * const input = {};
 * const command = new GetEncryptionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetEncryptionConfigurationResponse
 * //   kmsKeyId: "STRING_VALUE",
 * //   encryptionStatus: "PENDING" || "SUCCESS" || "FAILURE", // required
 * //   encryptionType: "KMS_BASED_ENCRYPTION" || "FLEETWISE_DEFAULT_ENCRYPTION", // required
 * //   errorMessage: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"),
 * //   lastModificationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetEncryptionConfigurationCommandInput - {@link GetEncryptionConfigurationCommandInput}
 * @returns {@link GetEncryptionConfigurationCommandOutput}
 * @see {@link GetEncryptionConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetEncryptionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
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
 * @public
 */
export class GetEncryptionConfigurationCommand extends $Command
  .classBuilder<
    GetEncryptionConfigurationCommandInput,
    GetEncryptionConfigurationCommandOutput,
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
  .s("IoTAutobahnControlPlane", "GetEncryptionConfiguration", {})
  .n("IoTFleetWiseClient", "GetEncryptionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetEncryptionConfigurationCommand)
  .de(de_GetEncryptionConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetEncryptionConfigurationResponse;
    };
    sdk: {
      input: GetEncryptionConfigurationCommandInput;
      output: GetEncryptionConfigurationCommandOutput;
    };
  };
}
