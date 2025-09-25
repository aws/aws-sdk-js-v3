// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetNamedQueryInput, GetNamedQueryOutput } from "../models/models_0";
import { GetNamedQuery } from "../schemas/schemas_4_Query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNamedQueryCommand}.
 */
export interface GetNamedQueryCommandInput extends GetNamedQueryInput {}
/**
 * @public
 *
 * The output of {@link GetNamedQueryCommand}.
 */
export interface GetNamedQueryCommandOutput extends GetNamedQueryOutput, __MetadataBearer {}

/**
 * <p>Returns information about a single query. Requires that you have access to the
 *             workgroup in which the query was saved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetNamedQueryCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetNamedQueryCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // GetNamedQueryInput
 *   NamedQueryId: "STRING_VALUE", // required
 * };
 * const command = new GetNamedQueryCommand(input);
 * const response = await client.send(command);
 * // { // GetNamedQueryOutput
 * //   NamedQuery: { // NamedQuery
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Database: "STRING_VALUE", // required
 * //     QueryString: "STRING_VALUE", // required
 * //     NamedQueryId: "STRING_VALUE",
 * //     WorkGroup: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetNamedQueryCommandInput - {@link GetNamedQueryCommandInput}
 * @returns {@link GetNamedQueryCommandOutput}
 * @see {@link GetNamedQueryCommandInput} for command's `input` shape.
 * @see {@link GetNamedQueryCommandOutput} for command's `response` shape.
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
export class GetNamedQueryCommand extends $Command
  .classBuilder<
    GetNamedQueryCommandInput,
    GetNamedQueryCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "GetNamedQuery", {})
  .n("AthenaClient", "GetNamedQueryCommand")
  .sc(GetNamedQuery)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNamedQueryInput;
      output: GetNamedQueryOutput;
    };
    sdk: {
      input: GetNamedQueryCommandInput;
      output: GetNamedQueryCommandOutput;
    };
  };
}
