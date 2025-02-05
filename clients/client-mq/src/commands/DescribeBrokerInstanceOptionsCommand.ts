// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeBrokerInstanceOptionsRequest, DescribeBrokerInstanceOptionsResponse } from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import {
  de_DescribeBrokerInstanceOptionsCommand,
  se_DescribeBrokerInstanceOptionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBrokerInstanceOptionsCommand}.
 */
export interface DescribeBrokerInstanceOptionsCommandInput extends DescribeBrokerInstanceOptionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBrokerInstanceOptionsCommand}.
 */
export interface DescribeBrokerInstanceOptionsCommandOutput
  extends DescribeBrokerInstanceOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Describe available broker instance options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeBrokerInstanceOptionsCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeBrokerInstanceOptionsCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MqClient(config);
 * const input = { // DescribeBrokerInstanceOptionsRequest
 *   EngineType: "STRING_VALUE",
 *   HostInstanceType: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   StorageType: "STRING_VALUE",
 * };
 * const command = new DescribeBrokerInstanceOptionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBrokerInstanceOptionsResponse
 * //   BrokerInstanceOptions: [ // __listOfBrokerInstanceOption
 * //     { // BrokerInstanceOption
 * //       AvailabilityZones: [ // __listOfAvailabilityZone
 * //         { // AvailabilityZone
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       EngineType: "ACTIVEMQ" || "RABBITMQ",
 * //       HostInstanceType: "STRING_VALUE",
 * //       StorageType: "EBS" || "EFS",
 * //       SupportedDeploymentModes: [ // __listOfDeploymentMode
 * //         "SINGLE_INSTANCE" || "ACTIVE_STANDBY_MULTI_AZ" || "CLUSTER_MULTI_AZ",
 * //       ],
 * //       SupportedEngineVersions: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   MaxResults: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBrokerInstanceOptionsCommandInput - {@link DescribeBrokerInstanceOptionsCommandInput}
 * @returns {@link DescribeBrokerInstanceOptionsCommandOutput}
 * @see {@link DescribeBrokerInstanceOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeBrokerInstanceOptionsCommandOutput} for command's `response` shape.
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
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 * @public
 */
export class DescribeBrokerInstanceOptionsCommand extends $Command
  .classBuilder<
    DescribeBrokerInstanceOptionsCommandInput,
    DescribeBrokerInstanceOptionsCommandOutput,
    MqClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MqClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("mq", "DescribeBrokerInstanceOptions", {})
  .n("MqClient", "DescribeBrokerInstanceOptionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBrokerInstanceOptionsCommand)
  .de(de_DescribeBrokerInstanceOptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBrokerInstanceOptionsRequest;
      output: DescribeBrokerInstanceOptionsResponse;
    };
    sdk: {
      input: DescribeBrokerInstanceOptionsCommandInput;
      output: DescribeBrokerInstanceOptionsCommandOutput;
    };
  };
}
