// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSnapshotPolicyRequest, DeleteSnapshotPolicyResponse } from "../models/models_0";
import { DeleteSnapshotPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSnapshotPolicyCommand}.
 */
export interface DeleteSnapshotPolicyCommandInput extends DeleteSnapshotPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSnapshotPolicyCommand}.
 */
export interface DeleteSnapshotPolicyCommandOutput extends DeleteSnapshotPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon FSx for NetApp ONTAP snapshot policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteSnapshotPolicyCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteSnapshotPolicyCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DeleteSnapshotPolicyRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   SnapshotPolicyId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSnapshotPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSnapshotPolicyResponse
 * //   SnapshotPolicyId: "STRING_VALUE",
 * //   Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param DeleteSnapshotPolicyCommandInput - {@link DeleteSnapshotPolicyCommandInput}
 * @returns {@link DeleteSnapshotPolicyCommandOutput}
 * @see {@link DeleteSnapshotPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotPolicyCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link SnapshotPolicyNotFound} (client fault)
 *  <p>No Amazon FSx snapshot policies were found based on the supplied
 *             parameters.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class DeleteSnapshotPolicyCommand extends command<DeleteSnapshotPolicyCommandInput, DeleteSnapshotPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSnapshotPolicy",
  DeleteSnapshotPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSnapshotPolicyRequest;
      output: DeleteSnapshotPolicyResponse;
    };
    sdk: {
      input: DeleteSnapshotPolicyCommandInput;
      output: DeleteSnapshotPolicyCommandOutput;
    };
  };
}
