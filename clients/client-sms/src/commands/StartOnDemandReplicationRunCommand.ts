// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartOnDemandReplicationRunRequest, StartOnDemandReplicationRunResponse } from "../models/models_0";
import { de_StartOnDemandReplicationRunCommand, se_StartOnDemandReplicationRunCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartOnDemandReplicationRunCommand}.
 */
export interface StartOnDemandReplicationRunCommandInput extends StartOnDemandReplicationRunRequest {}
/**
 * @public
 *
 * The output of {@link StartOnDemandReplicationRunCommand}.
 */
export interface StartOnDemandReplicationRunCommandOutput
  extends StartOnDemandReplicationRunResponse,
    __MetadataBearer {}

/**
 * <p>Starts an on-demand replication run for the specified replication job. This
 *             replication run starts immediately. This replication run is in addition to the ones
 *             already scheduled.</p>
 *          <p>There is a limit on the number of on-demand replications runs that you can request
 *             in a 24-hour period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, StartOnDemandReplicationRunCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, StartOnDemandReplicationRunCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SMSClient(config);
 * const input = { // StartOnDemandReplicationRunRequest
 *   replicationJobId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new StartOnDemandReplicationRunCommand(input);
 * const response = await client.send(command);
 * // { // StartOnDemandReplicationRunResponse
 * //   replicationRunId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartOnDemandReplicationRunCommandInput - {@link StartOnDemandReplicationRunCommandInput}
 * @returns {@link StartOnDemandReplicationRunCommandOutput}
 * @see {@link StartOnDemandReplicationRunCommandInput} for command's `input` shape.
 * @see {@link StartOnDemandReplicationRunCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link DryRunOperationException} (client fault)
 *  <p>The user has the required permissions, so the request would have succeeded,
 *             but a dry run was performed.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link ReplicationRunLimitExceededException} (client fault)
 *  <p>You have exceeded the number of on-demand replication runs you can request in a
 *             24-hour period.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 * @public
 */
export class StartOnDemandReplicationRunCommand extends $Command
  .classBuilder<
    StartOnDemandReplicationRunCommandInput,
    StartOnDemandReplicationRunCommandOutput,
    SMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSServerMigrationService_V2016_10_24", "StartOnDemandReplicationRun", {})
  .n("SMSClient", "StartOnDemandReplicationRunCommand")
  .f(void 0, void 0)
  .ser(se_StartOnDemandReplicationRunCommand)
  .de(de_StartOnDemandReplicationRunCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartOnDemandReplicationRunRequest;
      output: StartOnDemandReplicationRunResponse;
    };
    sdk: {
      input: StartOnDemandReplicationRunCommandInput;
      output: StartOnDemandReplicationRunCommandOutput;
    };
  };
}
