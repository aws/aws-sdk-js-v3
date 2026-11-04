// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSequenceStoreRequest, CreateSequenceStoreResponse } from "../models/models_0";
import { CreateSequenceStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a sequence store and returns its metadata. Sequence stores are used to store sequence data files called read sets that are saved in FASTQ, BAM, uBAM, or CRAM formats. For aligned formats (BAM and CRAM), a sequence store can only use one reference genome. For unaligned formats (FASTQ and uBAM), a reference genome is not required. You can create multiple sequence stores per region per account.
 *
 * The following are optional parameters you can specify for your sequence store:
 *
 * - Use `s3AccessConfig` to configure your sequence store with S3 access logs (recommended).
 * - Use `sseConfig` to define your own KMS key for encryption.
 * - Use `eTagAlgorithmFamily` to define which algorithm to use for the HealthOmics eTag on objects.
 * - Use `fallbackLocation` to define a backup location for storing files that have failed a direct upload.
 * - Use `propagatedSetLevelTags` to configure tags that propagate to all objects in your store.
 *
 * For more information, see [Creating a HealthOmics sequence store](https://docs.aws.amazon.com/omics/latest/dev/create-sequence-store.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateSequenceStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateSequenceStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class CreateSequenceStoreCommand extends command<CreateSequenceStoreCommandInput, CreateSequenceStoreCommandOutput>(
  _ep0,
  _mw0,
  "CreateSequenceStore",
  CreateSequenceStore$
) {
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
