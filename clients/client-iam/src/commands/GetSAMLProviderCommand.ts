// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetSAMLProviderRequest, GetSAMLProviderResponse } from "../models/models_0";
import { GetSAMLProvider } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSAMLProviderCommand}.
 */
export interface GetSAMLProviderCommandInput extends GetSAMLProviderRequest {}
/**
 * @public
 *
 * The output of {@link GetSAMLProviderCommand}.
 */
export interface GetSAMLProviderCommandOutput extends GetSAMLProviderResponse, __MetadataBearer {}

/**
 * <p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider
 *             resource object was created or updated.</p>
 *          <note>
 *             <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetSAMLProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetSAMLProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // GetSAMLProviderRequest
 *   SAMLProviderArn: "STRING_VALUE", // required
 * };
 * const command = new GetSAMLProviderCommand(input);
 * const response = await client.send(command);
 * // { // GetSAMLProviderResponse
 * //   SAMLProviderUUID: "STRING_VALUE",
 * //   SAMLMetadataDocument: "STRING_VALUE",
 * //   CreateDate: new Date("TIMESTAMP"),
 * //   ValidUntil: new Date("TIMESTAMP"),
 * //   Tags: [ // tagListType
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   AssertionEncryptionMode: "Required" || "Allowed",
 * //   PrivateKeyList: [ // privateKeyList
 * //     { // SAMLPrivateKey
 * //       KeyId: "STRING_VALUE",
 * //       Timestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSAMLProviderCommandInput - {@link GetSAMLProviderCommandInput}
 * @returns {@link GetSAMLProviderCommandOutput}
 * @see {@link GetSAMLProviderCommandInput} for command's `input` shape.
 * @see {@link GetSAMLProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
 *
 * @public
 */
export class GetSAMLProviderCommand extends $Command
  .classBuilder<
    GetSAMLProviderCommandInput,
    GetSAMLProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "GetSAMLProvider", {})
  .n("IAMClient", "GetSAMLProviderCommand")
  .sc(GetSAMLProvider)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSAMLProviderRequest;
      output: GetSAMLProviderResponse;
    };
    sdk: {
      input: GetSAMLProviderCommandInput;
      output: GetSAMLProviderCommandOutput;
    };
  };
}
