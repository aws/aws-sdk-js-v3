// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartConfigurationChecksInput, StartConfigurationChecksOutput } from "../models/models_0";
import { StartConfigurationChecks$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartConfigurationChecksCommand}.
 */
export interface StartConfigurationChecksCommandInput extends StartConfigurationChecksInput {}
/**
 * @public
 *
 * The output of {@link StartConfigurationChecksCommand}.
 */
export interface StartConfigurationChecksCommandOutput extends StartConfigurationChecksOutput, __MetadataBearer {}

/**
 * <p>Initiates configuration check operations against a specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, StartConfigurationChecksCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, StartConfigurationChecksCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // StartConfigurationChecksInput
 *   ApplicationId: "STRING_VALUE", // required
 *   ConfigurationCheckIds: [ // ConfigurationCheckTypeList
 *     "SAP_CHECK_01" || "SAP_CHECK_02" || "SAP_CHECK_03",
 *   ],
 * };
 * const command = new StartConfigurationChecksCommand(input);
 * const response = await client.send(command);
 * // { // StartConfigurationChecksOutput
 * //   ConfigurationCheckOperations: [ // ConfigurationCheckOperationList
 * //     { // ConfigurationCheckOperation
 * //       Id: "STRING_VALUE",
 * //       ApplicationId: "STRING_VALUE",
 * //       Status: "INPROGRESS" || "SUCCESS" || "ERROR",
 * //       StatusMessage: "STRING_VALUE",
 * //       ConfigurationCheckId: "SAP_CHECK_01" || "SAP_CHECK_02" || "SAP_CHECK_03",
 * //       ConfigurationCheckName: "STRING_VALUE",
 * //       ConfigurationCheckDescription: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       RuleStatusCounts: { // RuleStatusCounts
 * //         Failed: Number("int"),
 * //         Warning: Number("int"),
 * //         Info: Number("int"),
 * //         Passed: Number("int"),
 * //         Unknown: Number("int"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param StartConfigurationChecksCommandInput - {@link StartConfigurationChecksCommandInput}
 * @returns {@link StartConfigurationChecksCommandOutput}
 * @see {@link StartConfigurationChecksCommandInput} for command's `input` shape.
 * @see {@link StartConfigurationChecksCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict has occurred.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource is not available.</p>
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
export class StartConfigurationChecksCommand extends $Command
  .classBuilder<
    StartConfigurationChecksCommandInput,
    StartConfigurationChecksCommandOutput,
    SsmSapClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SsmSapClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SsmSap", "StartConfigurationChecks", {})
  .n("SsmSapClient", "StartConfigurationChecksCommand")
  .sc(StartConfigurationChecks$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartConfigurationChecksInput;
      output: StartConfigurationChecksOutput;
    };
    sdk: {
      input: StartConfigurationChecksCommandInput;
      output: StartConfigurationChecksCommandOutput;
    };
  };
}
