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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  CreateBGPPeerRequest,
  CreateBGPPeerRequestFilterSensitiveLog,
  CreateBGPPeerResponse,
  CreateBGPPeerResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateBGPPeerCommand,
  serializeAws_json1_1CreateBGPPeerCommand,
} from "../protocols/Aws_json1_1";

export interface CreateBGPPeerCommandInput extends CreateBGPPeerRequest {}
export interface CreateBGPPeerCommandOutput extends CreateBGPPeerResponse, __MetadataBearer {}

/**
 * <p>Creates a BGP peer on the specified virtual interface.</p>
 *          <p>You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family.</p>
 *          <p>If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot
 *       be in the same address family as an existing BGP peer on the virtual interface.</p>
 *          <p>When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from
 *       the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>
 *          <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already on the allow list for the virtual interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateBGPPeerCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateBGPPeerCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreateBGPPeerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBGPPeerCommandInput} for command's `input` shape.
 * @see {@link CreateBGPPeerCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class CreateBGPPeerCommand extends $Command<
  CreateBGPPeerCommandInput,
  CreateBGPPeerCommandOutput,
  DirectConnectClientResolvedConfig
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
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateBGPPeerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "CreateBGPPeerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBGPPeerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateBGPPeerResponseFilterSensitiveLog,
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
