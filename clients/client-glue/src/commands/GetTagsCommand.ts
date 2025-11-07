// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTagsRequest, GetTagsResponse } from "../models/models_2";
import { GetTags } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTagsCommand}.
 */
export interface GetTagsCommandInput extends GetTagsRequest {}
/**
 * @public
 *
 * The output of {@link GetTagsCommand}.
 */
export interface GetTagsCommandOutput extends GetTagsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of tags associated with a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTagsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTagsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetTagsRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetTagsCommand(input);
 * const response = await client.send(command);
 * // { // GetTagsResponse
 * //   Tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTagsCommandInput - {@link GetTagsCommandInput}
 * @returns {@link GetTagsCommandOutput}
 * @see {@link GetTagsCommandInput} for command's `input` shape.
 * @see {@link GetTagsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
export class GetTagsCommand extends $Command
  .classBuilder<
    GetTagsCommandInput,
    GetTagsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetTags", {})
  .n("GlueClient", "GetTagsCommand")
  .sc(GetTags)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTagsRequest;
      output: GetTagsResponse;
    };
    sdk: {
      input: GetTagsCommandInput;
      output: GetTagsCommandOutput;
    };
  };
}
