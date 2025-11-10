// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { DescribeVpcConnectionRequest, DescribeVpcConnectionResponse } from "../models/models_0";
import { DescribeVpcConnection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcConnectionCommand}.
 */
export interface DescribeVpcConnectionCommandInput extends DescribeVpcConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcConnectionCommand}.
 */
export interface DescribeVpcConnectionCommandOutput extends DescribeVpcConnectionResponse, __MetadataBearer {}

/**
 * <p>Returns a description of this MSK VPC connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeVpcConnectionCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeVpcConnectionCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // DescribeVpcConnectionRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DescribeVpcConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcConnectionResponse
 * //   VpcConnectionArn: "STRING_VALUE",
 * //   TargetClusterArn: "STRING_VALUE",
 * //   State: "CREATING" || "AVAILABLE" || "INACTIVE" || "DEACTIVATING" || "DELETING" || "FAILED" || "REJECTED" || "REJECTING",
 * //   Authentication: "STRING_VALUE",
 * //   VpcId: "STRING_VALUE",
 * //   Subnets: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   SecurityGroups: [
 * //     "STRING_VALUE",
 * //   ],
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   Tags: { // __mapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeVpcConnectionCommandInput - {@link DescribeVpcConnectionCommandInput}
 * @returns {@link DescribeVpcConnectionCommandOutput}
 * @see {@link DescribeVpcConnectionCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcConnectionCommandOutput} for command's `response` shape.
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
export class DescribeVpcConnectionCommand extends $Command
  .classBuilder<
    DescribeVpcConnectionCommandInput,
    DescribeVpcConnectionCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kafka", "DescribeVpcConnection", {})
  .n("KafkaClient", "DescribeVpcConnectionCommand")
  .sc(DescribeVpcConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcConnectionRequest;
      output: DescribeVpcConnectionResponse;
    };
    sdk: {
      input: DescribeVpcConnectionCommandInput;
      output: DescribeVpcConnectionCommandOutput;
    };
  };
}
