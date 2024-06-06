// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableControlInput, EnableControlOutput } from "../models/models_0";
import { de_EnableControlCommand, se_EnableControlCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableControlCommand}.
 */
export interface EnableControlCommandInput extends EnableControlInput {}
/**
 * @public
 *
 * The output of {@link EnableControlCommand}.
 */
export interface EnableControlCommandOutput extends EnableControlOutput, __MetadataBearer {}

/**
 * <p>This API call activates a control. It starts an asynchronous operation that creates Amazon Web Services
 *          resources on the specified organizational unit and the accounts it contains. The resources
 *          created will vary according to the control that you specify. For usage examples, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-api-examples-short.html">
 *                <i>the Amazon Web Services Control Tower User Guide</i>
 *             </a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, EnableControlCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, EnableControlCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const input = { // EnableControlInput
 *   controlIdentifier: "STRING_VALUE", // required
 *   targetIdentifier: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   parameters: [ // EnabledControlParameters
 *     { // EnabledControlParameter
 *       key: "STRING_VALUE", // required
 *       value: "DOCUMENT_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new EnableControlCommand(input);
 * const response = await client.send(command);
 * // { // EnableControlOutput
 * //   operationIdentifier: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EnableControlCommandInput - {@link EnableControlCommandInput}
 * @returns {@link EnableControlCommandOutput}
 * @see {@link EnableControlCommandInput} for command's `input` shape.
 * @see {@link EnableControlCommandOutput} for command's `response` shape.
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
export class EnableControlCommand extends $Command
  .classBuilder<
    EnableControlCommandInput,
    EnableControlCommandOutput,
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
  .s("AWSControlTowerApis", "EnableControl", {})
  .n("ControlTowerClient", "EnableControlCommand")
  .f(void 0, void 0)
  .ser(se_EnableControlCommand)
  .de(de_EnableControlCommand)
  .build() {}
