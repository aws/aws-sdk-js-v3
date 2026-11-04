// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMetadataGenerationRunInput, GetMetadataGenerationRunOutput } from "../models/models_1";
import { GetMetadataGenerationRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMetadataGenerationRunCommand}.
 */
export interface GetMetadataGenerationRunCommandInput extends GetMetadataGenerationRunInput {}
/**
 * @public
 *
 * The output of {@link GetMetadataGenerationRunCommand}.
 */
export interface GetMetadataGenerationRunCommandOutput extends GetMetadataGenerationRunOutput, __MetadataBearer {}

/**
 * Gets a metadata generation run in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - Valid domain and run identifier.
 * - The metadata generation run must exist.
 * - User must have read access to the metadata run.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetMetadataGenerationRunCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetMetadataGenerationRunCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetMetadataGenerationRunInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   type: "BUSINESS_DESCRIPTIONS" || "BUSINESS_NAMES" || "BUSINESS_GLOSSARY_ASSOCIATIONS",
 * };
 * const command = new GetMetadataGenerationRunCommand(input);
 * const response = await client.send(command);
 * // { // GetMetadataGenerationRunOutput
 * //   domainId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   target: { // MetadataGenerationRunTarget
 * //     type: "ASSET", // required
 * //     identifier: "STRING_VALUE", // required
 * //     revision: "STRING_VALUE",
 * //   },
 * //   status: "SUBMITTED" || "IN_PROGRESS" || "CANCELED" || "SUCCEEDED" || "FAILED" || "PARTIALLY_SUCCEEDED",
 * //   type: "BUSINESS_DESCRIPTIONS" || "BUSINESS_NAMES" || "BUSINESS_GLOSSARY_ASSOCIATIONS",
 * //   types: [ // MetadataGenerationRunTypes
 * //     "BUSINESS_DESCRIPTIONS" || "BUSINESS_NAMES" || "BUSINESS_GLOSSARY_ASSOCIATIONS",
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   owningProjectId: "STRING_VALUE", // required
 * //   typeStats: [ // MetadataGenerationRunTypeStats
 * //     { // MetadataGenerationRunTypeStat
 * //       type: "BUSINESS_DESCRIPTIONS" || "BUSINESS_NAMES" || "BUSINESS_GLOSSARY_ASSOCIATIONS", // required
 * //       status: "SUBMITTED" || "IN_PROGRESS" || "CANCELED" || "SUCCEEDED" || "FAILED" || "PARTIALLY_SUCCEEDED", // required
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMetadataGenerationRunCommandInput - {@link GetMetadataGenerationRunCommandInput}
 * @returns {@link GetMetadataGenerationRunCommandOutput}
 * @see {@link GetMetadataGenerationRunCommandInput} for command's `input` shape.
 * @see {@link GetMetadataGenerationRunCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
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
export class GetMetadataGenerationRunCommand extends command<GetMetadataGenerationRunCommandInput, GetMetadataGenerationRunCommandOutput>(
  _ep0,
  _mw0,
  "GetMetadataGenerationRun",
  GetMetadataGenerationRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMetadataGenerationRunInput;
      output: GetMetadataGenerationRunOutput;
    };
    sdk: {
      input: GetMetadataGenerationRunCommandInput;
      output: GetMetadataGenerationRunCommandOutput;
    };
  };
}
