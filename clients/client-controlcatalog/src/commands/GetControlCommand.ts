// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ControlCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ControlCatalogClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetControlRequest, GetControlResponse } from "../models/models_0";
import { GetControl } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns details about a specific control, most notably a list of Amazon Web Services Regions where this control is supported. Input a value for the <i>ControlArn</i> parameter, in ARN form. <code>GetControl</code> accepts <i>controltower</i> or <i>controlcatalog</i> control ARNs as input. Returns a <i>controlcatalog</i> ARN format.</p> <p>In the API response, controls that have the value <code>GLOBAL</code> in the <code>Scope</code> field do not show the <code>DeployableRegions</code> field, because it does not apply. Controls that have the value <code>REGIONAL</code> in the <code>Scope</code> field return a value for the <code>DeployableRegions</code> field, as shown in the example.</p>
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
 * //   Parameters: [ // ControlParameters
 * //     { // ControlParameter
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   CreateTime: new Date("TIMESTAMP"),
 * //   GovernedResources: [ // GovernedResources
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link ControlCatalogServiceException}
 * <p>Base exception class for all service exceptions from ControlCatalog service.</p>
 *
 *
 * @public
 */
export class GetControlCommand extends $Command
  .classBuilder<
    GetControlCommandInput,
    GetControlCommandOutput,
    ControlCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ControlCatalog", "GetControl", {})
  .n("ControlCatalogClient", "GetControlCommand")
  .sc(GetControl)
  .build() {
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
