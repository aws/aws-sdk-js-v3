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

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import {
  GetDelegatedAdminAccountRequest,
  GetDelegatedAdminAccountRequestFilterSensitiveLog,
  GetDelegatedAdminAccountResponse,
  GetDelegatedAdminAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetDelegatedAdminAccountCommand,
  serializeAws_restJson1GetDelegatedAdminAccountCommand,
} from "../protocols/Aws_restJson1";

export interface GetDelegatedAdminAccountCommandInput extends GetDelegatedAdminAccountRequest {}
export interface GetDelegatedAdminAccountCommandOutput extends GetDelegatedAdminAccountResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the Amazon Inspector delegated administrator for your
 *          organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, GetDelegatedAdminAccountCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, GetDelegatedAdminAccountCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const command = new GetDelegatedAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDelegatedAdminAccountCommandInput} for command's `input` shape.
 * @see {@link GetDelegatedAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 */
export class GetDelegatedAdminAccountCommand extends $Command<
  GetDelegatedAdminAccountCommandInput,
  GetDelegatedAdminAccountCommandOutput,
  Inspector2ClientResolvedConfig
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

  constructor(readonly input: GetDelegatedAdminAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Inspector2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDelegatedAdminAccountCommandInput, GetDelegatedAdminAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDelegatedAdminAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "GetDelegatedAdminAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDelegatedAdminAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDelegatedAdminAccountResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDelegatedAdminAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDelegatedAdminAccountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDelegatedAdminAccountCommandOutput> {
    return deserializeAws_restJson1GetDelegatedAdminAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
