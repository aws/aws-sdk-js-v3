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
  CreateKeySigningKeyRequest,
  CreateKeySigningKeyRequestFilterSensitiveLog,
  CreateKeySigningKeyResponse,
  CreateKeySigningKeyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlCreateKeySigningKeyCommand,
  serializeAws_restXmlCreateKeySigningKeyCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface CreateKeySigningKeyCommandInput extends CreateKeySigningKeyRequest {}
export interface CreateKeySigningKeyCommandOutput extends CreateKeySigningKeyResponse, __MetadataBearer {}

/**
 * <p>Creates a new key-signing key (KSK) associated with a hosted zone. You can only have
 * 			two KSKs per hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateKeySigningKeyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateKeySigningKeyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new CreateKeySigningKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateKeySigningKeyCommandInput} for command's `input` shape.
 * @see {@link CreateKeySigningKeyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class CreateKeySigningKeyCommand extends $Command<
  CreateKeySigningKeyCommandInput,
  CreateKeySigningKeyCommandOutput,
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

  constructor(readonly input: CreateKeySigningKeyCommandInput) {
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
  ): Handler<CreateKeySigningKeyCommandInput, CreateKeySigningKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateKeySigningKeyCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "CreateKeySigningKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateKeySigningKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateKeySigningKeyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateKeySigningKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateKeySigningKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateKeySigningKeyCommandOutput> {
    return deserializeAws_restXmlCreateKeySigningKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
