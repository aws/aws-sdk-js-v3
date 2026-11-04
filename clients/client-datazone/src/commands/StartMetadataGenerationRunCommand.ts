// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMetadataGenerationRunInput, StartMetadataGenerationRunOutput } from "../models/models_1";
import { StartMetadataGenerationRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMetadataGenerationRunCommand}.
 */
export interface StartMetadataGenerationRunCommandInput extends StartMetadataGenerationRunInput {}
/**
 * @public
 *
 * The output of {@link StartMetadataGenerationRunCommand}.
 */
export interface StartMetadataGenerationRunCommandOutput extends StartMetadataGenerationRunOutput, __MetadataBearer {}

/**
 * Starts the metadata generation run.
 *
 * Prerequisites:
 *
 * - Asset must be created and belong to the specified domain and project.
 * - Asset type must be supported for metadata generation (e.g., Amazon Web Services Glue table).
 * - Asset must have a structured schema with valid rows and columns.
 * - Valid values for --type: BUSINESS_DESCRIPTIONS, BUSINESS_NAMES, BUSINESS_GLOSSARY_ASSOCIATIONS.
 * - The user must have permission to run metadata generation in the domain/project.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, StartMetadataGenerationRunCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, StartMetadataGenerationRunCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // StartMetadataGenerationRunInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   type: "BUSINESS_DESCRIPTIONS" || "BUSINESS_NAMES" || "BUSINESS_GLOSSARY_ASSOCIATIONS",
 *   types: [ // MetadataGenerationRunTypes
 *     "BUSINESS_DESCRIPTIONS" || "BUSINESS_NAMES" || "BUSINESS_GLOSSARY_ASSOCIATIONS",
 *   ],
 *   target: { // MetadataGenerationRunTarget
 *     type: "ASSET", // required
 *     identifier: "STRING_VALUE", // required
 *     revision: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 *   owningProjectIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StartMetadataGenerationRunCommand(input);
 * const response = await client.send(command);
 * // { // StartMetadataGenerationRunOutput
 * //   domainId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   status: "SUBMITTED" || "IN_PROGRESS" || "CANCELED" || "SUCCEEDED" || "FAILED" || "PARTIALLY_SUCCEEDED",
 * //   type: "BUSINESS_DESCRIPTIONS" || "BUSINESS_NAMES" || "BUSINESS_GLOSSARY_ASSOCIATIONS",
 * //   types: [ // MetadataGenerationRunTypes
 * //     "BUSINESS_DESCRIPTIONS" || "BUSINESS_NAMES" || "BUSINESS_GLOSSARY_ASSOCIATIONS",
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   owningProjectId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMetadataGenerationRunCommandInput - {@link StartMetadataGenerationRunCommandInput}
 * @returns {@link StartMetadataGenerationRunCommandOutput}
 * @see {@link StartMetadataGenerationRunCommandInput} for command's `input` shape.
 * @see {@link StartMetadataGenerationRunCommandOutput} for command's `response` shape.
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
export class StartMetadataGenerationRunCommand extends command<StartMetadataGenerationRunCommandInput, StartMetadataGenerationRunCommandOutput>(
  _ep0,
  _mw0,
  "StartMetadataGenerationRun",
  StartMetadataGenerationRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMetadataGenerationRunInput;
      output: StartMetadataGenerationRunOutput;
    };
    sdk: {
      input: StartMetadataGenerationRunCommandInput;
      output: StartMetadataGenerationRunCommandOutput;
    };
  };
}
