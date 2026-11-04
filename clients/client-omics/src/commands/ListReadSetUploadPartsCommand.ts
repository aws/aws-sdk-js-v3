// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListReadSetUploadPartsRequest, ListReadSetUploadPartsResponse } from "../models/models_0";
import { ListReadSetUploadParts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListReadSetUploadPartsCommand}.
 */
export interface ListReadSetUploadPartsCommandInput extends ListReadSetUploadPartsRequest {}
/**
 * @public
 *
 * The output of {@link ListReadSetUploadPartsCommand}.
 */
export interface ListReadSetUploadPartsCommandOutput extends ListReadSetUploadPartsResponse, __MetadataBearer {}

/**
 * Lists all parts in a multipart read set upload for a sequence store and returns the metadata in a JSON formatted output.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListReadSetUploadPartsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListReadSetUploadPartsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListReadSetUploadPartsRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 *   partSource: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filter: { // ReadSetUploadPartListFilter
 *     createdAfter: new Date("TIMESTAMP"),
 *     createdBefore: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new ListReadSetUploadPartsCommand(input);
 * const response = await client.send(command);
 * // { // ListReadSetUploadPartsResponse
 * //   nextToken: "STRING_VALUE",
 * //   parts: [ // ReadSetUploadPartList
 * //     { // ReadSetUploadPartListItem
 * //       partNumber: Number("int"), // required
 * //       partSize: Number("long"), // required
 * //       partSource: "STRING_VALUE", // required
 * //       checksum: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReadSetUploadPartsCommandInput - {@link ListReadSetUploadPartsCommandInput}
 * @returns {@link ListReadSetUploadPartsCommandOutput}
 * @see {@link ListReadSetUploadPartsCommandInput} for command's `input` shape.
 * @see {@link ListReadSetUploadPartsCommandOutput} for command's `response` shape.
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
 * @throws {@link NotSupportedOperationException} (client fault)
 *
 * The operation is not supported by Amazon Omics, or the API does not exist.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
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
export class ListReadSetUploadPartsCommand extends command<ListReadSetUploadPartsCommandInput, ListReadSetUploadPartsCommandOutput>(
  _ep0,
  _mw0,
  "ListReadSetUploadParts",
  ListReadSetUploadParts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReadSetUploadPartsRequest;
      output: ListReadSetUploadPartsResponse;
    };
    sdk: {
      input: ListReadSetUploadPartsCommandInput;
      output: ListReadSetUploadPartsCommandOutput;
    };
  };
}
