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

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { DisassociateMembershipRequest, DisassociateMembershipRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateMembershipCommand,
  serializeAws_restJson1DisassociateMembershipCommand,
} from "../protocols/Aws_restJson1";

export interface DisassociateMembershipCommandInput extends DisassociateMembershipRequest {}
export interface DisassociateMembershipCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the member account from the specified behavior graph. This operation can only be
 *          called by an invited member account that has the <code>ENABLED</code> status.</p>
 *          <p>
 *             <code>DisassociateMembership</code> cannot be called by an organization account in the
 *          organization behavior graph. For the organization behavior graph, the Detective
 *          administrator account determines which organization accounts to enable or disable as member
 *          accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, DisassociateMembershipCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, DisassociateMembershipCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new DisassociateMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMembershipCommandInput} for command's `input` shape.
 * @see {@link DisassociateMembershipCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 */
export class DisassociateMembershipCommand extends $Command<
  DisassociateMembershipCommandInput,
  DisassociateMembershipCommandOutput,
  DetectiveClientResolvedConfig
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

  constructor(readonly input: DisassociateMembershipCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateMembershipCommandInput, DisassociateMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateMembershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "DisassociateMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateMembershipRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateMembershipCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateMembershipCommandOutput> {
    return deserializeAws_restJson1DisassociateMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
