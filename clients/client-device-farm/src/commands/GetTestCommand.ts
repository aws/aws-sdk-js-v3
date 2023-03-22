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
  GetTestRequest,
  GetTestRequestFilterSensitiveLog,
  GetTestResult,
  GetTestResultFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1GetTestCommand, serializeAws_json1_1GetTestCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetTestCommand}.
 */
export interface GetTestCommandInput extends GetTestRequest {}
/**
 * @public
 *
 * The output of {@link GetTestCommand}.
 */
export interface GetTestCommandOutput extends GetTestResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a test.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetTestCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetTestCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetTestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetTestCommandInput - {@link GetTestCommandInput}
 * @returns {@link GetTestCommandOutput}
 * @see {@link GetTestCommandInput} for command's `input` shape.
 * @see {@link GetTestCommandOutput} for command's `response` shape.
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
 * @example To get information about a specific test
 * ```javascript
 * // The following example gets information about a specific test.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:test:EXAMPLE-GUID-123-456"
 * };
 * const command = new GetTestCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "test": {}
 * }
 * *\/
 * // example id: to-get-information-about-a-specific-test-1471025744238
 * ```
 *
 */
export class GetTestCommand extends $Command<
  GetTestCommandInput,
  GetTestCommandOutput,
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
  constructor(readonly input: GetTestCommandInput) {
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
  ): Handler<GetTestCommandInput, GetTestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetTestCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetTestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTestRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetTestResultFilterSensitiveLog,
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
  private serialize(input: GetTestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetTestCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTestCommandOutput> {
    return deserializeAws_json1_1GetTestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
