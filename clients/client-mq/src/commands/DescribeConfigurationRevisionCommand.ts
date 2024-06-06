// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConfigurationRevisionRequest, DescribeConfigurationRevisionResponse } from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import {
  de_DescribeConfigurationRevisionCommand,
  se_DescribeConfigurationRevisionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationRevisionCommand}.
 */
export interface DescribeConfigurationRevisionCommandInput extends DescribeConfigurationRevisionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationRevisionCommand}.
 */
export interface DescribeConfigurationRevisionCommandOutput
  extends DescribeConfigurationRevisionResponse,
    __MetadataBearer {}

/**
 * <p>Returns the specified configuration revision for the specified configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeConfigurationRevisionCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeConfigurationRevisionCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const input = { // DescribeConfigurationRevisionRequest
 *   ConfigurationId: "STRING_VALUE", // required
 *   ConfigurationRevision: "STRING_VALUE", // required
 * };
 * const command = new DescribeConfigurationRevisionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationRevisionResponse
 * //   ConfigurationId: "STRING_VALUE",
 * //   Created: new Date("TIMESTAMP"),
 * //   Data: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationRevisionCommandInput - {@link DescribeConfigurationRevisionCommandInput}
 * @returns {@link DescribeConfigurationRevisionCommandOutput}
 * @see {@link DescribeConfigurationRevisionCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationRevisionCommandOutput} for command's `response` shape.
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
export class DescribeConfigurationRevisionCommand extends $Command
  .classBuilder<
    DescribeConfigurationRevisionCommandInput,
    DescribeConfigurationRevisionCommandOutput,
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
  .s("mq", "DescribeConfigurationRevision", {})
  .n("MqClient", "DescribeConfigurationRevisionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConfigurationRevisionCommand)
  .de(de_DescribeConfigurationRevisionCommand)
  .build() {}
