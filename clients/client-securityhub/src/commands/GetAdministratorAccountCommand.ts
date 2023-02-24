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
  GetAdministratorAccountRequest,
  GetAdministratorAccountRequestFilterSensitiveLog,
  GetAdministratorAccountResponse,
  GetAdministratorAccountResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1GetAdministratorAccountCommand,
  serializeAws_restJson1GetAdministratorAccountCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

export interface GetAdministratorAccountCommandInput extends GetAdministratorAccountRequest {}
export interface GetAdministratorAccountCommandOutput extends GetAdministratorAccountResponse, __MetadataBearer {}

/**
 * <p>Provides the details for the Security Hub administrator account for the current member account.</p>
 *          <p>Can be used by both member accounts that are managed using Organizations and accounts that were
 *          invited manually.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetAdministratorAccountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetAdministratorAccountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new GetAdministratorAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAdministratorAccountCommandInput} for command's `input` shape.
 * @see {@link GetAdministratorAccountCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 */
export class GetAdministratorAccountCommand extends $Command<
  GetAdministratorAccountCommandInput,
  GetAdministratorAccountCommandOutput,
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
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAdministratorAccountCommandInput, GetAdministratorAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAdministratorAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
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
