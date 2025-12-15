// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateEnvironmentBlueprintInput, CreateEnvironmentBlueprintOutput } from "../models/models_0";
import { CreateEnvironmentBlueprint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentBlueprintCommand}.
 */
export interface CreateEnvironmentBlueprintCommandInput extends CreateEnvironmentBlueprintInput {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentBlueprintCommand}.
 */
export interface CreateEnvironmentBlueprintCommandOutput extends CreateEnvironmentBlueprintOutput, __MetadataBearer {}

/**
 * <p>Creates a Amazon DataZone blueprint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateEnvironmentBlueprintCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateEnvironmentBlueprintCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateEnvironmentBlueprintInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
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
 * };
 * const command = new CreateEnvironmentBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentBlueprintOutput
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
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateEnvironmentBlueprintCommandInput - {@link CreateEnvironmentBlueprintCommandInput}
 * @returns {@link CreateEnvironmentBlueprintCommandOutput}
 * @see {@link CreateEnvironmentBlueprintCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentBlueprintCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class CreateEnvironmentBlueprintCommand extends $Command
  .classBuilder<
    CreateEnvironmentBlueprintCommandInput,
    CreateEnvironmentBlueprintCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "CreateEnvironmentBlueprint", {})
  .n("DataZoneClient", "CreateEnvironmentBlueprintCommand")
  .sc(CreateEnvironmentBlueprint$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEnvironmentBlueprintInput;
      output: CreateEnvironmentBlueprintOutput;
    };
    sdk: {
      input: CreateEnvironmentBlueprintCommandInput;
      output: CreateEnvironmentBlueprintCommandOutput;
    };
  };
}
