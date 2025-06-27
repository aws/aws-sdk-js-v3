// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMultipartReadSetUploadsRequest, ListMultipartReadSetUploadsResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import {
  de_ListMultipartReadSetUploadsCommand,
  se_ListMultipartReadSetUploadsCommand,
} from "../protocols/Aws_restJson1";

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
 * <p>Lists multipart read set uploads and for in progress uploads. Once the upload is completed, a read set is created and the upload will no longer be returned in the response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListMultipartReadSetUploadsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListMultipartReadSetUploadsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "ListMultipartReadSetUploads", {})
  .n("OmicsClient", "ListMultipartReadSetUploadsCommand")
  .f(void 0, void 0)
  .ser(se_ListMultipartReadSetUploadsCommand)
  .de(de_ListMultipartReadSetUploadsCommand)
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
