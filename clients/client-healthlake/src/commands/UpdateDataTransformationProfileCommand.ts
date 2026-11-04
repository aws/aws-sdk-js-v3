// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateDataTransformationProfileRequest,
  UpdateDataTransformationProfileResponse,
} from "../models/models_0";
import { UpdateDataTransformationProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDataTransformationProfileCommand}.
 */
export interface UpdateDataTransformationProfileCommandInput extends UpdateDataTransformationProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataTransformationProfileCommand}.
 */
export interface UpdateDataTransformationProfileCommandOutput extends UpdateDataTransformationProfileResponse, __MetadataBearer {}

/**
 * Updates the DRAFT version (version 0) of a data transformation profile with new profile content. The update replaces all existing DRAFT content.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, UpdateDataTransformationProfileCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, UpdateDataTransformationProfileCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // UpdateDataTransformationProfileRequest
 *   ProfileId: "STRING_VALUE", // required
 *   ProfileMapping: { // ProfileMapping // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ChangeDescription: "STRING_VALUE",
 * };
 * const command = new UpdateDataTransformationProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataTransformationProfileResponse
 * //   ProfileId: "STRING_VALUE", // required
 * //   SourceFormat: "CCDA" || "CSV", // required
 * //   TargetFormat: "FHIR_R4", // required
 * //   ProfileName: "STRING_VALUE",
 * //   LastUpdatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateDataTransformationProfileCommandInput - {@link UpdateDataTransformationProfileCommandInput}
 * @returns {@link UpdateDataTransformationProfileCommandOutput}
 * @see {@link UpdateDataTransformationProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateDataTransformationProfileCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied. Your account is not authorized to perform this operation.
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
export class UpdateDataTransformationProfileCommand extends command<UpdateDataTransformationProfileCommandInput, UpdateDataTransformationProfileCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDataTransformationProfile",
  UpdateDataTransformationProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataTransformationProfileRequest;
      output: UpdateDataTransformationProfileResponse;
    };
    sdk: {
      input: UpdateDataTransformationProfileCommandInput;
      output: UpdateDataTransformationProfileCommandOutput;
    };
  };
}
