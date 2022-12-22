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
  PublishFunctionRequest,
  PublishFunctionRequestFilterSensitiveLog,
  PublishFunctionResult,
  PublishFunctionResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlPublishFunctionCommand,
  serializeAws_restXmlPublishFunctionCommand,
} from "../protocols/Aws_restXml";

export interface PublishFunctionCommandInput extends PublishFunctionRequest {}
export interface PublishFunctionCommandOutput extends PublishFunctionResult, __MetadataBearer {}

/**
 * <p>Publishes a CloudFront function by copying the function code from the
 * 				<code>DEVELOPMENT</code> stage to <code>LIVE</code>. This automatically updates all
 * 			cache behaviors that are using this function to use the newly published copy in the
 * 				<code>LIVE</code> stage.</p>
 *          <p>When a function is published to the <code>LIVE</code> stage, you can attach the
 * 			function to a distribution's cache behavior, using the function's Amazon Resource Name
 * 			(ARN).</p>
 *          <p>To publish a function, you must provide the function's name and version
 * 				(<code>ETag</code> value). To get these values, you can use
 * 				<code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, PublishFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, PublishFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new PublishFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishFunctionCommandInput} for command's `input` shape.
 * @see {@link PublishFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class PublishFunctionCommand extends $Command<
  PublishFunctionCommandInput,
  PublishFunctionCommandOutput,
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

  constructor(readonly input: PublishFunctionCommandInput) {
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
  ): Handler<PublishFunctionCommandInput, PublishFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PublishFunctionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "PublishFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PublishFunctionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PublishFunctionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PublishFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlPublishFunctionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishFunctionCommandOutput> {
    return deserializeAws_restXmlPublishFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
