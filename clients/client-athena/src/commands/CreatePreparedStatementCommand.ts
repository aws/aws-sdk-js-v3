// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePreparedStatementInput, CreatePreparedStatementOutput } from "../models/models_0";
import { CreatePreparedStatement } from "../schemas/schemas_4_Query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePreparedStatementCommand}.
 */
export interface CreatePreparedStatementCommandInput extends CreatePreparedStatementInput {}
/**
 * @public
 *
 * The output of {@link CreatePreparedStatementCommand}.
 */
export interface CreatePreparedStatementCommandOutput extends CreatePreparedStatementOutput, __MetadataBearer {}

/**
 * <p>Creates a prepared statement for use with SQL queries in Athena.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreatePreparedStatementCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreatePreparedStatementCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // CreatePreparedStatementInput
 *   StatementName: "STRING_VALUE", // required
 *   WorkGroup: "STRING_VALUE", // required
 *   QueryStatement: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new CreatePreparedStatementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreatePreparedStatementCommandInput - {@link CreatePreparedStatementCommandInput}
 * @returns {@link CreatePreparedStatementCommandOutput}
 * @see {@link CreatePreparedStatementCommandInput} for command's `input` shape.
 * @see {@link CreatePreparedStatementCommandOutput} for command's `response` shape.
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
export class CreatePreparedStatementCommand extends $Command
  .classBuilder<
    CreatePreparedStatementCommandInput,
    CreatePreparedStatementCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "CreatePreparedStatement", {})
  .n("AthenaClient", "CreatePreparedStatementCommand")
  .sc(CreatePreparedStatement)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePreparedStatementInput;
      output: {};
    };
    sdk: {
      input: CreatePreparedStatementCommandInput;
      output: CreatePreparedStatementCommandOutput;
    };
  };
}
