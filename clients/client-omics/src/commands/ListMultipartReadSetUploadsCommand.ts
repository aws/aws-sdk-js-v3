// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMultipartReadSetUploadsRequest, ListMultipartReadSetUploadsResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { ListMultipartReadSetUploads } from "../schemas/schemas_4_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListMultipartReadSetUploadsCommandOutput
  extends ListMultipartReadSetUploadsResponse,
    __MetadataBearer {}

/**
 * <p>Lists in-progress multipart read set uploads for a sequence store and returns it in a JSON formatted output. Multipart read set uploads are initiated by the <code>CreateMultipartReadSetUploads</code> API operation. This operation returns a response with no body when the upload is complete. </p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link NotSupportedOperationException} (client fault)
 *  <p> The operation is not supported by Amazon Omics, or the API does not exist. </p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class ListMultipartReadSetUploadsCommand extends $Command
  .classBuilder<
    ListMultipartReadSetUploadsCommandInput,
    ListMultipartReadSetUploadsCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "ListMultipartReadSetUploads", {})
  .n("OmicsClient", "ListMultipartReadSetUploadsCommand")
  .sc(ListMultipartReadSetUploads)
  .build() {
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
