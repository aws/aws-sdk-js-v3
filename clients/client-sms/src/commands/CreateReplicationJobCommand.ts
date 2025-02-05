// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateReplicationJobRequest, CreateReplicationJobResponse } from "../models/models_0";
import { de_CreateReplicationJobCommand, se_CreateReplicationJobCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReplicationJobCommand}.
 */
export interface CreateReplicationJobCommandInput extends CreateReplicationJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateReplicationJobCommand}.
 */
export interface CreateReplicationJobCommandOutput extends CreateReplicationJobResponse, __MetadataBearer {}

/**
 * <p>Creates a replication job. The replication job schedules periodic replication runs
 *             to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image
 *             (AMI).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, CreateReplicationJobCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, CreateReplicationJobCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SMSClient(config);
 * const input = { // CreateReplicationJobRequest
 *   serverId: "STRING_VALUE", // required
 *   seedReplicationTime: new Date("TIMESTAMP"), // required
 *   frequency: Number("int"),
 *   runOnce: true || false,
 *   licenseType: "AWS" || "BYOL",
 *   roleName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   numberOfRecentAmisToKeep: Number("int"),
 *   encrypted: true || false,
 *   kmsKeyId: "STRING_VALUE",
 * };
 * const command = new CreateReplicationJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateReplicationJobResponse
 * //   replicationJobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateReplicationJobCommandInput - {@link CreateReplicationJobCommandInput}
 * @returns {@link CreateReplicationJobCommandOutput}
 * @see {@link CreateReplicationJobCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationJobCommandOutput} for command's `response` shape.
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
 * @throws {@link NoConnectorsAvailableException} (client fault)
 *  <p>There are no connectors available.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link ReplicationJobAlreadyExistsException} (client fault)
 *  <p>The specified replication job already exists.</p>
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
 * @public
 */
export class CreateReplicationJobCommand extends $Command
  .classBuilder<
    CreateReplicationJobCommandInput,
    CreateReplicationJobCommandOutput,
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
  .s("AWSServerMigrationService_V2016_10_24", "CreateReplicationJob", {})
  .n("SMSClient", "CreateReplicationJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateReplicationJobCommand)
  .de(de_CreateReplicationJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReplicationJobRequest;
      output: CreateReplicationJobResponse;
    };
    sdk: {
      input: CreateReplicationJobCommandInput;
      output: CreateReplicationJobCommandOutput;
    };
  };
}
