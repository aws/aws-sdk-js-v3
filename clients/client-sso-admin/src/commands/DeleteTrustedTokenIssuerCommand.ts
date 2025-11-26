// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteTrustedTokenIssuerRequest, DeleteTrustedTokenIssuerResponse } from "../models/models_0";
import { DeleteTrustedTokenIssuer } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTrustedTokenIssuerCommand}.
 */
export interface DeleteTrustedTokenIssuerCommandInput extends DeleteTrustedTokenIssuerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrustedTokenIssuerCommand}.
 */
export interface DeleteTrustedTokenIssuerCommandOutput extends DeleteTrustedTokenIssuerResponse, __MetadataBearer {}

/**
 * <p>Deletes a trusted token issuer configuration from an instance of IAM Identity Center.</p> <note> <p>Deleting this trusted token issuer configuration will cause users to lose access to any applications that are configured to use the trusted token issuer.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DeleteTrustedTokenIssuerCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DeleteTrustedTokenIssuerCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // DeleteTrustedTokenIssuerRequest
 *   TrustedTokenIssuerArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteTrustedTokenIssuerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTrustedTokenIssuerCommandInput - {@link DeleteTrustedTokenIssuerCommandInput}
 * @returns {@link DeleteTrustedTokenIssuerCommandOutput}
 * @see {@link DeleteTrustedTokenIssuerCommandInput} for command's `input` shape.
 * @see {@link DeleteTrustedTokenIssuerCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 *
 * @public
 */
export class DeleteTrustedTokenIssuerCommand extends $Command
  .classBuilder<
    DeleteTrustedTokenIssuerCommandInput,
    DeleteTrustedTokenIssuerCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "DeleteTrustedTokenIssuer", {})
  .n("SSOAdminClient", "DeleteTrustedTokenIssuerCommand")
  .sc(DeleteTrustedTokenIssuer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrustedTokenIssuerRequest;
      output: {};
    };
    sdk: {
      input: DeleteTrustedTokenIssuerCommandInput;
      output: DeleteTrustedTokenIssuerCommandOutput;
    };
  };
}
