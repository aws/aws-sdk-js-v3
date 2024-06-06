// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { BatchGetDocumentStatusRequest, BatchGetDocumentStatusResponse } from "../models/models_0";
import { de_BatchGetDocumentStatusCommand, se_BatchGetDocumentStatusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns the indexing status for one or more documents submitted with the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">
 *                 BatchPutDocument</a> API.</p>
 *          <p>When you use the <code>BatchPutDocument</code> API, documents are indexed
 *             asynchronously. You can use the <code>BatchGetDocumentStatus</code> API to get the
 *             current status of a list of documents so that you can determine if they have been
 *             successfully indexed.</p>
 *          <p>You can also use the <code>BatchGetDocumentStatus</code> API to check the status of
 *             the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html">
 *                 BatchDeleteDocument</a> API. When a document is deleted from the index, Amazon Kendra returns <code>NOT_FOUND</code> as the status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, BatchGetDocumentStatusCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, BatchGetDocumentStatusCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
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
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred with the request. Please fix any inconsistences with your
 *             resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 * @public
 */
export class BatchGetDocumentStatusCommand extends $Command
  .classBuilder<
    BatchGetDocumentStatusCommandInput,
    BatchGetDocumentStatusCommandOutput,
    KendraClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KendraClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSKendraFrontendService", "BatchGetDocumentStatus", {})
  .n("KendraClient", "BatchGetDocumentStatusCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetDocumentStatusCommand)
  .de(de_BatchGetDocumentStatusCommand)
  .build() {}
