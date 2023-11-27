// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { SendInvitesInput, SendInvitesInputFilterSensitiveLog } from "../models/models_0";
import { de_SendInvitesCommand, se_SendInvitesCommand } from "../protocols/Aws_restJson1";
import { RepostspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RepostspaceClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendInvitesCommand}.
 */
export interface SendInvitesCommandInput extends SendInvitesInput {}
/**
 * @public
 *
 * The output of {@link SendInvitesCommand}.
 */
export interface SendInvitesCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Sends an invitation email to selected users and groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, SendInvitesCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, SendInvitesCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * const client = new RepostspaceClient(config);
 * const input = { // SendInvitesInput
 *   spaceId: "STRING_VALUE", // required
 *   accessorIds: [ // AccessorIdList // required
 *     "STRING_VALUE",
 *   ],
 *   title: "STRING_VALUE", // required
 *   body: "STRING_VALUE", // required
 * };
 * const command = new SendInvitesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendInvitesCommandInput - {@link SendInvitesCommandInput}
 * @returns {@link SendInvitesCommandOutput}
 * @see {@link SendInvitesCommandInput} for command's `input` shape.
 * @see {@link SendInvitesCommandOutput} for command's `response` shape.
 * @see {@link RepostspaceClientResolvedConfig | config} for RepostspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RepostspaceServiceException}
 * <p>Base exception class for all service exceptions from Repostspace service.</p>
 *
 */
export class SendInvitesCommand extends $Command<
  SendInvitesCommandInput,
  SendInvitesCommandOutput,
  RepostspaceClientResolvedConfig
> {
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
  constructor(readonly input: SendInvitesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RepostspaceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendInvitesCommandInput, SendInvitesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SendInvitesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RepostspaceClient";
    const commandName = "SendInvitesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendInvitesInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RepostSpace",
        operation: "SendInvites",
      },
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
  private serialize(input: SendInvitesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendInvitesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendInvitesCommandOutput> {
    return de_SendInvitesCommand(output, context);
  }
}
