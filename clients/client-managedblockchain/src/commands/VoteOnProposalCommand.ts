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
  VoteOnProposalInput,
  VoteOnProposalInputFilterSensitiveLog,
  VoteOnProposalOutput,
  VoteOnProposalOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1VoteOnProposalCommand,
  serializeAws_restJson1VoteOnProposalCommand,
} from "../protocols/Aws_restJson1";

export interface VoteOnProposalCommandInput extends VoteOnProposalInput {}
export interface VoteOnProposalCommandOutput extends VoteOnProposalOutput, __MetadataBearer {}

/**
 * <p>Casts a vote for a specified <code>ProposalId</code> on behalf of a member. The member to vote as, specified by <code>VoterMemberId</code>, must be in the same Amazon Web Services account as the principal that calls the action.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, VoteOnProposalCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, VoteOnProposalCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new VoteOnProposalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VoteOnProposalCommandInput} for command's `input` shape.
 * @see {@link VoteOnProposalCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for ManagedBlockchainClient's `config` shape.
 *
 */
export class VoteOnProposalCommand extends $Command<
  VoteOnProposalCommandInput,
  VoteOnProposalCommandOutput,
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

  constructor(readonly input: VoteOnProposalCommandInput) {
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
  ): Handler<VoteOnProposalCommandInput, VoteOnProposalCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, VoteOnProposalCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainClient";
    const commandName = "VoteOnProposalCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VoteOnProposalInputFilterSensitiveLog,
      outputFilterSensitiveLog: VoteOnProposalOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: VoteOnProposalCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1VoteOnProposalCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VoteOnProposalCommandOutput> {
    return deserializeAws_restJson1VoteOnProposalCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
