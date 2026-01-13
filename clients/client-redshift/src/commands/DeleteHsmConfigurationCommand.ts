// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteHsmConfigurationMessage } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteHsmConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteHsmConfigurationCommand}.
 */
export interface DeleteHsmConfigurationCommandInput extends DeleteHsmConfigurationMessage {}
/**
 * @public
 *
 * The output of {@link DeleteHsmConfigurationCommand}.
 */
export interface DeleteHsmConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified Amazon Redshift HSM configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteHsmConfigurationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteHsmConfigurationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DeleteHsmConfigurationMessage
 *   HsmConfigurationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteHsmConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHsmConfigurationCommandInput - {@link DeleteHsmConfigurationCommandInput}
 * @returns {@link DeleteHsmConfigurationCommandOutput}
 * @see {@link DeleteHsmConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteHsmConfigurationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link HsmConfigurationNotFoundFault} (client fault)
 *  <p>There is no Amazon Redshift HSM configuration with the specified identifier.</p>
 *
 * @throws {@link InvalidHsmConfigurationStateFault} (client fault)
 *  <p>The specified HSM configuration is not in the <code>available</code> state, or it
 *             is still in use by one or more Amazon Redshift clusters.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DeleteHsmConfigurationCommand extends $Command
  .classBuilder<
    DeleteHsmConfigurationCommandInput,
    DeleteHsmConfigurationCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DeleteHsmConfiguration", {})
  .n("RedshiftClient", "DeleteHsmConfigurationCommand")
  .sc(DeleteHsmConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHsmConfigurationMessage;
      output: {};
    };
    sdk: {
      input: DeleteHsmConfigurationCommandInput;
      output: DeleteHsmConfigurationCommandOutput;
    };
  };
}
