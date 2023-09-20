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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GetStreamingSessionBackupRequest, GetStreamingSessionBackupResponse } from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_GetStreamingSessionBackupCommand, se_GetStreamingSessionBackupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetStreamingSessionBackupCommand}.
 */
export interface GetStreamingSessionBackupCommandInput extends GetStreamingSessionBackupRequest {}
/**
 * @public
 *
 * The output of {@link GetStreamingSessionBackupCommand}.
 */
export interface GetStreamingSessionBackupCommandOutput extends GetStreamingSessionBackupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets <code>StreamingSessionBackup</code> resource.</p>
 *         <p>Invoke this operation to poll for a streaming session backup while stopping a
 *             streaming session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStreamingSessionBackupCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStreamingSessionBackupCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // GetStreamingSessionBackupRequest
 *   backupId: "STRING_VALUE", // required
 *   studioId: "STRING_VALUE", // required
 * };
 * const command = new GetStreamingSessionBackupCommand(input);
 * const response = await client.send(command);
 * // { // GetStreamingSessionBackupResponse
 * //   streamingSessionBackup: { // StreamingSessionBackup
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     launchProfileId: "STRING_VALUE",
 * //     ownedBy: "STRING_VALUE",
 * //     sessionId: "STRING_VALUE",
 * //     state: "CREATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "READY" || "DELETED" || "CREATE_FAILED" || "DELETE_FAILED" || "STOP_IN_PROGRESS" || "START_IN_PROGRESS" || "STOPPED" || "STOP_FAILED" || "START_FAILED",
 * //     statusCode: "STREAMING_SESSION_READY" || "STREAMING_SESSION_DELETED" || "STREAMING_SESSION_CREATE_IN_PROGRESS" || "STREAMING_SESSION_DELETE_IN_PROGRESS" || "INTERNAL_ERROR" || "INSUFFICIENT_CAPACITY" || "ACTIVE_DIRECTORY_DOMAIN_JOIN_ERROR" || "NETWORK_CONNECTION_ERROR" || "INITIALIZATION_SCRIPT_ERROR" || "DECRYPT_STREAMING_IMAGE_ERROR" || "NETWORK_INTERFACE_ERROR" || "STREAMING_SESSION_STOPPED" || "STREAMING_SESSION_STARTED" || "STREAMING_SESSION_STOP_IN_PROGRESS" || "STREAMING_SESSION_START_IN_PROGRESS" || "AMI_VALIDATION_ERROR",
 * //     statusMessage: "STRING_VALUE",
 * //     backupId: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStreamingSessionBackupCommandInput - {@link GetStreamingSessionBackupCommandInput}
 * @returns {@link GetStreamingSessionBackupCommandOutput}
 * @see {@link GetStreamingSessionBackupCommandInput} for command's `input` shape.
 * @see {@link GetStreamingSessionBackupCommandOutput} for command's `response` shape.
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
export class GetStreamingSessionBackupCommand extends $Command<
  GetStreamingSessionBackupCommandInput,
  GetStreamingSessionBackupCommandOutput,
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
  constructor(readonly input: GetStreamingSessionBackupCommandInput) {
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
  ): Handler<GetStreamingSessionBackupCommandInput, GetStreamingSessionBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetStreamingSessionBackupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "GetStreamingSessionBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "nimble",
        operation: "GetStreamingSessionBackup",
      },
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
  private serialize(input: GetStreamingSessionBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetStreamingSessionBackupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetStreamingSessionBackupCommandOutput> {
    return de_GetStreamingSessionBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
