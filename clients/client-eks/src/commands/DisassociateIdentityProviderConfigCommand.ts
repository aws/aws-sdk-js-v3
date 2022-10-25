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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import {
  DisassociateIdentityProviderConfigRequest,
  DisassociateIdentityProviderConfigRequestFilterSensitiveLog,
  DisassociateIdentityProviderConfigResponse,
  DisassociateIdentityProviderConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateIdentityProviderConfigCommand,
  serializeAws_restJson1DisassociateIdentityProviderConfigCommand,
} from "../protocols/Aws_restJson1";

export interface DisassociateIdentityProviderConfigCommandInput extends DisassociateIdentityProviderConfigRequest {}
export interface DisassociateIdentityProviderConfigCommandOutput
  extends DisassociateIdentityProviderConfigResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates an identity provider configuration from a cluster. If you disassociate
 *             an identity provider from your cluster, users included in the provider can no longer
 *             access the cluster. However, you can still access the cluster with Amazon Web Services
 *             IAM users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DisassociateIdentityProviderConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DisassociateIdentityProviderConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DisassociateIdentityProviderConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateIdentityProviderConfigCommandInput} for command's `input` shape.
 * @see {@link DisassociateIdentityProviderConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 */
export class DisassociateIdentityProviderConfigCommand extends $Command<
  DisassociateIdentityProviderConfigCommandInput,
  DisassociateIdentityProviderConfigCommandOutput,
  EKSClientResolvedConfig
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

  constructor(readonly input: DisassociateIdentityProviderConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateIdentityProviderConfigCommandInput, DisassociateIdentityProviderConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateIdentityProviderConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DisassociateIdentityProviderConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateIdentityProviderConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateIdentityProviderConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateIdentityProviderConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateIdentityProviderConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateIdentityProviderConfigCommandOutput> {
    return deserializeAws_restJson1DisassociateIdentityProviderConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
