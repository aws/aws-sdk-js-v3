import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetTrafficPolicyInstanceCountRequest, GetTrafficPolicyInstanceCountResponse } from "../models/models_0";
import {
  deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand,
  serializeAws_restXmlGetTrafficPolicyInstanceCountCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetTrafficPolicyInstanceCountCommandInput extends GetTrafficPolicyInstanceCountRequest {}
export interface GetTrafficPolicyInstanceCountCommandOutput
  extends GetTrafficPolicyInstanceCountResponse,
    __MetadataBearer {}

/**
 * <p>Gets the number of traffic policy instances that are associated with the current Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetTrafficPolicyInstanceCountCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetTrafficPolicyInstanceCountCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetTrafficPolicyInstanceCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTrafficPolicyInstanceCountCommandInput} for command's `input` shape.
 * @see {@link GetTrafficPolicyInstanceCountCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetTrafficPolicyInstanceCountCommand extends $Command<
  GetTrafficPolicyInstanceCountCommandInput,
  GetTrafficPolicyInstanceCountCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetTrafficPolicyInstanceCountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTrafficPolicyInstanceCountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTrafficPolicyInstanceCountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTrafficPolicyInstanceCountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetTrafficPolicyInstanceCountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTrafficPolicyInstanceCountCommandOutput> {
    return deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
