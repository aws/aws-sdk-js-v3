// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRevocationStatusRequest, GetRevocationStatusResponse } from "../models/models_0";
import { GetRevocationStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the revocation status of one or more of the signing profile, signing job, and signing certificate.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The allowed number of job-signing requests has been exceeded.
 *
 * This error supersedes the error `ThrottlingException`.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * You signing certificate could not be validated.
 *
 * @throws {@link SignerServiceException}
 *
 * Base exception class for all service exceptions from Signer service.
 *
 * @public
 */
export class GetRevocationStatusCommand extends command<GetRevocationStatusCommandInput, GetRevocationStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetRevocationStatus",
  GetRevocationStatus$
) {
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
