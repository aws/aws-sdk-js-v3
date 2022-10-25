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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import {
  GetAdministratorAccountRequest,
  GetAdministratorAccountRequestFilterSensitiveLog,
  GetAdministratorAccountResponse,
  GetAdministratorAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetAdministratorAccountCommand,
  serializeAws_restJson1GetAdministratorAccountCommand,
} from "../protocols/Aws_restJson1";

export interface GetAdministratorAccountCommandInput extends GetAdministratorAccountRequest {}
export interface GetAdministratorAccountCommandOutput extends GetAdministratorAccountResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the Amazon Macie administrator account for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetAdministratorAccountCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetAdministratorAccountCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetAdministratorAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAdministratorAccountCommandInput} for command's `input` shape.
 * @see {@link GetAdministratorAccountCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 */
export class GetAdministratorAccountCommand extends $Command<
  GetAdministratorAccountCommandInput,
  GetAdministratorAccountCommandOutput,
  Macie2ClientResolvedConfig
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

  constructor(readonly input: GetAdministratorAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAdministratorAccountCommandInput, GetAdministratorAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAdministratorAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetAdministratorAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAdministratorAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAdministratorAccountResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAdministratorAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAdministratorAccountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAdministratorAccountCommandOutput> {
    return deserializeAws_restJson1GetAdministratorAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
