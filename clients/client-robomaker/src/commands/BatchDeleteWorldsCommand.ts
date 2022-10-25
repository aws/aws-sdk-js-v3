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

import {
  BatchDeleteWorldsRequest,
  BatchDeleteWorldsRequestFilterSensitiveLog,
  BatchDeleteWorldsResponse,
  BatchDeleteWorldsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchDeleteWorldsCommand,
  serializeAws_restJson1BatchDeleteWorldsCommand,
} from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

export interface BatchDeleteWorldsCommandInput extends BatchDeleteWorldsRequest {}
export interface BatchDeleteWorldsCommandOutput extends BatchDeleteWorldsResponse, __MetadataBearer {}

/**
 * <p>Deletes one or more worlds in a batch operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, BatchDeleteWorldsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, BatchDeleteWorldsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new BatchDeleteWorldsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteWorldsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteWorldsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 */
export class BatchDeleteWorldsCommand extends $Command<
  BatchDeleteWorldsCommandInput,
  BatchDeleteWorldsCommandOutput,
  RoboMakerClientResolvedConfig
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

  constructor(readonly input: BatchDeleteWorldsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeleteWorldsCommandInput, BatchDeleteWorldsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDeleteWorldsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "BatchDeleteWorldsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteWorldsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteWorldsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDeleteWorldsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDeleteWorldsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDeleteWorldsCommandOutput> {
    return deserializeAws_restJson1BatchDeleteWorldsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
