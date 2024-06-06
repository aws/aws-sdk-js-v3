// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateConfigurationRequest, UpdateConfigurationResponse } from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { de_UpdateConfigurationCommand, se_UpdateConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationCommand}.
 */
export interface UpdateConfigurationCommandInput extends UpdateConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationCommand}.
 */
export interface UpdateConfigurationCommandOutput extends UpdateConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates the specified configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, UpdateConfigurationCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, UpdateConfigurationCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const input = { // UpdateConfigurationRequest
 *   ConfigurationId: "STRING_VALUE", // required
 *   Data: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConfigurationResponse
 * //   Arn: "STRING_VALUE",
 * //   Created: new Date("TIMESTAMP"),
 * //   Id: "STRING_VALUE",
 * //   LatestRevision: { // ConfigurationRevision
 * //     Created: new Date("TIMESTAMP"), // required
 * //     Description: "STRING_VALUE",
 * //     Revision: Number("int"), // required
 * //   },
 * //   Name: "STRING_VALUE",
 * //   Warnings: [ // __listOfSanitizationWarning
 * //     { // SanitizationWarning
 * //       AttributeName: "STRING_VALUE",
 * //       ElementName: "STRING_VALUE",
 * //       Reason: "DISALLOWED_ELEMENT_REMOVED" || "DISALLOWED_ATTRIBUTE_REMOVED" || "INVALID_ATTRIBUTE_VALUE_REMOVED", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateConfigurationCommandInput - {@link UpdateConfigurationCommandInput}
 * @returns {@link UpdateConfigurationCommandOutput}
 * @see {@link UpdateConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 * @public
 */
export class UpdateConfigurationCommand extends $Command
  .classBuilder<
    UpdateConfigurationCommandInput,
    UpdateConfigurationCommandOutput,
    MqClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MqClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("mq", "UpdateConfiguration", {})
  .n("MqClient", "UpdateConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateConfigurationCommand)
  .de(de_UpdateConfigurationCommand)
  .build() {}
