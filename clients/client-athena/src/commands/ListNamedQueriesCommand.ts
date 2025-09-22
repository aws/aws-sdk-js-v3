// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListNamedQueriesInput, ListNamedQueriesOutput } from "../models/models_0";
import { ListNamedQueries } from "../schemas/schemas_10_Named";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNamedQueriesCommand}.
 */
export interface ListNamedQueriesCommandInput extends ListNamedQueriesInput {}
/**
 * @public
 *
 * The output of {@link ListNamedQueriesCommand}.
 */
export interface ListNamedQueriesCommandOutput extends ListNamedQueriesOutput, __MetadataBearer {}

/**
 * <p>Provides a list of available query IDs only for queries saved in the specified
 *             workgroup. Requires that you have access to the specified workgroup. If a workgroup is
 *             not specified, lists the saved queries for the primary workgroup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListNamedQueriesCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListNamedQueriesCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // ListNamedQueriesInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   WorkGroup: "STRING_VALUE",
 * };
 * const command = new ListNamedQueriesCommand(input);
 * const response = await client.send(command);
 * // { // ListNamedQueriesOutput
 * //   NamedQueryIds: [ // NamedQueryIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNamedQueriesCommandInput - {@link ListNamedQueriesCommandInput}
 * @returns {@link ListNamedQueriesCommandOutput}
 * @see {@link ListNamedQueriesCommandInput} for command's `input` shape.
 * @see {@link ListNamedQueriesCommandOutput} for command's `response` shape.
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
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class ListNamedQueriesCommand extends $Command
  .classBuilder<
    ListNamedQueriesCommandInput,
    ListNamedQueriesCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "ListNamedQueries", {})
  .n("AthenaClient", "ListNamedQueriesCommand")
  .sc(ListNamedQueries)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNamedQueriesInput;
      output: ListNamedQueriesOutput;
    };
    sdk: {
      input: ListNamedQueriesCommandInput;
      output: ListNamedQueriesCommandOutput;
    };
  };
}
