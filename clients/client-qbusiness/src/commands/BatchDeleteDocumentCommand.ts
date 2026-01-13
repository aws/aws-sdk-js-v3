// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchDeleteDocumentRequest, BatchDeleteDocumentResponse } from "../models/models_0";
import type { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { BatchDeleteDocument$ } from "../schemas/schemas_0";

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
 * <p>Asynchronously deletes one or more documents added using the <code>BatchPutDocument</code> API from an Amazon Q Business index.</p> <p>You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, BatchDeleteDocumentCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, BatchDeleteDocumentCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // BatchDeleteDocumentRequest
 *   applicationId: "STRING_VALUE", // required
 *   indexId: "STRING_VALUE", // required
 *   documents: [ // DeleteDocuments // required
 *     { // DeleteDocument
 *       documentId: "STRING_VALUE", // required
 *     },
 *   ],
 *   dataSourceSyncId: "STRING_VALUE",
 * };
 * const command = new BatchDeleteDocumentCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteDocumentResponse
 * //   failedDocuments: [ // FailedDocuments
 * //     { // FailedDocument
 * //       id: "STRING_VALUE",
 * //       error: { // ErrorDetail
 * //         errorMessage: "STRING_VALUE",
 * //         errorCode: "InternalError" || "InvalidRequest" || "ResourceInactive" || "ResourceNotFound",
 * //       },
 * //       dataSourceId: "STRING_VALUE",
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
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class BatchDeleteDocumentCommand extends $Command
  .classBuilder<
    BatchDeleteDocumentCommandInput,
    BatchDeleteDocumentCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "BatchDeleteDocument", {})
  .n("QBusinessClient", "BatchDeleteDocumentCommand")
  .sc(BatchDeleteDocument$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteDocumentRequest;
      output: BatchDeleteDocumentResponse;
    };
    sdk: {
      input: BatchDeleteDocumentCommandInput;
      output: BatchDeleteDocumentCommandOutput;
    };
  };
}
