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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  CreateCertificateRequest,
  CreateCertificateRequestFilterSensitiveLog,
  CreateCertificateResult,
  CreateCertificateResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateCertificateCommand,
  serializeAws_json1_1CreateCertificateCommand,
} from "../protocols/Aws_json1_1";

export interface CreateCertificateCommandInput extends CreateCertificateRequest {}
export interface CreateCertificateCommandOutput extends CreateCertificateResult, __MetadataBearer {}

/**
 * <p>Creates an SSL/TLS certificate for an Amazon Lightsail content delivery network (CDN)
 *       distribution and a container service.</p>
 *          <p>After the certificate is valid, use the <code>AttachCertificateToDistribution</code>
 *       action to use the certificate and its domains with your distribution. Or use the
 *         <code>UpdateContainerService</code> action to use the certificate and its domains with your
 *       container service.</p>
 *          <important>
 *             <p>Only certificates created in the <code>us-east-1</code>
 *         Amazon Web Services Region can be attached to Lightsail distributions. Lightsail
 *         distributions are global resources that can reference an origin in any Amazon Web Services
 *         Region, and distribute its content globally. However, all distributions are located in the
 *           <code>us-east-1</code> Region.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateCertificateCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateCertificateCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCertificateCommandInput} for command's `input` shape.
 * @see {@link CreateCertificateCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class CreateCertificateCommand extends $Command<
  CreateCertificateCommandInput,
  CreateCertificateCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: CreateCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCertificateCommandInput, CreateCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCertificateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCertificateResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCertificateCommandOutput> {
    return deserializeAws_json1_1CreateCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
