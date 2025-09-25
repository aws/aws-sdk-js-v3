// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SelectResourceConfigRequest, SelectResourceConfigResponse } from "../models/models_1";
import { SelectResourceConfig } from "../schemas/schemas_29_Config";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SelectResourceConfigCommand}.
 */
export interface SelectResourceConfigCommandInput extends SelectResourceConfigRequest {}
/**
 * @public
 *
 * The output of {@link SelectResourceConfigCommand}.
 */
export interface SelectResourceConfigCommandOutput extends SelectResourceConfigResponse, __MetadataBearer {}

/**
 * <p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p>
 *          <p>For more information about query components, see the
 * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html">
 *                <b>Query Components</b>
 *             </a> section in the <i>Config Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, SelectResourceConfigCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, SelectResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // SelectResourceConfigRequest
 *   Expression: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SelectResourceConfigCommand(input);
 * const response = await client.send(command);
 * // { // SelectResourceConfigResponse
 * //   Results: [ // Results
 * //     "STRING_VALUE",
 * //   ],
 * //   QueryInfo: { // QueryInfo
 * //     SelectFields: [ // FieldInfoList
 * //       { // FieldInfo
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SelectResourceConfigCommandInput - {@link SelectResourceConfigCommandInput}
 * @returns {@link SelectResourceConfigCommandOutput}
 * @see {@link SelectResourceConfigCommandInput} for command's `input` shape.
 * @see {@link SelectResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidExpressionException} (client fault)
 *  <p>The syntax of the query is incorrect.</p>
 *
 * @throws {@link InvalidLimitException} (client fault)
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class SelectResourceConfigCommand extends $Command
  .classBuilder<
    SelectResourceConfigCommandInput,
    SelectResourceConfigCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "SelectResourceConfig", {})
  .n("ConfigServiceClient", "SelectResourceConfigCommand")
  .sc(SelectResourceConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SelectResourceConfigRequest;
      output: SelectResourceConfigResponse;
    };
    sdk: {
      input: SelectResourceConfigCommandInput;
      output: SelectResourceConfigCommandOutput;
    };
  };
}
