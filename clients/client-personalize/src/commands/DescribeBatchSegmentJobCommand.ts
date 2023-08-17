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

import { DescribeBatchSegmentJobRequest, DescribeBatchSegmentJobResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_DescribeBatchSegmentJobCommand, se_DescribeBatchSegmentJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBatchSegmentJobCommand}.
 */
export interface DescribeBatchSegmentJobCommandInput extends DescribeBatchSegmentJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBatchSegmentJobCommand}.
 */
export interface DescribeBatchSegmentJobCommandOutput extends DescribeBatchSegmentJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the properties of a batch segment job including name, Amazon Resource Name (ARN),
 *       status, input and output configurations, and the ARN of the solution version used to generate
 *       segments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeBatchSegmentJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeBatchSegmentJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeBatchSegmentJobRequest
 *   batchSegmentJobArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeBatchSegmentJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBatchSegmentJobResponse
 * //   batchSegmentJob: { // BatchSegmentJob
 * //     jobName: "STRING_VALUE",
 * //     batchSegmentJobArn: "STRING_VALUE",
 * //     filterArn: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     solutionVersionArn: "STRING_VALUE",
 * //     numResults: Number("int"),
 * //     jobInput: { // BatchSegmentJobInput
 * //       s3DataSource: { // S3DataConfig
 * //         path: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     jobOutput: { // BatchSegmentJobOutput
 * //       s3DataDestination: {
 * //         path: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     roleArn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBatchSegmentJobCommandInput - {@link DescribeBatchSegmentJobCommandInput}
 * @returns {@link DescribeBatchSegmentJobCommandOutput}
 * @see {@link DescribeBatchSegmentJobCommandInput} for command's `input` shape.
 * @see {@link DescribeBatchSegmentJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 */
export class DescribeBatchSegmentJobCommand extends $Command<
  DescribeBatchSegmentJobCommandInput,
  DescribeBatchSegmentJobCommandOutput,
  PersonalizeClientResolvedConfig
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
  constructor(readonly input: DescribeBatchSegmentJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBatchSegmentJobCommandInput, DescribeBatchSegmentJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBatchSegmentJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "DescribeBatchSegmentJobCommand";
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
  private serialize(input: DescribeBatchSegmentJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBatchSegmentJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBatchSegmentJobCommandOutput> {
    return de_DescribeBatchSegmentJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
