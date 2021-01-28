import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreateBGPPeerRequest, CreateBGPPeerResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateBGPPeerCommand,
  serializeAws_json1_1CreateBGPPeerCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreateBGPPeerCommandInput = CreateBGPPeerRequest;
export type CreateBGPPeerCommandOutput = CreateBGPPeerResponse & __MetadataBearer;

/**
 * <p>Creates a BGP peer on the specified virtual interface.</p>
 *          <p>You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access AWS resources that also use that address family.</p>
 *          <p>If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot
 *       be in the same address family as an existing BGP peer on the virtual interface.</p>
 *          <p>When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from
 *       the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>
 *          <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already whitelisted for the virtual interface.</p>
 */
export class CreateBGPPeerCommand extends $Command<
  CreateBGPPeerCommandInput,
  CreateBGPPeerCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateBGPPeerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBGPPeerCommandInput, CreateBGPPeerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "CreateBGPPeerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBGPPeerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBGPPeerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBGPPeerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateBGPPeerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBGPPeerCommandOutput> {
    return deserializeAws_json1_1CreateBGPPeerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
