// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { BatchDisassociateScramSecretRequest, BatchDisassociateScramSecretResponse } from "../models/models_0";
import {
  de_BatchDisassociateScramSecretCommand,
  se_BatchDisassociateScramSecretCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDisassociateScramSecretCommand}.
 */
export interface BatchDisassociateScramSecretCommandInput extends BatchDisassociateScramSecretRequest {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateScramSecretCommand}.
 */
export interface BatchDisassociateScramSecretCommandOutput
  extends BatchDisassociateScramSecretResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates one or more Scram Secrets from an Amazon MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, BatchDisassociateScramSecretCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, BatchDisassociateScramSecretCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // BatchDisassociateScramSecretRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   SecretArnList: [ // __listOf__string // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDisassociateScramSecretCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateScramSecretResponse
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
 * @param BatchDisassociateScramSecretCommandInput - {@link BatchDisassociateScramSecretCommandInput}
 * @returns {@link BatchDisassociateScramSecretCommandOutput}
 * @see {@link BatchDisassociateScramSecretCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateScramSecretCommandOutput} for command's `response` shape.
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
 * @public
 */
export class BatchDisassociateScramSecretCommand extends $Command
  .classBuilder<
    BatchDisassociateScramSecretCommandInput,
    BatchDisassociateScramSecretCommandOutput,
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
  .s("Kafka", "BatchDisassociateScramSecret", {})
  .n("KafkaClient", "BatchDisassociateScramSecretCommand")
  .f(void 0, void 0)
  .ser(se_BatchDisassociateScramSecretCommand)
  .de(de_BatchDisassociateScramSecretCommand)
  .build() {}
