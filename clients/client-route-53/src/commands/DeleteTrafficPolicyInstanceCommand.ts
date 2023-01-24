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
  DeleteTrafficPolicyInstanceRequest,
  DeleteTrafficPolicyInstanceRequestFilterSensitiveLog,
  DeleteTrafficPolicyInstanceResponse,
  DeleteTrafficPolicyInstanceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlDeleteTrafficPolicyInstanceCommand,
  serializeAws_restXmlDeleteTrafficPolicyInstanceCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface DeleteTrafficPolicyInstanceCommandInput extends DeleteTrafficPolicyInstanceRequest {}
export interface DeleteTrafficPolicyInstanceCommandOutput
  extends DeleteTrafficPolicyInstanceResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a traffic policy instance and all of the resource record sets that Amazon
 * 			Route 53 created when you created the instance.</p>
 *          <note>
 *             <p>In the Route 53 console, traffic policy instances are known as policy
 * 				records.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class DeleteTrafficPolicyInstanceCommand extends $Command<
  DeleteTrafficPolicyInstanceCommandInput,
  DeleteTrafficPolicyInstanceCommandOutput,
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

  constructor(readonly input: DeleteTrafficPolicyInstanceCommandInput) {
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
  ): Handler<DeleteTrafficPolicyInstanceCommandInput, DeleteTrafficPolicyInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTrafficPolicyInstanceCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DeleteTrafficPolicyInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTrafficPolicyInstanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteTrafficPolicyInstanceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTrafficPolicyInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteTrafficPolicyInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTrafficPolicyInstanceCommandOutput> {
    return deserializeAws_restXmlDeleteTrafficPolicyInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
