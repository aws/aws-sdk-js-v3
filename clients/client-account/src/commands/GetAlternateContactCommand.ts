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

import { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import {
  GetAlternateContactRequest,
  GetAlternateContactRequestFilterSensitiveLog,
  GetAlternateContactResponse,
  GetAlternateContactResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetAlternateContactCommand,
  serializeAws_restJson1GetAlternateContactCommand,
} from "../protocols/Aws_restJson1";

export interface GetAlternateContactCommandInput extends GetAlternateContactRequest {}
export interface GetAlternateContactCommandOutput extends GetAlternateContactResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified alternate contact attached to an Amazon Web Services account.</p>
 *         <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or
 *                 updating the alternate contacts</a>.</p>
 *         <note>
 *             <p>Before you can update the alternate contact information for an
 *      Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management
 *      and Organizations.  For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for
 *      Amazon Web Services Account Management</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, GetAlternateContactCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, GetAlternateContactCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * const client = new AccountClient(config);
 * const command = new GetAlternateContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAlternateContactCommandInput} for command's `input` shape.
 * @see {@link GetAlternateContactCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 */
export class GetAlternateContactCommand extends $Command<
  GetAlternateContactCommandInput,
  GetAlternateContactCommandOutput,
  AccountClientResolvedConfig
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

  constructor(readonly input: GetAlternateContactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccountClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAlternateContactCommandInput, GetAlternateContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAlternateContactCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccountClient";
    const commandName = "GetAlternateContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAlternateContactRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAlternateContactResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAlternateContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAlternateContactCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAlternateContactCommandOutput> {
    return deserializeAws_restJson1GetAlternateContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
