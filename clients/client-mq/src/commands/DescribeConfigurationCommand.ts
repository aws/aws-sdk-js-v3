// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeConfigurationRequest, DescribeConfigurationResponse } from "../models/models_0";
import { DescribeConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns information about the specified configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeConfigurationCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeConfigurationCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * // import type { MqClientConfig } from "@aws-sdk/client-mq";
 * const config = {}; // type is MqClientConfig
 * const client = new MqClient(config);
 * const input = { // DescribeConfigurationRequest
 *   ConfigurationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationResponse
 * //   Arn: "STRING_VALUE",
 * //   AuthenticationStrategy: "SIMPLE" || "LDAP" || "CONFIG_MANAGED",
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
 *
 * Returns information about an error.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * Returns information about an error.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link MqServiceException}
 *
 * Base exception class for all service exceptions from Mq service.
 *
 * @public
 */
export class DescribeConfigurationCommand extends command<DescribeConfigurationCommandInput, DescribeConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeConfiguration",
  DescribeConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConfigurationRequest;
      output: DescribeConfigurationResponse;
    };
    sdk: {
      input: DescribeConfigurationCommandInput;
      output: DescribeConfigurationCommandOutput;
    };
  };
}
