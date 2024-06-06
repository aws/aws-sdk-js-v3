// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { EnableMFADeviceRequest } from "../models/models_0";
import { de_EnableMFADeviceCommand, se_EnableMFADeviceCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableMFADeviceCommand}.
 */
export interface EnableMFADeviceCommandInput extends EnableMFADeviceRequest {}
/**
 * @public
 *
 * The output of {@link EnableMFADeviceCommand}.
 */
export interface EnableMFADeviceCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables the specified MFA device and associates it with the specified IAM user. When
 *             enabled, the MFA device is required for every subsequent login by the IAM user
 *             associated with the device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, EnableMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, EnableMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // EnableMFADeviceRequest
 *   UserName: "STRING_VALUE", // required
 *   SerialNumber: "STRING_VALUE", // required
 *   AuthenticationCode1: "STRING_VALUE", // required
 *   AuthenticationCode2: "STRING_VALUE", // required
 * };
 * const command = new EnableMFADeviceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableMFADeviceCommandInput - {@link EnableMFADeviceCommandInput}
 * @returns {@link EnableMFADeviceCommandOutput}
 * @see {@link EnableMFADeviceCommandInput} for command's `input` shape.
 * @see {@link EnableMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link EntityTemporarilyUnmodifiableException} (client fault)
 *  <p>The request was rejected because it referenced an entity that is temporarily unmodifiable,
 *       such as a user name that was deleted and then recreated. The error indicates that the request
 *       is likely to succeed if you try again after waiting several minutes. The error message
 *       describes the entity.</p>
 *
 * @throws {@link InvalidAuthenticationCodeException} (client fault)
 *  <p>The request was rejected because the authentication code was not recognized. The error
 *       message describes the specific error.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
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
 * @public
 */
export class EnableMFADeviceCommand extends $Command
  .classBuilder<
    EnableMFADeviceCommandInput,
    EnableMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "EnableMFADevice", {})
  .n("IAMClient", "EnableMFADeviceCommand")
  .f(void 0, void 0)
  .ser(se_EnableMFADeviceCommand)
  .de(de_EnableMFADeviceCommand)
  .build() {}
