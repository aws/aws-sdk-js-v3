// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListConfigurationCheckDefinitionsInput, ListConfigurationCheckDefinitionsOutput } from "../models/models_0";
import { ListConfigurationCheckDefinitions } from "../schemas/schemas_3_List";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfigurationCheckDefinitionsCommand}.
 */
export interface ListConfigurationCheckDefinitionsCommandInput extends ListConfigurationCheckDefinitionsInput {}
/**
 * @public
 *
 * The output of {@link ListConfigurationCheckDefinitionsCommand}.
 */
export interface ListConfigurationCheckDefinitionsCommandOutput
  extends ListConfigurationCheckDefinitionsOutput,
    __MetadataBearer {}

/**
 * <p>Lists all configuration check types supported by AWS Systems Manager for SAP.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, ListConfigurationCheckDefinitionsCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, ListConfigurationCheckDefinitionsCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // ListConfigurationCheckDefinitionsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListConfigurationCheckDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationCheckDefinitionsOutput
 * //   ConfigurationChecks: [ // ConfigurationCheckDefinitionList
 * //     { // ConfigurationCheckDefinition
 * //       Id: "SAP_CHECK_01" || "SAP_CHECK_02" || "SAP_CHECK_03",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ApplicableApplicationTypes: [ // ApplicationTypeList
 * //         "HANA" || "SAP_ABAP",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationCheckDefinitionsCommandInput - {@link ListConfigurationCheckDefinitionsCommandInput}
 * @returns {@link ListConfigurationCheckDefinitionsCommandOutput}
 * @see {@link ListConfigurationCheckDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationCheckDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 *
 * @public
 */
export class ListConfigurationCheckDefinitionsCommand extends $Command
  .classBuilder<
    ListConfigurationCheckDefinitionsCommandInput,
    ListConfigurationCheckDefinitionsCommandOutput,
    SsmSapClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SsmSapClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SsmSap", "ListConfigurationCheckDefinitions", {})
  .n("SsmSapClient", "ListConfigurationCheckDefinitionsCommand")
  .sc(ListConfigurationCheckDefinitions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfigurationCheckDefinitionsInput;
      output: ListConfigurationCheckDefinitionsOutput;
    };
    sdk: {
      input: ListConfigurationCheckDefinitionsCommandInput;
      output: ListConfigurationCheckDefinitionsCommandOutput;
    };
  };
}
