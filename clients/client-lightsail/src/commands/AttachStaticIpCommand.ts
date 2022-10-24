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
  AttachStaticIpRequest,
  AttachStaticIpRequestFilterSensitiveLog,
  AttachStaticIpResult,
  AttachStaticIpResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AttachStaticIpCommand,
  serializeAws_json1_1AttachStaticIpCommand,
} from "../protocols/Aws_json1_1";

export interface AttachStaticIpCommandInput extends AttachStaticIpRequest {}
export interface AttachStaticIpCommandOutput extends AttachStaticIpResult, __MetadataBearer {}

/**
 * <p>Attaches a static IP address to a specific Amazon Lightsail instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, AttachStaticIpCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, AttachStaticIpCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new AttachStaticIpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachStaticIpCommandInput} for command's `input` shape.
 * @see {@link AttachStaticIpCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class AttachStaticIpCommand extends $Command<
  AttachStaticIpCommandInput,
  AttachStaticIpCommandOutput,
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

  constructor(readonly input: AttachStaticIpCommandInput) {
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
  ): Handler<AttachStaticIpCommandInput, AttachStaticIpCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AttachStaticIpCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "AttachStaticIpCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachStaticIpRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AttachStaticIpResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachStaticIpCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AttachStaticIpCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachStaticIpCommandOutput> {
    return deserializeAws_json1_1AttachStaticIpCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
