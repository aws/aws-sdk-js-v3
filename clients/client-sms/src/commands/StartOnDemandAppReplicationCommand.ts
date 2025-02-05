// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartOnDemandAppReplicationRequest, StartOnDemandAppReplicationResponse } from "../models/models_0";
import { de_StartOnDemandAppReplicationCommand, se_StartOnDemandAppReplicationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartOnDemandAppReplicationCommand}.
 */
export interface StartOnDemandAppReplicationCommandInput extends StartOnDemandAppReplicationRequest {}
/**
 * @public
 *
 * The output of {@link StartOnDemandAppReplicationCommand}.
 */
export interface StartOnDemandAppReplicationCommandOutput
  extends StartOnDemandAppReplicationResponse,
    __MetadataBearer {}

/**
 * <p>Starts an on-demand replication run for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, StartOnDemandAppReplicationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, StartOnDemandAppReplicationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SMSClient(config);
 * const input = { // StartOnDemandAppReplicationRequest
 *   appId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new StartOnDemandAppReplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartOnDemandAppReplicationCommandInput - {@link StartOnDemandAppReplicationCommandInput}
 * @returns {@link StartOnDemandAppReplicationCommandOutput}
 * @see {@link StartOnDemandAppReplicationCommandInput} for command's `input` shape.
 * @see {@link StartOnDemandAppReplicationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link InternalError} (server fault)
 *  <p>An internal error occurred.</p>
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
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 * @public
 */
export class StartOnDemandAppReplicationCommand extends $Command
  .classBuilder<
    StartOnDemandAppReplicationCommandInput,
    StartOnDemandAppReplicationCommandOutput,
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
  .s("AWSServerMigrationService_V2016_10_24", "StartOnDemandAppReplication", {})
  .n("SMSClient", "StartOnDemandAppReplicationCommand")
  .f(void 0, void 0)
  .ser(se_StartOnDemandAppReplicationCommand)
  .de(de_StartOnDemandAppReplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartOnDemandAppReplicationRequest;
      output: {};
    };
    sdk: {
      input: StartOnDemandAppReplicationCommandInput;
      output: StartOnDemandAppReplicationCommandOutput;
    };
  };
}
