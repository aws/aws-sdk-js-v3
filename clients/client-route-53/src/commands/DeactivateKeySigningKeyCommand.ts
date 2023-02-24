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
  DeactivateKeySigningKeyRequest,
  DeactivateKeySigningKeyRequestFilterSensitiveLog,
  DeactivateKeySigningKeyResponse,
  DeactivateKeySigningKeyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlDeactivateKeySigningKeyCommand,
  serializeAws_restXmlDeactivateKeySigningKeyCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface DeactivateKeySigningKeyCommandInput extends DeactivateKeySigningKeyRequest {}
export interface DeactivateKeySigningKeyCommandOutput extends DeactivateKeySigningKeyResponse, __MetadataBearer {}

/**
 * <p>Deactivates a key-signing key (KSK) so that it will not be used for signing by DNSSEC.
 * 			This operation changes the KSK status to <code>INACTIVE</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeactivateKeySigningKeyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeactivateKeySigningKeyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeactivateKeySigningKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeactivateKeySigningKeyCommandInput} for command's `input` shape.
 * @see {@link DeactivateKeySigningKeyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class DeactivateKeySigningKeyCommand extends $Command<
  DeactivateKeySigningKeyCommandInput,
  DeactivateKeySigningKeyCommandOutput,
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

  constructor(readonly input: DeactivateKeySigningKeyCommandInput) {
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
  ): Handler<DeactivateKeySigningKeyCommandInput, DeactivateKeySigningKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeactivateKeySigningKeyCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DeactivateKeySigningKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeactivateKeySigningKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeactivateKeySigningKeyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeactivateKeySigningKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeactivateKeySigningKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeactivateKeySigningKeyCommandOutput> {
    return deserializeAws_restXmlDeactivateKeySigningKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
