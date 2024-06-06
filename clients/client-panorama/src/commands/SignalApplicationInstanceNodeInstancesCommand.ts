// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  SignalApplicationInstanceNodeInstancesRequest,
  SignalApplicationInstanceNodeInstancesResponse,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import {
  de_SignalApplicationInstanceNodeInstancesCommand,
  se_SignalApplicationInstanceNodeInstancesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SignalApplicationInstanceNodeInstancesCommand}.
 */
export interface SignalApplicationInstanceNodeInstancesCommandInput
  extends SignalApplicationInstanceNodeInstancesRequest {}
/**
 * @public
 *
 * The output of {@link SignalApplicationInstanceNodeInstancesCommand}.
 */
export interface SignalApplicationInstanceNodeInstancesCommandOutput
  extends SignalApplicationInstanceNodeInstancesResponse,
    __MetadataBearer {}

/**
 * <p>Signal camera nodes to stop or resume.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, SignalApplicationInstanceNodeInstancesCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, SignalApplicationInstanceNodeInstancesCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // SignalApplicationInstanceNodeInstancesRequest
 *   ApplicationInstanceId: "STRING_VALUE", // required
 *   NodeSignals: [ // NodeSignalList // required
 *     { // NodeSignal
 *       NodeInstanceId: "STRING_VALUE", // required
 *       Signal: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new SignalApplicationInstanceNodeInstancesCommand(input);
 * const response = await client.send(command);
 * // { // SignalApplicationInstanceNodeInstancesResponse
 * //   ApplicationInstanceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SignalApplicationInstanceNodeInstancesCommandInput - {@link SignalApplicationInstanceNodeInstancesCommandInput}
 * @returns {@link SignalApplicationInstanceNodeInstancesCommandOutput}
 * @see {@link SignalApplicationInstanceNodeInstancesCommandInput} for command's `input` shape.
 * @see {@link SignalApplicationInstanceNodeInstancesCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a limit to be exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 * @public
 */
export class SignalApplicationInstanceNodeInstancesCommand extends $Command
  .classBuilder<
    SignalApplicationInstanceNodeInstancesCommandInput,
    SignalApplicationInstanceNodeInstancesCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OmniCloudServiceLambda", "SignalApplicationInstanceNodeInstances", {})
  .n("PanoramaClient", "SignalApplicationInstanceNodeInstancesCommand")
  .f(void 0, void 0)
  .ser(se_SignalApplicationInstanceNodeInstancesCommand)
  .de(de_SignalApplicationInstanceNodeInstancesCommand)
  .build() {}
