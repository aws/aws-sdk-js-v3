// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSequenceStoreRequest, CreateSequenceStoreResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_CreateSequenceStoreCommand, se_CreateSequenceStoreCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSequenceStoreCommand}.
 */
export interface CreateSequenceStoreCommandInput extends CreateSequenceStoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateSequenceStoreCommand}.
 */
export interface CreateSequenceStoreCommandOutput extends CreateSequenceStoreResponse, __MetadataBearer {}

/**
 * <p>Creates a sequence store and returns its metadata. Sequence stores are used to store sequence data files called read sets that are saved in FASTQ, BAM, uBAM, or CRAM formats. For aligned formats (BAM and CRAM), a sequence store can only use one reference genome. For unaligned formats (FASTQ and uBAM), a reference genome is not required. You can create multiple sequence stores per region per account. </p> <p>The following are optional parameters you can specify for your sequence store:</p> <ul> <li> <p>Use <code>s3AccessConfig</code> to configure your sequence store with S3 access logs (recommended).</p> </li> <li> <p>Use <code>sseConfig</code> to define your own KMS key for encryption.</p> </li> <li> <p>Use <code>eTagAlgorithmFamily</code> to define which algorithm to use for the HealthOmics eTag on objects.</p> </li> <li> <p>Use <code>fallbackLocation</code> to define a backup location for storing files that have failed a direct upload.</p> </li> <li> <p>Use <code>propagatedSetLevelTags</code> to configure tags that propagate to all objects in your store.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/create-sequence-store.html">Creating a HealthOmics sequence store</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateSequenceStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateSequenceStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // CreateSequenceStoreRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   sseConfig: { // SseConfig
 *     type: "STRING_VALUE", // required
 *     keyArn: "STRING_VALUE",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 *   fallbackLocation: "STRING_VALUE",
 *   eTagAlgorithmFamily: "STRING_VALUE",
 *   propagatedSetLevelTags: [ // PropagatedSetLevelTags
 *     "STRING_VALUE",
 *   ],
 *   s3AccessConfig: { // S3AccessConfig
 *     accessLogLocation: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSequenceStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateSequenceStoreResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   sseConfig: { // SseConfig
 * //     type: "STRING_VALUE", // required
 * //     keyArn: "STRING_VALUE",
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   fallbackLocation: "STRING_VALUE",
 * //   eTagAlgorithmFamily: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   statusMessage: "STRING_VALUE",
 * //   propagatedSetLevelTags: [ // PropagatedSetLevelTags
 * //     "STRING_VALUE",
 * //   ],
 * //   s3Access: { // SequenceStoreS3Access
 * //     s3Uri: "STRING_VALUE",
 * //     s3AccessPointArn: "STRING_VALUE",
 * //     accessLogLocation: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSequenceStoreCommandInput - {@link CreateSequenceStoreCommandInput}
 * @returns {@link CreateSequenceStoreCommandOutput}
 * @see {@link CreateSequenceStoreCommandInput} for command's `input` shape.
 * @see {@link CreateSequenceStoreCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class CreateSequenceStoreCommand extends $Command
  .classBuilder<
    CreateSequenceStoreCommandInput,
    CreateSequenceStoreCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "CreateSequenceStore", {})
  .n("OmicsClient", "CreateSequenceStoreCommand")
  .f(void 0, void 0)
  .ser(se_CreateSequenceStoreCommand)
  .de(de_CreateSequenceStoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSequenceStoreRequest;
      output: CreateSequenceStoreResponse;
    };
    sdk: {
      input: CreateSequenceStoreCommandInput;
      output: CreateSequenceStoreCommandOutput;
    };
  };
}
