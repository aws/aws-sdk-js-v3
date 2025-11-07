// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListCustomEntityTypesRequest, ListCustomEntityTypesResponse } from "../models/models_2";
import { ListCustomEntityTypes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCustomEntityTypesCommand}.
 */
export interface ListCustomEntityTypesCommandInput extends ListCustomEntityTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomEntityTypesCommand}.
 */
export interface ListCustomEntityTypesCommandOutput extends ListCustomEntityTypesResponse, __MetadataBearer {}

/**
 * <p>Lists all the custom patterns that have been created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListCustomEntityTypesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListCustomEntityTypesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListCustomEntityTypesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ListCustomEntityTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomEntityTypesResponse
 * //   CustomEntityTypes: [ // CustomEntityTypes
 * //     { // CustomEntityType
 * //       Name: "STRING_VALUE", // required
 * //       RegexString: "STRING_VALUE", // required
 * //       ContextWords: [ // ContextWords
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomEntityTypesCommandInput - {@link ListCustomEntityTypesCommandInput}
 * @returns {@link ListCustomEntityTypesCommandOutput}
 * @see {@link ListCustomEntityTypesCommandInput} for command's `input` shape.
 * @see {@link ListCustomEntityTypesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class ListCustomEntityTypesCommand extends $Command
  .classBuilder<
    ListCustomEntityTypesCommandInput,
    ListCustomEntityTypesCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "ListCustomEntityTypes", {})
  .n("GlueClient", "ListCustomEntityTypesCommand")
  .sc(ListCustomEntityTypes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomEntityTypesRequest;
      output: ListCustomEntityTypesResponse;
    };
    sdk: {
      input: ListCustomEntityTypesCommandInput;
      output: ListCustomEntityTypesCommandOutput;
    };
  };
}
