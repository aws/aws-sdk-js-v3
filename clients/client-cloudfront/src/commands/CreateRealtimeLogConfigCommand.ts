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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  CreateRealtimeLogConfigRequest,
  CreateRealtimeLogConfigRequestFilterSensitiveLog,
  CreateRealtimeLogConfigResult,
  CreateRealtimeLogConfigResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlCreateRealtimeLogConfigCommand,
  serializeAws_restXmlCreateRealtimeLogConfigCommand,
} from "../protocols/Aws_restXml";

export interface CreateRealtimeLogConfigCommandInput extends CreateRealtimeLogConfigRequest {}
export interface CreateRealtimeLogConfigCommandOutput extends CreateRealtimeLogConfigResult, __MetadataBearer {}

/**
 * <p>Creates a real-time log configuration.</p>
 *          <p>After you create a real-time log configuration, you can attach it to one or more cache
 * 			behaviors to send real-time log data to the specified Amazon Kinesis data stream.</p>
 *          <p>For more information about real-time log configurations, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link CreateRealtimeLogConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class CreateRealtimeLogConfigCommand extends $Command<
  CreateRealtimeLogConfigCommandInput,
  CreateRealtimeLogConfigCommandOutput,
  CloudFrontClientResolvedConfig
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

  constructor(readonly input: CreateRealtimeLogConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRealtimeLogConfigCommandInput, CreateRealtimeLogConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRealtimeLogConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateRealtimeLogConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRealtimeLogConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateRealtimeLogConfigResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRealtimeLogConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateRealtimeLogConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRealtimeLogConfigCommandOutput> {
    return deserializeAws_restXmlCreateRealtimeLogConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
