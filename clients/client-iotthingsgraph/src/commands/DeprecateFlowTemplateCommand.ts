// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  IoTThingsGraphClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTThingsGraphClient";
import type { DeprecateFlowTemplateRequest, DeprecateFlowTemplateResponse } from "../models/models_0";
import { DeprecateFlowTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeprecateFlowTemplateCommand}.
 */
export interface DeprecateFlowTemplateCommandInput extends DeprecateFlowTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeprecateFlowTemplateCommand}.
 */
export interface DeprecateFlowTemplateCommandOutput extends DeprecateFlowTemplateResponse, __MetadataBearer {}

/**
 * <p>Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DeprecateFlowTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DeprecateFlowTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // DeprecateFlowTemplateRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeprecateFlowTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeprecateFlowTemplateCommandInput - {@link DeprecateFlowTemplateCommandInput}
 * @returns {@link DeprecateFlowTemplateCommandOutput}
 * @see {@link DeprecateFlowTemplateCommandInput} for command's `input` shape.
 * @see {@link DeprecateFlowTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 *
 * @public
 */
export class DeprecateFlowTemplateCommand extends $Command
  .classBuilder<
    DeprecateFlowTemplateCommandInput,
    DeprecateFlowTemplateCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotThingsGraphFrontEndService", "DeprecateFlowTemplate", {})
  .n("IoTThingsGraphClient", "DeprecateFlowTemplateCommand")
  .sc(DeprecateFlowTemplate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeprecateFlowTemplateRequest;
      output: {};
    };
    sdk: {
      input: DeprecateFlowTemplateCommandInput;
      output: DeprecateFlowTemplateCommandOutput;
    };
  };
}
