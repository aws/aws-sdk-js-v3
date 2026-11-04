// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEnvironmentBlueprintInput, GetEnvironmentBlueprintOutput } from "../models/models_1";
import { GetEnvironmentBlueprint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEnvironmentBlueprintCommand}.
 */
export interface GetEnvironmentBlueprintCommandInput extends GetEnvironmentBlueprintInput {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentBlueprintCommand}.
 */
export interface GetEnvironmentBlueprintCommandOutput extends GetEnvironmentBlueprintOutput, __MetadataBearer {}

/**
 * Gets an Amazon DataZone blueprint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetEnvironmentBlueprintCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetEnvironmentBlueprintCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetEnvironmentBlueprintInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentBlueprintOutput
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
 * @param GetEnvironmentBlueprintCommandInput - {@link GetEnvironmentBlueprintCommandInput}
 * @returns {@link GetEnvironmentBlueprintCommandOutput}
 * @see {@link GetEnvironmentBlueprintCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentBlueprintCommandOutput} for command's `response` shape.
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
export class GetEnvironmentBlueprintCommand extends command<GetEnvironmentBlueprintCommandInput, GetEnvironmentBlueprintCommandOutput>(
  _ep0,
  _mw0,
  "GetEnvironmentBlueprint",
  GetEnvironmentBlueprint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnvironmentBlueprintInput;
      output: GetEnvironmentBlueprintOutput;
    };
    sdk: {
      input: GetEnvironmentBlueprintCommandInput;
      output: GetEnvironmentBlueprintCommandOutput;
    };
  };
}
