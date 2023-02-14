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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  RegisterContainerImageRequest,
  RegisterContainerImageRequestFilterSensitiveLog,
  RegisterContainerImageResult,
  RegisterContainerImageResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1RegisterContainerImageCommand,
  serializeAws_json1_1RegisterContainerImageCommand,
} from "../protocols/Aws_json1_1";

export interface RegisterContainerImageCommandInput extends RegisterContainerImageRequest {}
export interface RegisterContainerImageCommandOutput extends RegisterContainerImageResult, __MetadataBearer {}

/**
 * <p>Registers a container image to your Amazon Lightsail container service.</p>
 *          <note>
 *             <p>This action is not required if you install and use the Lightsail Control
 *         (lightsailctl) plugin to push container images to your Lightsail container service. For
 *         more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a>
 *         in the <i>Amazon Lightsail Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, RegisterContainerImageCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, RegisterContainerImageCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new RegisterContainerImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterContainerImageCommandInput} for command's `input` shape.
 * @see {@link RegisterContainerImageCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class RegisterContainerImageCommand extends $Command<
  RegisterContainerImageCommandInput,
  RegisterContainerImageCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: RegisterContainerImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterContainerImageCommandInput, RegisterContainerImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterContainerImageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "RegisterContainerImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterContainerImageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterContainerImageResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterContainerImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterContainerImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterContainerImageCommandOutput> {
    return deserializeAws_json1_1RegisterContainerImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
