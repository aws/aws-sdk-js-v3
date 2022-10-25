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

import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import {
  TestSegmentPatternRequest,
  TestSegmentPatternRequestFilterSensitiveLog,
  TestSegmentPatternResponse,
  TestSegmentPatternResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1TestSegmentPatternCommand,
  serializeAws_restJson1TestSegmentPatternCommand,
} from "../protocols/Aws_restJson1";

export interface TestSegmentPatternCommandInput extends TestSegmentPatternRequest {}
export interface TestSegmentPatternCommandOutput extends TestSegmentPatternResponse, __MetadataBearer {}

/**
 * <p>Use this operation to test a rules pattern that you plan to use to create an audience segment.
 *       For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, TestSegmentPatternCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, TestSegmentPatternCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const command = new TestSegmentPatternCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestSegmentPatternCommandInput} for command's `input` shape.
 * @see {@link TestSegmentPatternCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 */
export class TestSegmentPatternCommand extends $Command<
  TestSegmentPatternCommandInput,
  TestSegmentPatternCommandOutput,
  EvidentlyClientResolvedConfig
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

  constructor(readonly input: TestSegmentPatternCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EvidentlyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestSegmentPatternCommandInput, TestSegmentPatternCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TestSegmentPatternCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "TestSegmentPatternCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestSegmentPatternRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TestSegmentPatternResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestSegmentPatternCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TestSegmentPatternCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestSegmentPatternCommandOutput> {
    return deserializeAws_restJson1TestSegmentPatternCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
