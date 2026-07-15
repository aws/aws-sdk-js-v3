// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateDataTransformationProfileRequest,
  CreateDataTransformationProfileResponse,
} from "../models/models_0";
import { CreateDataTransformationProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDataTransformationProfileCommand}.
 */
export interface CreateDataTransformationProfileCommandInput extends CreateDataTransformationProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataTransformationProfileCommand}.
 */
export interface CreateDataTransformationProfileCommandOutput extends CreateDataTransformationProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a data transformation profile in DRAFT state. Specify a built-in starter profile, an existing profile version, raw profile content, or a sample data file as the source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, CreateDataTransformationProfileCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, CreateDataTransformationProfileCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // CreateDataTransformationProfileRequest
 *   SourceFormat: "CCDA" || "CSV", // required
 *   Source: { // CreateDataTransformationProfileSource Union: only one key present
 *     StarterProfile: { // StarterProfileSource
 *       StarterProfileName: "STRING_VALUE", // required
 *     },
 *     ExistingVersionedProfileId: { // ExistingVersionedProfileSource
 *       ProfileId: "STRING_VALUE", // required
 *       Version: Number("int"), // required
 *     },
 *     ProfileMapping: { // ProfileMappingSource
 *       ProfileMapping: { // StringMap // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     SampleData: { // SampleDataSource
 *       S3Uri: "STRING_VALUE", // required
 *     },
 *   },
 *   KmsKeyId: "STRING_VALUE",
 *   ProfileDescription: "STRING_VALUE",
 *   ProfileName: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateDataTransformationProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataTransformationProfileResponse
 * //   ProfileId: "STRING_VALUE", // required
 * //   Version: Number("int"), // required
 * //   SourceFormat: "CCDA" || "CSV", // required
 * //   TargetFormat: "FHIR_R4", // required
 * //   ProfileName: "STRING_VALUE", // required
 * //   LastUpdatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateDataTransformationProfileCommandInput - {@link CreateDataTransformationProfileCommandInput}
 * @returns {@link CreateDataTransformationProfileCommandOutput}
 * @see {@link CreateDataTransformationProfileCommandInput} for command's `input` shape.
 * @see {@link CreateDataTransformationProfileCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied. Your account is not authorized to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The data store is in a transition state and the user requested action cannot be performed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested data store was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request exceeds the service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The user has exceeded their maximum number of allowed calls to the given API. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input parameter was invalid.</p>
 *
 * @throws {@link HealthLakeServiceException}
 * <p>Base exception class for all service exceptions from HealthLake service.</p>
 *
 *
 * @public
 */
export class CreateDataTransformationProfileCommand extends command<CreateDataTransformationProfileCommandInput, CreateDataTransformationProfileCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataTransformationProfile",
  CreateDataTransformationProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataTransformationProfileRequest;
      output: CreateDataTransformationProfileResponse;
    };
    sdk: {
      input: CreateDataTransformationProfileCommandInput;
      output: CreateDataTransformationProfileCommandOutput;
    };
  };
}
