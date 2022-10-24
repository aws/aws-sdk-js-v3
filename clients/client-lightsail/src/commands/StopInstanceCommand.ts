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
  StopInstanceRequest,
  StopInstanceRequestFilterSensitiveLog,
  StopInstanceResult,
  StopInstanceResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1StopInstanceCommand,
  serializeAws_json1_1StopInstanceCommand,
} from "../protocols/Aws_json1_1";

export interface StopInstanceCommandInput extends StopInstanceRequest {}
export interface StopInstanceCommandOutput extends StopInstanceResult, __MetadataBearer {}

/**
 * <p>Stops a specific Amazon Lightsail instance that is currently running.</p>
 *          <note>
 *             <p>When you start a stopped instance, Lightsail assigns a new public IP address to the
 *         instance. To use the same IP address after stopping and starting an instance, create a
 *         static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p>
 *          </note>
 *          <p>The <code>stop instance</code> operation supports tag-based access control via resource
 *       tags applied to the resource identified by <code>instance name</code>. For more information,
 *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, StopInstanceCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, StopInstanceCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new StopInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopInstanceCommandInput} for command's `input` shape.
 * @see {@link StopInstanceCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class StopInstanceCommand extends $Command<
  StopInstanceCommandInput,
  StopInstanceCommandOutput,
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

  constructor(readonly input: StopInstanceCommandInput) {
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
  ): Handler<StopInstanceCommandInput, StopInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StopInstanceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "StopInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopInstanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopInstanceResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopInstanceCommandOutput> {
    return deserializeAws_json1_1StopInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
