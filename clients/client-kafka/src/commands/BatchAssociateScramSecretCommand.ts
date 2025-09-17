// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { BatchAssociateScramSecretRequest, BatchAssociateScramSecretResponse } from "../models/models_0";
import { de_BatchAssociateScramSecretCommand, se_BatchAssociateScramSecretCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class BatchAssociateScramSecretCommand extends $Command
  .classBuilder<
    BatchAssociateScramSecretCommandInput,
    BatchAssociateScramSecretCommandOutput,
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
  .s("Kafka", "BatchAssociateScramSecret", {})
  .n("KafkaClient", "BatchAssociateScramSecretCommand")
  .f(void 0, void 0)
  .ser(se_BatchAssociateScramSecretCommand)
  .de(de_BatchAssociateScramSecretCommand)
  .build() {
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
