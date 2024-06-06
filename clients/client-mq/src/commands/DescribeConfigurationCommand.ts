// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConfigurationRequest, DescribeConfigurationResponse } from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { de_DescribeConfigurationCommand, se_DescribeConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationCommand}.
 */
export interface DescribeConfigurationCommandInput extends DescribeConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationCommand}.
 */
export interface DescribeConfigurationCommandOutput extends DescribeConfigurationResponse, __MetadataBearer {}

/**
 * <p>Returns information about the specified configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeConfigurationCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeConfigurationCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const input = { // DescribeConfigurationRequest
 *   ConfigurationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationResponse
 * //   Arn: "STRING_VALUE",
 * //   AuthenticationStrategy: "SIMPLE" || "LDAP",
 * //   Created: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   EngineType: "ACTIVEMQ" || "RABBITMQ",
 * //   EngineVersion: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   LatestRevision: { // ConfigurationRevision
 * //     Created: new Date("TIMESTAMP"), // required
 * //     Description: "STRING_VALUE",
 * //     Revision: Number("int"), // required
 * //   },
 * //   Name: "STRING_VALUE",
 * //   Tags: { // __mapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationCommandInput - {@link DescribeConfigurationCommandInput}
 * @returns {@link DescribeConfigurationCommandOutput}
 * @see {@link DescribeConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
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
export class DescribeConfigurationCommand extends $Command
  .classBuilder<
    DescribeConfigurationCommandInput,
    DescribeConfigurationCommandOutput,
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
  .s("mq", "DescribeConfiguration", {})
  .n("MqClient", "DescribeConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConfigurationCommand)
  .de(de_DescribeConfigurationCommand)
  .build() {}
