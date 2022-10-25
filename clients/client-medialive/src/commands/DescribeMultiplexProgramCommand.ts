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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import {
  DescribeMultiplexProgramRequest,
  DescribeMultiplexProgramRequestFilterSensitiveLog,
  DescribeMultiplexProgramResponse,
  DescribeMultiplexProgramResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1DescribeMultiplexProgramCommand,
  serializeAws_restJson1DescribeMultiplexProgramCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeMultiplexProgramCommandInput extends DescribeMultiplexProgramRequest {}
export interface DescribeMultiplexProgramCommandOutput extends DescribeMultiplexProgramResponse, __MetadataBearer {}

/**
 * Get the details for a program in a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeMultiplexProgramCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeMultiplexProgramCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeMultiplexProgramCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMultiplexProgramCommandInput} for command's `input` shape.
 * @see {@link DescribeMultiplexProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 */
export class DescribeMultiplexProgramCommand extends $Command<
  DescribeMultiplexProgramCommandInput,
  DescribeMultiplexProgramCommandOutput,
  MediaLiveClientResolvedConfig
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

  constructor(readonly input: DescribeMultiplexProgramCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMultiplexProgramCommandInput, DescribeMultiplexProgramCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMultiplexProgramCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DescribeMultiplexProgramCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMultiplexProgramRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeMultiplexProgramResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeMultiplexProgramCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeMultiplexProgramCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMultiplexProgramCommandOutput> {
    return deserializeAws_restJson1DescribeMultiplexProgramCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
