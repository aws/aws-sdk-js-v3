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
  GetChangeRequest,
  GetChangeRequestFilterSensitiveLog,
  GetChangeResponse,
  GetChangeResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_restXmlGetChangeCommand, serializeAws_restXmlGetChangeCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface GetChangeCommandInput extends GetChangeRequest {}
export interface GetChangeCommandOutput extends GetChangeResponse, __MetadataBearer {}

/**
 * <p>Returns the current status of a change batch request. The status is one of the
 * 			following values:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>PENDING</code> indicates that the changes in this request have not
 * 					propagated to all Amazon Route 53 DNS servers. This is the initial status of all
 * 					change batch requests.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INSYNC</code> indicates that the changes have propagated to all Route 53
 * 					DNS servers. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetChangeCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetChangeCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetChangeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChangeCommandInput} for command's `input` shape.
 * @see {@link GetChangeCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class GetChangeCommand extends $Command<
  GetChangeCommandInput,
  GetChangeCommandOutput,
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

  constructor(readonly input: GetChangeCommandInput) {
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
  ): Handler<GetChangeCommandInput, GetChangeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetChangeCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetChangeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetChangeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetChangeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetChangeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetChangeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetChangeCommandOutput> {
    return deserializeAws_restXmlGetChangeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
