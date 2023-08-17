// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ExportClientVpnClientCertificateRevocationListRequest,
  ExportClientVpnClientCertificateRevocationListResult,
} from "../models/models_5";
import {
  de_ExportClientVpnClientCertificateRevocationListCommand,
  se_ExportClientVpnClientCertificateRevocationListCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExportClientVpnClientCertificateRevocationListCommand}.
 */
export interface ExportClientVpnClientCertificateRevocationListCommandInput
  extends ExportClientVpnClientCertificateRevocationListRequest {}
/**
 * @public
 *
 * The output of {@link ExportClientVpnClientCertificateRevocationListCommand}.
 */
export interface ExportClientVpnClientCertificateRevocationListCommandOutput
  extends ExportClientVpnClientCertificateRevocationListResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Downloads the client certificate revocation list for the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ExportClientVpnClientCertificateRevocationListCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ExportClientVpnClientCertificateRevocationListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ExportClientVpnClientCertificateRevocationListRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ExportClientVpnClientCertificateRevocationListCommand(input);
 * const response = await client.send(command);
 * // { // ExportClientVpnClientCertificateRevocationListResult
 * //   CertificateRevocationList: "STRING_VALUE",
 * //   Status: { // ClientCertificateRevocationListStatus
 * //     Code: "pending" || "active",
 * //     Message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ExportClientVpnClientCertificateRevocationListCommandInput - {@link ExportClientVpnClientCertificateRevocationListCommandInput}
 * @returns {@link ExportClientVpnClientCertificateRevocationListCommandOutput}
 * @see {@link ExportClientVpnClientCertificateRevocationListCommandInput} for command's `input` shape.
 * @see {@link ExportClientVpnClientCertificateRevocationListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
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

  /**
   * @public
   */
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
  private serialize(
    input: ExportClientVpnClientCertificateRevocationListCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ExportClientVpnClientCertificateRevocationListCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportClientVpnClientCertificateRevocationListCommandOutput> {
    return de_ExportClientVpnClientCertificateRevocationListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
