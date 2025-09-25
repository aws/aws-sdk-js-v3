// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListConfigurationsRequest, ListConfigurationsResponse } from "../models/models_0";
import { ListConfigurations } from "../schemas/schemas_3_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfigurationsCommand}.
 */
export interface ListConfigurationsCommandInput extends ListConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigurationsCommand}.
 */
export interface ListConfigurationsCommandOutput extends ListConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of configuration items as specified by the value passed to the
 *       required parameter <code>configurationType</code>. Optional filtering may be applied to refine
 *       search results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, ListConfigurationsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, ListConfigurationsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // import type { ApplicationDiscoveryServiceClientConfig } from "@aws-sdk/client-application-discovery-service";
 * const config = {}; // type is ApplicationDiscoveryServiceClientConfig
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // ListConfigurationsRequest
 *   configurationType: "SERVER" || "PROCESS" || "CONNECTION" || "APPLICATION", // required
 *   filters: [ // Filters
 *     { // Filter
 *       name: "STRING_VALUE", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       condition: "STRING_VALUE", // required
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   orderBy: [ // OrderByList
 *     { // OrderByElement
 *       fieldName: "STRING_VALUE", // required
 *       sortOrder: "ASC" || "DESC",
 *     },
 *   ],
 * };
 * const command = new ListConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationsResponse
 * //   configurations: [ // Configurations
 * //     { // Configuration
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationsCommandInput - {@link ListConfigurationsCommandInput}
 * @returns {@link ListConfigurationsCommandOutput}
 * @see {@link ListConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home Region is not set. Set the home Region to continue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified configuration ID was not located. Verify the configuration ID and try
 *       again.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 *
 * @public
 */
export class ListConfigurationsCommand extends $Command
  .classBuilder<
    ListConfigurationsCommandInput,
    ListConfigurationsCommandOutput,
    ApplicationDiscoveryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationDiscoveryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPoseidonService_V2015_11_01", "ListConfigurations", {})
  .n("ApplicationDiscoveryServiceClient", "ListConfigurationsCommand")
  .sc(ListConfigurations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfigurationsRequest;
      output: ListConfigurationsResponse;
    };
    sdk: {
      input: ListConfigurationsCommandInput;
      output: ListConfigurationsCommandOutput;
    };
  };
}
