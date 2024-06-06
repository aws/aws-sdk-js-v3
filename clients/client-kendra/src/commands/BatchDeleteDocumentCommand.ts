// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { BatchDeleteDocumentRequest, BatchDeleteDocumentResponse } from "../models/models_0";
import { de_BatchDeleteDocumentCommand, se_BatchDeleteDocumentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteDocumentCommand}.
 */
export interface BatchDeleteDocumentCommandInput extends BatchDeleteDocumentRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteDocumentCommand}.
 */
export interface BatchDeleteDocumentCommandOutput extends BatchDeleteDocumentResponse, __MetadataBearer {}

/**
 * <p>Removes one or more documents from an index. The documents must have been added with
 *             the <code>BatchPutDocument</code> API.</p>
 *          <p>The documents are deleted asynchronously. You can see the progress of the deletion by
 *             using Amazon Web Services
 *             CloudWatch. Any error messages related to the processing of the batch are sent to
 *             your Amazon Web Services
 *             CloudWatch log. You can also use the <code>BatchGetDocumentStatus</code> API to
 *             monitor the progress of deleting your documents.</p>
 *          <p>Deleting documents from an index using <code>BatchDeleteDocument</code> could take up
 *             to an hour or more, depending on the number of documents you want to delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, BatchDeleteDocumentCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, BatchDeleteDocumentCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // BatchDeleteDocumentRequest
 *   IndexId: "STRING_VALUE", // required
 *   DocumentIdList: [ // DocumentIdList // required
 *     "STRING_VALUE",
 *   ],
 *   DataSourceSyncJobMetricTarget: { // DataSourceSyncJobMetricTarget
 *     DataSourceId: "STRING_VALUE", // required
 *     DataSourceSyncJobId: "STRING_VALUE",
 *   },
 * };
 * const command = new BatchDeleteDocumentCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteDocumentResponse
 * //   FailedDocuments: [ // BatchDeleteDocumentResponseFailedDocuments
 * //     { // BatchDeleteDocumentResponseFailedDocument
 * //       Id: "STRING_VALUE",
 * //       ErrorCode: "InternalError" || "InvalidRequest",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteDocumentCommandInput - {@link BatchDeleteDocumentCommandInput}
 * @returns {@link BatchDeleteDocumentCommandOutput}
 * @see {@link BatchDeleteDocumentCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteDocumentCommandOutput} for command's `response` shape.
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
export class BatchDeleteDocumentCommand extends $Command
  .classBuilder<
    BatchDeleteDocumentCommandInput,
    BatchDeleteDocumentCommandOutput,
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
  .s("AWSKendraFrontendService", "BatchDeleteDocument", {})
  .n("KendraClient", "BatchDeleteDocumentCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteDocumentCommand)
  .de(de_BatchDeleteDocumentCommand)
  .build() {}
