// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteReplicatorRequest, DeleteReplicatorResponse } from "../models/models_0";
import { DeleteReplicator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteReplicatorCommand}.
 */
export interface DeleteReplicatorCommandInput extends DeleteReplicatorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteReplicatorCommand}.
 */
export interface DeleteReplicatorCommandOutput extends DeleteReplicatorResponse, __MetadataBearer {}

/**
 * <p>Deletes a replicator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DeleteReplicatorCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DeleteReplicatorCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // DeleteReplicatorRequest
 *   CurrentVersion: "STRING_VALUE",
 *   ReplicatorArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteReplicatorCommand(input);
 * const response = await client.send(command);
 * // { // DeleteReplicatorResponse
 * //   ReplicatorArn: "STRING_VALUE",
 * //   ReplicatorState: "RUNNING" || "CREATING" || "UPDATING" || "DELETING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param DeleteReplicatorCommandInput - {@link DeleteReplicatorCommandInput}
 * @returns {@link DeleteReplicatorCommandOutput}
 * @see {@link DeleteReplicatorCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicatorCommandOutput} for command's `response` shape.
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
export class DeleteReplicatorCommand extends command<DeleteReplicatorCommandInput, DeleteReplicatorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteReplicator",
  DeleteReplicator$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReplicatorRequest;
      output: DeleteReplicatorResponse;
    };
    sdk: {
      input: DeleteReplicatorCommandInput;
      output: DeleteReplicatorCommandOutput;
    };
  };
}
