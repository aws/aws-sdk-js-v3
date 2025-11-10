// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListReferenceStoresRequest, ListReferenceStoresResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { ListReferenceStores } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReferenceStoresCommand}.
 */
export interface ListReferenceStoresCommandInput extends ListReferenceStoresRequest {}
/**
 * @public
 *
 * The output of {@link ListReferenceStoresCommand}.
 */
export interface ListReferenceStoresCommandOutput extends ListReferenceStoresResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of reference stores linked to your account and returns their metadata in JSON format.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/create-reference-store.html">Creating a reference store</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListReferenceStoresCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListReferenceStoresCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListReferenceStoresRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filter: { // ReferenceStoreFilter
 *     name: "STRING_VALUE",
 *     createdAfter: new Date("TIMESTAMP"),
 *     createdBefore: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new ListReferenceStoresCommand(input);
 * const response = await client.send(command);
 * // { // ListReferenceStoresResponse
 * //   nextToken: "STRING_VALUE",
 * //   referenceStores: [ // ReferenceStoreDetailList // required
 * //     { // ReferenceStoreDetail
 * //       arn: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       sseConfig: { // SseConfig
 * //         type: "STRING_VALUE", // required
 * //         keyArn: "STRING_VALUE",
 * //       },
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReferenceStoresCommandInput - {@link ListReferenceStoresCommandInput}
 * @returns {@link ListReferenceStoresCommandOutput}
 * @see {@link ListReferenceStoresCommandInput} for command's `input` shape.
 * @see {@link ListReferenceStoresCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
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
export class ListReferenceStoresCommand extends $Command
  .classBuilder<
    ListReferenceStoresCommandInput,
    ListReferenceStoresCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "ListReferenceStores", {})
  .n("OmicsClient", "ListReferenceStoresCommand")
  .sc(ListReferenceStores)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReferenceStoresRequest;
      output: ListReferenceStoresResponse;
    };
    sdk: {
      input: ListReferenceStoresCommandInput;
      output: ListReferenceStoresCommandOutput;
    };
  };
}
