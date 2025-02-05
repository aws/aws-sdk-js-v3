// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { DescribeConfigurationRevisionRequest, DescribeConfigurationRevisionResponse } from "../models/models_0";
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
 * <p>Returns a description of this revision of the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeConfigurationRevisionCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeConfigurationRevisionCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new KafkaClient(config);
 * const input = { // DescribeConfigurationRevisionRequest
 *   Arn: "STRING_VALUE", // required
 *   Revision: Number("long"), // required
 * };
 * const command = new DescribeConfigurationRevisionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationRevisionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   Revision: Number("long"),
 * //   ServerProperties: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationRevisionCommandInput - {@link DescribeConfigurationRevisionCommandInput}
 * @returns {@link DescribeConfigurationRevisionCommandOutput}
 * @see {@link DescribeConfigurationRevisionCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationRevisionCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 * @public
 */
export class DescribeConfigurationRevisionCommand extends $Command
  .classBuilder<
    DescribeConfigurationRevisionCommandInput,
    DescribeConfigurationRevisionCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kafka", "DescribeConfigurationRevision", {})
  .n("KafkaClient", "DescribeConfigurationRevisionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConfigurationRevisionCommand)
  .de(de_DescribeConfigurationRevisionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConfigurationRevisionRequest;
      output: DescribeConfigurationRevisionResponse;
    };
    sdk: {
      input: DescribeConfigurationRevisionCommandInput;
      output: DescribeConfigurationRevisionCommandOutput;
    };
  };
}
