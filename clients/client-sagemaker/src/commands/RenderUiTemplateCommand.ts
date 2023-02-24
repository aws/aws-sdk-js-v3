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
  RenderUiTemplateRequest,
  RenderUiTemplateRequestFilterSensitiveLog,
  RenderUiTemplateResponse,
  RenderUiTemplateResponseFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_json1_1RenderUiTemplateCommand,
  serializeAws_json1_1RenderUiTemplateCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface RenderUiTemplateCommandInput extends RenderUiTemplateRequest {}
export interface RenderUiTemplateCommandOutput extends RenderUiTemplateResponse, __MetadataBearer {}

/**
 * <p>Renders the UI template so that you can preview the worker's experience. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, RenderUiTemplateCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, RenderUiTemplateCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new RenderUiTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RenderUiTemplateCommandInput} for command's `input` shape.
 * @see {@link RenderUiTemplateCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class RenderUiTemplateCommand extends $Command<
  RenderUiTemplateCommandInput,
  RenderUiTemplateCommandOutput,
  SageMakerClientResolvedConfig
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

  constructor(readonly input: RenderUiTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RenderUiTemplateCommandInput, RenderUiTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RenderUiTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "RenderUiTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RenderUiTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RenderUiTemplateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RenderUiTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RenderUiTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RenderUiTemplateCommandOutput> {
    return deserializeAws_json1_1RenderUiTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
