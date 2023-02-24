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
import { ReleasePhoneNumberRequest, ReleasePhoneNumberRequestFilterSensitiveLog } from "../models/models_1";
import {
  deserializeAws_restJson1ReleasePhoneNumberCommand,
  serializeAws_restJson1ReleasePhoneNumberCommand,
} from "../protocols/Aws_restJson1";

export interface ReleasePhoneNumberCommandInput extends ReleasePhoneNumberRequest {}
export interface ReleasePhoneNumberCommandOutput extends __MetadataBearer {}

/**
 * <p>Releases a phone number previously claimed to an Amazon Connect instance or traffic distribution group. You
 *    can call this API only in the Amazon Web Services Region where the number was claimed.</p>
 *          <important>
 *             <p>To release phone numbers from a traffic distribution group, use the <code>ReleasePhoneNumber</code> API, not the
 *      Amazon Connect console.</p>
 *             <p>After releasing a phone number, the phone number enters into a cooldown period of 30 days.
 *     It cannot be searched for or claimed again until the period has ended. If you accidentally
 *     release a phone number, contact Amazon Web Services Support.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ReleasePhoneNumberCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ReleasePhoneNumberCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ReleasePhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReleasePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link ReleasePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class ReleasePhoneNumberCommand extends $Command<
  ReleasePhoneNumberCommandInput,
  ReleasePhoneNumberCommandOutput,
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

  constructor(readonly input: ReleasePhoneNumberCommandInput) {
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
  ): Handler<ReleasePhoneNumberCommandInput, ReleasePhoneNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReleasePhoneNumberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ReleasePhoneNumberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReleasePhoneNumberRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReleasePhoneNumberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ReleasePhoneNumberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReleasePhoneNumberCommandOutput> {
    return deserializeAws_restJson1ReleasePhoneNumberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
