// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIdentityRequest, DeleteIdentityResponse } from "../models/models_0";
import { DeleteIdentity } from "../schemas/schemas_21_DeleteIdentity";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIdentityCommand}.
 */
export interface DeleteIdentityCommandInput extends DeleteIdentityRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIdentityCommand}.
 */
export interface DeleteIdentityCommandOutput extends DeleteIdentityResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified identity (an email address or a domain) from the list of
 *             verified identities.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DeleteIdentityCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteIdentityCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
 * const client = new SESClient(config);
 * const input = { // DeleteIdentityRequest
 *   Identity: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdentityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIdentityCommandInput - {@link DeleteIdentityCommandInput}
 * @returns {@link DeleteIdentityCommandOutput}
 * @see {@link DeleteIdentityCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 *
 * @example DeleteIdentity
 * ```javascript
 * // The following example deletes an identity from the list of identities that have been submitted for verification with Amazon SES:
 * const input = {
 *   Identity: "user@example.com"
 * };
 * const command = new DeleteIdentityCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteIdentityCommand extends $Command
  .classBuilder<
    DeleteIdentityCommandInput,
    DeleteIdentityCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService", "DeleteIdentity", {})
  .n("SESClient", "DeleteIdentityCommand")
  .sc(DeleteIdentity)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIdentityRequest;
      output: {};
    };
    sdk: {
      input: DeleteIdentityCommandInput;
      output: DeleteIdentityCommandOutput;
    };
  };
}
