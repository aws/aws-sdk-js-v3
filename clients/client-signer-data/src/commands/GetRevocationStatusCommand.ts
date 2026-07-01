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
 * <p>Retrieves the revocation status for a signed artifact by checking if the signing profile, job, or certificate has been revoked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerDataClient, GetRevocationStatusCommand } from "@aws-sdk/client-signer-data"; // ES Modules import
 * // const { SignerDataClient, GetRevocationStatusCommand } = require("@aws-sdk/client-signer-data"); // CommonJS import
 * // import type { SignerDataClientConfig } from "@aws-sdk/client-signer-data";
 * const config = {}; // type is SignerDataClientConfig
 * const client = new SignerDataClient(config);
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
 * @see {@link SignerDataClientResolvedConfig | config} for SignerDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains invalid parameters or is malformed.</p>
 *
 * @throws {@link SignerDataServiceException}
 * <p>Base exception class for all service exceptions from SignerData service.</p>
 *
 *
 * @example Check revocation status for a signed artifact
 * ```javascript
 * // Checks if a signing profile, job, or certificate has been revoked for a given artifact.
 * const input = {
 *   certificateHashes: [
 *     "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
 *   ],
 *   jobArn: "arn:aws:signer:us-east-1:123456789012:/signing-jobs/my-job-id",
 *   platformId: "Notation-OCI-SHA384-ECDSA",
 *   profileVersionArn: "arn:aws:signer:us-east-1:123456789012:/signing-profiles/my-profile/v1",
 *   signatureTimestamp: 1700000000
 * };
 * const command = new GetRevocationStatusCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   revokedEntities:   []
 * }
 * *\/
 * ```
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
