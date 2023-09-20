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

import { DescribeAlgorithmRequest, DescribeAlgorithmResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_DescribeAlgorithmCommand, se_DescribeAlgorithmCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAlgorithmCommand}.
 */
export interface DescribeAlgorithmCommandInput extends DescribeAlgorithmRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAlgorithmCommand}.
 */
export interface DescribeAlgorithmCommandOutput extends DescribeAlgorithmResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the given algorithm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeAlgorithmCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeAlgorithmCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeAlgorithmRequest
 *   algorithmArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAlgorithmCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAlgorithmResponse
 * //   algorithm: { // Algorithm
 * //     name: "STRING_VALUE",
 * //     algorithmArn: "STRING_VALUE",
 * //     algorithmImage: { // AlgorithmImage
 * //       name: "STRING_VALUE",
 * //       dockerURI: "STRING_VALUE", // required
 * //     },
 * //     defaultHyperParameters: { // HyperParameters
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     defaultHyperParameterRanges: { // DefaultHyperParameterRanges
 * //       integerHyperParameterRanges: [ // DefaultIntegerHyperParameterRanges
 * //         { // DefaultIntegerHyperParameterRange
 * //           name: "STRING_VALUE",
 * //           minValue: Number("int"),
 * //           maxValue: Number("int"),
 * //           isTunable: true || false,
 * //         },
 * //       ],
 * //       continuousHyperParameterRanges: [ // DefaultContinuousHyperParameterRanges
 * //         { // DefaultContinuousHyperParameterRange
 * //           name: "STRING_VALUE",
 * //           minValue: Number("double"),
 * //           maxValue: Number("double"),
 * //           isTunable: true || false,
 * //         },
 * //       ],
 * //       categoricalHyperParameterRanges: [ // DefaultCategoricalHyperParameterRanges
 * //         { // DefaultCategoricalHyperParameterRange
 * //           name: "STRING_VALUE",
 * //           values: [ // CategoricalValues
 * //             "STRING_VALUE",
 * //           ],
 * //           isTunable: true || false,
 * //         },
 * //       ],
 * //     },
 * //     defaultResourceConfig: { // ResourceConfig
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     trainingInputMode: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAlgorithmCommandInput - {@link DescribeAlgorithmCommandInput}
 * @returns {@link DescribeAlgorithmCommandOutput}
 * @see {@link DescribeAlgorithmCommandInput} for command's `input` shape.
 * @see {@link DescribeAlgorithmCommandOutput} for command's `response` shape.
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
export class DescribeAlgorithmCommand extends $Command<
  DescribeAlgorithmCommandInput,
  DescribeAlgorithmCommandOutput,
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
  constructor(readonly input: DescribeAlgorithmCommandInput) {
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
  ): Handler<DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAlgorithmCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "DescribeAlgorithmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPersonalize",
        operation: "DescribeAlgorithm",
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
  private serialize(input: DescribeAlgorithmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAlgorithmCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAlgorithmCommandOutput> {
    return de_DescribeAlgorithmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
