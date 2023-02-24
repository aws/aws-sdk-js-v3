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
  UpdatePhoneNumberRequest,
  UpdatePhoneNumberRequestFilterSensitiveLog,
  UpdatePhoneNumberResponse,
  UpdatePhoneNumberResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1UpdatePhoneNumberCommand,
  serializeAws_restJson1UpdatePhoneNumberCommand,
} from "../protocols/Aws_restJson1";

export interface UpdatePhoneNumberCommandInput extends UpdatePhoneNumberRequest {}
export interface UpdatePhoneNumberCommandOutput extends UpdatePhoneNumberResponse, __MetadataBearer {}

/**
 * <p>Updates your claimed phone number from its current Amazon Connect instance or traffic distribution group to
 *    another Amazon Connect instance or traffic distribution group in the same Amazon Web Services Region.</p>
 *          <important>
 *             <p>You can call <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> API
 *     to verify the status of a previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a>
 *     operation.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdatePhoneNumberCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdatePhoneNumberCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdatePhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link UpdatePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class UpdatePhoneNumberCommand extends $Command<
  UpdatePhoneNumberCommandInput,
  UpdatePhoneNumberCommandOutput,
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

  constructor(readonly input: UpdatePhoneNumberCommandInput) {
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
  ): Handler<UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePhoneNumberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdatePhoneNumberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePhoneNumberRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdatePhoneNumberResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePhoneNumberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdatePhoneNumberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePhoneNumberCommandOutput> {
    return deserializeAws_restJson1UpdatePhoneNumberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
