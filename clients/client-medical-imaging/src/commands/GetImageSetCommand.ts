// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetImageSetRequest, GetImageSetResponse } from "../models/models_0";
import { GetImageSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetImageSetCommand}.
 */
export interface GetImageSetCommandInput extends GetImageSetRequest {}
/**
 * @public
 *
 * The output of {@link GetImageSetCommand}.
 */
export interface GetImageSetCommandOutput extends GetImageSetResponse, __MetadataBearer {}

/**
 * Get image set properties.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, GetImageSetCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, GetImageSetCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * // import type { MedicalImagingClientConfig } from "@aws-sdk/client-medical-imaging";
 * const config = {}; // type is MedicalImagingClientConfig
 * const client = new MedicalImagingClient(config);
 * const input = { // GetImageSetRequest
 *   datastoreId: "STRING_VALUE", // required
 *   imageSetId: "STRING_VALUE", // required
 *   versionId: "STRING_VALUE",
 * };
 * const command = new GetImageSetCommand(input);
 * const response = await client.send(command);
 * // { // GetImageSetResponse
 * //   datastoreId: "STRING_VALUE", // required
 * //   imageSetId: "STRING_VALUE", // required
 * //   versionId: "STRING_VALUE", // required
 * //   imageSetState: "ACTIVE" || "LOCKED" || "DELETED", // required
 * //   imageSetWorkflowStatus: "CREATED" || "COPIED" || "COPYING" || "COPYING_WITH_READ_ONLY_ACCESS" || "COPY_FAILED" || "UPDATING" || "UPDATING_FOR_STUDY_CONSISTENCY" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED" || "IMPORTING" || "IMPORTED" || "IMPORT_FAILED",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   deletedAt: new Date("TIMESTAMP"),
 * //   message: "STRING_VALUE",
 * //   imageSetArn: "STRING_VALUE",
 * //   overrides: { // Overrides
 * //     forced: true || false,
 * //   },
 * //   isPrimary: true || false,
 * //   lastAccessedAt: new Date("TIMESTAMP"),
 * //   storageTier: "FREQUENT_ACCESS" || "ARCHIVE_INSTANT_ACCESS",
 * // };
 *
 * ```
 *
 * @param GetImageSetCommandInput - {@link GetImageSetCommandInput}
 * @returns {@link GetImageSetCommandOutput}
 * @see {@link GetImageSetCommandInput} for command's `input` shape.
 * @see {@link GetImageSetCommandOutput} for command's `response` shape.
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
export class GetImageSetCommand extends command<GetImageSetCommandInput, GetImageSetCommandOutput>(
  _ep0,
  _mw0,
  "GetImageSet",
  GetImageSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImageSetRequest;
      output: GetImageSetResponse;
    };
    sdk: {
      input: GetImageSetCommandInput;
      output: GetImageSetCommandOutput;
    };
  };
}
