// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAssetRevisionInput, CreateAssetRevisionOutput } from "../models/models_0";
import { CreateAssetRevision$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAssetRevisionCommand}.
 */
export interface CreateAssetRevisionCommandInput extends CreateAssetRevisionInput {}
/**
 * @public
 *
 * The output of {@link CreateAssetRevisionCommand}.
 */
export interface CreateAssetRevisionCommandOutput extends CreateAssetRevisionOutput, __MetadataBearer {}

/**
 * Creates a revision of the asset.
 *
 * Asset revisions represent new versions of existing assets, capturing changes to either the underlying data or its metadata. They maintain a historical record of how assets evolve over time, who made changes, and when those changes occurred. This versioning capability is crucial for governance and compliance, allowing organizations to track changes, understand their impact, and roll back if necessary.
 *
 * Prerequisites:
 *
 * - Asset must already exist in the domain with identifier.
 * - `formsInput` is required when asset has the form type. `typeRevision` should be the latest version of form type.
 * - The form content must include all required fields (e.g., `bucketArn` for `S3ObjectCollectionForm`).
 * - The owning project of the original asset must still exist and be active.
 * - User must have write access to the project and domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateAssetRevisionCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateAssetRevisionCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateAssetRevisionInput
 *   name: "STRING_VALUE", // required
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   typeRevision: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   glossaryTerms: [ // GlossaryTerms
 *     "STRING_VALUE",
 *   ],
 *   formsInput: [ // FormInputList
 *     { // FormInput
 *       formName: "STRING_VALUE", // required
 *       typeIdentifier: "STRING_VALUE",
 *       typeRevision: "STRING_VALUE",
 *       content: "STRING_VALUE",
 *     },
 *   ],
 *   predictionConfiguration: { // PredictionConfiguration
 *     businessNameGeneration: { // BusinessNameGenerationConfiguration
 *       enabled: true || false,
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAssetRevisionCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssetRevisionOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   typeIdentifier: "STRING_VALUE", // required
 * //   typeRevision: "STRING_VALUE", // required
 * //   externalIdentifier: "STRING_VALUE",
 * //   revision: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   firstRevisionCreatedAt: new Date("TIMESTAMP"),
 * //   firstRevisionCreatedBy: "STRING_VALUE",
 * //   glossaryTerms: [ // GlossaryTerms
 * //     "STRING_VALUE",
 * //   ],
 * //   governedGlossaryTerms: [ // GovernedGlossaryTerms
 * //     "STRING_VALUE",
 * //   ],
 * //   owningProjectId: "STRING_VALUE", // required
 * //   domainId: "STRING_VALUE", // required
 * //   listing: { // AssetListingDetails
 * //     listingId: "STRING_VALUE", // required
 * //     listingStatus: "CREATING" || "ACTIVE" || "INACTIVE", // required
 * //   },
 * //   formsOutput: [ // FormOutputList // required
 * //     { // FormOutput
 * //       formName: "STRING_VALUE", // required
 * //       typeName: "STRING_VALUE",
 * //       typeRevision: "STRING_VALUE",
 * //       content: "STRING_VALUE",
 * //     },
 * //   ],
 * //   readOnlyFormsOutput: [
 * //     {
 * //       formName: "STRING_VALUE", // required
 * //       typeName: "STRING_VALUE",
 * //       typeRevision: "STRING_VALUE",
 * //       content: "STRING_VALUE",
 * //     },
 * //   ],
 * //   latestTimeSeriesDataPointFormsOutput: [ // TimeSeriesDataPointSummaryFormOutputList
 * //     { // TimeSeriesDataPointSummaryFormOutput
 * //       formName: "STRING_VALUE", // required
 * //       typeIdentifier: "STRING_VALUE", // required
 * //       typeRevision: "STRING_VALUE",
 * //       timestamp: new Date("TIMESTAMP"), // required
 * //       contentSummary: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //     },
 * //   ],
 * //   predictionConfiguration: { // PredictionConfiguration
 * //     businessNameGeneration: { // BusinessNameGenerationConfiguration
 * //       enabled: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAssetRevisionCommandInput - {@link CreateAssetRevisionCommandInput}
 * @returns {@link CreateAssetRevisionCommandOutput}
 * @see {@link CreateAssetRevisionCommandInput} for command's `input` shape.
 * @see {@link CreateAssetRevisionCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class CreateAssetRevisionCommand extends command<CreateAssetRevisionCommandInput, CreateAssetRevisionCommandOutput>(
  _ep0,
  _mw0,
  "CreateAssetRevision",
  CreateAssetRevision$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAssetRevisionInput;
      output: CreateAssetRevisionOutput;
    };
    sdk: {
      input: CreateAssetRevisionCommandInput;
      output: CreateAssetRevisionCommandOutput;
    };
  };
}
