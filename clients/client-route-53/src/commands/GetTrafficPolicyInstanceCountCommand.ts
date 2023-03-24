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

import { GetTrafficPolicyInstanceCountRequest, GetTrafficPolicyInstanceCountResponse } from "../models/models_0";
import {
  deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand,
  serializeAws_restXmlGetTrafficPolicyInstanceCountCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 *
 * The input for {@link GetTrafficPolicyInstanceCountCommand}.
 */
export interface GetTrafficPolicyInstanceCountCommandInput extends GetTrafficPolicyInstanceCountRequest {}
/**
 * @public
 *
 * The output of {@link GetTrafficPolicyInstanceCountCommand}.
 */
export interface GetTrafficPolicyInstanceCountCommandOutput
  extends GetTrafficPolicyInstanceCountResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the number of traffic policy instances that are associated with the current
 * 				Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetTrafficPolicyInstanceCountCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetTrafficPolicyInstanceCountCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = {};
 * const command = new GetTrafficPolicyInstanceCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetTrafficPolicyInstanceCountCommandInput - {@link GetTrafficPolicyInstanceCountCommandInput}
 * @returns {@link GetTrafficPolicyInstanceCountCommandOutput}
 * @see {@link GetTrafficPolicyInstanceCountCommandInput} for command's `input` shape.
 * @see {@link GetTrafficPolicyInstanceCountCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 *
 */
export class GetTrafficPolicyInstanceCountCommand extends $Command<
  GetTrafficPolicyInstanceCountCommandInput,
  GetTrafficPolicyInstanceCountCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: GetTrafficPolicyInstanceCountCommandInput) {
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
  ): Handler<GetTrafficPolicyInstanceCountCommandInput, GetTrafficPolicyInstanceCountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTrafficPolicyInstanceCountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetTrafficPolicyInstanceCountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetTrafficPolicyInstanceCountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetTrafficPolicyInstanceCountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTrafficPolicyInstanceCountCommandOutput> {
    return deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
