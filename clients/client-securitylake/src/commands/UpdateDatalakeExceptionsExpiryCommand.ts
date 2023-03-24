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

import { UpdateDatalakeExceptionsExpiryRequest, UpdateDatalakeExceptionsExpiryResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDatalakeExceptionsExpiryCommand,
  serializeAws_restJson1UpdateDatalakeExceptionsExpiryCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 *
 * The input for {@link UpdateDatalakeExceptionsExpiryCommand}.
 */
export interface UpdateDatalakeExceptionsExpiryCommandInput extends UpdateDatalakeExceptionsExpiryRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDatalakeExceptionsExpiryCommand}.
 */
export interface UpdateDatalakeExceptionsExpiryCommandOutput
  extends UpdateDatalakeExceptionsExpiryResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Update the expiration period for the exception message to your preferred time, and
 *          control the time-to-live (TTL) for the exception message to remain. Exceptions are stored
 *          by default for 2 weeks from when a record was created in Amazon Security Lake. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, UpdateDatalakeExceptionsExpiryCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, UpdateDatalakeExceptionsExpiryCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = {
 *   exceptionMessageExpiry: Number("long"), // required
 * };
 * const command = new UpdateDatalakeExceptionsExpiryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateDatalakeExceptionsExpiryCommandInput - {@link UpdateDatalakeExceptionsExpiryCommandInput}
 * @returns {@link UpdateDatalakeExceptionsExpiryCommandOutput}
 * @see {@link UpdateDatalakeExceptionsExpiryCommandInput} for command's `input` shape.
 * @see {@link UpdateDatalakeExceptionsExpiryCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link AccountNotFoundException} (client fault)
 *  <p>Amazon Security Lake cannot find an Amazon Web Services account with the accountID that you
 *          specified, or the account whose credentials you used to make this request isn't a member of
 *          an organization.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Your signing certificate could not be validated. </p>
 *
 *
 */
export class UpdateDatalakeExceptionsExpiryCommand extends $Command<
  UpdateDatalakeExceptionsExpiryCommandInput,
  UpdateDatalakeExceptionsExpiryCommandOutput,
  SecurityLakeClientResolvedConfig
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
  constructor(readonly input: UpdateDatalakeExceptionsExpiryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDatalakeExceptionsExpiryCommandInput, UpdateDatalakeExceptionsExpiryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDatalakeExceptionsExpiryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "UpdateDatalakeExceptionsExpiryCommand";
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
  private serialize(
    input: UpdateDatalakeExceptionsExpiryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDatalakeExceptionsExpiryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDatalakeExceptionsExpiryCommandOutput> {
    return deserializeAws_restJson1UpdateDatalakeExceptionsExpiryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
