// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CopyImageSetRequest, CopyImageSetResponse } from "../models/models_0";
import { CopyImageSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CopyImageSetCommand}.
 */
export interface CopyImageSetCommandInput extends CopyImageSetRequest {}
/**
 * @public
 *
 * The output of {@link CopyImageSetCommand}.
 */
export interface CopyImageSetCommandOutput extends CopyImageSetResponse, __MetadataBearer {}

/**
 * Copy an image set.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, CopyImageSetCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, CopyImageSetCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * // import type { MedicalImagingClientConfig } from "@aws-sdk/client-medical-imaging";
 * const config = {}; // type is MedicalImagingClientConfig
 * const client = new MedicalImagingClient(config);
 * const input = { // CopyImageSetRequest
 *   datastoreId: "STRING_VALUE", // required
 *   sourceImageSetId: "STRING_VALUE", // required
 *   copyImageSetInformation: { // CopyImageSetInformation
 *     sourceImageSet: { // CopySourceImageSetInformation
 *       latestVersionId: "STRING_VALUE", // required
 *       DICOMCopies: { // MetadataCopies
 *         copiableAttributes: "STRING_VALUE", // required
 *       },
 *     },
 *     destinationImageSet: { // CopyDestinationImageSet
 *       imageSetId: "STRING_VALUE", // required
 *       latestVersionId: "STRING_VALUE", // required
 *     },
 *   },
 *   force: true || false,
 *   promoteToPrimary: true || false,
 * };
 * const command = new CopyImageSetCommand(input);
 * const response = await client.send(command);
 * // { // CopyImageSetResponse
 * //   datastoreId: "STRING_VALUE", // required
 * //   sourceImageSetProperties: { // CopySourceImageSetProperties
 * //     imageSetId: "STRING_VALUE", // required
 * //     latestVersionId: "STRING_VALUE", // required
 * //     imageSetState: "ACTIVE" || "LOCKED" || "DELETED",
 * //     imageSetWorkflowStatus: "CREATED" || "COPIED" || "COPYING" || "COPYING_WITH_READ_ONLY_ACCESS" || "COPY_FAILED" || "UPDATING" || "UPDATING_FOR_STUDY_CONSISTENCY" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED" || "IMPORTING" || "IMPORTED" || "IMPORT_FAILED",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     imageSetArn: "STRING_VALUE",
 * //   },
 * //   destinationImageSetProperties: { // CopyDestinationImageSetProperties
 * //     imageSetId: "STRING_VALUE", // required
 * //     latestVersionId: "STRING_VALUE", // required
 * //     imageSetState: "ACTIVE" || "LOCKED" || "DELETED",
 * //     imageSetWorkflowStatus: "CREATED" || "COPIED" || "COPYING" || "COPYING_WITH_READ_ONLY_ACCESS" || "COPY_FAILED" || "UPDATING" || "UPDATING_FOR_STUDY_CONSISTENCY" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED" || "IMPORTING" || "IMPORTED" || "IMPORT_FAILED",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     imageSetArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CopyImageSetCommandInput - {@link CopyImageSetCommandInput}
 * @returns {@link CopyImageSetCommandOutput}
 * @see {@link CopyImageSetCommandInput} for command's `input` shape.
 * @see {@link CopyImageSetCommandOutput} for command's `response` shape.
 * @see {@link MedicalImagingClientResolvedConfig | config} for MedicalImagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request caused a service quota to be exceeded.
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
export class CopyImageSetCommand extends command<CopyImageSetCommandInput, CopyImageSetCommandOutput>(
  _ep0,
  _mw0,
  "CopyImageSet",
  CopyImageSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyImageSetRequest;
      output: CopyImageSetResponse;
    };
    sdk: {
      input: CopyImageSetCommandInput;
      output: CopyImageSetCommandOutput;
    };
  };
}
