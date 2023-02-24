// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import {
  GetPlaybackKeyPairRequest,
  GetPlaybackKeyPairRequestFilterSensitiveLog,
  GetPlaybackKeyPairResponse,
  GetPlaybackKeyPairResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetPlaybackKeyPairCommand,
  serializeAws_restJson1GetPlaybackKeyPairCommand,
} from "../protocols/Aws_restJson1";

export interface GetPlaybackKeyPairCommandInput extends GetPlaybackKeyPairRequest {}
export interface GetPlaybackKeyPairCommandOutput extends GetPlaybackKeyPairResponse, __MetadataBearer {}

/**
 * <p>Gets a specified playback authorization key pair and returns the <code>arn</code> and
 *         <code>fingerprint</code>. The <code>privateKey</code> held by the caller can be used to
 *       generate viewer authorization tokens, to grant viewers access to private channels. For more
 *       information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User
 *       Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, GetPlaybackKeyPairCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, GetPlaybackKeyPairCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new GetPlaybackKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPlaybackKeyPairCommandInput} for command's `input` shape.
 * @see {@link GetPlaybackKeyPairCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 */
export class GetPlaybackKeyPairCommand extends $Command<
  GetPlaybackKeyPairCommandInput,
  GetPlaybackKeyPairCommandOutput,
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

  constructor(readonly input: GetPlaybackKeyPairCommandInput) {
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
  ): Handler<GetPlaybackKeyPairCommandInput, GetPlaybackKeyPairCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPlaybackKeyPairCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "GetPlaybackKeyPairCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPlaybackKeyPairRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetPlaybackKeyPairResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPlaybackKeyPairCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPlaybackKeyPairCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPlaybackKeyPairCommandOutput> {
    return deserializeAws_restJson1GetPlaybackKeyPairCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
