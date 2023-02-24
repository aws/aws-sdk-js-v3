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
  UpdateResponseHeadersPolicyRequest,
  UpdateResponseHeadersPolicyRequestFilterSensitiveLog,
  UpdateResponseHeadersPolicyResult,
  UpdateResponseHeadersPolicyResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlUpdateResponseHeadersPolicyCommand,
  serializeAws_restXmlUpdateResponseHeadersPolicyCommand,
} from "../protocols/Aws_restXml";

export interface UpdateResponseHeadersPolicyCommandInput extends UpdateResponseHeadersPolicyRequest {}
export interface UpdateResponseHeadersPolicyCommandOutput extends UpdateResponseHeadersPolicyResult, __MetadataBearer {}

/**
 * <p>Updates a response headers policy.</p>
 *          <p>When you update a response headers policy, the entire policy is replaced. You cannot
 * 			update some policy fields independent of others. To update a response headers policy
 * 			configuration:</p>
 *          <ol>
 *             <li>
 *                <p>Use <code>GetResponseHeadersPolicyConfig</code> to get the current policy's
 * 					configuration.</p>
 *             </li>
 *             <li>
 *                <p>Modify the fields in the response headers policy configuration that you want
 * 					to update.</p>
 *             </li>
 *             <li>
 *                <p>Call <code>UpdateResponseHeadersPolicy</code>, providing the entire response
 * 					headers policy configuration, including the fields that you modified and those
 * 					that you didn't.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateResponseHeadersPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateResponseHeadersPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateResponseHeadersPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResponseHeadersPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateResponseHeadersPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class UpdateResponseHeadersPolicyCommand extends $Command<
  UpdateResponseHeadersPolicyCommandInput,
  UpdateResponseHeadersPolicyCommandOutput,
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

  constructor(readonly input: UpdateResponseHeadersPolicyCommandInput) {
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
  ): Handler<UpdateResponseHeadersPolicyCommandInput, UpdateResponseHeadersPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateResponseHeadersPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateResponseHeadersPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateResponseHeadersPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateResponseHeadersPolicyResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateResponseHeadersPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateResponseHeadersPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateResponseHeadersPolicyCommandOutput> {
    return deserializeAws_restXmlUpdateResponseHeadersPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
