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
  GetRealtimeLogConfigRequest,
  GetRealtimeLogConfigRequestFilterSensitiveLog,
  GetRealtimeLogConfigResult,
  GetRealtimeLogConfigResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlGetRealtimeLogConfigCommand,
  serializeAws_restXmlGetRealtimeLogConfigCommand,
} from "../protocols/Aws_restXml";

export interface GetRealtimeLogConfigCommandInput extends GetRealtimeLogConfigRequest {}
export interface GetRealtimeLogConfigCommandOutput extends GetRealtimeLogConfigResult, __MetadataBearer {}

/**
 * <p>Gets a real-time log configuration.</p>
 *          <p>To get a real-time log configuration, you can provide the configuration's name or its
 * 			Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront
 * 			uses the name to identify the real-time log configuration to get.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link GetRealtimeLogConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class GetRealtimeLogConfigCommand extends $Command<
  GetRealtimeLogConfigCommandInput,
  GetRealtimeLogConfigCommandOutput,
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

  constructor(readonly input: GetRealtimeLogConfigCommandInput) {
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
  ): Handler<GetRealtimeLogConfigCommandInput, GetRealtimeLogConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRealtimeLogConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetRealtimeLogConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRealtimeLogConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRealtimeLogConfigResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRealtimeLogConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetRealtimeLogConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRealtimeLogConfigCommandOutput> {
    return deserializeAws_restXmlGetRealtimeLogConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
