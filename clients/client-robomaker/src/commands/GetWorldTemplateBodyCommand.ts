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
  GetWorldTemplateBodyRequest,
  GetWorldTemplateBodyRequestFilterSensitiveLog,
  GetWorldTemplateBodyResponse,
  GetWorldTemplateBodyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetWorldTemplateBodyCommand,
  serializeAws_restJson1GetWorldTemplateBodyCommand,
} from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

export interface GetWorldTemplateBodyCommandInput extends GetWorldTemplateBodyRequest {}
export interface GetWorldTemplateBodyCommandOutput extends GetWorldTemplateBodyResponse, __MetadataBearer {}

/**
 * <p>Gets the world template body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, GetWorldTemplateBodyCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, GetWorldTemplateBodyCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new GetWorldTemplateBodyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorldTemplateBodyCommandInput} for command's `input` shape.
 * @see {@link GetWorldTemplateBodyCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 */
export class GetWorldTemplateBodyCommand extends $Command<
  GetWorldTemplateBodyCommandInput,
  GetWorldTemplateBodyCommandOutput,
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

  constructor(readonly input: GetWorldTemplateBodyCommandInput) {
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
  ): Handler<GetWorldTemplateBodyCommandInput, GetWorldTemplateBodyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWorldTemplateBodyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "GetWorldTemplateBodyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetWorldTemplateBodyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetWorldTemplateBodyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetWorldTemplateBodyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetWorldTemplateBodyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWorldTemplateBodyCommandOutput> {
    return deserializeAws_restJson1GetWorldTemplateBodyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
