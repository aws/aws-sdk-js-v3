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

import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { TestSegmentPatternRequest, TestSegmentPatternResponse } from "../models/models_0";
import { de_TestSegmentPatternCommand, se_TestSegmentPatternCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TestSegmentPatternCommand}.
 */
export interface TestSegmentPatternCommandInput extends TestSegmentPatternRequest {}
/**
 * @public
 *
 * The output of {@link TestSegmentPatternCommand}.
 */
export interface TestSegmentPatternCommandOutput extends TestSegmentPatternResponse, __MetadataBearer {}

/**
 * @public
 * <p>Use this operation to test a rules pattern that you plan to use to create an audience segment.
 *       For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, TestSegmentPatternCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, TestSegmentPatternCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // TestSegmentPatternRequest
 *   pattern: "STRING_VALUE", // required
 *   payload: "STRING_VALUE", // required
 * };
 * const command = new TestSegmentPatternCommand(input);
 * const response = await client.send(command);
 * // { // TestSegmentPatternResponse
 * //   match: true || false, // required
 * // };
 *
 * ```
 *
 * @param TestSegmentPatternCommandInput - {@link TestSegmentPatternCommandInput}
 * @returns {@link TestSegmentPatternCommandOutput}
 * @see {@link TestSegmentPatternCommandInput} for command's `input` shape.
 * @see {@link TestSegmentPatternCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
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

  /**
   * @public
   */
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
  private serialize(input: TestSegmentPatternCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TestSegmentPatternCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestSegmentPatternCommandOutput> {
    return de_TestSegmentPatternCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
