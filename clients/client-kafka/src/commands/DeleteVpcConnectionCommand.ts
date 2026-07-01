// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVpcConnectionRequest, DeleteVpcConnectionResponse } from "../models/models_0";
import { DeleteVpcConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
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
 *
 * @public
 */
export class DeleteVpcConnectionCommand extends command<DeleteVpcConnectionCommandInput, DeleteVpcConnectionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVpcConnection",
  DeleteVpcConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpcConnectionRequest;
      output: DeleteVpcConnectionResponse;
    };
    sdk: {
      input: DeleteVpcConnectionCommandInput;
      output: DeleteVpcConnectionCommandOutput;
    };
  };
}
