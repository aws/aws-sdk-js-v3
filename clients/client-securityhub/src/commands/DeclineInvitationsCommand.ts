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

import { DeclineInvitationsRequest, DeclineInvitationsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1DeclineInvitationsCommand,
  serializeAws_restJson1DeclineInvitationsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 *
 * The input for {@link DeclineInvitationsCommand}.
 */
export interface DeclineInvitationsCommandInput extends DeclineInvitationsRequest {}
/**
 * @public
 *
 * The output of {@link DeclineInvitationsCommand}.
 */
export interface DeclineInvitationsCommandOutput extends DeclineInvitationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Declines invitations to become a member account.</p>
 *          <p>This operation is only used by accounts that are not part of an organization.
 *          Organization accounts do not receive invitations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeclineInvitationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeclineInvitationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = {
 *   AccountIds: [ // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeclineInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeclineInvitationsCommandInput - {@link DeclineInvitationsCommandInput}
 * @returns {@link DeclineInvitationsCommandOutput}
 * @see {@link DeclineInvitationsCommandInput} for command's `input` shape.
 * @see {@link DeclineInvitationsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 *
 */
export class DeclineInvitationsCommand extends $Command<
  DeclineInvitationsCommandInput,
  DeclineInvitationsCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: DeclineInvitationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeclineInvitationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DeclineInvitationsCommand";
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
  private serialize(input: DeclineInvitationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeclineInvitationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeclineInvitationsCommandOutput> {
    return deserializeAws_restJson1DeclineInvitationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
