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

import { DescribeFeatureTransformationRequest, DescribeFeatureTransformationResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import {
  de_DescribeFeatureTransformationCommand,
  se_DescribeFeatureTransformationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFeatureTransformationCommand}.
 */
export interface DescribeFeatureTransformationCommandInput extends DescribeFeatureTransformationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFeatureTransformationCommand}.
 */
export interface DescribeFeatureTransformationCommandOutput
  extends DescribeFeatureTransformationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the given feature transformation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeFeatureTransformationCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeFeatureTransformationCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeFeatureTransformationRequest
 *   featureTransformationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeFeatureTransformationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFeatureTransformationResponse
 * //   featureTransformation: { // FeatureTransformation
 * //     name: "STRING_VALUE",
 * //     featureTransformationArn: "STRING_VALUE",
 * //     defaultParameters: { // FeaturizationParameters
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     status: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFeatureTransformationCommandInput - {@link DescribeFeatureTransformationCommandInput}
 * @returns {@link DescribeFeatureTransformationCommandOutput}
 * @see {@link DescribeFeatureTransformationCommandInput} for command's `input` shape.
 * @see {@link DescribeFeatureTransformationCommandOutput} for command's `response` shape.
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
export class DescribeFeatureTransformationCommand extends $Command<
  DescribeFeatureTransformationCommandInput,
  DescribeFeatureTransformationCommandOutput,
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
  constructor(readonly input: DescribeFeatureTransformationCommandInput) {
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
  ): Handler<DescribeFeatureTransformationCommandInput, DescribeFeatureTransformationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFeatureTransformationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "DescribeFeatureTransformationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPersonalize",
        operation: "DescribeFeatureTransformation",
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
  private serialize(input: DescribeFeatureTransformationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFeatureTransformationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFeatureTransformationCommandOutput> {
    return de_DescribeFeatureTransformationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
