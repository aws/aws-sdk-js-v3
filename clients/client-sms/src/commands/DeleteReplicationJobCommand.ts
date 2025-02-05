// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteReplicationJobRequest, DeleteReplicationJobResponse } from "../models/models_0";
import { de_DeleteReplicationJobCommand, se_DeleteReplicationJobCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReplicationJobCommand}.
 */
export interface DeleteReplicationJobCommandInput extends DeleteReplicationJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteReplicationJobCommand}.
 */
export interface DeleteReplicationJobCommandOutput extends DeleteReplicationJobResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified replication job.</p>
 *          <p>After you delete a replication job, there are no further replication runs. Amazon Web Services
 *             deletes the contents of the Amazon S3 bucket used to store Server Migration Service artifacts. The AMIs created
 *             by the replication runs are not deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DeleteReplicationJobCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DeleteReplicationJobCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SMSClient(config);
 * const input = { // DeleteReplicationJobRequest
 *   replicationJobId: "STRING_VALUE", // required
 * };
 * const command = new DeleteReplicationJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReplicationJobCommandInput - {@link DeleteReplicationJobCommandInput}
 * @returns {@link DeleteReplicationJobCommandOutput}
 * @see {@link DeleteReplicationJobCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationJobCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
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
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 * @public
 */
export class DeleteReplicationJobCommand extends $Command
  .classBuilder<
    DeleteReplicationJobCommandInput,
    DeleteReplicationJobCommandOutput,
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
  .s("AWSServerMigrationService_V2016_10_24", "DeleteReplicationJob", {})
  .n("SMSClient", "DeleteReplicationJobCommand")
  .f(void 0, void 0)
  .ser(se_DeleteReplicationJobCommand)
  .de(de_DeleteReplicationJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReplicationJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteReplicationJobCommandInput;
      output: DeleteReplicationJobCommandOutput;
    };
  };
}
