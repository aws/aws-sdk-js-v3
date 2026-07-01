// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateConnectivityRequest, UpdateConnectivityResponse } from "../models/models_0";
import { UpdateConnectivity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateConnectivityCommand}.
 */
export interface UpdateConnectivityCommandInput extends UpdateConnectivityRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectivityCommand}.
 */
export interface UpdateConnectivityCommandOutput extends UpdateConnectivityResponse, __MetadataBearer {}

/**
 * <p>Updates the cluster's connectivity configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateConnectivityCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateConnectivityCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // UpdateConnectivityRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   ConnectivityInfo: { // ConnectivityInfo
 *     PublicAccess: { // PublicAccess
 *       Type: "STRING_VALUE",
 *     },
 *     VpcConnectivity: { // VpcConnectivity
 *       ClientAuthentication: { // VpcConnectivityClientAuthentication
 *         Sasl: { // VpcConnectivitySasl
 *           Scram: { // VpcConnectivityScram
 *             Enabled: true || false,
 *           },
 *           Iam: { // VpcConnectivityIam
 *             Enabled: true || false,
 *           },
 *         },
 *         Tls: { // VpcConnectivityTls
 *           Enabled: true || false,
 *         },
 *       },
 *     },
 *     NetworkType: "IPV4" || "DUAL",
 *   },
 *   CurrentVersion: "STRING_VALUE", // required
 *   ZookeeperAccess: { // ZookeeperAccess
 *     Enabled: true || false,
 *   },
 * };
 * const command = new UpdateConnectivityCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConnectivityResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   ClusterOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateConnectivityCommandInput - {@link UpdateConnectivityCommandInput}
 * @returns {@link UpdateConnectivityCommandOutput}
 * @see {@link UpdateConnectivityCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectivityCommandOutput} for command's `response` shape.
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
export class UpdateConnectivityCommand extends command<UpdateConnectivityCommandInput, UpdateConnectivityCommandOutput>(
  _ep0,
  _mw0,
  "UpdateConnectivity",
  UpdateConnectivity$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectivityRequest;
      output: UpdateConnectivityResponse;
    };
    sdk: {
      input: UpdateConnectivityCommandInput;
      output: UpdateConnectivityCommandOutput;
    };
  };
}
