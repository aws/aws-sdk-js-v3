// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateReplicationJobRequest, UpdateReplicationJobResponse } from "../models/models_0";
import { de_UpdateReplicationJobCommand, se_UpdateReplicationJobCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateReplicationJobCommand}.
 */
export interface UpdateReplicationJobCommandInput extends UpdateReplicationJobRequest {}
/**
 * @public
 *
 * The output of {@link UpdateReplicationJobCommand}.
 */
export interface UpdateReplicationJobCommandOutput extends UpdateReplicationJobResponse, __MetadataBearer {}

/**
 * <p>Updates the specified settings for the specified replication job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, UpdateReplicationJobCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, UpdateReplicationJobCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // UpdateReplicationJobRequest
 *   replicationJobId: "STRING_VALUE", // required
 *   frequency: Number("int"),
 *   nextReplicationRunStartTime: new Date("TIMESTAMP"),
 *   licenseType: "AWS" || "BYOL",
 *   roleName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   numberOfRecentAmisToKeep: Number("int"),
 *   encrypted: true || false,
 *   kmsKeyId: "STRING_VALUE",
 * };
 * const command = new UpdateReplicationJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateReplicationJobCommandInput - {@link UpdateReplicationJobCommandInput}
 * @returns {@link UpdateReplicationJobCommandOutput}
 * @see {@link UpdateReplicationJobCommandInput} for command's `input` shape.
 * @see {@link UpdateReplicationJobCommandOutput} for command's `response` shape.
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
 * @throws {@link ReplicationJobNotFoundException} (client fault)
 *  <p>The specified replication job does not exist.</p>
 *
 * @throws {@link ServerCannotBeReplicatedException} (client fault)
 *  <p>The specified server cannot be replicated.</p>
 *
 * @throws {@link TemporarilyUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 *
 * @public
 */
export class UpdateReplicationJobCommand extends $Command
  .classBuilder<
    UpdateReplicationJobCommandInput,
    UpdateReplicationJobCommandOutput,
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
  .s("AWSServerMigrationService_V2016_10_24", "UpdateReplicationJob", {})
  .n("SMSClient", "UpdateReplicationJobCommand")
  .f(void 0, void 0)
  .ser(se_UpdateReplicationJobCommand)
  .de(de_UpdateReplicationJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateReplicationJobRequest;
      output: {};
    };
    sdk: {
      input: UpdateReplicationJobCommandInput;
      output: UpdateReplicationJobCommandOutput;
    };
  };
}
