// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePreparedStatementInput, UpdatePreparedStatementOutput } from "../models/models_0";
import { UpdatePreparedStatement } from "../schemas/schemas_4_Query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePreparedStatementCommand}.
 */
export interface UpdatePreparedStatementCommandInput extends UpdatePreparedStatementInput {}
/**
 * @public
 *
 * The output of {@link UpdatePreparedStatementCommand}.
 */
export interface UpdatePreparedStatementCommandOutput extends UpdatePreparedStatementOutput, __MetadataBearer {}

/**
 * <p>Updates a prepared statement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdatePreparedStatementCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdatePreparedStatementCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // UpdatePreparedStatementInput
 *   StatementName: "STRING_VALUE", // required
 *   WorkGroup: "STRING_VALUE", // required
 *   QueryStatement: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdatePreparedStatementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePreparedStatementCommandInput - {@link UpdatePreparedStatementCommandInput}
 * @returns {@link UpdatePreparedStatementCommandOutput}
 * @see {@link UpdatePreparedStatementCommandInput} for command's `input` shape.
 * @see {@link UpdatePreparedStatementCommandOutput} for command's `response` shape.
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
export class UpdatePreparedStatementCommand extends $Command
  .classBuilder<
    UpdatePreparedStatementCommandInput,
    UpdatePreparedStatementCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "UpdatePreparedStatement", {})
  .n("AthenaClient", "UpdatePreparedStatementCommand")
  .sc(UpdatePreparedStatement)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePreparedStatementInput;
      output: {};
    };
    sdk: {
      input: UpdatePreparedStatementCommandInput;
      output: UpdatePreparedStatementCommandOutput;
    };
  };
}
