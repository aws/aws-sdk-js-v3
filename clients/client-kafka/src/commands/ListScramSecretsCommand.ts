// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListScramSecretsRequest, ListScramSecretsResponse } from "../models/models_0";
import { ListScramSecrets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListScramSecretsCommand}.
 */
export interface ListScramSecretsCommandInput extends ListScramSecretsRequest {}
/**
 * @public
 *
 * The output of {@link ListScramSecretsCommand}.
 */
export interface ListScramSecretsCommandOutput extends ListScramSecretsResponse, __MetadataBearer {}

/**
 * Returns a list of the Scram Secrets associated with an Amazon MSK cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListScramSecretsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListScramSecretsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // ListScramSecretsRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListScramSecretsCommand(input);
 * const response = await client.send(command);
 * // { // ListScramSecretsResponse
 * //   NextToken: "STRING_VALUE",
 * //   SecretArnList: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListScramSecretsCommandInput - {@link ListScramSecretsCommandInput}
 * @returns {@link ListScramSecretsCommandOutput}
 * @see {@link ListScramSecretsCommandInput} for command's `input` shape.
 * @see {@link ListScramSecretsCommandOutput} for command's `response` shape.
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
export class ListScramSecretsCommand extends command<ListScramSecretsCommandInput, ListScramSecretsCommandOutput>(
  _ep0,
  _mw0,
  "ListScramSecrets",
  ListScramSecrets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScramSecretsRequest;
      output: ListScramSecretsResponse;
    };
    sdk: {
      input: ListScramSecretsCommandInput;
      output: ListScramSecretsCommandOutput;
    };
  };
}
