// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { AddClientIDToOpenIDConnectProviderRequest } from "../models/models_0";
import { AddClientIDToOpenIDConnectProvider } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddClientIDToOpenIDConnectProviderCommand}.
 */
export interface AddClientIDToOpenIDConnectProviderCommandInput extends AddClientIDToOpenIDConnectProviderRequest {}
/**
 * @public
 *
 * The output of {@link AddClientIDToOpenIDConnectProviderCommand}.
 */
export interface AddClientIDToOpenIDConnectProviderCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds a new client ID (also known as audience) to the list of client IDs already
 *             registered for the specified IAM OpenID Connect (OIDC) provider resource.</p>
 *          <p>This operation is idempotent; it does not fail or return an error if you add an
 *             existing client ID to the provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AddClientIDToOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AddClientIDToOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // AddClientIDToOpenIDConnectProviderRequest
 *   OpenIDConnectProviderArn: "STRING_VALUE", // required
 *   ClientID: "STRING_VALUE", // required
 * };
 * const command = new AddClientIDToOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddClientIDToOpenIDConnectProviderCommandInput - {@link AddClientIDToOpenIDConnectProviderCommandInput}
 * @returns {@link AddClientIDToOpenIDConnectProviderCommandOutput}
 * @see {@link AddClientIDToOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link AddClientIDToOpenIDConnectProviderCommandOutput} for command's `response` shape.
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
 * @example To add a client ID (audience) to an Open-ID Connect (OIDC) provider
 * ```javascript
 * // The following add-client-id-to-open-id-connect-provider command adds the client ID my-application-ID to the OIDC provider named server.example.com:
 * const input = {
 *   ClientID: "my-application-ID",
 *   OpenIDConnectProviderArn: "arn:aws:iam::123456789012:oidc-provider/server.example.com"
 * };
 * const command = new AddClientIDToOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AddClientIDToOpenIDConnectProviderCommand extends $Command
  .classBuilder<
    AddClientIDToOpenIDConnectProviderCommandInput,
    AddClientIDToOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "AddClientIDToOpenIDConnectProvider", {})
  .n("IAMClient", "AddClientIDToOpenIDConnectProviderCommand")
  .sc(AddClientIDToOpenIDConnectProvider)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddClientIDToOpenIDConnectProviderRequest;
      output: {};
    };
    sdk: {
      input: AddClientIDToOpenIDConnectProviderCommandInput;
      output: AddClientIDToOpenIDConnectProviderCommandOutput;
    };
  };
}
