// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSequenceStoresRequest, ListSequenceStoresResponse } from "../models/models_0";
import { ListSequenceStores$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSequenceStoresCommand}.
 */
export interface ListSequenceStoresCommandInput extends ListSequenceStoresRequest {}
/**
 * @public
 *
 * The output of {@link ListSequenceStoresCommand}.
 */
export interface ListSequenceStoresCommandOutput extends ListSequenceStoresResponse, __MetadataBearer {}

/**
 * Retrieves a list of sequence stores and returns each sequence store's metadata.
 *
 * For more information, see [Creating a HealthOmics sequence store](https://docs.aws.amazon.com/omics/latest/dev/create-sequence-store.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListSequenceStoresCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListSequenceStoresCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListSequenceStoresRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filter: { // SequenceStoreFilter
 *     name: "STRING_VALUE",
 *     createdAfter: new Date("TIMESTAMP"),
 *     createdBefore: new Date("TIMESTAMP"),
 *     status: "STRING_VALUE",
 *     updatedAfter: new Date("TIMESTAMP"),
 *     updatedBefore: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new ListSequenceStoresCommand(input);
 * const response = await client.send(command);
 * // { // ListSequenceStoresResponse
 * //   nextToken: "STRING_VALUE",
 * //   sequenceStores: [ // SequenceStoreDetailList // required
 * //     { // SequenceStoreDetail
 * //       arn: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       sseConfig: { // SseConfig
 * //         type: "STRING_VALUE", // required
 * //         keyArn: "STRING_VALUE",
 * //       },
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       fallbackLocation: "STRING_VALUE",
 * //       eTagAlgorithmFamily: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       statusMessage: "STRING_VALUE",
 * //       updateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSequenceStoresCommandInput - {@link ListSequenceStoresCommandInput}
 * @returns {@link ListSequenceStoresCommandOutput}
 * @see {@link ListSequenceStoresCommandInput} for command's `input` shape.
 * @see {@link ListSequenceStoresCommandOutput} for command's `response` shape.
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
export class ListSequenceStoresCommand extends command<ListSequenceStoresCommandInput, ListSequenceStoresCommandOutput>(
  _ep0,
  _mw0,
  "ListSequenceStores",
  ListSequenceStores$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSequenceStoresRequest;
      output: ListSequenceStoresResponse;
    };
    sdk: {
      input: ListSequenceStoresCommandInput;
      output: ListSequenceStoresCommandOutput;
    };
  };
}
