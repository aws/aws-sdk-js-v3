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

import { ListStreamingSessionBackupsRequest, ListStreamingSessionBackupsResponse } from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  de_ListStreamingSessionBackupsCommand,
  se_ListStreamingSessionBackupsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListStreamingSessionBackupsCommand}.
 */
export interface ListStreamingSessionBackupsCommandInput extends ListStreamingSessionBackupsRequest {}
/**
 * @public
 *
 * The output of {@link ListStreamingSessionBackupsCommand}.
 */
export interface ListStreamingSessionBackupsCommandOutput
  extends ListStreamingSessionBackupsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the backups of a streaming session in a studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListStreamingSessionBackupsCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListStreamingSessionBackupsCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // ListStreamingSessionBackupsRequest
 *   nextToken: "STRING_VALUE",
 *   ownedBy: "STRING_VALUE",
 *   studioId: "STRING_VALUE", // required
 * };
 * const command = new ListStreamingSessionBackupsCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamingSessionBackupsResponse
 * //   nextToken: "STRING_VALUE",
 * //   streamingSessionBackups: [ // StreamingSessionBackupList
 * //     { // StreamingSessionBackup
 * //       arn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       launchProfileId: "STRING_VALUE",
 * //       ownedBy: "STRING_VALUE",
 * //       sessionId: "STRING_VALUE",
 * //       state: "CREATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "READY" || "DELETED" || "CREATE_FAILED" || "DELETE_FAILED" || "STOP_IN_PROGRESS" || "START_IN_PROGRESS" || "STOPPED" || "STOP_FAILED" || "START_FAILED",
 * //       statusCode: "STREAMING_SESSION_READY" || "STREAMING_SESSION_DELETED" || "STREAMING_SESSION_CREATE_IN_PROGRESS" || "STREAMING_SESSION_DELETE_IN_PROGRESS" || "INTERNAL_ERROR" || "INSUFFICIENT_CAPACITY" || "ACTIVE_DIRECTORY_DOMAIN_JOIN_ERROR" || "NETWORK_CONNECTION_ERROR" || "INITIALIZATION_SCRIPT_ERROR" || "DECRYPT_STREAMING_IMAGE_ERROR" || "NETWORK_INTERFACE_ERROR" || "STREAMING_SESSION_STOPPED" || "STREAMING_SESSION_STARTED" || "STREAMING_SESSION_STOP_IN_PROGRESS" || "STREAMING_SESSION_START_IN_PROGRESS" || "AMI_VALIDATION_ERROR",
 * //       statusMessage: "STRING_VALUE",
 * //       backupId: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListStreamingSessionBackupsCommandInput - {@link ListStreamingSessionBackupsCommandInput}
 * @returns {@link ListStreamingSessionBackupsCommandOutput}
 * @see {@link ListStreamingSessionBackupsCommandInput} for command's `input` shape.
 * @see {@link ListStreamingSessionBackupsCommandOutput} for command's `response` shape.
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
export class ListStreamingSessionBackupsCommand extends $Command<
  ListStreamingSessionBackupsCommandInput,
  ListStreamingSessionBackupsCommandOutput,
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
  constructor(readonly input: ListStreamingSessionBackupsCommandInput) {
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
  ): Handler<ListStreamingSessionBackupsCommandInput, ListStreamingSessionBackupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStreamingSessionBackupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "ListStreamingSessionBackupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "nimble",
        operation: "ListStreamingSessionBackups",
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
  private serialize(input: ListStreamingSessionBackupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListStreamingSessionBackupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListStreamingSessionBackupsCommandOutput> {
    return de_ListStreamingSessionBackupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
