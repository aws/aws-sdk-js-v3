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
import { StopRunRequest, StopRunResult } from "../models/models_0";
import { de_StopRunCommand, se_StopRunCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link StopRunCommand}.
 */
export interface StopRunCommandInput extends StopRunRequest {}
/**
 * @public
 *
 * The output of {@link StopRunCommand}.
 */
export interface StopRunCommandOutput extends StopRunResult, __MetadataBearer {}

/**
 * @public
 * <p>Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices
 *             where tests have not started. You are not billed for these devices. On devices where tests have started
 *             executing, setup suite and teardown suite tests run to completion on those devices. You are billed for
 *             setup, teardown, and any tests that were in progress or already completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, StopRunCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, StopRunCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // StopRunRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new StopRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StopRunCommandInput - {@link StopRunCommandInput}
 * @returns {@link StopRunCommandOutput}
 * @see {@link StopRunCommandInput} for command's `input` shape.
 * @see {@link StopRunCommandOutput} for command's `response` shape.
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
 * @example To stop a test run
 * ```javascript
 * // The following example stops a specific test run.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:run:EXAMPLE-GUID-123-456"
 * };
 * const command = new StopRunCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "run": {}
 * }
 * *\/
 * // example id: to-stop-a-test-run-1472653770340
 * ```
 *
 */
export class StopRunCommand extends $Command<
  StopRunCommandInput,
  StopRunCommandOutput,
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
  constructor(readonly input: StopRunCommandInput) {
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
  ): Handler<StopRunCommandInput, StopRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StopRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "StopRunCommand";
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
  private serialize(input: StopRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopRunCommandOutput> {
    return de_StopRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
