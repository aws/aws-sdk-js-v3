// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSigningProfilesRequest, ListSigningProfilesResponse } from "../models/models_0";
import { ListSigningProfiles } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSigningProfilesCommand}.
 */
export interface ListSigningProfilesCommandInput extends ListSigningProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListSigningProfilesCommand}.
 */
export interface ListSigningProfilesCommandOutput extends ListSigningProfilesResponse, __MetadataBearer {}

/**
 * <p>Lists all available signing profiles in your AWS account. Returns only profiles with an
 * 				<code>ACTIVE</code> status unless the <code>includeCanceled</code> request field is
 * 			set to <code>true</code>. If additional jobs remain to be listed, AWS Signer returns a
 * 				<code>nextToken</code> value. Use this value in subsequent calls to
 * 				<code>ListSigningJobs</code> to fetch the remaining values. You can continue calling
 * 				<code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with
 * 			new values that Signer returns in the <code>nextToken</code> parameter until all of
 * 			your signing jobs have been returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListSigningProfilesCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListSigningProfilesCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * // import type { SignerClientConfig } from "@aws-sdk/client-signer";
 * const config = {}; // type is SignerClientConfig
 * const client = new SignerClient(config);
 * const input = { // ListSigningProfilesRequest
 *   includeCanceled: true || false,
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   platformId: "STRING_VALUE",
 *   statuses: [ // Statuses
 *     "Active" || "Canceled" || "Revoked",
 *   ],
 * };
 * const command = new ListSigningProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListSigningProfilesResponse
 * //   profiles: [ // SigningProfiles
 * //     { // SigningProfile
 * //       profileName: "STRING_VALUE",
 * //       profileVersion: "STRING_VALUE",
 * //       profileVersionArn: "STRING_VALUE",
 * //       signingMaterial: { // SigningMaterial
 * //         certificateArn: "STRING_VALUE", // required
 * //       },
 * //       signatureValidityPeriod: { // SignatureValidityPeriod
 * //         value: Number("int"),
 * //         type: "DAYS" || "MONTHS" || "YEARS",
 * //       },
 * //       platformId: "STRING_VALUE",
 * //       platformDisplayName: "STRING_VALUE",
 * //       signingParameters: { // SigningParameters
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       status: "Active" || "Canceled" || "Revoked",
 * //       arn: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSigningProfilesCommandInput - {@link ListSigningProfilesCommandInput}
 * @returns {@link ListSigningProfilesCommandOutput}
 * @see {@link ListSigningProfilesCommandInput} for command's `input` shape.
 * @see {@link ListSigningProfilesCommandOutput} for command's `response` shape.
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
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
 *
 *
 * @public
 */
export class ListSigningProfilesCommand extends $Command
  .classBuilder<
    ListSigningProfilesCommandInput,
    ListSigningProfilesCommandOutput,
    SignerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SignerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WallabyService", "ListSigningProfiles", {})
  .n("SignerClient", "ListSigningProfilesCommand")
  .sc(ListSigningProfiles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSigningProfilesRequest;
      output: ListSigningProfilesResponse;
    };
    sdk: {
      input: ListSigningProfilesCommandInput;
      output: ListSigningProfilesCommandOutput;
    };
  };
}
