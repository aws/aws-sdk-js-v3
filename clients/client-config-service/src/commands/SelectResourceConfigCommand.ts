// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SelectResourceConfigRequest, SelectResourceConfigResponse } from "../models/models_0";
import { SelectResourceConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Accepts a structured query language (SQL) `SELECT` command, performs the corresponding search, and returns resource configurations matching the properties.
 *
 * For more information about query components, see the [**Query Components**](https://docs.aws.amazon.com/config/latest/developerguide/query-components.html) section in the *Config Developer Guide*.
 *
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
 *
 * The syntax of the query is incorrect.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *
 * The specified limit is outside the allowable range.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The specified next token is not valid. Specify the `nextToken` string that was returned in the previous response to get the next page of results.
 *
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class SelectResourceConfigCommand extends command<SelectResourceConfigCommandInput, SelectResourceConfigCommandOutput>(
  _ep0,
  _mw0,
  "SelectResourceConfig",
  SelectResourceConfig$
) {
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
