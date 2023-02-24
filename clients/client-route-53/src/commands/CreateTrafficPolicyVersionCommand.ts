// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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
  CreateTrafficPolicyVersionRequest,
  CreateTrafficPolicyVersionRequestFilterSensitiveLog,
  CreateTrafficPolicyVersionResponse,
  CreateTrafficPolicyVersionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlCreateTrafficPolicyVersionCommand,
  serializeAws_restXmlCreateTrafficPolicyVersionCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface CreateTrafficPolicyVersionCommandInput extends CreateTrafficPolicyVersionRequest {}
export interface CreateTrafficPolicyVersionCommandOutput extends CreateTrafficPolicyVersionResponse, __MetadataBearer {}

/**
 * <p>Creates a new version of an existing traffic policy. When you create a new version of
 * 			a traffic policy, you specify the ID of the traffic policy that you want to update and a
 * 			JSON-formatted document that describes the new version. You use traffic policies to
 * 			create multiple DNS resource record sets for one domain name (such as example.com) or
 * 			one subdomain name (such as www.example.com). You can create a maximum of 1000 versions
 * 			of a traffic policy. If you reach the limit and need to create another version, you'll
 * 			need to start a new traffic policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateTrafficPolicyVersionCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateTrafficPolicyVersionCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new CreateTrafficPolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrafficPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficPolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class CreateTrafficPolicyVersionCommand extends $Command<
  CreateTrafficPolicyVersionCommandInput,
  CreateTrafficPolicyVersionCommandOutput,
  Route53ClientResolvedConfig
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

  constructor(readonly input: CreateTrafficPolicyVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTrafficPolicyVersionCommandInput, CreateTrafficPolicyVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTrafficPolicyVersionCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "CreateTrafficPolicyVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTrafficPolicyVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTrafficPolicyVersionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTrafficPolicyVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateTrafficPolicyVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTrafficPolicyVersionCommandOutput> {
    return deserializeAws_restXmlCreateTrafficPolicyVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
