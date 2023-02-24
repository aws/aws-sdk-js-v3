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
  DisableHostedZoneDNSSECRequest,
  DisableHostedZoneDNSSECRequestFilterSensitiveLog,
  DisableHostedZoneDNSSECResponse,
  DisableHostedZoneDNSSECResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlDisableHostedZoneDNSSECCommand,
  serializeAws_restXmlDisableHostedZoneDNSSECCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface DisableHostedZoneDNSSECCommandInput extends DisableHostedZoneDNSSECRequest {}
export interface DisableHostedZoneDNSSECCommandOutput extends DisableHostedZoneDNSSECResponse, __MetadataBearer {}

/**
 * <p>Disables DNSSEC signing in a specific hosted zone. This action does not deactivate any
 * 			key-signing keys (KSKs) that are active in the hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DisableHostedZoneDNSSECCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DisableHostedZoneDNSSECCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DisableHostedZoneDNSSECCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableHostedZoneDNSSECCommandInput} for command's `input` shape.
 * @see {@link DisableHostedZoneDNSSECCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class DisableHostedZoneDNSSECCommand extends $Command<
  DisableHostedZoneDNSSECCommandInput,
  DisableHostedZoneDNSSECCommandOutput,
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

  constructor(readonly input: DisableHostedZoneDNSSECCommandInput) {
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
  ): Handler<DisableHostedZoneDNSSECCommandInput, DisableHostedZoneDNSSECCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableHostedZoneDNSSECCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DisableHostedZoneDNSSECCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableHostedZoneDNSSECRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisableHostedZoneDNSSECResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableHostedZoneDNSSECCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDisableHostedZoneDNSSECCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableHostedZoneDNSSECCommandOutput> {
    return deserializeAws_restXmlDisableHostedZoneDNSSECCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
