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

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { TestEventPatternRequest, TestEventPatternResponse } from "../models/models_0";
import { de_TestEventPatternCommand, se_TestEventPatternCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TestEventPatternCommand}.
 */
export interface TestEventPatternCommandInput extends TestEventPatternRequest {}
/**
 * @public
 *
 * The output of {@link TestEventPatternCommand}.
 */
export interface TestEventPatternCommandOutput extends TestEventPatternResponse, __MetadataBearer {}

/**
 * @public
 * <p>Tests whether the specified event pattern matches the provided event.</p>
 *          <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs).
 *       However, EventBridge uses an exact match in event patterns and rules. Be sure to use the
 *       correct ARN characters when creating event patterns so that they match the ARN syntax in the
 *       event you want to match.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, TestEventPatternCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, TestEventPatternCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const input = { // TestEventPatternRequest
 *   EventPattern: "STRING_VALUE", // required
 *   Event: "STRING_VALUE", // required
 * };
 * const command = new TestEventPatternCommand(input);
 * const response = await client.send(command);
 * // { // TestEventPatternResponse
 * //   Result: true || false,
 * // };
 *
 * ```
 *
 * @param TestEventPatternCommandInput - {@link TestEventPatternCommandInput}
 * @returns {@link TestEventPatternCommandOutput}
 * @see {@link TestEventPatternCommandInput} for command's `input` shape.
 * @see {@link TestEventPatternCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link InvalidEventPatternException} (client fault)
 *  <p>The event pattern is not valid.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 */
export class TestEventPatternCommand extends $Command<
  TestEventPatternCommandInput,
  TestEventPatternCommandOutput,
  CloudWatchEventsClientResolvedConfig
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
  constructor(readonly input: TestEventPatternCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestEventPatternCommandInput, TestEventPatternCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TestEventPatternCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "TestEventPatternCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSEvents",
        operation: "TestEventPattern",
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
  private serialize(input: TestEventPatternCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TestEventPatternCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestEventPatternCommandOutput> {
    return de_TestEventPatternCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
