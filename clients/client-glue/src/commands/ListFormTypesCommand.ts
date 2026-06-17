// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { ListFormTypesRequest, ListFormTypesResponse } from "../models/models_2";
import { ListFormTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFormTypesCommand}.
 */
export interface ListFormTypesCommandInput extends ListFormTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListFormTypesCommand}.
 */
export interface ListFormTypesCommandOutput extends ListFormTypesResponse, __MetadataBearer {}

/**
 * <p>Lists the form types defined in Glue Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListFormTypesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListFormTypesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListFormTypesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFormTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListFormTypesResponse
 * //   Items: [ // FormTypeItemList // required
 * //     { // FormTypeItem
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFormTypesCommandInput - {@link ListFormTypesCommandInput}
 * @returns {@link ListFormTypesCommandOutput}
 * @see {@link ListFormTypesCommandInput} for command's `input` shape.
 * @see {@link ListFormTypesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling threshhold was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class ListFormTypesCommand extends $Command
  .classBuilder<
    ListFormTypesCommandInput,
    ListFormTypesCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "ListFormTypes", {})
  .n("GlueClient", "ListFormTypesCommand")
  .sc(ListFormTypes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFormTypesRequest;
      output: ListFormTypesResponse;
    };
    sdk: {
      input: ListFormTypesCommandInput;
      output: ListFormTypesCommandOutput;
    };
  };
}
