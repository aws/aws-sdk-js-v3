// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAppMonitorRequest, DeleteAppMonitorResponse } from "../models/models_0";
import { de_DeleteAppMonitorCommand, se_DeleteAppMonitorCommand } from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppMonitorCommand}.
 */
export interface DeleteAppMonitorCommandInput extends DeleteAppMonitorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppMonitorCommand}.
 */
export interface DeleteAppMonitorCommandOutput extends DeleteAppMonitorResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing app monitor. This immediately stops the collection of data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, DeleteAppMonitorCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, DeleteAppMonitorCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const input = { // DeleteAppMonitorRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppMonitorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppMonitorCommandInput - {@link DeleteAppMonitorCommandInput}
 * @returns {@link DeleteAppMonitorCommandOutput}
 * @see {@link DeleteAppMonitorCommandInput} for command's `input` shape.
 * @see {@link DeleteAppMonitorCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the arguments for the request is not valid.</p>
 *
 * @throws {@link RUMServiceException}
 * <p>Base exception class for all service exceptions from RUM service.</p>
 *
 * @public
 */
export class DeleteAppMonitorCommand extends $Command
  .classBuilder<
    DeleteAppMonitorCommandInput,
    DeleteAppMonitorCommandOutput,
    RUMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RUMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RUM", "DeleteAppMonitor", {})
  .n("RUMClient", "DeleteAppMonitorCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAppMonitorCommand)
  .de(de_DeleteAppMonitorCommand)
  .build() {}
