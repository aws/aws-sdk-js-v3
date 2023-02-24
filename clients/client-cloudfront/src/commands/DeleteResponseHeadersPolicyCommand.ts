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
  DeleteResponseHeadersPolicyRequest,
  DeleteResponseHeadersPolicyRequestFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlDeleteResponseHeadersPolicyCommand,
  serializeAws_restXmlDeleteResponseHeadersPolicyCommand,
} from "../protocols/Aws_restXml";

export interface DeleteResponseHeadersPolicyCommandInput extends DeleteResponseHeadersPolicyRequest {}
export interface DeleteResponseHeadersPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a response headers policy.</p>
 *          <p>You cannot delete a response headers policy if it's attached to a cache behavior.
 * 			First update your distributions to remove the response headers policy from all cache
 * 			behaviors, then delete the response headers policy.</p>
 *          <p>To delete a response headers policy, you must provide the policy's identifier and
 * 			version. To get these values, you can use <code>ListResponseHeadersPolicies</code> or
 * 				<code>GetResponseHeadersPolicy</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteResponseHeadersPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteResponseHeadersPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DeleteResponseHeadersPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResponseHeadersPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteResponseHeadersPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class DeleteResponseHeadersPolicyCommand extends $Command<
  DeleteResponseHeadersPolicyCommandInput,
  DeleteResponseHeadersPolicyCommandOutput,
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

  constructor(readonly input: DeleteResponseHeadersPolicyCommandInput) {
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
  ): Handler<DeleteResponseHeadersPolicyCommandInput, DeleteResponseHeadersPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteResponseHeadersPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "DeleteResponseHeadersPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteResponseHeadersPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteResponseHeadersPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteResponseHeadersPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteResponseHeadersPolicyCommandOutput> {
    return deserializeAws_restXmlDeleteResponseHeadersPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
