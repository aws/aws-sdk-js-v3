// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListNotebookMetadataInput, ListNotebookMetadataOutput } from "../models/models_0";
import { ListNotebookMetadata } from "../schemas/schemas_6_Notebook";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNotebookMetadataCommand}.
 */
export interface ListNotebookMetadataCommandInput extends ListNotebookMetadataInput {}
/**
 * @public
 *
 * The output of {@link ListNotebookMetadataCommand}.
 */
export interface ListNotebookMetadataCommandOutput extends ListNotebookMetadataOutput, __MetadataBearer {}

/**
 * <p>Displays the notebook files for the specified workgroup in paginated format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListNotebookMetadataCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListNotebookMetadataCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // ListNotebookMetadataInput
 *   Filters: { // FilterDefinition
 *     Name: "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   WorkGroup: "STRING_VALUE", // required
 * };
 * const command = new ListNotebookMetadataCommand(input);
 * const response = await client.send(command);
 * // { // ListNotebookMetadataOutput
 * //   NextToken: "STRING_VALUE",
 * //   NotebookMetadataList: [ // NotebookMetadataArray
 * //     { // NotebookMetadata
 * //       NotebookId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       WorkGroup: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Type: "IPYNB",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListNotebookMetadataCommandInput - {@link ListNotebookMetadataCommandInput}
 * @returns {@link ListNotebookMetadataCommandOutput}
 * @see {@link ListNotebookMetadataCommandInput} for command's `input` shape.
 * @see {@link ListNotebookMetadataCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class ListNotebookMetadataCommand extends $Command
  .classBuilder<
    ListNotebookMetadataCommandInput,
    ListNotebookMetadataCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "ListNotebookMetadata", {})
  .n("AthenaClient", "ListNotebookMetadataCommand")
  .sc(ListNotebookMetadata)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNotebookMetadataInput;
      output: ListNotebookMetadataOutput;
    };
    sdk: {
      input: ListNotebookMetadataCommandInput;
      output: ListNotebookMetadataCommandOutput;
    };
  };
}
