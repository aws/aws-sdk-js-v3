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
  DescribeFunctionRequest,
  DescribeFunctionRequestFilterSensitiveLog,
  DescribeFunctionResult,
  DescribeFunctionResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlDescribeFunctionCommand,
  serializeAws_restXmlDescribeFunctionCommand,
} from "../protocols/Aws_restXml";

export interface DescribeFunctionCommandInput extends DescribeFunctionRequest {}
export interface DescribeFunctionCommandOutput extends DescribeFunctionResult, __MetadataBearer {}

/**
 * <p>Gets configuration information and metadata about a CloudFront function, but not the
 * 			function's code. To get a function's code, use <code>GetFunction</code>.</p>
 *          <p>To get configuration information and metadata about a function, you must provide the
 * 			function's name and stage. To get these values, you can use
 * 			<code>ListFunctions</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DescribeFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DescribeFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DescribeFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFunctionCommandInput} for command's `input` shape.
 * @see {@link DescribeFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class DescribeFunctionCommand extends $Command<
  DescribeFunctionCommandInput,
  DescribeFunctionCommandOutput,
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

  constructor(readonly input: DescribeFunctionCommandInput) {
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
  ): Handler<DescribeFunctionCommandInput, DescribeFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFunctionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "DescribeFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFunctionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeFunctionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDescribeFunctionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFunctionCommandOutput> {
    return deserializeAws_restXmlDescribeFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
