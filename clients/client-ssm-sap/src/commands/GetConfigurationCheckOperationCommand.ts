// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetConfigurationCheckOperationInput, GetConfigurationCheckOperationOutput } from "../models/models_0";
import { GetConfigurationCheckOperation } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConfigurationCheckOperationCommand}.
 */
export interface GetConfigurationCheckOperationCommandInput extends GetConfigurationCheckOperationInput {}
/**
 * @public
 *
 * The output of {@link GetConfigurationCheckOperationCommand}.
 */
export interface GetConfigurationCheckOperationCommandOutput
  extends GetConfigurationCheckOperationOutput,
    __MetadataBearer {}

/**
 * <p>Gets the details of a configuration check operation by specifying the operation ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, GetConfigurationCheckOperationCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, GetConfigurationCheckOperationCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // GetConfigurationCheckOperationInput
 *   OperationId: "STRING_VALUE", // required
 * };
 * const command = new GetConfigurationCheckOperationCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigurationCheckOperationOutput
 * //   ConfigurationCheckOperation: { // ConfigurationCheckOperation
 * //     Id: "STRING_VALUE",
 * //     ApplicationId: "STRING_VALUE",
 * //     Status: "INPROGRESS" || "SUCCESS" || "ERROR",
 * //     StatusMessage: "STRING_VALUE",
 * //     ConfigurationCheckId: "SAP_CHECK_01" || "SAP_CHECK_02" || "SAP_CHECK_03",
 * //     ConfigurationCheckName: "STRING_VALUE",
 * //     ConfigurationCheckDescription: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     RuleStatusCounts: { // RuleStatusCounts
 * //       Failed: Number("int"),
 * //       Warning: Number("int"),
 * //       Info: Number("int"),
 * //       Passed: Number("int"),
 * //       Unknown: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConfigurationCheckOperationCommandInput - {@link GetConfigurationCheckOperationCommandInput}
 * @returns {@link GetConfigurationCheckOperationCommandOutput}
 * @see {@link GetConfigurationCheckOperationCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationCheckOperationCommandOutput} for command's `response` shape.
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
export class GetConfigurationCheckOperationCommand extends $Command
  .classBuilder<
    GetConfigurationCheckOperationCommandInput,
    GetConfigurationCheckOperationCommandOutput,
    SsmSapClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SsmSapClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SsmSap", "GetConfigurationCheckOperation", {})
  .n("SsmSapClient", "GetConfigurationCheckOperationCommand")
  .sc(GetConfigurationCheckOperation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfigurationCheckOperationInput;
      output: GetConfigurationCheckOperationOutput;
    };
    sdk: {
      input: GetConfigurationCheckOperationCommandInput;
      output: GetConfigurationCheckOperationCommandOutput;
    };
  };
}
