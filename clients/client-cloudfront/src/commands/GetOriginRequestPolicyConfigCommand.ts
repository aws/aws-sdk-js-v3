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
  GetOriginRequestPolicyConfigRequest,
  GetOriginRequestPolicyConfigRequestFilterSensitiveLog,
  GetOriginRequestPolicyConfigResult,
  GetOriginRequestPolicyConfigResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlGetOriginRequestPolicyConfigCommand,
  serializeAws_restXmlGetOriginRequestPolicyConfigCommand,
} from "../protocols/Aws_restXml";

export interface GetOriginRequestPolicyConfigCommandInput extends GetOriginRequestPolicyConfigRequest {}
export interface GetOriginRequestPolicyConfigCommandOutput
  extends GetOriginRequestPolicyConfigResult,
    __MetadataBearer {}

/**
 * <p>Gets an origin request policy configuration.</p>
 *          <p>To get an origin request policy configuration, you must provide the policy's
 * 			identifier. If the origin request policy is attached to a distribution's cache behavior,
 * 			you can get the policy's identifier using <code>ListDistributions</code> or
 * 				<code>GetDistribution</code>. If the origin request policy is not attached to a
 * 			cache behavior, you can get the identifier using
 * 			<code>ListOriginRequestPolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetOriginRequestPolicyConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetOriginRequestPolicyConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetOriginRequestPolicyConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOriginRequestPolicyConfigCommandInput} for command's `input` shape.
 * @see {@link GetOriginRequestPolicyConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class GetOriginRequestPolicyConfigCommand extends $Command<
  GetOriginRequestPolicyConfigCommandInput,
  GetOriginRequestPolicyConfigCommandOutput,
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

  constructor(readonly input: GetOriginRequestPolicyConfigCommandInput) {
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
  ): Handler<GetOriginRequestPolicyConfigCommandInput, GetOriginRequestPolicyConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetOriginRequestPolicyConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetOriginRequestPolicyConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOriginRequestPolicyConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetOriginRequestPolicyConfigResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOriginRequestPolicyConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetOriginRequestPolicyConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOriginRequestPolicyConfigCommandOutput> {
    return deserializeAws_restXmlGetOriginRequestPolicyConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
