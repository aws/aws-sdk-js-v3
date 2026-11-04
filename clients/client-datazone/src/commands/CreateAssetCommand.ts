// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAssetInput, CreateAssetOutput } from "../models/models_0";
import { CreateAsset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAssetCommand}.
 */
export interface CreateAssetCommandInput extends CreateAssetInput {}
/**
 * @public
 *
 * The output of {@link CreateAssetCommand}.
 */
export interface CreateAssetCommandOutput extends CreateAssetOutput, __MetadataBearer {}

/**
 * Creates an asset in Amazon DataZone catalog.
 *
 * Before creating assets, make sure that the following requirements are met:
 *
 * - `--domain-identifier` must refer to an existing domain.
 * - `--owning-project-identifier` must be a valid project within the domain.
 * - Asset type must be created beforehand using `create-asset-type`, or be a supported system-defined type. For more information, see [create-asset-type](https://docs.aws.amazon.com/cli/latest/reference/datazone/create-asset-type.html).
 * - `--type-revision` (if used) must match a valid revision of the asset type.
 * - `formsInput` is required when it is associated as required in the `asset-type`. For more information, see [create-form-type](https://docs.aws.amazon.com/cli/latest/reference/datazone/create-form-type.html).
 * - Form content must include all required fields as per the form schema (e.g., `bucketArn`).
 *
 * You must invoke the following pre-requisite commands before invoking this API:
 *
 * - [CreateFormType](https://docs.aws.amazon.com/datazone/latest/APIReference/API_CreateFormType.html)
 * - [CreateAssetType](https://docs.aws.amazon.com/datazone/latest/APIReference/API_CreateAssetType.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateAssetCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateAssetCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateAssetInput
 *   name: "STRING_VALUE", // required
 *   domainIdentifier: "STRING_VALUE", // required
 *   externalIdentifier: "STRING_VALUE",
 *   typeIdentifier: "STRING_VALUE", // required
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
 *   owningProjectIdentifier: "STRING_VALUE", // required
 *   predictionConfiguration: { // PredictionConfiguration
 *     businessNameGeneration: { // BusinessNameGenerationConfiguration
 *       enabled: true || false,
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAssetCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssetOutput
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
 * @param CreateAssetCommandInput - {@link CreateAssetCommandInput}
 * @returns {@link CreateAssetCommandOutput}
 * @see {@link CreateAssetCommandInput} for command's `input` shape.
 * @see {@link CreateAssetCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request has exceeded the specified service quota.
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
export class CreateAssetCommand extends command<CreateAssetCommandInput, CreateAssetCommandOutput>(
  _ep0,
  _mw0,
  "CreateAsset",
  CreateAsset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAssetInput;
      output: CreateAssetOutput;
    };
    sdk: {
      input: CreateAssetCommandInput;
      output: CreateAssetCommandOutput;
    };
  };
}
