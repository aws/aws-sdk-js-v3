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
  AssociateWebsiteCertificateAuthorityRequest,
  AssociateWebsiteCertificateAuthorityRequestFilterSensitiveLog,
  AssociateWebsiteCertificateAuthorityResponse,
  AssociateWebsiteCertificateAuthorityResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand,
  serializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

export interface AssociateWebsiteCertificateAuthorityCommandInput extends AssociateWebsiteCertificateAuthorityRequest {}
export interface AssociateWebsiteCertificateAuthorityCommandOutput
  extends AssociateWebsiteCertificateAuthorityResponse,
    __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Imports the root certificate of a certificate authority (CA) used to obtain TLS
 *             certificates used by associated websites within the company network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, AssociateWebsiteCertificateAuthorityCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, AssociateWebsiteCertificateAuthorityCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new AssociateWebsiteCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateWebsiteCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link AssociateWebsiteCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 */
export class AssociateWebsiteCertificateAuthorityCommand extends $Command<
  AssociateWebsiteCertificateAuthorityCommandInput,
  AssociateWebsiteCertificateAuthorityCommandOutput,
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

  constructor(readonly input: AssociateWebsiteCertificateAuthorityCommandInput) {
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
  ): Handler<AssociateWebsiteCertificateAuthorityCommandInput, AssociateWebsiteCertificateAuthorityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateWebsiteCertificateAuthorityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "AssociateWebsiteCertificateAuthorityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateWebsiteCertificateAuthorityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateWebsiteCertificateAuthorityResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateWebsiteCertificateAuthorityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateWebsiteCertificateAuthorityCommandOutput> {
    return deserializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
