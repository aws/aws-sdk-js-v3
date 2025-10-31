// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListVariantStoresRequest, ListVariantStoresResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_ListVariantStoresCommand, se_ListVariantStoresCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVariantStoresCommand}.
 */
export interface ListVariantStoresCommandInput extends ListVariantStoresRequest {}
/**
 * @public
 *
 * The output of {@link ListVariantStoresCommand}.
 */
export interface ListVariantStoresCommandOutput extends ListVariantStoresResponse, __MetadataBearer {}

/**
 * <important> <p>Amazon Web Services HealthOmics variant stores and annotation stores will no longer be open to new customers starting November 7, 2025. If you would like to use variant stores or annotation stores, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html"> Amazon Web Services HealthOmics variant store and annotation store availability change</a>.</p> </important> <p>Retrieves a list of variant stores.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListVariantStoresCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListVariantStoresCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListVariantStoresRequest
 *   maxResults: Number("int"),
 *   ids: [ // IdList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   filter: { // ListVariantStoresFilter
 *     status: "STRING_VALUE",
 *   },
 * };
 * const command = new ListVariantStoresCommand(input);
 * const response = await client.send(command);
 * // { // ListVariantStoresResponse
 * //   variantStores: [ // VariantStoreItems
 * //     { // VariantStoreItem
 * //       id: "STRING_VALUE", // required
 * //       reference: { // ReferenceItem Union: only one key present
 * //         referenceArn: "STRING_VALUE",
 * //       },
 * //       status: "STRING_VALUE", // required
 * //       storeArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       sseConfig: { // SseConfig
 * //         type: "STRING_VALUE", // required
 * //         keyArn: "STRING_VALUE",
 * //       },
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       statusMessage: "STRING_VALUE", // required
 * //       storeSizeBytes: Number("long"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVariantStoresCommandInput - {@link ListVariantStoresCommandInput}
 * @returns {@link ListVariantStoresCommandOutput}
 * @see {@link ListVariantStoresCommandInput} for command's `input` shape.
 * @see {@link ListVariantStoresCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
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
export class ListVariantStoresCommand extends $Command
  .classBuilder<
    ListVariantStoresCommandInput,
    ListVariantStoresCommandOutput,
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
  .s("Omics", "ListVariantStores", {})
  .n("OmicsClient", "ListVariantStoresCommand")
  .f(void 0, void 0)
  .ser(se_ListVariantStoresCommand)
  .de(de_ListVariantStoresCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVariantStoresRequest;
      output: ListVariantStoresResponse;
    };
    sdk: {
      input: ListVariantStoresCommandInput;
      output: ListVariantStoresCommandOutput;
    };
  };
}
