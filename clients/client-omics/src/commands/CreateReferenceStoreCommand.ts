// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateReferenceStoreRequest, CreateReferenceStoreResponse } from "../models/models_0";
import { CreateReferenceStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateReferenceStoreCommand}.
 */
export interface CreateReferenceStoreCommandInput extends CreateReferenceStoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateReferenceStoreCommand}.
 */
export interface CreateReferenceStoreCommandOutput extends CreateReferenceStoreResponse, __MetadataBearer {}

/**
 * Creates a reference store and returns metadata in JSON format. Reference stores are used to store reference genomes in FASTA format. A reference store is created when the first reference genome is imported. To import additional reference genomes from an Amazon S3 bucket, use the `StartReferenceImportJob` API operation.
 *
 * For more information, see [Creating a HealthOmics reference store](https://docs.aws.amazon.com/omics/latest/dev/create-reference-store.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateReferenceStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateReferenceStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // CreateReferenceStoreRequest
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
 * };
 * const command = new CreateReferenceStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateReferenceStoreResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   sseConfig: { // SseConfig
 * //     type: "STRING_VALUE", // required
 * //     keyArn: "STRING_VALUE",
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateReferenceStoreCommandInput - {@link CreateReferenceStoreCommandInput}
 * @returns {@link CreateReferenceStoreCommandOutput}
 * @see {@link CreateReferenceStoreCommandInput} for command's `input` shape.
 * @see {@link CreateReferenceStoreCommandOutput} for command's `response` shape.
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
export class CreateReferenceStoreCommand extends command<CreateReferenceStoreCommandInput, CreateReferenceStoreCommandOutput>(
  _ep0,
  _mw0,
  "CreateReferenceStore",
  CreateReferenceStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReferenceStoreRequest;
      output: CreateReferenceStoreResponse;
    };
    sdk: {
      input: CreateReferenceStoreCommandInput;
      output: CreateReferenceStoreCommandOutput;
    };
  };
}
