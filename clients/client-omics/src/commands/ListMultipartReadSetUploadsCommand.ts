// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMultipartReadSetUploadsRequest, ListMultipartReadSetUploadsResponse } from "../models/models_0";
import { ListMultipartReadSetUploads$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMultipartReadSetUploadsCommand}.
 */
export interface ListMultipartReadSetUploadsCommandInput extends ListMultipartReadSetUploadsRequest {}
/**
 * @public
 *
 * The output of {@link ListMultipartReadSetUploadsCommand}.
 */
export interface ListMultipartReadSetUploadsCommandOutput extends ListMultipartReadSetUploadsResponse, __MetadataBearer {}

/**
 * Lists in-progress multipart read set uploads for a sequence store and returns it in a JSON formatted output. Multipart read set uploads are initiated by the `CreateMultipartReadSetUploads` API operation. This operation returns a response with no body when the upload is complete.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListMultipartReadSetUploadsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListMultipartReadSetUploadsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListMultipartReadSetUploadsRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListMultipartReadSetUploadsCommand(input);
 * const response = await client.send(command);
 * // { // ListMultipartReadSetUploadsResponse
 * //   nextToken: "STRING_VALUE",
 * //   uploads: [ // MultipartReadSetUploadList
 * //     { // MultipartReadSetUploadListItem
 * //       sequenceStoreId: "STRING_VALUE", // required
 * //       uploadId: "STRING_VALUE", // required
 * //       sourceFileType: "STRING_VALUE", // required
 * //       subjectId: "STRING_VALUE", // required
 * //       sampleId: "STRING_VALUE", // required
 * //       generatedFrom: "STRING_VALUE", // required
 * //       referenceArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMultipartReadSetUploadsCommandInput - {@link ListMultipartReadSetUploadsCommandInput}
 * @returns {@link ListMultipartReadSetUploadsCommandOutput}
 * @see {@link ListMultipartReadSetUploadsCommandInput} for command's `input` shape.
 * @see {@link ListMultipartReadSetUploadsCommandOutput} for command's `response` shape.
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
export class ListMultipartReadSetUploadsCommand extends command<ListMultipartReadSetUploadsCommandInput, ListMultipartReadSetUploadsCommandOutput>(
  _ep0,
  _mw0,
  "ListMultipartReadSetUploads",
  ListMultipartReadSetUploads$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMultipartReadSetUploadsRequest;
      output: ListMultipartReadSetUploadsResponse;
    };
    sdk: {
      input: ListMultipartReadSetUploadsCommandInput;
      output: ListMultipartReadSetUploadsCommandOutput;
    };
  };
}
