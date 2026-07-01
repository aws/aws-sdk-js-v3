// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBootstrapBrokersRequest, GetBootstrapBrokersResponse } from "../models/models_0";
import { GetBootstrapBrokers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBootstrapBrokersCommand}.
 */
export interface GetBootstrapBrokersCommandInput extends GetBootstrapBrokersRequest {}
/**
 * @public
 *
 * The output of {@link GetBootstrapBrokersCommand}.
 */
export interface GetBootstrapBrokersCommandOutput extends GetBootstrapBrokersResponse, __MetadataBearer {}

/**
 * <p>A list of brokers that a client application can use to bootstrap. This list doesn't necessarily include all of the brokers in the cluster. The following Python 3.6 example shows how you can use the Amazon Resource Name (ARN) of a cluster to get its bootstrap brokers. If you don't know the ARN of your cluster, you can use the <code>ListClusters</code> operation to get the ARNs of all the clusters in this account and Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, GetBootstrapBrokersCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, GetBootstrapBrokersCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // GetBootstrapBrokersRequest
 *   ClusterArn: "STRING_VALUE", // required
 * };
 * const command = new GetBootstrapBrokersCommand(input);
 * const response = await client.send(command);
 * // { // GetBootstrapBrokersResponse
 * //   BootstrapBrokerString: "STRING_VALUE",
 * //   BootstrapBrokerStringTls: "STRING_VALUE",
 * //   BootstrapBrokerStringSaslScram: "STRING_VALUE",
 * //   BootstrapBrokerStringSaslIam: "STRING_VALUE",
 * //   BootstrapBrokerStringPublicTls: "STRING_VALUE",
 * //   BootstrapBrokerStringPublicSaslScram: "STRING_VALUE",
 * //   BootstrapBrokerStringPublicSaslIam: "STRING_VALUE",
 * //   BootstrapBrokerStringVpcConnectivityTls: "STRING_VALUE",
 * //   BootstrapBrokerStringVpcConnectivitySaslScram: "STRING_VALUE",
 * //   BootstrapBrokerStringVpcConnectivitySaslIam: "STRING_VALUE",
 * //   BootstrapBrokerStringIpv6: "STRING_VALUE",
 * //   BootstrapBrokerStringTlsIpv6: "STRING_VALUE",
 * //   BootstrapBrokerStringSaslScramIpv6: "STRING_VALUE",
 * //   BootstrapBrokerStringSaslIamIpv6: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBootstrapBrokersCommandInput - {@link GetBootstrapBrokersCommandInput}
 * @returns {@link GetBootstrapBrokersCommandOutput}
 * @see {@link GetBootstrapBrokersCommandInput} for command's `input` shape.
 * @see {@link GetBootstrapBrokersCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
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
export class GetBootstrapBrokersCommand extends command<GetBootstrapBrokersCommandInput, GetBootstrapBrokersCommandOutput>(
  _ep0,
  _mw0,
  "GetBootstrapBrokers",
  GetBootstrapBrokers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBootstrapBrokersRequest;
      output: GetBootstrapBrokersResponse;
    };
    sdk: {
      input: GetBootstrapBrokersCommandInput;
      output: GetBootstrapBrokersCommandOutput;
    };
  };
}
