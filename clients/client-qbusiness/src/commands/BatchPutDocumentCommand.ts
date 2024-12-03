// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchPutDocumentRequest, BatchPutDocumentResponse } from "../models/models_0";
import { de_BatchPutDocumentCommand, se_BatchPutDocumentCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchPutDocumentCommand}.
 */
export interface BatchPutDocumentCommandInput extends BatchPutDocumentRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutDocumentCommand}.
 */
export interface BatchPutDocumentCommandOutput extends BatchPutDocumentResponse, __MetadataBearer {}

/**
 * <p>Adds one or more documents to an Amazon Q Business index.</p>
 *          <p>You use this API to:</p>
 *          <ul>
 *             <li>
 *                <p>ingest your structured and unstructured documents and documents stored in an
 *                         Amazon S3 bucket into an Amazon Q Business index.</p>
 *             </li>
 *             <li>
 *                <p>add custom attributes to documents in an Amazon Q Business index.</p>
 *             </li>
 *             <li>
 *                <p>attach an access control list to the documents added to an Amazon Q Business
 *                     index.</p>
 *             </li>
 *          </ul>
 *          <p>You can see the progress of the deletion, and any error messages related to the
 *             process, by using CloudWatch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, BatchPutDocumentCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, BatchPutDocumentCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // BatchPutDocumentRequest
 *   applicationId: "STRING_VALUE", // required
 *   indexId: "STRING_VALUE", // required
 *   documents: [ // Documents // required
 *     { // Document
 *       id: "STRING_VALUE", // required
 *       attributes: [ // DocumentAttributes
 *         { // DocumentAttribute
 *           name: "STRING_VALUE", // required
 *           value: { // DocumentAttributeValue Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             stringListValue: [ // DocumentAttributeStringListValue
 *               "STRING_VALUE",
 *             ],
 *             longValue: Number("long"),
 *             dateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *       ],
 *       content: { // DocumentContent Union: only one key present
 *         blob: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *         s3: { // S3
 *           bucket: "STRING_VALUE", // required
 *           key: "STRING_VALUE", // required
 *         },
 *       },
 *       contentType: "PDF" || "HTML" || "MS_WORD" || "PLAIN_TEXT" || "PPT" || "RTF" || "XML" || "XSLT" || "MS_EXCEL" || "CSV" || "JSON" || "MD",
 *       title: "STRING_VALUE",
 *       accessConfiguration: { // AccessConfiguration
 *         accessControls: [ // AccessControls // required
 *           { // AccessControl
 *             principals: [ // Principals // required
 *               { // Principal Union: only one key present
 *                 user: { // PrincipalUser
 *                   id: "STRING_VALUE",
 *                   access: "ALLOW" || "DENY", // required
 *                   membershipType: "INDEX" || "DATASOURCE",
 *                 },
 *                 group: { // PrincipalGroup
 *                   name: "STRING_VALUE",
 *                   access: "ALLOW" || "DENY", // required
 *                   membershipType: "INDEX" || "DATASOURCE",
 *                 },
 *               },
 *             ],
 *             memberRelation: "AND" || "OR",
 *           },
 *         ],
 *         memberRelation: "AND" || "OR",
 *       },
 *       documentEnrichmentConfiguration: { // DocumentEnrichmentConfiguration
 *         inlineConfigurations: [ // InlineDocumentEnrichmentConfigurations
 *           { // InlineDocumentEnrichmentConfiguration
 *             condition: { // DocumentAttributeCondition
 *               key: "STRING_VALUE", // required
 *               operator: "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "EXISTS" || "NOT_EXISTS" || "BEGINS_WITH", // required
 *               value: {//  Union: only one key present
 *                 stringValue: "STRING_VALUE",
 *                 stringListValue: [
 *                   "STRING_VALUE",
 *                 ],
 *                 longValue: Number("long"),
 *                 dateValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *             target: { // DocumentAttributeTarget
 *               key: "STRING_VALUE", // required
 *               value: {//  Union: only one key present
 *                 stringValue: "STRING_VALUE",
 *                 stringListValue: [
 *                   "STRING_VALUE",
 *                 ],
 *                 longValue: Number("long"),
 *                 dateValue: new Date("TIMESTAMP"),
 *               },
 *               attributeValueOperator: "DELETE",
 *             },
 *             documentContentOperator: "DELETE",
 *           },
 *         ],
 *         preExtractionHookConfiguration: { // HookConfiguration
 *           invocationCondition: {
 *             key: "STRING_VALUE", // required
 *             operator: "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "EXISTS" || "NOT_EXISTS" || "BEGINS_WITH", // required
 *             value: "<DocumentAttributeValue>",
 *           },
 *           lambdaArn: "STRING_VALUE",
 *           s3BucketName: "STRING_VALUE",
 *           roleArn: "STRING_VALUE",
 *         },
 *         postExtractionHookConfiguration: {
 *           invocationCondition: {
 *             key: "STRING_VALUE", // required
 *             operator: "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "EXISTS" || "NOT_EXISTS" || "BEGINS_WITH", // required
 *             value: "<DocumentAttributeValue>",
 *           },
 *           lambdaArn: "STRING_VALUE",
 *           s3BucketName: "STRING_VALUE",
 *           roleArn: "STRING_VALUE",
 *         },
 *       },
 *       mediaExtractionConfiguration: { // MediaExtractionConfiguration
 *         imageExtractionConfiguration: { // ImageExtractionConfiguration
 *           imageExtractionStatus: "ENABLED" || "DISABLED", // required
 *         },
 *       },
 *     },
 *   ],
 *   roleArn: "STRING_VALUE",
 *   dataSourceSyncId: "STRING_VALUE",
 * };
 * const command = new BatchPutDocumentCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutDocumentResponse
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
 * @param BatchPutDocumentCommandInput - {@link BatchPutDocumentCommandInput}
 * @returns {@link BatchPutDocumentCommandOutput}
 * @see {@link BatchPutDocumentCommandInput} for command's `input` shape.
 * @see {@link BatchPutDocumentCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have
 *             provided the correct resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Q Business service. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 * @public
 */
export class BatchPutDocumentCommand extends $Command
  .classBuilder<
    BatchPutDocumentCommandInput,
    BatchPutDocumentCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "BatchPutDocument", {})
  .n("QBusinessClient", "BatchPutDocumentCommand")
  .f(void 0, void 0)
  .ser(se_BatchPutDocumentCommand)
  .de(de_BatchPutDocumentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchPutDocumentRequest;
      output: BatchPutDocumentResponse;
    };
    sdk: {
      input: BatchPutDocumentCommandInput;
      output: BatchPutDocumentCommandOutput;
    };
  };
}
