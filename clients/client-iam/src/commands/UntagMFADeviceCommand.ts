// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UntagMFADeviceRequest } from "../models/models_1";
import { de_UntagMFADeviceCommand, se_UntagMFADeviceCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UntagMFADeviceCommand}.
 */
export interface UntagMFADeviceCommandInput extends UntagMFADeviceRequest {}
/**
 * @public
 *
 * The output of {@link UntagMFADeviceCommand}.
 */
export interface UntagMFADeviceCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified tags from the IAM virtual multi-factor authentication (MFA)
 *       device. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // UntagMFADeviceRequest
 *   SerialNumber: "STRING_VALUE", // required
 *   TagKeys: [ // tagKeyListType // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagMFADeviceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagMFADeviceCommandInput - {@link UntagMFADeviceCommandInput}
 * @returns {@link UntagMFADeviceCommandOutput}
 * @see {@link UntagMFADeviceCommandInput} for command's `input` shape.
 * @see {@link UntagMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
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
export class UntagMFADeviceCommand extends $Command
  .classBuilder<
    UntagMFADeviceCommandInput,
    UntagMFADeviceCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "UntagMFADevice", {})
  .n("IAMClient", "UntagMFADeviceCommand")
  .f(void 0, void 0)
  .ser(se_UntagMFADeviceCommand)
  .de(de_UntagMFADeviceCommand)
  .build() {}
