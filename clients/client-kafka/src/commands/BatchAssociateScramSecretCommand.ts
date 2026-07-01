// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchAssociateScramSecretRequest, BatchAssociateScramSecretResponse } from "../models/models_0";
import { BatchAssociateScramSecret$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchAssociateScramSecretCommand}.
 */
export interface BatchAssociateScramSecretCommandInput extends BatchAssociateScramSecretRequest {}
/**
 * @public
 *
 * The output of {@link BatchAssociateScramSecretCommand}.
 */
export interface BatchAssociateScramSecretCommandOutput extends BatchAssociateScramSecretResponse, __MetadataBearer {}

/**
 * <p>Associates one or more Scram Secrets with an Amazon MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, BatchAssociateScramSecretCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, BatchAssociateScramSecretCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // BatchAssociateScramSecretRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   SecretArnList: [ // __listOf__string // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchAssociateScramSecretCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateScramSecretResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   UnprocessedScramSecrets: [ // __listOfUnprocessedScramSecret
 * //     { // UnprocessedScramSecret
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       SecretArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchAssociateScramSecretCommandInput - {@link BatchAssociateScramSecretCommandInput}
 * @returns {@link BatchAssociateScramSecretCommandOutput}
 * @see {@link BatchAssociateScramSecretCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateScramSecretCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
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
export class BatchAssociateScramSecretCommand extends command<BatchAssociateScramSecretCommandInput, BatchAssociateScramSecretCommandOutput>(
  _ep0,
  _mw0,
  "BatchAssociateScramSecret",
  BatchAssociateScramSecret$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchAssociateScramSecretRequest;
      output: BatchAssociateScramSecretResponse;
    };
    sdk: {
      input: BatchAssociateScramSecretCommandInput;
      output: BatchAssociateScramSecretCommandOutput;
    };
  };
}
