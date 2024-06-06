// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePreparedStatementInput, DeletePreparedStatementOutput } from "../models/models_0";
import { de_DeletePreparedStatementCommand, se_DeletePreparedStatementCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePreparedStatementCommand}.
 */
export interface DeletePreparedStatementCommandInput extends DeletePreparedStatementInput {}
/**
 * @public
 *
 * The output of {@link DeletePreparedStatementCommand}.
 */
export interface DeletePreparedStatementCommandOutput extends DeletePreparedStatementOutput, __MetadataBearer {}

/**
 * <p>Deletes the prepared statement with the specified name from the specified
 *             workgroup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, DeletePreparedStatementCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, DeletePreparedStatementCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // DeletePreparedStatementInput
 *   StatementName: "STRING_VALUE", // required
 *   WorkGroup: "STRING_VALUE", // required
 * };
 * const command = new DeletePreparedStatementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePreparedStatementCommandInput - {@link DeletePreparedStatementCommandInput}
 * @returns {@link DeletePreparedStatementCommandOutput}
 * @see {@link DeletePreparedStatementCommandInput} for command's `input` shape.
 * @see {@link DeletePreparedStatementCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeletePreparedStatementCommand extends $Command
  .classBuilder<
    DeletePreparedStatementCommandInput,
    DeletePreparedStatementCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "DeletePreparedStatement", {})
  .n("AthenaClient", "DeletePreparedStatementCommand")
  .f(void 0, void 0)
  .ser(se_DeletePreparedStatementCommand)
  .de(de_DeletePreparedStatementCommand)
  .build() {}
