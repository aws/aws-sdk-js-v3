// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSnapmirrorRelationshipRequest, DeleteSnapmirrorRelationshipResponse } from "../models/models_0";
import { DeleteSnapmirrorRelationship$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSnapmirrorRelationshipCommand}.
 */
export interface DeleteSnapmirrorRelationshipCommandInput extends DeleteSnapmirrorRelationshipRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSnapmirrorRelationshipCommand}.
 */
export interface DeleteSnapmirrorRelationshipCommandOutput extends DeleteSnapmirrorRelationshipResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon FSx for NetApp ONTAP SnapMirror relationship.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteSnapmirrorRelationshipCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteSnapmirrorRelationshipCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DeleteSnapmirrorRelationshipRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   SnapmirrorRelationshipId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSnapmirrorRelationshipCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSnapmirrorRelationshipResponse
 * //   SnapmirrorRelationshipId: "STRING_VALUE",
 * //   Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param DeleteSnapmirrorRelationshipCommandInput - {@link DeleteSnapmirrorRelationshipCommandInput}
 * @returns {@link DeleteSnapmirrorRelationshipCommandOutput}
 * @see {@link DeleteSnapmirrorRelationshipCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapmirrorRelationshipCommandOutput} for command's `response` shape.
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
 * @throws {@link SnapmirrorRelationshipNotFound} (client fault)
 *  <p>No Amazon FSx SnapMirror relationships were found based on the supplied
 *             parameters.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class DeleteSnapmirrorRelationshipCommand extends command<DeleteSnapmirrorRelationshipCommandInput, DeleteSnapmirrorRelationshipCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSnapmirrorRelationship",
  DeleteSnapmirrorRelationship$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSnapmirrorRelationshipRequest;
      output: DeleteSnapmirrorRelationshipResponse;
    };
    sdk: {
      input: DeleteSnapmirrorRelationshipCommandInput;
      output: DeleteSnapmirrorRelationshipCommandOutput;
    };
  };
}
