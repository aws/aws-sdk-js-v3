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
  UpdateOriginRequestPolicyRequest,
  UpdateOriginRequestPolicyRequestFilterSensitiveLog,
  UpdateOriginRequestPolicyResult,
  UpdateOriginRequestPolicyResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlUpdateOriginRequestPolicyCommand,
  serializeAws_restXmlUpdateOriginRequestPolicyCommand,
} from "../protocols/Aws_restXml";

export interface UpdateOriginRequestPolicyCommandInput extends UpdateOriginRequestPolicyRequest {}
export interface UpdateOriginRequestPolicyCommandOutput extends UpdateOriginRequestPolicyResult, __MetadataBearer {}

/**
 * <p>Updates an origin request policy configuration.</p>
 *          <p>When you update an origin request policy configuration, all the fields are updated
 * 			with the values provided in the request. You cannot update some fields independent of
 * 			others. To update an origin request policy configuration:</p>
 *          <ol>
 *             <li>
 *                <p>Use <code>GetOriginRequestPolicyConfig</code> to get the current
 * 					configuration.</p>
 *             </li>
 *             <li>
 *                <p>Locally modify the fields in the origin request policy configuration that you
 * 					want to update.</p>
 *             </li>
 *             <li>
 *                <p>Call <code>UpdateOriginRequestPolicy</code> by providing the entire origin
 * 					request policy configuration, including the fields that you modified and those
 * 					that you didn't.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateOriginRequestPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateOriginRequestPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateOriginRequestPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateOriginRequestPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateOriginRequestPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class UpdateOriginRequestPolicyCommand extends $Command<
  UpdateOriginRequestPolicyCommandInput,
  UpdateOriginRequestPolicyCommandOutput,
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

  constructor(readonly input: UpdateOriginRequestPolicyCommandInput) {
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
  ): Handler<UpdateOriginRequestPolicyCommandInput, UpdateOriginRequestPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateOriginRequestPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateOriginRequestPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateOriginRequestPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateOriginRequestPolicyResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateOriginRequestPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateOriginRequestPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateOriginRequestPolicyCommandOutput> {
    return deserializeAws_restXmlUpdateOriginRequestPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
