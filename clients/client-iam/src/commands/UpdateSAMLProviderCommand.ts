// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { UpdateSAMLProviderRequest, UpdateSAMLProviderResponse } from "../models/models_1";
import { UpdateSAMLProvider } from "../schemas/schemas_0";

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
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
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
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "UpdateSAMLProvider", {})
  .n("IAMClient", "UpdateSAMLProviderCommand")
  .sc(UpdateSAMLProvider)
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
