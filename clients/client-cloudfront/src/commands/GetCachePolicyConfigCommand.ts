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
  GetCachePolicyConfigRequest,
  GetCachePolicyConfigRequestFilterSensitiveLog,
  GetCachePolicyConfigResult,
  GetCachePolicyConfigResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlGetCachePolicyConfigCommand,
  serializeAws_restXmlGetCachePolicyConfigCommand,
} from "../protocols/Aws_restXml";

export interface GetCachePolicyConfigCommandInput extends GetCachePolicyConfigRequest {}
export interface GetCachePolicyConfigCommandOutput extends GetCachePolicyConfigResult, __MetadataBearer {}

/**
 * <p>Gets a cache policy configuration.</p>
 *          <p>To get a cache policy configuration, you must provide the policy's identifier. If the
 * 			cache policy is attached to a distribution's cache behavior, you can get the policy's
 * 			identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the
 * 			cache policy is not attached to a cache behavior, you can get the identifier using
 * 				<code>ListCachePolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetCachePolicyConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetCachePolicyConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetCachePolicyConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCachePolicyConfigCommandInput} for command's `input` shape.
 * @see {@link GetCachePolicyConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class GetCachePolicyConfigCommand extends $Command<
  GetCachePolicyConfigCommandInput,
  GetCachePolicyConfigCommandOutput,
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

  constructor(readonly input: GetCachePolicyConfigCommandInput) {
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
  ): Handler<GetCachePolicyConfigCommandInput, GetCachePolicyConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCachePolicyConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetCachePolicyConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCachePolicyConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCachePolicyConfigResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCachePolicyConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetCachePolicyConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCachePolicyConfigCommandOutput> {
    return deserializeAws_restXmlGetCachePolicyConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
