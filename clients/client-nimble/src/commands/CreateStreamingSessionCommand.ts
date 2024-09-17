// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateStreamingSessionRequest, CreateStreamingSessionResponse } from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_CreateStreamingSessionCommand, se_CreateStreamingSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStreamingSessionCommand}.
 */
export interface CreateStreamingSessionCommandInput extends CreateStreamingSessionRequest {}
/**
 * @public
 *
 * The output of {@link CreateStreamingSessionCommand}.
 */
export interface CreateStreamingSessionCommandOutput extends CreateStreamingSessionResponse, __MetadataBearer {}

/**
 * <p>Creates a streaming session in a studio.</p>
 *         <p>After invoking this operation, you must poll GetStreamingSession until the streaming
 *             session is in the <code>READY</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateStreamingSessionCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateStreamingSessionCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // CreateStreamingSessionRequest
 *   clientToken: "STRING_VALUE",
 *   ec2InstanceType: "g4dn.xlarge" || "g4dn.2xlarge" || "g4dn.4xlarge" || "g4dn.8xlarge" || "g4dn.12xlarge" || "g4dn.16xlarge" || "g3.4xlarge" || "g3s.xlarge" || "g5.xlarge" || "g5.2xlarge" || "g5.4xlarge" || "g5.8xlarge" || "g5.16xlarge",
 *   launchProfileId: "STRING_VALUE", // required
 *   ownedBy: "STRING_VALUE",
 *   streamingImageId: "STRING_VALUE",
 *   studioId: "STRING_VALUE", // required
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateStreamingSessionCommand(input);
 * const response = await client.send(command);
 * // { // CreateStreamingSessionResponse
 * //   session: { // StreamingSession
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     createdBy: "STRING_VALUE",
 * //     ec2InstanceType: "STRING_VALUE",
 * //     launchProfileId: "STRING_VALUE",
 * //     ownedBy: "STRING_VALUE",
 * //     sessionId: "STRING_VALUE",
 * //     state: "CREATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "READY" || "DELETED" || "CREATE_FAILED" || "DELETE_FAILED" || "STOP_IN_PROGRESS" || "START_IN_PROGRESS" || "STOPPED" || "STOP_FAILED" || "START_FAILED",
 * //     statusCode: "STREAMING_SESSION_READY" || "STREAMING_SESSION_DELETED" || "STREAMING_SESSION_CREATE_IN_PROGRESS" || "STREAMING_SESSION_DELETE_IN_PROGRESS" || "INTERNAL_ERROR" || "INSUFFICIENT_CAPACITY" || "ACTIVE_DIRECTORY_DOMAIN_JOIN_ERROR" || "NETWORK_CONNECTION_ERROR" || "INITIALIZATION_SCRIPT_ERROR" || "DECRYPT_STREAMING_IMAGE_ERROR" || "NETWORK_INTERFACE_ERROR" || "STREAMING_SESSION_STOPPED" || "STREAMING_SESSION_STARTED" || "STREAMING_SESSION_STOP_IN_PROGRESS" || "STREAMING_SESSION_START_IN_PROGRESS" || "AMI_VALIDATION_ERROR",
 * //     statusMessage: "STRING_VALUE",
 * //     streamingImageId: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     terminateAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     updatedBy: "STRING_VALUE",
 * //     stoppedAt: new Date("TIMESTAMP"),
 * //     stoppedBy: "STRING_VALUE",
 * //     startedAt: new Date("TIMESTAMP"),
 * //     startedBy: "STRING_VALUE",
 * //     stopAt: new Date("TIMESTAMP"),
 * //     startedFromBackupId: "STRING_VALUE",
 * //     backupMode: "AUTOMATIC" || "DEACTIVATED",
 * //     maxBackupsToRetain: Number("int"),
 * //     volumeRetentionMode: "RETAIN" || "DELETE",
 * //     sessionPersistenceMode: "DEACTIVATED" || "ACTIVATED",
 * //     volumeConfiguration: { // VolumeConfiguration
 * //       size: Number("int"),
 * //       throughput: Number("int"),
 * //       iops: Number("int"),
 * //     },
 * //     automaticTerminationMode: "DEACTIVATED" || "ACTIVATED",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateStreamingSessionCommandInput - {@link CreateStreamingSessionCommandInput}
 * @returns {@link CreateStreamingSessionCommandOutput}
 * @see {@link CreateStreamingSessionCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingSessionCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another operation is in progress. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current quota does not allow you to perform the request action. You can request
 *             increases for some quotas, and other quotas cannot be increased.</p>
 *         <p>Please use Amazon Web Services Service Quotas to request an increase. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link NimbleServiceException}
 * <p>Base exception class for all service exceptions from Nimble service.</p>
 *
 * @public
 */
export class CreateStreamingSessionCommand extends $Command
  .classBuilder<
    CreateStreamingSessionCommandInput,
    CreateStreamingSessionCommandOutput,
    NimbleClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NimbleClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("nimble", "CreateStreamingSession", {})
  .n("NimbleClient", "CreateStreamingSessionCommand")
  .f(void 0, void 0)
  .ser(se_CreateStreamingSessionCommand)
  .de(de_CreateStreamingSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStreamingSessionRequest;
      output: CreateStreamingSessionResponse;
    };
    sdk: {
      input: CreateStreamingSessionCommandInput;
      output: CreateStreamingSessionCommandOutput;
    };
  };
}
