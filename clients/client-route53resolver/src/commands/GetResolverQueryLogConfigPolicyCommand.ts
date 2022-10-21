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

import {
  GetResolverQueryLogConfigPolicyRequest,
  GetResolverQueryLogConfigPolicyRequestFilterSensitiveLog,
  GetResolverQueryLogConfigPolicyResponse,
  GetResolverQueryLogConfigPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetResolverQueryLogConfigPolicyCommand,
  serializeAws_json1_1GetResolverQueryLogConfigPolicyCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

export interface GetResolverQueryLogConfigPolicyCommandInput extends GetResolverQueryLogConfigPolicyRequest {}
export interface GetResolverQueryLogConfigPolicyCommandOutput
  extends GetResolverQueryLogConfigPolicyResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about a query logging policy. A query logging policy specifies the Resolver query logging
 * 			operations and resources that you want to allow another Amazon Web Services account to be able to use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverQueryLogConfigPolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverQueryLogConfigPolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetResolverQueryLogConfigPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResolverQueryLogConfigPolicyCommandInput} for command's `input` shape.
 * @see {@link GetResolverQueryLogConfigPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 */
export class GetResolverQueryLogConfigPolicyCommand extends $Command<
  GetResolverQueryLogConfigPolicyCommandInput,
  GetResolverQueryLogConfigPolicyCommandOutput,
  Route53ResolverClientResolvedConfig
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

  constructor(readonly input: GetResolverQueryLogConfigPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResolverQueryLogConfigPolicyCommandInput, GetResolverQueryLogConfigPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResolverQueryLogConfigPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "GetResolverQueryLogConfigPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResolverQueryLogConfigPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetResolverQueryLogConfigPolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetResolverQueryLogConfigPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResolverQueryLogConfigPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResolverQueryLogConfigPolicyCommandOutput> {
    return deserializeAws_json1_1GetResolverQueryLogConfigPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
