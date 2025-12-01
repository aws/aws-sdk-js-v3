// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAnnotationStoresRequest, ListAnnotationStoresResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { ListAnnotationStores } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAnnotationStoresCommand}.
 */
export interface ListAnnotationStoresCommandInput extends ListAnnotationStoresRequest {}
/**
 * @public
 *
 * The output of {@link ListAnnotationStoresCommand}.
 */
export interface ListAnnotationStoresCommandOutput extends ListAnnotationStoresResponse, __MetadataBearer {}

/**
 * <important> <p>Amazon Web Services HealthOmics variant stores and annotation stores will no longer be open to new customers starting November 7, 2025. If you would like to use variant stores or annotation stores, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html"> Amazon Web Services HealthOmics variant store and annotation store availability change</a>.</p> </important> <p>Retrieves a list of annotation stores.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListAnnotationStoresCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListAnnotationStoresCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListAnnotationStoresRequest
 *   ids: [ // IdList
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filter: { // ListAnnotationStoresFilter
 *     status: "STRING_VALUE",
 *   },
 * };
 * const command = new ListAnnotationStoresCommand(input);
 * const response = await client.send(command);
 * // { // ListAnnotationStoresResponse
 * //   annotationStores: [ // AnnotationStoreItems
 * //     { // AnnotationStoreItem
 * //       id: "STRING_VALUE", // required
 * //       reference: { // ReferenceItem Union: only one key present
 * //         referenceArn: "STRING_VALUE",
 * //       },
 * //       status: "STRING_VALUE", // required
 * //       storeArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       storeFormat: "STRING_VALUE", // required
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
 * @param ListAnnotationStoresCommandInput - {@link ListAnnotationStoresCommandInput}
 * @returns {@link ListAnnotationStoresCommandOutput}
 * @see {@link ListAnnotationStoresCommandInput} for command's `input` shape.
 * @see {@link ListAnnotationStoresCommandOutput} for command's `response` shape.
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
export class ListAnnotationStoresCommand extends $Command
  .classBuilder<
    ListAnnotationStoresCommandInput,
    ListAnnotationStoresCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "ListAnnotationStores", {})
  .n("OmicsClient", "ListAnnotationStoresCommand")
  .sc(ListAnnotationStores)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnnotationStoresRequest;
      output: ListAnnotationStoresResponse;
    };
    sdk: {
      input: ListAnnotationStoresCommandInput;
      output: ListAnnotationStoresCommandOutput;
    };
  };
}
