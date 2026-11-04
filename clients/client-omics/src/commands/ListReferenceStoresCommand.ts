// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListReferenceStoresRequest, ListReferenceStoresResponse } from "../models/models_0";
import { ListReferenceStores$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListReferenceStoresCommand}.
 */
export interface ListReferenceStoresCommandInput extends ListReferenceStoresRequest {}
/**
 * @public
 *
 * The output of {@link ListReferenceStoresCommand}.
 */
export interface ListReferenceStoresCommandOutput extends ListReferenceStoresResponse, __MetadataBearer {}

/**
 * Retrieves a list of reference stores linked to your account and returns their metadata in JSON format.
 *
 * For more information, see [Creating a reference store](https://docs.aws.amazon.com/omics/latest/dev/create-reference-store.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListReferenceStoresCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListReferenceStoresCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListReferenceStoresRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filter: { // ReferenceStoreFilter
 *     name: "STRING_VALUE",
 *     createdAfter: new Date("TIMESTAMP"),
 *     createdBefore: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new ListReferenceStoresCommand(input);
 * const response = await client.send(command);
 * // { // ListReferenceStoresResponse
 * //   nextToken: "STRING_VALUE",
 * //   referenceStores: [ // ReferenceStoreDetailList // required
 * //     { // ReferenceStoreDetail
 * //       arn: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       sseConfig: { // SseConfig
 * //         type: "STRING_VALUE", // required
 * //         keyArn: "STRING_VALUE",
 * //       },
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReferenceStoresCommandInput - {@link ListReferenceStoresCommandInput}
 * @returns {@link ListReferenceStoresCommandOutput}
 * @see {@link ListReferenceStoresCommandInput} for command's `input` shape.
 * @see {@link ListReferenceStoresCommandOutput} for command's `response` shape.
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
export class ListReferenceStoresCommand extends command<ListReferenceStoresCommandInput, ListReferenceStoresCommandOutput>(
  _ep0,
  _mw0,
  "ListReferenceStores",
  ListReferenceStores$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReferenceStoresRequest;
      output: ListReferenceStoresResponse;
    };
    sdk: {
      input: ListReferenceStoresCommandInput;
      output: ListReferenceStoresCommandOutput;
    };
  };
}
