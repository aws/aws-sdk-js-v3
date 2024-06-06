// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { DeleteVpcConnectionRequest, DeleteVpcConnectionResponse } from "../models/models_0";
import { de_DeleteVpcConnectionCommand, se_DeleteVpcConnectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpcConnectionCommand}.
 */
export interface DeleteVpcConnectionCommandInput extends DeleteVpcConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcConnectionCommand}.
 */
export interface DeleteVpcConnectionCommandOutput extends DeleteVpcConnectionResponse, __MetadataBearer {}

/**
 * <p>Deletes a MSK VPC connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DeleteVpcConnectionCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DeleteVpcConnectionCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // DeleteVpcConnectionRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteVpcConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpcConnectionResponse
 * //   VpcConnectionArn: "STRING_VALUE",
 * //   State: "CREATING" || "AVAILABLE" || "INACTIVE" || "DEACTIVATING" || "DELETING" || "FAILED" || "REJECTED" || "REJECTING",
 * // };
 *
 * ```
 *
 * @param DeleteVpcConnectionCommandInput - {@link DeleteVpcConnectionCommandInput}
 * @returns {@link DeleteVpcConnectionCommandOutput}
 * @see {@link DeleteVpcConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcConnectionCommandOutput} for command's `response` shape.
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
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 * @public
 */
export class DeleteVpcConnectionCommand extends $Command
  .classBuilder<
    DeleteVpcConnectionCommandInput,
    DeleteVpcConnectionCommandOutput,
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
  .s("Kafka", "DeleteVpcConnection", {})
  .n("KafkaClient", "DeleteVpcConnectionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVpcConnectionCommand)
  .de(de_DeleteVpcConnectionCommand)
  .build() {}
