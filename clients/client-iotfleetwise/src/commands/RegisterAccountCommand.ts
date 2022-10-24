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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import {
  RegisterAccountRequest,
  RegisterAccountRequestFilterSensitiveLog,
  RegisterAccountResponse,
  RegisterAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0RegisterAccountCommand,
  serializeAws_json1_0RegisterAccountCommand,
} from "../protocols/Aws_json1_0";

export interface RegisterAccountCommandInput extends RegisterAccountRequest {}
export interface RegisterAccountCommandOutput extends RegisterAccountResponse, __MetadataBearer {}

/**
 * <p>Registers your Amazon Web Services account, IAM, and Amazon Timestream resources so Amazon Web Services IoT FleetWise can
 *             transfer your vehicle data to the Amazon Web Services Cloud. For more information, including
 *             step-by-step procedures, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/setting-up.html">Setting up
 *                 Amazon Web Services IoT FleetWise</a>. </p>
 *         <note>
 *             <p>An Amazon Web Services account is <b>not</b> the same thing as a "user
 *                 account". An <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_identity-management.html#intro-identity-users">Amazon Web Services user</a> is an identity that you create using Identity and Access Management (IAM) and
 *                 takes the form of either an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html">IAM user</a> or an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM role, both
 *                     with credentials</a>. A single Amazon Web Services account can, and typically does,
 *                 contain many users and roles.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, RegisterAccountCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, RegisterAccountCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new RegisterAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterAccountCommandInput} for command's `input` shape.
 * @see {@link RegisterAccountCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 */
export class RegisterAccountCommand extends $Command<
  RegisterAccountCommandInput,
  RegisterAccountCommandOutput,
  IoTFleetWiseClientResolvedConfig
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

  constructor(readonly input: RegisterAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterAccountCommandInput, RegisterAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "RegisterAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterAccountResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0RegisterAccountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterAccountCommandOutput> {
    return deserializeAws_json1_0RegisterAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
