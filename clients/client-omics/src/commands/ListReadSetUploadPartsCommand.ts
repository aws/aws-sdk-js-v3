// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListReadSetUploadPartsRequest, ListReadSetUploadPartsResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { ListReadSetUploadParts } from "../schemas/schemas_0";

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
 * <p>Lists all parts in a multipart read set upload for a sequence store and returns the metadata in a JSON formatted output.</p>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "ListReadSetUploadParts", {})
  .n("OmicsClient", "ListReadSetUploadPartsCommand")
  .sc(ListReadSetUploadParts)
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
