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

import { DescribeWorldGenerationJobRequest, DescribeWorldGenerationJobResponse } from "../models/models_0";
import { de_DescribeWorldGenerationJobCommand, se_DescribeWorldGenerationJobCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorldGenerationJobCommand}.
 */
export interface DescribeWorldGenerationJobCommandInput extends DescribeWorldGenerationJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorldGenerationJobCommand}.
 */
export interface DescribeWorldGenerationJobCommandOutput extends DescribeWorldGenerationJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a world generation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeWorldGenerationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeWorldGenerationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // DescribeWorldGenerationJobRequest
 *   job: "STRING_VALUE", // required
 * };
 * const command = new DescribeWorldGenerationJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorldGenerationJobResponse
 * //   arn: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   failureCode: "STRING_VALUE",
 * //   failureReason: "STRING_VALUE",
 * //   clientRequestToken: "STRING_VALUE",
 * //   template: "STRING_VALUE",
 * //   worldCount: { // WorldCount
 * //     floorplanCount: Number("int"),
 * //     interiorCountPerFloorplan: Number("int"),
 * //   },
 * //   finishedWorldsSummary: { // FinishedWorldsSummary
 * //     finishedCount: Number("int"),
 * //     succeededWorlds: [ // Arns
 * //       "STRING_VALUE",
 * //     ],
 * //     failureSummary: { // FailureSummary
 * //       totalFailureCount: Number("int"),
 * //       failures: [ // WorldFailures
 * //         { // WorldFailure
 * //           failureCode: "STRING_VALUE",
 * //           sampleFailureReason: "STRING_VALUE",
 * //           failureCount: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   worldTags: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeWorldGenerationJobCommandInput - {@link DescribeWorldGenerationJobCommandInput}
 * @returns {@link DescribeWorldGenerationJobCommandOutput}
 * @see {@link DescribeWorldGenerationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeWorldGenerationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 */
export class DescribeWorldGenerationJobCommand extends $Command<
  DescribeWorldGenerationJobCommandInput,
  DescribeWorldGenerationJobCommandOutput,
  RoboMakerClientResolvedConfig
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
  constructor(readonly input: DescribeWorldGenerationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWorldGenerationJobCommandInput, DescribeWorldGenerationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeWorldGenerationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "DescribeWorldGenerationJobCommand";
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
  private serialize(input: DescribeWorldGenerationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeWorldGenerationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeWorldGenerationJobCommandOutput> {
    return de_DescribeWorldGenerationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
