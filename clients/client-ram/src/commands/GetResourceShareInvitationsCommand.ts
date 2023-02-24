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
  GetResourceShareInvitationsRequest,
  GetResourceShareInvitationsRequestFilterSensitiveLog,
  GetResourceShareInvitationsResponse,
  GetResourceShareInvitationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetResourceShareInvitationsCommand,
  serializeAws_restJson1GetResourceShareInvitationsCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

export interface GetResourceShareInvitationsCommandInput extends GetResourceShareInvitationsRequest {}
export interface GetResourceShareInvitationsCommandOutput
  extends GetResourceShareInvitationsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves details about invitations that you have received for resource shares.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourceShareInvitationsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetResourceShareInvitationsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new GetResourceShareInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceShareInvitationsCommandInput} for command's `input` shape.
 * @see {@link GetResourceShareInvitationsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 */
export class GetResourceShareInvitationsCommand extends $Command<
  GetResourceShareInvitationsCommandInput,
  GetResourceShareInvitationsCommandOutput,
  RAMClientResolvedConfig
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

  constructor(readonly input: GetResourceShareInvitationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceShareInvitationsCommandInput, GetResourceShareInvitationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourceShareInvitationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "GetResourceShareInvitationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResourceShareInvitationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetResourceShareInvitationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResourceShareInvitationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetResourceShareInvitationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResourceShareInvitationsCommandOutput> {
    return deserializeAws_restJson1GetResourceShareInvitationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
