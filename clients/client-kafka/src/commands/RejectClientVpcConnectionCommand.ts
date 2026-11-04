// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RejectClientVpcConnectionRequest, RejectClientVpcConnectionResponse } from "../models/models_0";
import { RejectClientVpcConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns empty response.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, RejectClientVpcConnectionCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, RejectClientVpcConnectionCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * Returns information about an error.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link KafkaServiceException}
 *
 * Base exception class for all service exceptions from Kafka service.
 *
 * @public
 */
export class RejectClientVpcConnectionCommand extends command<RejectClientVpcConnectionCommandInput, RejectClientVpcConnectionCommandOutput>(
  _ep0,
  _mw0,
  "RejectClientVpcConnection",
  RejectClientVpcConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectClientVpcConnectionRequest;
      output: {};
    };
    sdk: {
      input: RejectClientVpcConnectionCommandInput;
      output: RejectClientVpcConnectionCommandOutput;
    };
  };
}
