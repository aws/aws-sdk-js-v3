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
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient";
import {
  RejectInvitationInput,
  RejectInvitationInputFilterSensitiveLog,
  RejectInvitationOutput,
  RejectInvitationOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RejectInvitationCommand,
  serializeAws_restJson1RejectInvitationCommand,
} from "../protocols/Aws_restJson1";

export interface RejectInvitationCommandInput extends RejectInvitationInput {}
export interface RejectInvitationCommandOutput extends RejectInvitationOutput, __MetadataBearer {}

/**
 * <p>Rejects an invitation to join a network. This action can be called by a principal in an Amazon Web Services account that has received an invitation to create a member and join a network.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, RejectInvitationCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, RejectInvitationCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new RejectInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectInvitationCommandInput} for command's `input` shape.
 * @see {@link RejectInvitationCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for ManagedBlockchainClient's `config` shape.
 *
 */
export class RejectInvitationCommand extends $Command<
  RejectInvitationCommandInput,
  RejectInvitationCommandOutput,
  ManagedBlockchainClientResolvedConfig
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

  constructor(readonly input: RejectInvitationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ManagedBlockchainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RejectInvitationCommandInput, RejectInvitationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RejectInvitationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainClient";
    const commandName = "RejectInvitationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectInvitationInputFilterSensitiveLog,
      outputFilterSensitiveLog: RejectInvitationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RejectInvitationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RejectInvitationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RejectInvitationCommandOutput> {
    return deserializeAws_restJson1RejectInvitationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
