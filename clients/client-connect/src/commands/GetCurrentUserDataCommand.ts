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
import {
  GetCurrentUserDataRequest,
  GetCurrentUserDataRequestFilterSensitiveLog,
  GetCurrentUserDataResponse,
  GetCurrentUserDataResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetCurrentUserDataCommand,
  serializeAws_restJson1GetCurrentUserDataCommand,
} from "../protocols/Aws_restJson1";

export interface GetCurrentUserDataCommandInput extends GetCurrentUserDataRequest {}
export interface GetCurrentUserDataCommandOutput extends GetCurrentUserDataResponse, __MetadataBearer {}

/**
 * <p>Gets the real-time active user data from the specified Amazon Connect instance. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetCurrentUserDataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetCurrentUserDataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new GetCurrentUserDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCurrentUserDataCommandInput} for command's `input` shape.
 * @see {@link GetCurrentUserDataCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class GetCurrentUserDataCommand extends $Command<
  GetCurrentUserDataCommandInput,
  GetCurrentUserDataCommandOutput,
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

  constructor(readonly input: GetCurrentUserDataCommandInput) {
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
  ): Handler<GetCurrentUserDataCommandInput, GetCurrentUserDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCurrentUserDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "GetCurrentUserDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCurrentUserDataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCurrentUserDataResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCurrentUserDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCurrentUserDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCurrentUserDataCommandOutput> {
    return deserializeAws_restJson1GetCurrentUserDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
