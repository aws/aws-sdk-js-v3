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
  DisassociateWebsiteAuthorizationProviderRequest,
  DisassociateWebsiteAuthorizationProviderRequestFilterSensitiveLog,
  DisassociateWebsiteAuthorizationProviderResponse,
  DisassociateWebsiteAuthorizationProviderResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand,
  serializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

export interface DisassociateWebsiteAuthorizationProviderCommandInput
  extends DisassociateWebsiteAuthorizationProviderRequest {}
export interface DisassociateWebsiteAuthorizationProviderCommandOutput
  extends DisassociateWebsiteAuthorizationProviderResponse,
    __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Disassociates a website authorization provider from a specified fleet. After the
 *             disassociation, users can't load any associated websites that require this authorization
 *             provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DisassociateWebsiteAuthorizationProviderCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DisassociateWebsiteAuthorizationProviderCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DisassociateWebsiteAuthorizationProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateWebsiteAuthorizationProviderCommandInput} for command's `input` shape.
 * @see {@link DisassociateWebsiteAuthorizationProviderCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 */
export class DisassociateWebsiteAuthorizationProviderCommand extends $Command<
  DisassociateWebsiteAuthorizationProviderCommandInput,
  DisassociateWebsiteAuthorizationProviderCommandOutput,
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

  constructor(readonly input: DisassociateWebsiteAuthorizationProviderCommandInput) {
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
    DisassociateWebsiteAuthorizationProviderCommandInput,
    DisassociateWebsiteAuthorizationProviderCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DisassociateWebsiteAuthorizationProviderCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "DisassociateWebsiteAuthorizationProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateWebsiteAuthorizationProviderRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateWebsiteAuthorizationProviderResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateWebsiteAuthorizationProviderCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateWebsiteAuthorizationProviderCommandOutput> {
    return deserializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
