// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { RemoveClientIDFromOpenIDConnectProviderRequest } from "../models/models_0";
import {
  de_RemoveClientIDFromOpenIDConnectProviderCommand,
  se_RemoveClientIDFromOpenIDConnectProviderCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveClientIDFromOpenIDConnectProviderCommand}.
 */
export interface RemoveClientIDFromOpenIDConnectProviderCommandInput
  extends RemoveClientIDFromOpenIDConnectProviderRequest {}
/**
 * @public
 *
 * The output of {@link RemoveClientIDFromOpenIDConnectProviderCommand}.
 */
export interface RemoveClientIDFromOpenIDConnectProviderCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified client ID (also known as audience) from the list of client IDs
 *             registered for the specified IAM OpenID Connect (OIDC) provider resource
 *             object.</p>
 *          <p>This operation is idempotent; it does not fail or return an error if you try to remove
 *             a client ID that does not exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, RemoveClientIDFromOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, RemoveClientIDFromOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IAMClient(config);
 * const input = { // RemoveClientIDFromOpenIDConnectProviderRequest
 *   OpenIDConnectProviderArn: "STRING_VALUE", // required
 *   ClientID: "STRING_VALUE", // required
 * };
 * const command = new RemoveClientIDFromOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveClientIDFromOpenIDConnectProviderCommandInput - {@link RemoveClientIDFromOpenIDConnectProviderCommandInput}
 * @returns {@link RemoveClientIDFromOpenIDConnectProviderCommandOutput}
 * @see {@link RemoveClientIDFromOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link RemoveClientIDFromOpenIDConnectProviderCommandOutput} for command's `response` shape.
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
 * @public
 */
export class RemoveClientIDFromOpenIDConnectProviderCommand extends $Command
  .classBuilder<
    RemoveClientIDFromOpenIDConnectProviderCommandInput,
    RemoveClientIDFromOpenIDConnectProviderCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "RemoveClientIDFromOpenIDConnectProvider", {})
  .n("IAMClient", "RemoveClientIDFromOpenIDConnectProviderCommand")
  .f(void 0, void 0)
  .ser(se_RemoveClientIDFromOpenIDConnectProviderCommand)
  .de(de_RemoveClientIDFromOpenIDConnectProviderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveClientIDFromOpenIDConnectProviderRequest;
      output: {};
    };
    sdk: {
      input: RemoveClientIDFromOpenIDConnectProviderCommandInput;
      output: RemoveClientIDFromOpenIDConnectProviderCommandOutput;
    };
  };
}
