// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFHIRDatastoreRequest, DeleteFHIRDatastoreResponse } from "../models/models_0";
import { DeleteFHIRDatastore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFHIRDatastoreCommand}.
 */
export interface DeleteFHIRDatastoreCommandInput extends DeleteFHIRDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFHIRDatastoreCommand}.
 */
export interface DeleteFHIRDatastoreCommandOutput extends DeleteFHIRDatastoreResponse, __MetadataBearer {}

/**
 * Delete a FHIR-enabled data store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DeleteFHIRDatastoreCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DeleteFHIRDatastoreCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // DeleteFHIRDatastoreRequest
 *   DatastoreId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFHIRDatastoreCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFHIRDatastoreResponse
 * //   DatastoreId: "STRING_VALUE", // required
 * //   DatastoreArn: "STRING_VALUE", // required
 * //   DatastoreStatus: "CREATING" || "ACTIVE" || "DELETING" || "DELETED" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED", // required
 * //   DatastoreEndpoint: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteFHIRDatastoreCommandInput - {@link DeleteFHIRDatastoreCommandInput}
 * @returns {@link DeleteFHIRDatastoreCommandOutput}
 * @see {@link DeleteFHIRDatastoreCommandInput} for command's `input` shape.
 * @see {@link DeleteFHIRDatastoreCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied. Your account is not authorized to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The data store is in a transition state and the user requested action cannot be performed.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unknown internal error occurred in the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested data store was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The user has exceeded their maximum number of allowed calls to the given API.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input parameter was invalid.
 *
 * @throws {@link HealthLakeServiceException}
 *
 * Base exception class for all service exceptions from HealthLake service.
 *
 * @public
 */
export class DeleteFHIRDatastoreCommand extends command<DeleteFHIRDatastoreCommandInput, DeleteFHIRDatastoreCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFHIRDatastore",
  DeleteFHIRDatastore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFHIRDatastoreRequest;
      output: DeleteFHIRDatastoreResponse;
    };
    sdk: {
      input: DeleteFHIRDatastoreCommandInput;
      output: DeleteFHIRDatastoreCommandOutput;
    };
  };
}
