// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetMFADeviceRequest, GetMFADeviceResponse } from "../models/models_0";
import { de_GetMFADeviceCommand, se_GetMFADeviceCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMFADeviceCommand}.
 */
export interface GetMFADeviceCommandInput extends GetMFADeviceRequest {}
/**
 * @public
 *
 * The output of {@link GetMFADeviceCommand}.
 */
export interface GetMFADeviceCommandOutput extends GetMFADeviceResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an MFA device for a specified user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetMFADeviceRequest
 *   SerialNumber: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE",
 * };
 * const command = new GetMFADeviceCommand(input);
 * const response = await client.send(command);
 * // { // GetMFADeviceResponse
 * //   UserName: "STRING_VALUE",
 * //   SerialNumber: "STRING_VALUE", // required
 * //   EnableDate: new Date("TIMESTAMP"),
 * //   Certifications: { // CertificationMapType
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMFADeviceCommandInput - {@link GetMFADeviceCommandInput}
 * @returns {@link GetMFADeviceCommandOutput}
 * @see {@link GetMFADeviceCommandInput} for command's `input` shape.
 * @see {@link GetMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class GetMFADeviceCommand extends $Command
  .classBuilder<
    GetMFADeviceCommandInput,
    GetMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "GetMFADevice", {})
  .n("IAMClient", "GetMFADeviceCommand")
  .f(void 0, void 0)
  .ser(se_GetMFADeviceCommand)
  .de(de_GetMFADeviceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMFADeviceRequest;
      output: GetMFADeviceResponse;
    };
    sdk: {
      input: GetMFADeviceCommandInput;
      output: GetMFADeviceCommandOutput;
    };
  };
}
