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

import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { StopStreamRequest, StopStreamResponse } from "../models/models_0";
import { de_StopStreamCommand, se_StopStreamCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopStreamCommand}.
 */
export interface StopStreamCommandInput extends StopStreamRequest {}
/**
 * @public
 *
 * The output of {@link StopStreamCommand}.
 */
export interface StopStreamCommandOutput extends StopStreamResponse, __MetadataBearer {}

/**
 * @public
 * <p>Disconnects the incoming RTMPS stream for the specified channel. Can be used in
 *       conjunction with <a>DeleteStreamKey</a> to prevent further streaming to a
 *       channel.</p>
 *          <note>
 *             <p>Many streaming client-software libraries automatically reconnect a dropped RTMPS
 *         session, so to stop the stream permanently, you may want to first revoke the
 *           <code>streamKey</code> attached to the channel.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, StopStreamCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, StopStreamCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const input = { // StopStreamRequest
 *   channelArn: "STRING_VALUE", // required
 * };
 * const command = new StopStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopStreamCommandInput - {@link StopStreamCommandInput}
 * @returns {@link StopStreamCommandOutput}
 * @see {@link StopStreamCommandInput} for command's `input` shape.
 * @see {@link StopStreamCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ChannelNotBroadcasting} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link StreamUnavailable} (server fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 */
export class StopStreamCommand extends $Command<
  StopStreamCommandInput,
  StopStreamCommandOutput,
  IvsClientResolvedConfig
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
  constructor(readonly input: StopStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopStreamCommandInput, StopStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StopStreamCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "StopStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonInteractiveVideoService",
        operation: "StopStream",
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
  private serialize(input: StopStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopStreamCommandOutput> {
    return de_StopStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
