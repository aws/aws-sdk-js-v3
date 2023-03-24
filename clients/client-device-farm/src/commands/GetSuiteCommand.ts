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
import { GetSuiteRequest, GetSuiteResult } from "../models/models_0";
import { deserializeAws_json1_1GetSuiteCommand, serializeAws_json1_1GetSuiteCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetSuiteCommand}.
 */
export interface GetSuiteCommandInput extends GetSuiteRequest {}
/**
 * @public
 *
 * The output of {@link GetSuiteCommand}.
 */
export interface GetSuiteCommandOutput extends GetSuiteResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a suite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetSuiteCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetSuiteCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = {
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetSuiteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetSuiteCommandInput - {@link GetSuiteCommandInput}
 * @returns {@link GetSuiteCommandOutput}
 * @see {@link GetSuiteCommandInput} for command's `input` shape.
 * @see {@link GetSuiteCommandOutput} for command's `response` shape.
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
 * @example To get information about a test suite
 * ```javascript
 * // The following example gets information about a specific test suite.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:suite:EXAMPLE-GUID-123-456"
 * };
 * const command = new GetSuiteCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "suite": {}
 * }
 * *\/
 * // example id: to-get-information-about-a-test-suite-1471016525008
 * ```
 *
 */
export class GetSuiteCommand extends $Command<
  GetSuiteCommandInput,
  GetSuiteCommandOutput,
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
  constructor(readonly input: GetSuiteCommandInput) {
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
  ): Handler<GetSuiteCommandInput, GetSuiteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSuiteCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetSuiteCommand";
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
  private serialize(input: GetSuiteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSuiteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSuiteCommandOutput> {
    return deserializeAws_json1_1GetSuiteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
