// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetDocumentStatusRequest, BatchGetDocumentStatusResponse } from "../models/models_0";
import { BatchGetDocumentStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetDocumentStatusCommand}.
 */
export interface BatchGetDocumentStatusCommandInput extends BatchGetDocumentStatusRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetDocumentStatusCommand}.
 */
export interface BatchGetDocumentStatusCommandOutput extends BatchGetDocumentStatusResponse, __MetadataBearer {}

/**
 * Returns the indexing status for one or more documents submitted with the [BatchPutDocument](https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html) API.
 *
 * When you use the `BatchPutDocument` API, documents are indexed asynchronously. You can use the `BatchGetDocumentStatus` API to get the current status of a list of documents so that you can determine if they have been successfully indexed.
 *
 * You can also use the `BatchGetDocumentStatus` API to check the status of the [BatchDeleteDocument](https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html) API. When a document is deleted from the index, Amazon Kendra returns `NOT_FOUND` as the status.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, BatchGetDocumentStatusCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, BatchGetDocumentStatusCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * // import type { KendraClientConfig } from "@aws-sdk/client-kendra";
 * const config = {}; // type is KendraClientConfig
 * const client = new KendraClient(config);
 * const input = { // BatchGetDocumentStatusRequest
 *   IndexId: "STRING_VALUE", // required
 *   DocumentInfoList: [ // DocumentInfoList // required
 *     { // DocumentInfo
 *       DocumentId: "STRING_VALUE", // required
 *       Attributes: [ // DocumentAttributeList
 *         { // DocumentAttribute
 *           Key: "STRING_VALUE", // required
 *           Value: { // DocumentAttributeValue
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [ // DocumentAttributeStringListValue
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchGetDocumentStatusCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetDocumentStatusResponse
 * //   Errors: [ // BatchGetDocumentStatusResponseErrors
 * //     { // BatchGetDocumentStatusResponseError
 * //       DocumentId: "STRING_VALUE",
 * //       DataSourceId: "STRING_VALUE",
 * //       ErrorCode: "InternalError" || "InvalidRequest",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   DocumentStatusList: [ // DocumentStatusList
 * //     { // Status
 * //       DocumentId: "STRING_VALUE",
 * //       DocumentStatus: "NOT_FOUND" || "PROCESSING" || "INDEXED" || "UPDATED" || "FAILED" || "UPDATE_FAILED",
 * //       FailureCode: "STRING_VALUE",
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetDocumentStatusCommandInput - {@link BatchGetDocumentStatusCommandInput}
 * @returns {@link BatchGetDocumentStatusCommandOutput}
 * @see {@link BatchGetDocumentStatusCommandInput} for command's `input` shape.
 * @see {@link BatchGetDocumentStatusCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action. Please ensure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict occurred with the request. Please fix any inconsistences with your resources and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Kendra service. Please wait a few minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource you want to use doesn’t exist. Please check you have provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Please reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints set by the Amazon Kendra service. Please provide the correct input and try again.
 *
 * @throws {@link KendraServiceException}
 *
 * Base exception class for all service exceptions from Kendra service.
 *
 * @public
 */
export class BatchGetDocumentStatusCommand extends command<BatchGetDocumentStatusCommandInput, BatchGetDocumentStatusCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetDocumentStatus",
  BatchGetDocumentStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetDocumentStatusRequest;
      output: BatchGetDocumentStatusResponse;
    };
    sdk: {
      input: BatchGetDocumentStatusCommandInput;
      output: BatchGetDocumentStatusCommandOutput;
    };
  };
}
