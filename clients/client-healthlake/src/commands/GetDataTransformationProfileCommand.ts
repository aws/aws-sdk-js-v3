// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDataTransformationProfileRequest, GetDataTransformationProfileResponse } from "../models/models_0";
import { GetDataTransformationProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDataTransformationProfileCommand}.
 */
export interface GetDataTransformationProfileCommandInput extends GetDataTransformationProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetDataTransformationProfileCommand}.
 */
export interface GetDataTransformationProfileCommandOutput extends GetDataTransformationProfileResponse, __MetadataBearer {}

/**
 * Retrieves a data transformation profile's metadata and profile content at a specific version. Specify version 0 to retrieve the DRAFT, a version number between 1 and 99 to retrieve a specific published version, or omit the version to retrieve the latest published version.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, GetDataTransformationProfileCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, GetDataTransformationProfileCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // GetDataTransformationProfileRequest
 *   ProfileId: "STRING_VALUE", // required
 *   ProfileVersion: Number("int"),
 * };
 * const command = new GetDataTransformationProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetDataTransformationProfileResponse
 * //   ProfileId: "STRING_VALUE", // required
 * //   Version: Number("int"), // required
 * //   SourceFormat: "CCDA" || "CSV", // required
 * //   TargetFormat: "FHIR_R4", // required
 * //   ProfileMapping: { // ProfileMapping // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ProfileName: "STRING_VALUE",
 * //   ProfileDescription: "STRING_VALUE",
 * //   ChangeDescription: "STRING_VALUE",
 * //   LastUpdatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetDataTransformationProfileCommandInput - {@link GetDataTransformationProfileCommandInput}
 * @returns {@link GetDataTransformationProfileCommandOutput}
 * @see {@link GetDataTransformationProfileCommandInput} for command's `input` shape.
 * @see {@link GetDataTransformationProfileCommandOutput} for command's `response` shape.
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
export class GetDataTransformationProfileCommand extends command<GetDataTransformationProfileCommandInput, GetDataTransformationProfileCommandOutput>(
  _ep0,
  _mw0,
  "GetDataTransformationProfile",
  GetDataTransformationProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataTransformationProfileRequest;
      output: GetDataTransformationProfileResponse;
    };
    sdk: {
      input: GetDataTransformationProfileCommandInput;
      output: GetDataTransformationProfileCommandOutput;
    };
  };
}
