// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAlertManagerDefinitionRequest } from "../models/models_0";
import {
  de_DeleteAlertManagerDefinitionCommand,
  se_DeleteAlertManagerDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAlertManagerDefinitionCommand}.
 */
export interface DeleteAlertManagerDefinitionCommandInput extends DeleteAlertManagerDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAlertManagerDefinitionCommand}.
 */
export interface DeleteAlertManagerDefinitionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the alert manager definition from a workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DeleteAlertManagerDefinitionCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DeleteAlertManagerDefinitionCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const input = { // DeleteAlertManagerDefinitionRequest
 *   workspaceId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteAlertManagerDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAlertManagerDefinitionCommandInput - {@link DeleteAlertManagerDefinitionCommandInput}
 * @returns {@link DeleteAlertManagerDefinitionCommandOutput}
 * @see {@link DeleteAlertManagerDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteAlertManagerDefinitionCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request would cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resources that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *             service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 * @public
 */
export class DeleteAlertManagerDefinitionCommand extends $Command
  .classBuilder<
    DeleteAlertManagerDefinitionCommandInput,
    DeleteAlertManagerDefinitionCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPrometheusService", "DeleteAlertManagerDefinition", {})
  .n("AmpClient", "DeleteAlertManagerDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAlertManagerDefinitionCommand)
  .de(de_DeleteAlertManagerDefinitionCommand)
  .build() {}
