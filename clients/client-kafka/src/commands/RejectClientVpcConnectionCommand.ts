// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { RejectClientVpcConnectionRequest, RejectClientVpcConnectionResponse } from "../models/models_0";
import { de_RejectClientVpcConnectionCommand, se_RejectClientVpcConnectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectClientVpcConnectionCommand}.
 */
export interface RejectClientVpcConnectionCommandInput extends RejectClientVpcConnectionRequest {}
/**
 * @public
 *
 * The output of {@link RejectClientVpcConnectionCommand}.
 */
export interface RejectClientVpcConnectionCommandOutput extends RejectClientVpcConnectionResponse, __MetadataBearer {}

/**
 * <p>Returns empty response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, RejectClientVpcConnectionCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, RejectClientVpcConnectionCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // RejectClientVpcConnectionRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   VpcConnectionArn: "STRING_VALUE", // required
 * };
 * const command = new RejectClientVpcConnectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RejectClientVpcConnectionCommandInput - {@link RejectClientVpcConnectionCommandInput}
 * @returns {@link RejectClientVpcConnectionCommandOutput}
 * @see {@link RejectClientVpcConnectionCommandInput} for command's `input` shape.
 * @see {@link RejectClientVpcConnectionCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 * @public
 */
export class RejectClientVpcConnectionCommand extends $Command
  .classBuilder<
    RejectClientVpcConnectionCommandInput,
    RejectClientVpcConnectionCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kafka", "RejectClientVpcConnection", {})
  .n("KafkaClient", "RejectClientVpcConnectionCommand")
  .f(void 0, void 0)
  .ser(se_RejectClientVpcConnectionCommand)
  .de(de_RejectClientVpcConnectionCommand)
  .build() {}
