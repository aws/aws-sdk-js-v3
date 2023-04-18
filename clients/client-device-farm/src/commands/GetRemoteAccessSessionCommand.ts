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
import { GetRemoteAccessSessionRequest, GetRemoteAccessSessionResult } from "../models/models_0";
import { de_GetRemoteAccessSessionCommand, se_GetRemoteAccessSessionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetRemoteAccessSessionCommand}.
 */
export interface GetRemoteAccessSessionCommandInput extends GetRemoteAccessSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetRemoteAccessSessionCommand}.
 */
export interface GetRemoteAccessSessionCommandOutput extends GetRemoteAccessSessionResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns a link to a currently running remote access session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetRemoteAccessSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // GetRemoteAccessSessionRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetRemoteAccessSessionCommandInput - {@link GetRemoteAccessSessionCommandInput}
 * @returns {@link GetRemoteAccessSessionCommandOutput}
 * @see {@link GetRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link GetRemoteAccessSessionCommandOutput} for command's `response` shape.
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
 * @example To get a remote access session
 * ```javascript
 * // The following example gets a specific remote access session.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:session:EXAMPLE-GUID-123-456"
 * };
 * const command = new GetRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "remoteAccessSession": {}
 * }
 * *\/
 * // example id: to-get-a-remote-access-session-1471014119414
 * ```
 *
 */
export class GetRemoteAccessSessionCommand extends $Command<
  GetRemoteAccessSessionCommandInput,
  GetRemoteAccessSessionCommandOutput,
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
  constructor(readonly input: GetRemoteAccessSessionCommandInput) {
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
  ): Handler<GetRemoteAccessSessionCommandInput, GetRemoteAccessSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRemoteAccessSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetRemoteAccessSessionCommand";
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
  private serialize(input: GetRemoteAccessSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRemoteAccessSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRemoteAccessSessionCommandOutput> {
    return de_GetRemoteAccessSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
