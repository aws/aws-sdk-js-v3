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

import { DLMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DLMClient";
import {
  CreateLifecyclePolicyRequest,
  CreateLifecyclePolicyRequestFilterSensitiveLog,
  CreateLifecyclePolicyResponse,
  CreateLifecyclePolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateLifecyclePolicyCommand,
  serializeAws_restJson1CreateLifecyclePolicyCommand,
} from "../protocols/Aws_restJson1";

export interface CreateLifecyclePolicyCommandInput extends CreateLifecyclePolicyRequest {}
export interface CreateLifecyclePolicyCommandOutput extends CreateLifecyclePolicyResponse, __MetadataBearer {}

/**
 * <p>Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can
 * 			create up to 100 lifecycle policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, CreateLifecyclePolicyCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, CreateLifecyclePolicyCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * const client = new DLMClient(config);
 * const command = new CreateLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link CreateLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for DLMClient's `config` shape.
 *
 */
export class CreateLifecyclePolicyCommand extends $Command<
  CreateLifecyclePolicyCommandInput,
  CreateLifecyclePolicyCommandOutput,
  DLMClientResolvedConfig
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

  constructor(readonly input: CreateLifecyclePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DLMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLifecyclePolicyCommandInput, CreateLifecyclePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLifecyclePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DLMClient";
    const commandName = "CreateLifecyclePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLifecyclePolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateLifecyclePolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLifecyclePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateLifecyclePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLifecyclePolicyCommandOutput> {
    return deserializeAws_restJson1CreateLifecyclePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
