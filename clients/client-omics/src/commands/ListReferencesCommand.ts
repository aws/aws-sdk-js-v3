// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListReferencesRequest, ListReferencesResponse } from "../models/models_0";
import { ListReferences$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListReferencesCommand}.
 */
export interface ListReferencesCommandInput extends ListReferencesRequest {}
/**
 * @public
 *
 * The output of {@link ListReferencesCommand}.
 */
export interface ListReferencesCommandOutput extends ListReferencesResponse, __MetadataBearer {}

/**
 * Retrieves the metadata of one or more reference genomes in a reference store.
 *
 * For more information, see [Creating a reference store](https://docs.aws.amazon.com/omics/latest/dev/create-reference-store.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListReferencesCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListReferencesCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListReferencesRequest
 *   referenceStoreId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filter: { // ReferenceFilter
 *     name: "STRING_VALUE",
 *     md5: "STRING_VALUE",
 *     createdAfter: new Date("TIMESTAMP"),
 *     createdBefore: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new ListReferencesCommand(input);
 * const response = await client.send(command);
 * // { // ListReferencesResponse
 * //   nextToken: "STRING_VALUE",
 * //   references: [ // ReferenceList // required
 * //     { // ReferenceListItem
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       referenceStoreId: "STRING_VALUE", // required
 * //       md5: "STRING_VALUE", // required
 * //       status: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReferencesCommandInput - {@link ListReferencesCommandInput}
 * @returns {@link ListReferencesCommandOutput}
 * @see {@link ListReferencesCommandInput} for command's `input` shape.
 * @see {@link ListReferencesCommandOutput} for command's `response` shape.
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
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
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
export class ListReferencesCommand extends command<ListReferencesCommandInput, ListReferencesCommandOutput>(
  _ep0,
  _mw0,
  "ListReferences",
  ListReferences$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReferencesRequest;
      output: ListReferencesResponse;
    };
    sdk: {
      input: ListReferencesCommandInput;
      output: ListReferencesCommandOutput;
    };
  };
}
