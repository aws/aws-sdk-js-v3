// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ReverseReplicationRequest, ReverseReplicationResponse } from "../models/models_0";
import { ReverseReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ReverseReplicationCommand}.
 */
export interface ReverseReplicationCommandInput extends ReverseReplicationRequest {}
/**
 * @public
 *
 * The output of {@link ReverseReplicationCommand}.
 */
export interface ReverseReplicationCommandOutput extends ReverseReplicationResponse, __MetadataBearer {}

/**
 * Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ReverseReplicationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ReverseReplicationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // ReverseReplicationRequest
 *   recoveryInstanceID: "STRING_VALUE", // required
 * };
 * const command = new ReverseReplicationCommand(input);
 * const response = await client.send(command);
 * // { // ReverseReplicationResponse
 * //   reversedDirectionSourceServerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ReverseReplicationCommandInput - {@link ReverseReplicationCommandInput}
 * @returns {@link ReverseReplicationCommandOutput}
 * @see {@link ReverseReplicationCommandInput} for command's `input` shape.
 * @see {@link ReverseReplicationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource for this operation was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * The account performing the request has not been initialized.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the AWS service.
 *
 * @throws {@link DrsServiceException}
 *
 * Base exception class for all service exceptions from Drs service.
 *
 * @public
 */
export class ReverseReplicationCommand extends command<ReverseReplicationCommandInput, ReverseReplicationCommandOutput>(
  _ep0,
  _mw0,
  "ReverseReplication",
  ReverseReplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReverseReplicationRequest;
      output: ReverseReplicationResponse;
    };
    sdk: {
      input: ReverseReplicationCommandInput;
      output: ReverseReplicationCommandOutput;
    };
  };
}
