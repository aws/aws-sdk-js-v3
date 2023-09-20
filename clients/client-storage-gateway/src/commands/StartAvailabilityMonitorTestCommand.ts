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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { StartAvailabilityMonitorTestInput, StartAvailabilityMonitorTestOutput } from "../models/models_0";
import {
  de_StartAvailabilityMonitorTestCommand,
  se_StartAvailabilityMonitorTestCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartAvailabilityMonitorTestCommand}.
 */
export interface StartAvailabilityMonitorTestCommandInput extends StartAvailabilityMonitorTestInput {}
/**
 * @public
 *
 * The output of {@link StartAvailabilityMonitorTestCommand}.
 */
export interface StartAvailabilityMonitorTestCommandOutput
  extends StartAvailabilityMonitorTestOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Start a test that verifies that the specified gateway is configured for High
 *          Availability monitoring in your host environment. This request only initiates the test and
 *          that a successful response only indicates that the test was started. It doesn't
 *          indicate that the test passed. For the status of the test, invoke the
 *             <code>DescribeAvailabilityMonitorTest</code> API.</p>
 *          <note>
 *             <p>Starting this test will cause your gateway to go offline for a brief period.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, StartAvailabilityMonitorTestCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, StartAvailabilityMonitorTestCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // StartAvailabilityMonitorTestInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new StartAvailabilityMonitorTestCommand(input);
 * const response = await client.send(command);
 * // { // StartAvailabilityMonitorTestOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartAvailabilityMonitorTestCommandInput - {@link StartAvailabilityMonitorTestCommandInput}
 * @returns {@link StartAvailabilityMonitorTestCommandOutput}
 * @see {@link StartAvailabilityMonitorTestCommandInput} for command's `input` shape.
 * @see {@link StartAvailabilityMonitorTestCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 */
export class StartAvailabilityMonitorTestCommand extends $Command<
  StartAvailabilityMonitorTestCommandInput,
  StartAvailabilityMonitorTestCommandOutput,
  StorageGatewayClientResolvedConfig
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
  constructor(readonly input: StartAvailabilityMonitorTestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartAvailabilityMonitorTestCommandInput, StartAvailabilityMonitorTestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartAvailabilityMonitorTestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "StartAvailabilityMonitorTestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "StartAvailabilityMonitorTest",
      },
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
  private serialize(input: StartAvailabilityMonitorTestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartAvailabilityMonitorTestCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartAvailabilityMonitorTestCommandOutput> {
    return de_StartAvailabilityMonitorTestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
