// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEnvironmentBlueprintInput, UpdateEnvironmentBlueprintOutput } from "../models/models_2";
import { UpdateEnvironmentBlueprint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEnvironmentBlueprintCommand}.
 */
export interface UpdateEnvironmentBlueprintCommandInput extends UpdateEnvironmentBlueprintInput {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentBlueprintCommand}.
 */
export interface UpdateEnvironmentBlueprintCommandOutput extends UpdateEnvironmentBlueprintOutput, __MetadataBearer {}

/**
 * Updates an environment blueprint in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateEnvironmentBlueprintCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateEnvironmentBlueprintCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // UpdateEnvironmentBlueprintInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   provisioningProperties: { // ProvisioningProperties Union: only one key present
 *     cloudFormation: { // CloudFormationProperties
 *       templateUrl: "STRING_VALUE", // required
 *     },
 *   },
 *   userParameters: [ // CustomParameterList
 *     { // CustomParameter
 *       keyName: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       fieldType: "STRING_VALUE", // required
 *       defaultValue: "STRING_VALUE",
 *       isEditable: true || false,
 *       isOptional: true || false,
 *       isUpdateSupported: true || false,
 *     },
 *   ],
 *   blueprintCategory: "TOOLING",
 * };
 * const command = new UpdateEnvironmentBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnvironmentBlueprintOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   provider: "STRING_VALUE", // required
 * //   provisioningProperties: { // ProvisioningProperties Union: only one key present
 * //     cloudFormation: { // CloudFormationProperties
 * //       templateUrl: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   deploymentProperties: { // DeploymentProperties
 * //     startTimeoutMinutes: Number("int"),
 * //     endTimeoutMinutes: Number("int"),
 * //   },
 * //   userParameters: [ // CustomParameterList
 * //     { // CustomParameter
 * //       keyName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       fieldType: "STRING_VALUE", // required
 * //       defaultValue: "STRING_VALUE",
 * //       isEditable: true || false,
 * //       isOptional: true || false,
 * //       isUpdateSupported: true || false,
 * //     },
 * //   ],
 * //   glossaryTerms: [ // GlossaryTerms
 * //     "STRING_VALUE",
 * //   ],
 * //   blueprintCategory: "TOOLING",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateEnvironmentBlueprintCommandInput - {@link UpdateEnvironmentBlueprintCommandInput}
 * @returns {@link UpdateEnvironmentBlueprintCommandOutput}
 * @see {@link UpdateEnvironmentBlueprintCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentBlueprintCommandOutput} for command's `response` shape.
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
export class UpdateEnvironmentBlueprintCommand extends command<UpdateEnvironmentBlueprintCommandInput, UpdateEnvironmentBlueprintCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEnvironmentBlueprint",
  UpdateEnvironmentBlueprint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnvironmentBlueprintInput;
      output: UpdateEnvironmentBlueprintOutput;
    };
    sdk: {
      input: UpdateEnvironmentBlueprintCommandInput;
      output: UpdateEnvironmentBlueprintCommandOutput;
    };
  };
}
