// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSnapmirrorPolicyRequest, DeleteSnapmirrorPolicyResponse } from "../models/models_0";
import { DeleteSnapmirrorPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSnapmirrorPolicyCommand}.
 */
export interface DeleteSnapmirrorPolicyCommandInput extends DeleteSnapmirrorPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSnapmirrorPolicyCommand}.
 */
export interface DeleteSnapmirrorPolicyCommandOutput extends DeleteSnapmirrorPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon FSx for NetApp ONTAP SnapMirror policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteSnapmirrorPolicyCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteSnapmirrorPolicyCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DeleteSnapmirrorPolicyRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   SnapmirrorPolicyId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSnapmirrorPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSnapmirrorPolicyResponse
 * //   SnapmirrorPolicyId: "STRING_VALUE",
 * //   Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param DeleteSnapmirrorPolicyCommandInput - {@link DeleteSnapmirrorPolicyCommandInput}
 * @returns {@link DeleteSnapmirrorPolicyCommandOutput}
 * @see {@link DeleteSnapmirrorPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapmirrorPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link SnapmirrorPolicyNotFound} (client fault)
 *  <p>No Amazon FSx SnapMirror policies were found based on the supplied
 *             parameters.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class DeleteSnapmirrorPolicyCommand extends command<DeleteSnapmirrorPolicyCommandInput, DeleteSnapmirrorPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSnapmirrorPolicy",
  DeleteSnapmirrorPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSnapmirrorPolicyRequest;
      output: DeleteSnapmirrorPolicyResponse;
    };
    sdk: {
      input: DeleteSnapmirrorPolicyCommandInput;
      output: DeleteSnapmirrorPolicyCommandOutput;
    };
  };
}
