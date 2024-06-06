// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSecurityConfigurationInput, CreateSecurityConfigurationOutput } from "../models/models_0";
import { de_CreateSecurityConfigurationCommand, se_CreateSecurityConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSecurityConfigurationCommand}.
 */
export interface CreateSecurityConfigurationCommandInput extends CreateSecurityConfigurationInput {}
/**
 * @public
 *
 * The output of {@link CreateSecurityConfigurationCommand}.
 */
export interface CreateSecurityConfigurationCommandOutput extends CreateSecurityConfigurationOutput, __MetadataBearer {}

/**
 * <p>Creates a security configuration, which is stored in the service and can be specified
 *          when a cluster is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, CreateSecurityConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, CreateSecurityConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // CreateSecurityConfigurationInput
 *   Name: "STRING_VALUE", // required
 *   SecurityConfiguration: "STRING_VALUE", // required
 * };
 * const command = new CreateSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateSecurityConfigurationOutput
 * //   Name: "STRING_VALUE", // required
 * //   CreationDateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateSecurityConfigurationCommandInput - {@link CreateSecurityConfigurationCommandInput}
 * @returns {@link CreateSecurityConfigurationCommandOutput}
 * @see {@link CreateSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 * @public
 */
export class CreateSecurityConfigurationCommand extends $Command
  .classBuilder<
    CreateSecurityConfigurationCommandInput,
    CreateSecurityConfigurationCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "CreateSecurityConfiguration", {})
  .n("EMRClient", "CreateSecurityConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateSecurityConfigurationCommand)
  .de(de_CreateSecurityConfigurationCommand)
  .build() {}
