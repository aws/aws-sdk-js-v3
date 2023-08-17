// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetTestGridSessionRequest, GetTestGridSessionResult } from "../models/models_0";
import { de_GetTestGridSessionCommand, se_GetTestGridSessionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTestGridSessionCommand}.
 */
export interface GetTestGridSessionCommandInput extends GetTestGridSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetTestGridSessionCommand}.
 */
export interface GetTestGridSessionCommandOutput extends GetTestGridSessionResult, __MetadataBearer {}

/**
 * @public
 * <p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p>
 *          <ul>
 *             <li>
 *                <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p>
 *             </li>
 *             <li>
 *                <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p>
 *             </li>
 *          </ul>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetTestGridSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetTestGridSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // GetTestGridSessionRequest
 *   projectArn: "STRING_VALUE",
 *   sessionId: "STRING_VALUE",
 *   sessionArn: "STRING_VALUE",
 * };
 * const command = new GetTestGridSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetTestGridSessionResult
 * //   testGridSession: { // TestGridSession
 * //     arn: "STRING_VALUE",
 * //     status: "ACTIVE" || "CLOSED" || "ERRORED",
 * //     created: new Date("TIMESTAMP"),
 * //     ended: new Date("TIMESTAMP"),
 * //     billingMinutes: Number("double"),
 * //     seleniumProperties: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTestGridSessionCommandInput - {@link GetTestGridSessionCommandInput}
 * @returns {@link GetTestGridSessionCommandOutput}
 * @see {@link GetTestGridSessionCommandInput} for command's `input` shape.
 * @see {@link GetTestGridSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal exception was raised in the service. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you see this
 *          error. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 */
export class GetTestGridSessionCommand extends $Command<
  GetTestGridSessionCommandInput,
  GetTestGridSessionCommandOutput,
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
  constructor(readonly input: GetTestGridSessionCommandInput) {
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
  ): Handler<GetTestGridSessionCommandInput, GetTestGridSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTestGridSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetTestGridSessionCommand";
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
  private serialize(input: GetTestGridSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTestGridSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTestGridSessionCommandOutput> {
    return de_GetTestGridSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
