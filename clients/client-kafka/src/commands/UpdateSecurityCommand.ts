// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSecurityRequest, UpdateSecurityResponse } from "../models/models_0";
import { UpdateSecurity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSecurityCommand}.
 */
export interface UpdateSecurityCommandInput extends UpdateSecurityRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSecurityCommand}.
 */
export interface UpdateSecurityCommandOutput extends UpdateSecurityResponse, __MetadataBearer {}

/**
 * Updates the security settings for the cluster. You can use this operation to specify encryption and authentication on existing clusters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateSecurityCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateSecurityCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // UpdateSecurityRequest
 *   ClientAuthentication: { // ClientAuthentication
 *     Sasl: { // Sasl
 *       Scram: { // Scram
 *         Enabled: true || false,
 *       },
 *       Iam: { // Iam
 *         Enabled: true || false,
 *       },
 *     },
 *     Tls: { // Tls
 *       CertificateAuthorityArnList: [ // __listOf__string
 *         "STRING_VALUE",
 *       ],
 *       Enabled: true || false,
 *     },
 *     Unauthenticated: { // Unauthenticated
 *       Enabled: true || false,
 *     },
 *   },
 *   ClusterArn: "STRING_VALUE", // required
 *   CurrentVersion: "STRING_VALUE", // required
 *   EncryptionInfo: { // EncryptionInfo
 *     EncryptionAtRest: { // EncryptionAtRest
 *       DataVolumeKMSKeyId: "STRING_VALUE", // required
 *     },
 *     EncryptionInTransit: { // EncryptionInTransit
 *       ClientBroker: "TLS" || "TLS_PLAINTEXT" || "PLAINTEXT",
 *       InCluster: true || false,
 *     },
 *   },
 * };
 * const command = new UpdateSecurityCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSecurityResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   ClusterOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSecurityCommandInput - {@link UpdateSecurityCommandInput}
 * @returns {@link UpdateSecurityCommandOutput}
 * @see {@link UpdateSecurityCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * Returns information about an error.
 *
 * @throws {@link TooManyRequestsException} (client fault)
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
export class UpdateSecurityCommand extends command<UpdateSecurityCommandInput, UpdateSecurityCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSecurity",
  UpdateSecurity$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSecurityRequest;
      output: UpdateSecurityResponse;
    };
    sdk: {
      input: UpdateSecurityCommandInput;
      output: UpdateSecurityCommandOutput;
    };
  };
}
