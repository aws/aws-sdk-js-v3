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

import {
  GetStreamingSessionStreamRequest,
  GetStreamingSessionStreamResponse,
  GetStreamingSessionStreamResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_GetStreamingSessionStreamCommand, se_GetStreamingSessionStreamCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetStreamingSessionStreamCommand}.
 */
export interface GetStreamingSessionStreamCommandInput extends GetStreamingSessionStreamRequest {}
/**
 * @public
 *
 * The output of {@link GetStreamingSessionStreamCommand}.
 */
export interface GetStreamingSessionStreamCommandOutput extends GetStreamingSessionStreamResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a StreamingSessionStream for a streaming session.</p>
 *         <p>Invoke this operation to poll the resource after invoking
 *                 <code>CreateStreamingSessionStream</code>.</p>
 *         <p>After the <code>StreamingSessionStream</code> changes to the <code>READY</code> state,
 *             the url property will contain a stream to be used with the DCV streaming client.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStreamingSessionStreamCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStreamingSessionStreamCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // GetStreamingSessionStreamRequest
 *   sessionId: "STRING_VALUE", // required
 *   streamId: "STRING_VALUE", // required
 *   studioId: "STRING_VALUE", // required
 * };
 * const command = new GetStreamingSessionStreamCommand(input);
 * const response = await client.send(command);
 * // { // GetStreamingSessionStreamResponse
 * //   stream: { // StreamingSessionStream
 * //     createdAt: new Date("TIMESTAMP"),
 * //     createdBy: "STRING_VALUE",
 * //     expiresAt: new Date("TIMESTAMP"),
 * //     ownedBy: "STRING_VALUE",
 * //     state: "READY" || "CREATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "CREATE_FAILED" || "DELETE_FAILED",
 * //     statusCode: "STREAM_CREATE_IN_PROGRESS" || "STREAM_READY" || "STREAM_DELETE_IN_PROGRESS" || "STREAM_DELETED" || "INTERNAL_ERROR" || "NETWORK_CONNECTION_ERROR",
 * //     streamId: "STRING_VALUE",
 * //     url: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStreamingSessionStreamCommandInput - {@link GetStreamingSessionStreamCommandInput}
 * @returns {@link GetStreamingSessionStreamCommandOutput}
 * @see {@link GetStreamingSessionStreamCommandInput} for command's `input` shape.
 * @see {@link GetStreamingSessionStreamCommandOutput} for command's `response` shape.
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
export class GetStreamingSessionStreamCommand extends $Command<
  GetStreamingSessionStreamCommandInput,
  GetStreamingSessionStreamCommandOutput,
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
  constructor(readonly input: GetStreamingSessionStreamCommandInput) {
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
  ): Handler<GetStreamingSessionStreamCommandInput, GetStreamingSessionStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetStreamingSessionStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "GetStreamingSessionStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetStreamingSessionStreamResponseFilterSensitiveLog,
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
  private serialize(input: GetStreamingSessionStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetStreamingSessionStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetStreamingSessionStreamCommandOutput> {
    return de_GetStreamingSessionStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
