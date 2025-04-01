// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeBatchDeleteConfigurationTaskRequest,
  DescribeBatchDeleteConfigurationTaskResponse,
} from "../models/models_0";
import {
  de_DescribeBatchDeleteConfigurationTaskCommand,
  se_DescribeBatchDeleteConfigurationTaskCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBatchDeleteConfigurationTaskCommand}.
 */
export interface DescribeBatchDeleteConfigurationTaskCommandInput extends DescribeBatchDeleteConfigurationTaskRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBatchDeleteConfigurationTaskCommand}.
 */
export interface DescribeBatchDeleteConfigurationTaskCommandOutput
  extends DescribeBatchDeleteConfigurationTaskResponse,
    __MetadataBearer {}

/**
 * <p>
 *         Takes a unique deletion task identifier as input and returns metadata about a configuration deletion task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeBatchDeleteConfigurationTaskCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeBatchDeleteConfigurationTaskCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // DescribeBatchDeleteConfigurationTaskRequest
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBatchDeleteConfigurationTaskCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBatchDeleteConfigurationTaskResponse
 * //   task: { // BatchDeleteConfigurationTask
 * //     taskId: "STRING_VALUE",
 * //     status: "INITIALIZING" || "VALIDATING" || "DELETING" || "COMPLETED" || "FAILED",
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     configurationType: "SERVER",
 * //     requestedConfigurations: [ // ConfigurationIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     deletedConfigurations: [
 * //       "STRING_VALUE",
 * //     ],
 * //     failedConfigurations: [ // FailedConfigurationList
 * //       { // FailedConfiguration
 * //         configurationId: "STRING_VALUE",
 * //         errorStatusCode: Number("int"),
 * //         errorMessage: "STRING_VALUE",
 * //       },
 * //     ],
 * //     deletionWarnings: [ // DeletionWarningsList
 * //       { // DeletionWarning
 * //         configurationId: "STRING_VALUE",
 * //         warningCode: Number("int"),
 * //         warningText: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBatchDeleteConfigurationTaskCommandInput - {@link DescribeBatchDeleteConfigurationTaskCommandInput}
 * @returns {@link DescribeBatchDeleteConfigurationTaskCommandOutput}
 * @see {@link DescribeBatchDeleteConfigurationTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeBatchDeleteConfigurationTaskCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home Region is not set. Set the home Region to continue.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
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
export class DescribeBatchDeleteConfigurationTaskCommand extends $Command
  .classBuilder<
    DescribeBatchDeleteConfigurationTaskCommandInput,
    DescribeBatchDeleteConfigurationTaskCommandOutput,
    ApplicationDiscoveryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationDiscoveryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSPoseidonService_V2015_11_01", "DescribeBatchDeleteConfigurationTask", {})
  .n("ApplicationDiscoveryServiceClient", "DescribeBatchDeleteConfigurationTaskCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBatchDeleteConfigurationTaskCommand)
  .de(de_DescribeBatchDeleteConfigurationTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBatchDeleteConfigurationTaskRequest;
      output: DescribeBatchDeleteConfigurationTaskResponse;
    };
    sdk: {
      input: DescribeBatchDeleteConfigurationTaskCommandInput;
      output: DescribeBatchDeleteConfigurationTaskCommandOutput;
    };
  };
}
