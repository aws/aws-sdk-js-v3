// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { DescribeConfigurationRequest, DescribeConfigurationResponse } from "../models/models_0";
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
 * <p>Returns a description of this MSK configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeConfigurationCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeConfigurationCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // DescribeConfigurationRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DescribeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   KafkaVersions: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   LatestRevision: { // ConfigurationRevision
 * //     CreationTime: new Date("TIMESTAMP"), // required
 * //     Description: "STRING_VALUE",
 * //     Revision: Number("long"), // required
 * //   },
 * //   Name: "STRING_VALUE",
 * //   State: "ACTIVE" || "DELETING" || "DELETE_FAILED",
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationCommandInput - {@link DescribeConfigurationCommandInput}
 * @returns {@link DescribeConfigurationCommandOutput}
 * @see {@link DescribeConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeConfigurationCommand extends $Command
  .classBuilder<
    DescribeConfigurationCommandInput,
    DescribeConfigurationCommandOutput,
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
  .s("Kafka", "DescribeConfiguration", {})
  .n("KafkaClient", "DescribeConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConfigurationCommand)
  .de(de_DescribeConfigurationCommand)
  .build() {
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
