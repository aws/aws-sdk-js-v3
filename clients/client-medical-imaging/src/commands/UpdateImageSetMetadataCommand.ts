// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateImageSetMetadataRequest, UpdateImageSetMetadataResponse } from "../models/models_0";
import { UpdateImageSetMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateImageSetMetadataCommand}.
 */
export interface UpdateImageSetMetadataCommandInput extends UpdateImageSetMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateImageSetMetadataCommand}.
 */
export interface UpdateImageSetMetadataCommandOutput extends UpdateImageSetMetadataResponse, __MetadataBearer {}

/**
 * <p>Update image set metadata attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, UpdateImageSetMetadataCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, UpdateImageSetMetadataCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * // import type { MedicalImagingClientConfig } from "@aws-sdk/client-medical-imaging";
 * const config = {}; // type is MedicalImagingClientConfig
 * const client = new MedicalImagingClient(config);
 * const input = { // UpdateImageSetMetadataRequest
 *   datastoreId: "STRING_VALUE", // required
 *   imageSetId: "STRING_VALUE", // required
 *   latestVersionId: "STRING_VALUE", // required
 *   force: true || false,
 *   includeStudyImageSets: true || false,
 *   updateImageSetMetadataUpdates: { // MetadataUpdates Union: only one key present
 *     DICOMUpdates: { // DICOMUpdates
 *       removableAttributes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       updatableAttributes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     },
 *     revertToVersionId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateImageSetMetadataCommand(input);
 * const response = await client.send(command);
 * // { // UpdateImageSetMetadataResponse
 * //   datastoreId: "STRING_VALUE", // required
 * //   imageSetId: "STRING_VALUE", // required
 * //   latestVersionId: "STRING_VALUE", // required
 * //   imageSetState: "ACTIVE" || "LOCKED" || "DELETED", // required
 * //   imageSetWorkflowStatus: "CREATED" || "COPIED" || "COPYING" || "COPYING_WITH_READ_ONLY_ACCESS" || "COPY_FAILED" || "UPDATING" || "UPDATING_FOR_STUDY_CONSISTENCY" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED" || "IMPORTING" || "IMPORTED" || "IMPORT_FAILED",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateImageSetMetadataCommandInput - {@link UpdateImageSetMetadataCommandInput}
 * @returns {@link UpdateImageSetMetadataCommandOutput}
 * @see {@link UpdateImageSetMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateImageSetMetadataCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request caused a service quota to be exceeded.</p>
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
export class UpdateImageSetMetadataCommand extends command<UpdateImageSetMetadataCommandInput, UpdateImageSetMetadataCommandOutput>(
  _ep0,
  _mw0,
  "UpdateImageSetMetadata",
  UpdateImageSetMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateImageSetMetadataRequest;
      output: UpdateImageSetMetadataResponse;
    };
    sdk: {
      input: UpdateImageSetMetadataCommandInput;
      output: UpdateImageSetMetadataCommandOutput;
    };
  };
}
