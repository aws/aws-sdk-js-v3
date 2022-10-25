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

import {
  DisassociateWebsiteCertificateAuthorityRequest,
  DisassociateWebsiteCertificateAuthorityRequestFilterSensitiveLog,
  DisassociateWebsiteCertificateAuthorityResponse,
  DisassociateWebsiteCertificateAuthorityResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand,
  serializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

export interface DisassociateWebsiteCertificateAuthorityCommandInput
  extends DisassociateWebsiteCertificateAuthorityRequest {}
export interface DisassociateWebsiteCertificateAuthorityCommandOutput
  extends DisassociateWebsiteCertificateAuthorityResponse,
    __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Removes a certificate authority (CA).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DisassociateWebsiteCertificateAuthorityCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DisassociateWebsiteCertificateAuthorityCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DisassociateWebsiteCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateWebsiteCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link DisassociateWebsiteCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 */
export class DisassociateWebsiteCertificateAuthorityCommand extends $Command<
  DisassociateWebsiteCertificateAuthorityCommandInput,
  DisassociateWebsiteCertificateAuthorityCommandOutput,
  WorkLinkClientResolvedConfig
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

  constructor(readonly input: DisassociateWebsiteCertificateAuthorityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociateWebsiteCertificateAuthorityCommandInput,
    DisassociateWebsiteCertificateAuthorityCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DisassociateWebsiteCertificateAuthorityCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "DisassociateWebsiteCertificateAuthorityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateWebsiteCertificateAuthorityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateWebsiteCertificateAuthorityResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateWebsiteCertificateAuthorityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateWebsiteCertificateAuthorityCommandOutput> {
    return deserializeAws_restJson1DisassociateWebsiteCertificateAuthorityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
