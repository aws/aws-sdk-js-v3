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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { AssociateBotRequest } from "../models/models_0";
import {
  deserializeAws_restJson1AssociateBotCommand,
  serializeAws_restJson1AssociateBotCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link AssociateBotCommand}.
 */
export interface AssociateBotCommandInput extends AssociateBotRequest {}
/**
 * @public
 *
 * The output of {@link AssociateBotCommand}.
 */
export interface AssociateBotCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Allows the specified Amazon Connect instance to access the specified Amazon Lex
 *    or Amazon Lex V2 bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateBotCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateBotCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new AssociateBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AssociateBotCommandInput - {@link AssociateBotCommandInput}
 * @returns {@link AssociateBotCommandOutput}
 * @see {@link AssociateBotCommandInput} for command's `input` shape.
 * @see {@link AssociateBotCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 *
 */
export class AssociateBotCommand extends $Command<
  AssociateBotCommandInput,
  AssociateBotCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: AssociateBotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateBotCommandInput, AssociateBotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AssociateBotCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "AssociateBotCommand";
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
  private serialize(input: AssociateBotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateBotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateBotCommandOutput> {
    return deserializeAws_restJson1AssociateBotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
