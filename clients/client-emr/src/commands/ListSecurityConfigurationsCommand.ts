// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSecurityConfigurationsInput, ListSecurityConfigurationsOutput } from "../models/models_0";
import { ListSecurityConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSecurityConfigurationsCommand}.
 */
export interface ListSecurityConfigurationsCommandInput extends ListSecurityConfigurationsInput {}
/**
 * @public
 *
 * The output of {@link ListSecurityConfigurationsCommand}.
 */
export interface ListSecurityConfigurationsCommandOutput extends ListSecurityConfigurationsOutput, __MetadataBearer {}

/**
 * <p>Lists all the security configurations visible to this account, providing their creation
 *          dates and times, and their names. This call returns a maximum of 50 clusters per call, but
 *          returns a marker to track the paging of the cluster list across multiple
 *          ListSecurityConfigurations calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListSecurityConfigurationsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListSecurityConfigurationsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // ListSecurityConfigurationsInput
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListSecurityConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityConfigurationsOutput
 * //   SecurityConfigurations: [ // SecurityConfigurationList
 * //     { // SecurityConfigurationSummary
 * //       Name: "STRING_VALUE",
 * //       CreationDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityConfigurationsCommandInput - {@link ListSecurityConfigurationsCommandInput}
 * @returns {@link ListSecurityConfigurationsCommandOutput}
 * @see {@link ListSecurityConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListSecurityConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class ListSecurityConfigurationsCommand extends $Command
  .classBuilder<
    ListSecurityConfigurationsCommandInput,
    ListSecurityConfigurationsCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "ListSecurityConfigurations", {})
  .n("EMRClient", "ListSecurityConfigurationsCommand")
  .sc(ListSecurityConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSecurityConfigurationsInput;
      output: ListSecurityConfigurationsOutput;
    };
    sdk: {
      input: ListSecurityConfigurationsCommandInput;
      output: ListSecurityConfigurationsCommandOutput;
    };
  };
}
