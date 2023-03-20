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

import { DisassociateLinkRequest, DisassociateLinkResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1DisassociateLinkCommand,
  serializeAws_restJson1DisassociateLinkCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DisassociateLinkCommand}.
 */
export interface DisassociateLinkCommandInput extends DisassociateLinkRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateLinkCommand}.
 */
export interface DisassociateLinkCommandOutput extends DisassociateLinkResponse, __MetadataBearer {}

/**
 * @public
 * <p>Disassociates an existing device from a link. You must first disassociate any customer
 *             gateways that are associated with the link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DisassociateLinkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DisassociateLinkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DisassociateLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DisassociateLinkCommandInput - {@link DisassociateLinkCommandInput}
 * @returns {@link DisassociateLinkCommandOutput}
 * @see {@link DisassociateLinkCommandInput} for command's `input` shape.
 * @see {@link DisassociateLinkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 *
 */
export class DisassociateLinkCommand extends $Command<
  DisassociateLinkCommandInput,
  DisassociateLinkCommandOutput,
  NetworkManagerClientResolvedConfig
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
  constructor(readonly input: DisassociateLinkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateLinkCommandInput, DisassociateLinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateLinkCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "DisassociateLinkCommand";
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
  private serialize(input: DisassociateLinkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateLinkCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateLinkCommandOutput> {
    return deserializeAws_restJson1DisassociateLinkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
