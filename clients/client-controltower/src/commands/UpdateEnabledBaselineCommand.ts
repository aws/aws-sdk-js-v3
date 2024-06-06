// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEnabledBaselineInput, UpdateEnabledBaselineOutput } from "../models/models_0";
import { de_UpdateEnabledBaselineCommand, se_UpdateEnabledBaselineCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEnabledBaselineCommand}.
 */
export interface UpdateEnabledBaselineCommandInput extends UpdateEnabledBaselineInput {}
/**
 * @public
 *
 * The output of {@link UpdateEnabledBaselineCommand}.
 */
export interface UpdateEnabledBaselineCommandOutput extends UpdateEnabledBaselineOutput, __MetadataBearer {}

/**
 * <p>Updates an <code>EnabledBaseline</code> resource's applied parameters or version. For usage examples, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html">
 *                <i>the Amazon Web Services Control Tower User Guide</i>
 *             </a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, UpdateEnabledBaselineCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, UpdateEnabledBaselineCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const input = { // UpdateEnabledBaselineInput
 *   baselineVersion: "STRING_VALUE", // required
 *   parameters: [ // EnabledBaselineParameters
 *     { // EnabledBaselineParameter
 *       key: "STRING_VALUE", // required
 *       value: "DOCUMENT_VALUE", // required
 *     },
 *   ],
 *   enabledBaselineIdentifier: "STRING_VALUE", // required
 * };
 * const command = new UpdateEnabledBaselineCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnabledBaselineOutput
 * //   operationIdentifier: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateEnabledBaselineCommandInput - {@link UpdateEnabledBaselineCommandInput}
 * @returns {@link UpdateEnabledBaselineCommandOutput}
 * @see {@link UpdateEnabledBaselineCommandInput} for command's `input` shape.
 * @see {@link UpdateEnabledBaselineCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded. The limit is 10 concurrent operations.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ControlTowerServiceException}
 * <p>Base exception class for all service exceptions from ControlTower service.</p>
 *
 * @public
 */
export class UpdateEnabledBaselineCommand extends $Command
  .classBuilder<
    UpdateEnabledBaselineCommandInput,
    UpdateEnabledBaselineCommandOutput,
    ControlTowerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSControlTowerApis", "UpdateEnabledBaseline", {})
  .n("ControlTowerClient", "UpdateEnabledBaselineCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEnabledBaselineCommand)
  .de(de_UpdateEnabledBaselineCommand)
  .build() {}
