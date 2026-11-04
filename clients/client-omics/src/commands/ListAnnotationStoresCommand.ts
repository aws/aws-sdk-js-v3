// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAnnotationStoresRequest, ListAnnotationStoresResponse } from "../models/models_0";
import { ListAnnotationStores$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Important:** Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see [Amazon Web Services HealthOmics variant store and annotation store availability change](https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html).
 *
 * Retrieves a list of annotation stores.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class ListAnnotationStoresCommand extends command<ListAnnotationStoresCommandInput, ListAnnotationStoresCommandOutput>(
  _ep0,
  _mw0,
  "ListAnnotationStores",
  ListAnnotationStores$
) {
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
