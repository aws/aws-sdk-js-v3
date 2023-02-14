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
  CreateResponseHeadersPolicyRequest,
  CreateResponseHeadersPolicyRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  CreateResponseHeadersPolicyResult,
  CreateResponseHeadersPolicyResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlCreateResponseHeadersPolicyCommand,
  serializeAws_restXmlCreateResponseHeadersPolicyCommand,
} from "../protocols/Aws_restXml";

export interface CreateResponseHeadersPolicyCommandInput extends CreateResponseHeadersPolicyRequest {}
export interface CreateResponseHeadersPolicyCommandOutput extends CreateResponseHeadersPolicyResult, __MetadataBearer {}

/**
 * <p>Creates a response headers policy.</p>
 *          <p>A response headers policy contains information about a set of HTTP headers. To create a
 * 			response headers policy, you provide some metadata about the policy and a set of
 * 			configurations that specify the headers.</p>
 *          <p>After you create a response headers policy, you can use its ID to attach it to one or more
 * 			cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the
 * 			response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to
 * 			requests that match the cache behavior. CloudFront adds or removes response headers according
 * 			to the configuration of the response headers policy.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateResponseHeadersPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateResponseHeadersPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateResponseHeadersPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResponseHeadersPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateResponseHeadersPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class CreateResponseHeadersPolicyCommand extends $Command<
  CreateResponseHeadersPolicyCommandInput,
  CreateResponseHeadersPolicyCommandOutput,
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

  constructor(readonly input: CreateResponseHeadersPolicyCommandInput) {
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
  ): Handler<CreateResponseHeadersPolicyCommandInput, CreateResponseHeadersPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateResponseHeadersPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateResponseHeadersPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateResponseHeadersPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateResponseHeadersPolicyResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateResponseHeadersPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateResponseHeadersPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateResponseHeadersPolicyCommandOutput> {
    return deserializeAws_restXmlCreateResponseHeadersPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
