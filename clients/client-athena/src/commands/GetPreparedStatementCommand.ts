// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetPreparedStatementInput, GetPreparedStatementOutput } from "../models/models_0";
import { de_GetPreparedStatementCommand, se_GetPreparedStatementCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPreparedStatementCommand}.
 */
export interface GetPreparedStatementCommandInput extends GetPreparedStatementInput {}
/**
 * @public
 *
 * The output of {@link GetPreparedStatementCommand}.
 */
export interface GetPreparedStatementCommandOutput extends GetPreparedStatementOutput, __MetadataBearer {}

/**
 * <p>Retrieves the prepared statement with the specified name from the specified
 *             workgroup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetPreparedStatementCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetPreparedStatementCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // GetPreparedStatementInput
 *   StatementName: "STRING_VALUE", // required
 *   WorkGroup: "STRING_VALUE", // required
 * };
 * const command = new GetPreparedStatementCommand(input);
 * const response = await client.send(command);
 * // { // GetPreparedStatementOutput
 * //   PreparedStatement: { // PreparedStatement
 * //     StatementName: "STRING_VALUE",
 * //     QueryStatement: "STRING_VALUE",
 * //     WorkGroupName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPreparedStatementCommandInput - {@link GetPreparedStatementCommandInput}
 * @returns {@link GetPreparedStatementCommandOutput}
 * @see {@link GetPreparedStatementCommandInput} for command's `input` shape.
 * @see {@link GetPreparedStatementCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class GetPreparedStatementCommand extends $Command
  .classBuilder<
    GetPreparedStatementCommandInput,
    GetPreparedStatementCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "GetPreparedStatement", {})
  .n("AthenaClient", "GetPreparedStatementCommand")
  .f(void 0, void 0)
  .ser(se_GetPreparedStatementCommand)
  .de(de_GetPreparedStatementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPreparedStatementInput;
      output: GetPreparedStatementOutput;
    };
    sdk: {
      input: GetPreparedStatementCommandInput;
      output: GetPreparedStatementCommandOutput;
    };
  };
}
