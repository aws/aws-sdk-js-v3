// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDatastoreRequest, DeleteDatastoreResponse } from "../models/models_0";
import { DeleteDatastore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDatastoreCommand}.
 */
export interface DeleteDatastoreCommandInput extends DeleteDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDatastoreCommand}.
 */
export interface DeleteDatastoreCommandOutput extends DeleteDatastoreResponse, __MetadataBearer {}

/**
 * <p>Delete a data store.</p> <note> <p>Before a data store can be deleted, you must first delete all image sets within it.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, DeleteDatastoreCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, DeleteDatastoreCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * // import type { MedicalImagingClientConfig } from "@aws-sdk/client-medical-imaging";
 * const config = {}; // type is MedicalImagingClientConfig
 * const client = new MedicalImagingClient(config);
 * const input = { // DeleteDatastoreRequest
 *   datastoreId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDatastoreCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDatastoreResponse
 * //   datastoreId: "STRING_VALUE", // required
 * //   datastoreStatus: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DELETING" || "DELETED", // required
 * // };
 *
 * ```
 *
 * @param DeleteDatastoreCommandInput - {@link DeleteDatastoreCommandInput}
 * @returns {@link DeleteDatastoreCommandOutput}
 * @see {@link DeleteDatastoreCommandInput} for command's `input` shape.
 * @see {@link DeleteDatastoreCommandOutput} for command's `response` shape.
 * @see {@link MedicalImagingClientResolvedConfig | config} for MedicalImagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the service.</p>
 *
 * @throws {@link MedicalImagingServiceException}
 * <p>Base exception class for all service exceptions from MedicalImaging service.</p>
 *
 *
 * @public
 */
export class DeleteDatastoreCommand extends command<DeleteDatastoreCommandInput, DeleteDatastoreCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDatastore",
  DeleteDatastore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDatastoreRequest;
      output: DeleteDatastoreResponse;
    };
    sdk: {
      input: DeleteDatastoreCommandInput;
      output: DeleteDatastoreCommandOutput;
    };
  };
}
