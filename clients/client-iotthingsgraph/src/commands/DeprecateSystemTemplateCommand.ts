// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeprecateSystemTemplateRequest, DeprecateSystemTemplateResponse } from "../models/models_0";
import { DeprecateSystemTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeprecateSystemTemplateCommand}.
 */
export interface DeprecateSystemTemplateCommandInput extends DeprecateSystemTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeprecateSystemTemplateCommand}.
 */
export interface DeprecateSystemTemplateCommandOutput extends DeprecateSystemTemplateResponse, __MetadataBearer {}

/**
 * <p>Deprecates the specified system.</p>
 *
 * @deprecated since: 2022-08-30.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DeprecateSystemTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DeprecateSystemTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // DeprecateSystemTemplateRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeprecateSystemTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeprecateSystemTemplateCommandInput - {@link DeprecateSystemTemplateCommandInput}
 * @returns {@link DeprecateSystemTemplateCommandOutput}
 * @see {@link DeprecateSystemTemplateCommandInput} for command's `input` shape.
 * @see {@link DeprecateSystemTemplateCommandOutput} for command's `response` shape.
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
export class DeprecateSystemTemplateCommand extends command<DeprecateSystemTemplateCommandInput, DeprecateSystemTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeprecateSystemTemplate",
  DeprecateSystemTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeprecateSystemTemplateRequest;
      output: {};
    };
    sdk: {
      input: DeprecateSystemTemplateCommandInput;
      output: DeprecateSystemTemplateCommandOutput;
    };
  };
}
