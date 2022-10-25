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

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import {
  GetContainerRecipePolicyRequest,
  GetContainerRecipePolicyRequestFilterSensitiveLog,
  GetContainerRecipePolicyResponse,
  GetContainerRecipePolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetContainerRecipePolicyCommand,
  serializeAws_restJson1GetContainerRecipePolicyCommand,
} from "../protocols/Aws_restJson1";

export interface GetContainerRecipePolicyCommandInput extends GetContainerRecipePolicyRequest {}
export interface GetContainerRecipePolicyCommandOutput extends GetContainerRecipePolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the policy for a container recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetContainerRecipePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetContainerRecipePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetContainerRecipePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerRecipePolicyCommandInput} for command's `input` shape.
 * @see {@link GetContainerRecipePolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 */
export class GetContainerRecipePolicyCommand extends $Command<
  GetContainerRecipePolicyCommandInput,
  GetContainerRecipePolicyCommandOutput,
  ImagebuilderClientResolvedConfig
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

  constructor(readonly input: GetContainerRecipePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetContainerRecipePolicyCommandInput, GetContainerRecipePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetContainerRecipePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "GetContainerRecipePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContainerRecipePolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetContainerRecipePolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContainerRecipePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetContainerRecipePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetContainerRecipePolicyCommandOutput> {
    return deserializeAws_restJson1GetContainerRecipePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
