// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListReadSetUploadPartsRequest, ListReadSetUploadPartsResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_ListReadSetUploadPartsCommand, se_ListReadSetUploadPartsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This operation will list all parts in a requested multipart upload for a sequence store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListReadSetUploadPartsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListReadSetUploadPartsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link NotSupportedOperationException} (client fault)
 *  <p>
 *       The operation is not supported by Amazon Omics, or the API does not exist.
 *     </p>
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
 * @public
 */
export class ListReadSetUploadPartsCommand extends $Command
  .classBuilder<
    ListReadSetUploadPartsCommandInput,
    ListReadSetUploadPartsCommandOutput,
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
  .s("Omics", "ListReadSetUploadParts", {})
  .n("OmicsClient", "ListReadSetUploadPartsCommand")
  .f(void 0, void 0)
  .ser(se_ListReadSetUploadPartsCommand)
  .de(de_ListReadSetUploadPartsCommand)
  .build() {
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
