// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListReferencesRequest, ListReferencesResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { ListReferences } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves the metadata of one or more reference genomes in a reference store.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/create-reference-store.html">Creating a reference store</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
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
export class ListReferencesCommand extends $Command
  .classBuilder<
    ListReferencesCommandInput,
    ListReferencesCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "ListReferences", {})
  .n("OmicsClient", "ListReferencesCommand")
  .sc(ListReferences)
  .build() {
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
