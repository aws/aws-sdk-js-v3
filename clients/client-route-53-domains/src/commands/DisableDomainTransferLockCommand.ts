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
  DisableDomainTransferLockRequest,
  DisableDomainTransferLockRequestFilterSensitiveLog,
  DisableDomainTransferLockResponse,
  DisableDomainTransferLockResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisableDomainTransferLockCommand,
  serializeAws_json1_1DisableDomainTransferLockCommand,
} from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

export interface DisableDomainTransferLockCommandInput extends DisableDomainTransferLockRequest {}
export interface DisableDomainTransferLockCommandOutput extends DisableDomainTransferLockResponse, __MetadataBearer {}

/**
 * <p>This operation removes the transfer lock on the domain (specifically the
 * 				<code>clientTransferProhibited</code> status) to allow domain transfers. We
 * 			recommend you refrain from performing this action unless you intend to transfer the
 * 			domain to a different registrar. Successful submission returns an operation ID that you
 * 			can use to track the progress and completion of the action. If the request is not
 * 			completed successfully, the domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, DisableDomainTransferLockCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, DisableDomainTransferLockCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new DisableDomainTransferLockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableDomainTransferLockCommandInput} for command's `input` shape.
 * @see {@link DisableDomainTransferLockCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 */
export class DisableDomainTransferLockCommand extends $Command<
  DisableDomainTransferLockCommandInput,
  DisableDomainTransferLockCommandOutput,
  Route53DomainsClientResolvedConfig
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

  constructor(readonly input: DisableDomainTransferLockCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableDomainTransferLockCommandInput, DisableDomainTransferLockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableDomainTransferLockCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "DisableDomainTransferLockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableDomainTransferLockRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisableDomainTransferLockResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableDomainTransferLockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisableDomainTransferLockCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableDomainTransferLockCommandOutput> {
    return deserializeAws_json1_1DisableDomainTransferLockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
