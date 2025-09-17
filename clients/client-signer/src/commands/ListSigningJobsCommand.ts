// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSigningJobsRequest, ListSigningJobsResponse } from "../models/models_0";
import { de_ListSigningJobsCommand, se_ListSigningJobsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSigningJobsCommand}.
 */
export interface ListSigningJobsCommandInput extends ListSigningJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListSigningJobsCommand}.
 */
export interface ListSigningJobsCommandOutput extends ListSigningJobsResponse, __MetadataBearer {}

/**
 * <p>Lists all your signing jobs. You can use the <code>maxResults</code> parameter to limit the
 * 			number of signing jobs that are returned in the response. If additional jobs remain to
 * 			be listed, AWS Signer returns a <code>nextToken</code> value. Use this value in
 * 			subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can
 * 			continue calling <code>ListSigningJobs</code> with your <code>maxResults</code>
 * 			parameter and with new values that Signer returns in the <code>nextToken</code>
 * 			parameter until all of your signing jobs have been returned. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListSigningJobsCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListSigningJobsCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * // import type { SignerClientConfig } from "@aws-sdk/client-signer";
 * const config = {}; // type is SignerClientConfig
 * const client = new SignerClient(config);
 * const input = { // ListSigningJobsRequest
 *   status: "InProgress" || "Failed" || "Succeeded",
 *   platformId: "STRING_VALUE",
 *   requestedBy: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   isRevoked: true || false,
 *   signatureExpiresBefore: new Date("TIMESTAMP"),
 *   signatureExpiresAfter: new Date("TIMESTAMP"),
 *   jobInvoker: "STRING_VALUE",
 * };
 * const command = new ListSigningJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListSigningJobsResponse
 * //   jobs: [ // SigningJobs
 * //     { // SigningJob
 * //       jobId: "STRING_VALUE",
 * //       source: { // Source
 * //         s3: { // S3Source
 * //           bucketName: "STRING_VALUE", // required
 * //           key: "STRING_VALUE", // required
 * //           version: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       signedObject: { // SignedObject
 * //         s3: { // S3SignedObject
 * //           bucketName: "STRING_VALUE",
 * //           key: "STRING_VALUE",
 * //         },
 * //       },
 * //       signingMaterial: { // SigningMaterial
 * //         certificateArn: "STRING_VALUE", // required
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       status: "InProgress" || "Failed" || "Succeeded",
 * //       isRevoked: true || false,
 * //       profileName: "STRING_VALUE",
 * //       profileVersion: "STRING_VALUE",
 * //       platformId: "STRING_VALUE",
 * //       platformDisplayName: "STRING_VALUE",
 * //       signatureExpiresAt: new Date("TIMESTAMP"),
 * //       jobOwner: "STRING_VALUE",
 * //       jobInvoker: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSigningJobsCommandInput - {@link ListSigningJobsCommandInput}
 * @returns {@link ListSigningJobsCommandOutput}
 * @see {@link ListSigningJobsCommandInput} for command's `input` shape.
 * @see {@link ListSigningJobsCommandOutput} for command's `response` shape.
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
export class ListSigningJobsCommand extends $Command
  .classBuilder<
    ListSigningJobsCommandInput,
    ListSigningJobsCommandOutput,
    SignerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SignerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WallabyService", "ListSigningJobs", {})
  .n("SignerClient", "ListSigningJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListSigningJobsCommand)
  .de(de_ListSigningJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSigningJobsRequest;
      output: ListSigningJobsResponse;
    };
    sdk: {
      input: ListSigningJobsCommandInput;
      output: ListSigningJobsCommandOutput;
    };
  };
}
