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
  ListPendingInvitationResourcesRequest,
  ListPendingInvitationResourcesRequestFilterSensitiveLog,
  ListPendingInvitationResourcesResponse,
  ListPendingInvitationResourcesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListPendingInvitationResourcesCommand,
  serializeAws_restJson1ListPendingInvitationResourcesCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

export interface ListPendingInvitationResourcesCommandInput extends ListPendingInvitationResourcesRequest {}
export interface ListPendingInvitationResourcesCommandOutput
  extends ListPendingInvitationResourcesResponse,
    __MetadataBearer {}

/**
 * <p>Lists the resources in a resource share that is shared with you but for which the invitation is
 *             still <code>PENDING</code>. That means that you haven't accepted or rejected the
 *             invitation and the invitation hasn't expired.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListPendingInvitationResourcesCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListPendingInvitationResourcesCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new ListPendingInvitationResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPendingInvitationResourcesCommandInput} for command's `input` shape.
 * @see {@link ListPendingInvitationResourcesCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 */
export class ListPendingInvitationResourcesCommand extends $Command<
  ListPendingInvitationResourcesCommandInput,
  ListPendingInvitationResourcesCommandOutput,
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

  constructor(readonly input: ListPendingInvitationResourcesCommandInput) {
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
  ): Handler<ListPendingInvitationResourcesCommandInput, ListPendingInvitationResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPendingInvitationResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "ListPendingInvitationResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPendingInvitationResourcesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPendingInvitationResourcesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListPendingInvitationResourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPendingInvitationResourcesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPendingInvitationResourcesCommandOutput> {
    return deserializeAws_restJson1ListPendingInvitationResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
