// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeConfigurationRecorderStatusRequest,
  DescribeConfigurationRecorderStatusResponse,
} from "../models/models_0";
import {
  de_DescribeConfigurationRecorderStatusCommand,
  se_DescribeConfigurationRecorderStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationRecorderStatusCommand}.
 */
export interface DescribeConfigurationRecorderStatusCommandInput extends DescribeConfigurationRecorderStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationRecorderStatusCommand}.
 */
export interface DescribeConfigurationRecorderStatusCommandOutput
  extends DescribeConfigurationRecorderStatusResponse,
    __MetadataBearer {}

/**
 * <p>Returns the current status of the configuration
 * 			recorder you specify as well as the status of the last recording event for the configuration recorders.</p>
 *          <p>For a detailed status of recording events over time, add your Config events to Amazon CloudWatch metrics and use CloudWatch metrics.</p>
 *          <p>If a configuration recorder is not specified, this operation returns the status for the customer managed configuration recorder configured for the
 * 			account, if applicable.</p>
 *          <note>
 *             <p>When making a request to this operation, you can only specify one configuration recorder.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigurationRecorderStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigurationRecorderStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeConfigurationRecorderStatusRequest
 *   ConfigurationRecorderNames: [ // ConfigurationRecorderNameList
 *     "STRING_VALUE",
 *   ],
 *   ServicePrincipal: "STRING_VALUE",
 *   Arn: "STRING_VALUE",
 * };
 * const command = new DescribeConfigurationRecorderStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationRecorderStatusResponse
 * //   ConfigurationRecordersStatus: [ // ConfigurationRecorderStatusList
 * //     { // ConfigurationRecorderStatus
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       lastStartTime: new Date("TIMESTAMP"),
 * //       lastStopTime: new Date("TIMESTAMP"),
 * //       recording: true || false,
 * //       lastStatus: "Pending" || "Success" || "Failure" || "NotApplicable",
 * //       lastErrorCode: "STRING_VALUE",
 * //       lastErrorMessage: "STRING_VALUE",
 * //       lastStatusChangeTime: new Date("TIMESTAMP"),
 * //       servicePrincipal: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationRecorderStatusCommandInput - {@link DescribeConfigurationRecorderStatusCommandInput}
 * @returns {@link DescribeConfigurationRecorderStatusCommandOutput}
 * @see {@link DescribeConfigurationRecorderStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationRecorderStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link NoSuchConfigurationRecorderException} (client fault)
 *  <p>You have specified a configuration recorder that does not
 * 			exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The requested operation is not valid. You will see this exception if there are missing required fields or if the input value fails the validation.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutStoredQuery.html">PutStoredQuery</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>There are missing required fields.</p>
 *             </li>
 *             <li>
 *                <p>The input value fails the validation.</p>
 *             </li>
 *             <li>
 *                <p>You are trying to create more than 300 queries.</p>
 *             </li>
 *          </ul>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html">DescribeConfigurationRecorders</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorderStatus.html">DescribeConfigurationRecorderStatus</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>You have specified more than one configuration recorder.</p>
 *             </li>
 *             <li>
 *                <p>You have provided a service principal for service-linked configuration recorder that is not valid.</p>
 *             </li>
 *          </ul>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_AssociateResourceTypes.html">AssociateResourceTypes</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DisassociateResourceTypes.html">DisassociateResourceTypes</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>Your configuraiton recorder has a recording strategy that does not allow the association or disassociation of resource types.</p>
 *             </li>
 *             <li>
 *                <p>One or more of the specified resource types are already associated or disassociated with the configuration recorder.</p>
 *             </li>
 *             <li>
 *                <p>For service-linked configuration recorders, the configuration recorder does not record one or more of the specified resource types.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class DescribeConfigurationRecorderStatusCommand extends $Command
  .classBuilder<
    DescribeConfigurationRecorderStatusCommandInput,
    DescribeConfigurationRecorderStatusCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "DescribeConfigurationRecorderStatus", {})
  .n("ConfigServiceClient", "DescribeConfigurationRecorderStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConfigurationRecorderStatusCommand)
  .de(de_DescribeConfigurationRecorderStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConfigurationRecorderStatusRequest;
      output: DescribeConfigurationRecorderStatusResponse;
    };
    sdk: {
      input: DescribeConfigurationRecorderStatusCommandInput;
      output: DescribeConfigurationRecorderStatusCommandOutput;
    };
  };
}
