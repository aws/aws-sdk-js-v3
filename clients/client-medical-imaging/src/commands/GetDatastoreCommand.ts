// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDatastoreRequest, GetDatastoreResponse } from "../models/models_0";
import { GetDatastore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDatastoreCommand}.
 */
export interface GetDatastoreCommandInput extends GetDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link GetDatastoreCommand}.
 */
export interface GetDatastoreCommandOutput extends GetDatastoreResponse, __MetadataBearer {}

/**
 * Get data store properties.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, GetDatastoreCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, GetDatastoreCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * // import type { MedicalImagingClientConfig } from "@aws-sdk/client-medical-imaging";
 * const config = {}; // type is MedicalImagingClientConfig
 * const client = new MedicalImagingClient(config);
 * const input = { // GetDatastoreRequest
 *   datastoreId: "STRING_VALUE", // required
 * };
 * const command = new GetDatastoreCommand(input);
 * const response = await client.send(command);
 * // { // GetDatastoreResponse
 * //   datastoreProperties: { // DatastoreProperties
 * //     datastoreId: "STRING_VALUE", // required
 * //     datastoreName: "STRING_VALUE", // required
 * //     datastoreStatus: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DELETING" || "DELETED", // required
 * //     kmsKeyArn: "STRING_VALUE",
 * //     lambdaAuthorizerArn: "STRING_VALUE",
 * //     losslessStorageFormat: "HTJ2K" || "JPEG_2000_LOSSLESS",
 * //     datastoreArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDatastoreCommandInput - {@link GetDatastoreCommandInput}
 * @returns {@link GetDatastoreCommandOutput}
 * @see {@link GetDatastoreCommandInput} for command's `input` shape.
 * @see {@link GetDatastoreCommandOutput} for command's `response` shape.
 * @see {@link MedicalImagingClientResolvedConfig | config} for MedicalImagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints set by the service.
 *
 * @throws {@link MedicalImagingServiceException}
 *
 * Base exception class for all service exceptions from MedicalImaging service.
 *
 * @public
 */
export class GetDatastoreCommand extends command<GetDatastoreCommandInput, GetDatastoreCommandOutput>(
  _ep0,
  _mw0,
  "GetDatastore",
  GetDatastore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDatastoreRequest;
      output: GetDatastoreResponse;
    };
    sdk: {
      input: GetDatastoreCommandInput;
      output: GetDatastoreCommandOutput;
    };
  };
}
