// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDeviceRegistrationRequest, GetDeviceRegistrationResult } from "../models/models_0";
import { de_GetDeviceRegistrationCommand, se_GetDeviceRegistrationCommand } from "../protocols/Aws_restJson1";
import { SagemakerEdgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SagemakerEdgeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeviceRegistrationCommand}.
 */
export interface GetDeviceRegistrationCommandInput extends GetDeviceRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link GetDeviceRegistrationCommand}.
 */
export interface GetDeviceRegistrationCommandOutput extends GetDeviceRegistrationResult, __MetadataBearer {}

/**
 * <p>Use to check if a device is registered with SageMaker Edge Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SagemakerEdgeClient, GetDeviceRegistrationCommand } from "@aws-sdk/client-sagemaker-edge"; // ES Modules import
 * // const { SagemakerEdgeClient, GetDeviceRegistrationCommand } = require("@aws-sdk/client-sagemaker-edge"); // CommonJS import
 * // import type { SagemakerEdgeClientConfig } from "@aws-sdk/client-sagemaker-edge";
 * const config = {}; // type is SagemakerEdgeClientConfig
 * const client = new SagemakerEdgeClient(config);
 * const input = { // GetDeviceRegistrationRequest
 *   DeviceName: "STRING_VALUE", // required
 *   DeviceFleetName: "STRING_VALUE", // required
 * };
 * const command = new GetDeviceRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // GetDeviceRegistrationResult
 * //   DeviceRegistration: "STRING_VALUE",
 * //   CacheTTL: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDeviceRegistrationCommandInput - {@link GetDeviceRegistrationCommandInput}
 * @returns {@link GetDeviceRegistrationCommandOutput}
 * @see {@link GetDeviceRegistrationCommandInput} for command's `input` shape.
 * @see {@link GetDeviceRegistrationCommandOutput} for command's `response` shape.
 * @see {@link SagemakerEdgeClientResolvedConfig | config} for SagemakerEdgeClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (client fault)
 *  <p>An internal failure occurred. Try your request again. If the problem
 *       persists, contact Amazon Web Services customer support.</p>
 *
 * @throws {@link SagemakerEdgeServiceException}
 * <p>Base exception class for all service exceptions from SagemakerEdge service.</p>
 *
 *
 * @public
 */
export class GetDeviceRegistrationCommand extends $Command
  .classBuilder<
    GetDeviceRegistrationCommandInput,
    GetDeviceRegistrationCommandOutput,
    SagemakerEdgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SagemakerEdgeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSageMakerEdge", "GetDeviceRegistration", {})
  .n("SagemakerEdgeClient", "GetDeviceRegistrationCommand")
  .f(void 0, void 0)
  .ser(se_GetDeviceRegistrationCommand)
  .de(de_GetDeviceRegistrationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeviceRegistrationRequest;
      output: GetDeviceRegistrationResult;
    };
    sdk: {
      input: GetDeviceRegistrationCommandInput;
      output: GetDeviceRegistrationCommandOutput;
    };
  };
}
