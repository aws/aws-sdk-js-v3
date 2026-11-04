// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetControlRequest, GetControlResponse } from "../models/models_0";
import { GetControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetControlCommand}.
 */
export interface GetControlCommandInput extends GetControlRequest {}
/**
 * @public
 *
 * The output of {@link GetControlCommand}.
 */
export interface GetControlCommandOutput extends GetControlResponse, __MetadataBearer {}

/**
 * Returns details about a specific control, most notably a list of Amazon Web Services Regions where this control is supported. Input a value for the *ControlArn* parameter, in ARN form. `GetControl` accepts *controltower* or *controlcatalog* control ARNs as input. Returns a *controlcatalog* ARN format.
 *
 * In the API response, controls that have the value `GLOBAL` in the `Scope` field do not show the `DeployableRegions` field, because it does not apply. Controls that have the value `REGIONAL` in the `Scope` field return a value for the `DeployableRegions` field, as shown in the example.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlCatalogClient, GetControlCommand } from "@aws-sdk/client-controlcatalog"; // ES Modules import
 * // const { ControlCatalogClient, GetControlCommand } = require("@aws-sdk/client-controlcatalog"); // CommonJS import
 * // import type { ControlCatalogClientConfig } from "@aws-sdk/client-controlcatalog";
 * const config = {}; // type is ControlCatalogClientConfig
 * const client = new ControlCatalogClient(config);
 * const input = { // GetControlRequest
 *   ControlArn: "STRING_VALUE", // required
 * };
 * const command = new GetControlCommand(input);
 * const response = await client.send(command);
 * // { // GetControlResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Aliases: [ // ControlAliases
 * //     "STRING_VALUE",
 * //   ],
 * //   Name: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE", // required
 * //   Behavior: "PREVENTIVE" || "PROACTIVE" || "DETECTIVE", // required
 * //   Severity: "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 * //   RegionConfiguration: { // RegionConfiguration
 * //     Scope: "GLOBAL" || "REGIONAL", // required
 * //     DeployableRegions: [ // DeployableRegions
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   Implementation: { // ImplementationDetails
 * //     Type: "STRING_VALUE", // required
 * //     Identifier: "STRING_VALUE",
 * //   },
 * //   ParameterRequirementSummary: "REQUIRED" || "OPTIONAL" || "NONE",
 * //   Parameters: [ // ControlParameters
 * //     { // ControlParameter
 * //       Name: "STRING_VALUE", // required
 * //       Requirement: "REQUIRED" || "OPTIONAL",
 * //     },
 * //   ],
 * //   CreateTime: new Date("TIMESTAMP"),
 * //   GovernedResources: [ // GovernedResources
 * //     "STRING_VALUE",
 * //   ],
 * //   GovernedProviders: [ // GovernedProviders
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetControlCommandInput - {@link GetControlCommandInput}
 * @returns {@link GetControlCommandOutput}
 * @see {@link GetControlCommandInput} for command's `input` shape.
 * @see {@link GetControlCommandOutput} for command's `response` shape.
 * @see {@link ControlCatalogClientResolvedConfig | config} for ControlCatalogClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred during the processing of your request. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link ControlCatalogServiceException}
 *
 * Base exception class for all service exceptions from ControlCatalog service.
 *
 * @public
 */
export class GetControlCommand extends command<GetControlCommandInput, GetControlCommandOutput>(
  _ep0,
  _mw0,
  "GetControl",
  GetControl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetControlRequest;
      output: GetControlResponse;
    };
    sdk: {
      input: GetControlCommandInput;
      output: GetControlCommandOutput;
    };
  };
}
