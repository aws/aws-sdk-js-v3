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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ExportClientVpnClientCertificateRevocationListRequest,
  ExportClientVpnClientCertificateRevocationListRequestFilterSensitiveLog,
  ExportClientVpnClientCertificateRevocationListResult,
  ExportClientVpnClientCertificateRevocationListResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2ExportClientVpnClientCertificateRevocationListCommand,
  serializeAws_ec2ExportClientVpnClientCertificateRevocationListCommand,
} from "../protocols/Aws_ec2";

export interface ExportClientVpnClientCertificateRevocationListCommandInput
  extends ExportClientVpnClientCertificateRevocationListRequest {}
export interface ExportClientVpnClientCertificateRevocationListCommandOutput
  extends ExportClientVpnClientCertificateRevocationListResult,
    __MetadataBearer {}

/**
 * <p>Downloads the client certificate revocation list for the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ExportClientVpnClientCertificateRevocationListCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ExportClientVpnClientCertificateRevocationListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ExportClientVpnClientCertificateRevocationListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportClientVpnClientCertificateRevocationListCommandInput} for command's `input` shape.
 * @see {@link ExportClientVpnClientCertificateRevocationListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ExportClientVpnClientCertificateRevocationListCommand extends $Command<
  ExportClientVpnClientCertificateRevocationListCommandInput,
  ExportClientVpnClientCertificateRevocationListCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: ExportClientVpnClientCertificateRevocationListCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ExportClientVpnClientCertificateRevocationListCommandInput,
    ExportClientVpnClientCertificateRevocationListCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ExportClientVpnClientCertificateRevocationListCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ExportClientVpnClientCertificateRevocationListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportClientVpnClientCertificateRevocationListRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExportClientVpnClientCertificateRevocationListResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ExportClientVpnClientCertificateRevocationListCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ExportClientVpnClientCertificateRevocationListCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportClientVpnClientCertificateRevocationListCommandOutput> {
    return deserializeAws_ec2ExportClientVpnClientCertificateRevocationListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
