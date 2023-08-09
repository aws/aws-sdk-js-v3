// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { StartStreamingSessionRequest, StartStreamingSessionResponse } from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_StartStreamingSessionCommand, se_StartStreamingSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartStreamingSessionCommand}.
 */
export interface StartStreamingSessionCommandInput extends StartStreamingSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartStreamingSessionCommand}.
 */
export interface StartStreamingSessionCommandOutput extends StartStreamingSessionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Transitions sessions from the <code>STOPPED</code> state into the <code>READY</code>
 *             state. The <code>START_IN_PROGRESS</code> state is the intermediate state between the
 *                 <code>STOPPED</code> and <code>READY</code> states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, StartStreamingSessionCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, StartStreamingSessionCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // StartStreamingSessionRequest
 *   clientToken: "STRING_VALUE",
 *   sessionId: "STRING_VALUE", // required
 *   studioId: "STRING_VALUE", // required
 *   backupId: "STRING_VALUE",
 * };
 * const command = new StartStreamingSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartStreamingSessionResponse
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
 * @param StartStreamingSessionCommandInput - {@link StartStreamingSessionCommandInput}
 * @returns {@link StartStreamingSessionCommandOutput}
 * @see {@link StartStreamingSessionCommandInput} for command's `input` shape.
 * @see {@link StartStreamingSessionCommandOutput} for command's `response` shape.
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
 */
export class StartStreamingSessionCommand extends $Command<
  StartStreamingSessionCommandInput,
  StartStreamingSessionCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: StartStreamingSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartStreamingSessionCommandInput, StartStreamingSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartStreamingSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "StartStreamingSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StartStreamingSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartStreamingSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartStreamingSessionCommandOutput> {
    return de_StartStreamingSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
