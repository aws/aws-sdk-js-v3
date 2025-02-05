// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  UpdateSAMLProviderRequest,
  UpdateSAMLProviderRequestFilterSensitiveLog,
  UpdateSAMLProviderResponse,
} from "../models/models_1";
import { de_UpdateSAMLProviderCommand, se_UpdateSAMLProviderCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSAMLProviderCommand}.
 */
export interface UpdateSAMLProviderCommandInput extends UpdateSAMLProviderRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSAMLProviderCommand}.
 */
export interface UpdateSAMLProviderCommandOutput extends UpdateSAMLProviderResponse, __MetadataBearer {}

/**
 * <p>Updates the metadata document, SAML encryption settings, and private keys for an
 *             existing SAML provider. To rotate private keys, add your new private key and then remove
 *             the old key in a separate request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateSAMLProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateSAMLProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IAMClient(config);
 * const input = { // UpdateSAMLProviderRequest
 *   SAMLMetadataDocument: "STRING_VALUE",
 *   SAMLProviderArn: "STRING_VALUE", // required
 *   AssertionEncryptionMode: "Required" || "Allowed",
 *   AddPrivateKey: "STRING_VALUE",
 *   RemovePrivateKey: "STRING_VALUE",
 * };
 * const command = new UpdateSAMLProviderCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSAMLProviderResponse
 * //   SAMLProviderArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSAMLProviderCommandInput - {@link UpdateSAMLProviderCommandInput}
 * @returns {@link UpdateSAMLProviderCommandOutput}
 * @see {@link UpdateSAMLProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateSAMLProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
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
export class UpdateSAMLProviderCommand extends $Command
  .classBuilder<
    UpdateSAMLProviderCommandInput,
    UpdateSAMLProviderCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "UpdateSAMLProvider", {})
  .n("IAMClient", "UpdateSAMLProviderCommand")
  .f(UpdateSAMLProviderRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateSAMLProviderCommand)
  .de(de_UpdateSAMLProviderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSAMLProviderRequest;
      output: UpdateSAMLProviderResponse;
    };
    sdk: {
      input: UpdateSAMLProviderCommandInput;
      output: UpdateSAMLProviderCommandOutput;
    };
  };
}
