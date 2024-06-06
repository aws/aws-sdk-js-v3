// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { IsVpcPeeredRequest, IsVpcPeeredResult } from "../models/models_1";
import { de_IsVpcPeeredCommand, se_IsVpcPeeredCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link IsVpcPeeredCommand}.
 */
export interface IsVpcPeeredCommandInput extends IsVpcPeeredRequest {}
/**
 * @public
 *
 * The output of {@link IsVpcPeeredCommand}.
 */
export interface IsVpcPeeredCommandOutput extends IsVpcPeeredResult, __MetadataBearer {}

/**
 * <p>Returns a Boolean value indicating whether your Lightsail VPC is peered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, IsVpcPeeredCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, IsVpcPeeredCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = {};
 * const command = new IsVpcPeeredCommand(input);
 * const response = await client.send(command);
 * // { // IsVpcPeeredResult
 * //   isPeered: true || false,
 * // };
 *
 * ```
 *
 * @param IsVpcPeeredCommandInput - {@link IsVpcPeeredCommandInput}
 * @returns {@link IsVpcPeeredCommandOutput}
 * @see {@link IsVpcPeeredCommandInput} for command's `input` shape.
 * @see {@link IsVpcPeeredCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 * @public
 */
export class IsVpcPeeredCommand extends $Command
  .classBuilder<
    IsVpcPeeredCommandInput,
    IsVpcPeeredCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "IsVpcPeered", {})
  .n("LightsailClient", "IsVpcPeeredCommand")
  .f(void 0, void 0)
  .ser(se_IsVpcPeeredCommand)
  .de(de_IsVpcPeeredCommand)
  .build() {}
