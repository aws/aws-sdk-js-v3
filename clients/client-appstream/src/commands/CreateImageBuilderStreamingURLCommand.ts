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
  CreateImageBuilderStreamingURLRequest,
  CreateImageBuilderStreamingURLRequestFilterSensitiveLog,
  CreateImageBuilderStreamingURLResult,
  CreateImageBuilderStreamingURLResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateImageBuilderStreamingURLCommand,
  serializeAws_json1_1CreateImageBuilderStreamingURLCommand,
} from "../protocols/Aws_json1_1";

export interface CreateImageBuilderStreamingURLCommandInput extends CreateImageBuilderStreamingURLRequest {}
export interface CreateImageBuilderStreamingURLCommandOutput
  extends CreateImageBuilderStreamingURLResult,
    __MetadataBearer {}

/**
 * <p>Creates a URL to start an image builder streaming session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateImageBuilderStreamingURLCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateImageBuilderStreamingURLCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new CreateImageBuilderStreamingURLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImageBuilderStreamingURLCommandInput} for command's `input` shape.
 * @see {@link CreateImageBuilderStreamingURLCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 */
export class CreateImageBuilderStreamingURLCommand extends $Command<
  CreateImageBuilderStreamingURLCommandInput,
  CreateImageBuilderStreamingURLCommandOutput,
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

  constructor(readonly input: CreateImageBuilderStreamingURLCommandInput) {
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
  ): Handler<CreateImageBuilderStreamingURLCommandInput, CreateImageBuilderStreamingURLCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateImageBuilderStreamingURLCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "CreateImageBuilderStreamingURLCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateImageBuilderStreamingURLRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateImageBuilderStreamingURLResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateImageBuilderStreamingURLCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateImageBuilderStreamingURLCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateImageBuilderStreamingURLCommandOutput> {
    return deserializeAws_json1_1CreateImageBuilderStreamingURLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
