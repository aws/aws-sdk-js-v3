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

import { GameSparksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameSparksClient";
import {
  GetGeneratedCodeJobRequest,
  GetGeneratedCodeJobRequestFilterSensitiveLog,
  GetGeneratedCodeJobResult,
  GetGeneratedCodeJobResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetGeneratedCodeJobCommand,
  serializeAws_restJson1GetGeneratedCodeJobCommand,
} from "../protocols/Aws_restJson1";

export interface GetGeneratedCodeJobCommandInput extends GetGeneratedCodeJobRequest {}
export interface GetGeneratedCodeJobCommandOutput extends GetGeneratedCodeJobResult, __MetadataBearer {}

/**
 * <p>Gets details about a job that is generating code for a snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, GetGeneratedCodeJobCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, GetGeneratedCodeJobCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const command = new GetGeneratedCodeJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGeneratedCodeJobCommandInput} for command's `input` shape.
 * @see {@link GetGeneratedCodeJobCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 */
export class GetGeneratedCodeJobCommand extends $Command<
  GetGeneratedCodeJobCommandInput,
  GetGeneratedCodeJobCommandOutput,
  GameSparksClientResolvedConfig
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

  constructor(readonly input: GetGeneratedCodeJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameSparksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGeneratedCodeJobCommandInput, GetGeneratedCodeJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetGeneratedCodeJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "GetGeneratedCodeJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGeneratedCodeJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetGeneratedCodeJobResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetGeneratedCodeJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetGeneratedCodeJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGeneratedCodeJobCommandOutput> {
    return deserializeAws_restJson1GetGeneratedCodeJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
