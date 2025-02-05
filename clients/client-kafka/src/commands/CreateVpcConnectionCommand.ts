// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { CreateVpcConnectionRequest, CreateVpcConnectionResponse } from "../models/models_0";
import { de_CreateVpcConnectionCommand, se_CreateVpcConnectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcConnectionCommand}.
 */
export interface CreateVpcConnectionCommandInput extends CreateVpcConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcConnectionCommand}.
 */
export interface CreateVpcConnectionCommandOutput extends CreateVpcConnectionResponse, __MetadataBearer {}

/**
 * <p>Creates a new MSK VPC connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, CreateVpcConnectionCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, CreateVpcConnectionCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new KafkaClient(config);
 * const input = { // CreateVpcConnectionRequest
 *   TargetClusterArn: "STRING_VALUE", // required
 *   Authentication: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 *   ClientSubnets: [ // __listOf__string // required
 *     "STRING_VALUE",
 *   ],
 *   SecurityGroups: [ // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: { // __mapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateVpcConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcConnectionResponse
 * //   VpcConnectionArn: "STRING_VALUE",
 * //   State: "CREATING" || "AVAILABLE" || "INACTIVE" || "DEACTIVATING" || "DELETING" || "FAILED" || "REJECTED" || "REJECTING",
 * //   Authentication: "STRING_VALUE",
 * //   VpcId: "STRING_VALUE",
 * //   ClientSubnets: [ // __listOf__string
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
 * @param CreateVpcConnectionCommandInput - {@link CreateVpcConnectionCommandInput}
 * @returns {@link CreateVpcConnectionCommandOutput}
 * @see {@link CreateVpcConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateVpcConnectionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
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
export class CreateVpcConnectionCommand extends $Command
  .classBuilder<
    CreateVpcConnectionCommandInput,
    CreateVpcConnectionCommandOutput,
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
  .s("Kafka", "CreateVpcConnection", {})
  .n("KafkaClient", "CreateVpcConnectionCommand")
  .f(void 0, void 0)
  .ser(se_CreateVpcConnectionCommand)
  .de(de_CreateVpcConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpcConnectionRequest;
      output: CreateVpcConnectionResponse;
    };
    sdk: {
      input: CreateVpcConnectionCommandInput;
      output: CreateVpcConnectionCommandOutput;
    };
  };
}
