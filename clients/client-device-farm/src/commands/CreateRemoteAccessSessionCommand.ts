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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import {
  CreateRemoteAccessSessionRequest,
  CreateRemoteAccessSessionRequestFilterSensitiveLog,
  CreateRemoteAccessSessionResult,
  CreateRemoteAccessSessionResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateRemoteAccessSessionCommand,
  serializeAws_json1_1CreateRemoteAccessSessionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateRemoteAccessSessionCommand}.
 */
export interface CreateRemoteAccessSessionCommandInput extends CreateRemoteAccessSessionRequest {}
/**
 * @public
 *
 * The output of {@link CreateRemoteAccessSessionCommand}.
 */
export interface CreateRemoteAccessSessionCommandOutput extends CreateRemoteAccessSessionResult, __MetadataBearer {}

/**
 * @public
 * <p>Specifies and starts a remote access session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateRemoteAccessSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new CreateRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateRemoteAccessSessionCommandInput - {@link CreateRemoteAccessSessionCommandInput}
 * @returns {@link CreateRemoteAccessSessionCommandOutput}
 * @see {@link CreateRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link CreateRemoteAccessSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 *
 * @example To create a remote access session
 * ```javascript
 * // The following example creates a remote access session named MySession.
 * const input = {
 *   "name": "MySession",
 *   "configuration": {
 *     "billingMethod": "METERED"
 *   },
 *   "deviceArn": "arn:aws:devicefarm:us-west-2::device:123EXAMPLE",
 *   "projectArn": "arn:aws:devicefarm:us-west-2:123456789101:project:EXAMPLE-GUID-123-456"
 * };
 * const command = new CreateRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "remoteAccessSession": {}
 * }
 * *\/
 * // example id: to-create-a-remote-access-session-1470970668274
 * ```
 *
 */
export class CreateRemoteAccessSessionCommand extends $Command<
  CreateRemoteAccessSessionCommandInput,
  CreateRemoteAccessSessionCommandOutput,
  DeviceFarmClientResolvedConfig
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
  constructor(readonly input: CreateRemoteAccessSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRemoteAccessSessionCommandInput, CreateRemoteAccessSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRemoteAccessSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "CreateRemoteAccessSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRemoteAccessSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateRemoteAccessSessionResultFilterSensitiveLog,
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
  private serialize(input: CreateRemoteAccessSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateRemoteAccessSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateRemoteAccessSessionCommandOutput> {
    return deserializeAws_json1_1CreateRemoteAccessSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
