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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import {
  CreateStreamingURLRequest,
  CreateStreamingURLRequestFilterSensitiveLog,
  CreateStreamingURLResult,
  CreateStreamingURLResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateStreamingURLCommand,
  serializeAws_json1_1CreateStreamingURLCommand,
} from "../protocols/Aws_json1_1";

export interface CreateStreamingURLCommandInput extends CreateStreamingURLRequest {}
export interface CreateStreamingURLCommandOutput extends CreateStreamingURLResult, __MetadataBearer {}

/**
 * <p>Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateStreamingURLCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateStreamingURLCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new CreateStreamingURLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamingURLCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingURLCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 */
export class CreateStreamingURLCommand extends $Command<
  CreateStreamingURLCommandInput,
  CreateStreamingURLCommandOutput,
  AppStreamClientResolvedConfig
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

  constructor(readonly input: CreateStreamingURLCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStreamingURLCommandInput, CreateStreamingURLCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateStreamingURLCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "CreateStreamingURLCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStreamingURLRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateStreamingURLResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateStreamingURLCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateStreamingURLCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStreamingURLCommandOutput> {
    return deserializeAws_json1_1CreateStreamingURLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
