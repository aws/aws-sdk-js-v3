// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRevocationStatusRequest, GetRevocationStatusResponse } from "../models/models_0";
import { GetRevocationStatus } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRevocationStatusCommand}.
 */
export interface GetRevocationStatusCommandInput extends GetRevocationStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetRevocationStatusCommand}.
 */
export interface GetRevocationStatusCommandOutput extends GetRevocationStatusResponse, __MetadataBearer {}

/**
 * <p>Retrieves the revocation status of one or more of the signing profile, signing job,
 * 			and signing certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, GetRevocationStatusCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, GetRevocationStatusCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * // import type { SignerClientConfig } from "@aws-sdk/client-signer";
 * const config = {}; // type is SignerClientConfig
 * const client = new SignerClient(config);
 * const input = { // GetRevocationStatusRequest
 *   signatureTimestamp: new Date("TIMESTAMP"), // required
 *   platformId: "STRING_VALUE", // required
 *   profileVersionArn: "STRING_VALUE", // required
 *   jobArn: "STRING_VALUE", // required
 *   certificateHashes: [ // CertificateHashes // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetRevocationStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetRevocationStatusResponse
 * //   revokedEntities: [ // RevokedEntities
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRevocationStatusCommandInput - {@link GetRevocationStatusCommandInput}
 * @returns {@link GetRevocationStatusCommandOutput}
 * @see {@link GetRevocationStatusCommandInput} for command's `input` shape.
 * @see {@link GetRevocationStatusCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The allowed number of job-signing requests has been exceeded.</p>
 * 		       <p>This error supersedes the error <code>ThrottlingException</code>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You signing certificate could not be validated.</p>
 *
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
 *
 *
 * @public
 */
export class GetRevocationStatusCommand extends $Command
  .classBuilder<
    GetRevocationStatusCommandInput,
    GetRevocationStatusCommandOutput,
    SignerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SignerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WallabyService", "GetRevocationStatus", {})
  .n("SignerClient", "GetRevocationStatusCommand")
  .sc(GetRevocationStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRevocationStatusRequest;
      output: GetRevocationStatusResponse;
    };
    sdk: {
      input: GetRevocationStatusCommandInput;
      output: GetRevocationStatusCommandOutput;
    };
  };
}
