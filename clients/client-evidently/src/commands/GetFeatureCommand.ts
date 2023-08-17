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
import { GetFeatureRequest, GetFeatureResponse } from "../models/models_0";
import { de_GetFeatureCommand, se_GetFeatureCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFeatureCommand}.
 */
export interface GetFeatureCommandInput extends GetFeatureRequest {}
/**
 * @public
 *
 * The output of {@link GetFeatureCommand}.
 */
export interface GetFeatureCommandOutput extends GetFeatureResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the details about one feature. You must already know the feature name. To
 *       retrieve a list of features in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListFeatures.html">ListFeatures</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, GetFeatureCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, GetFeatureCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // GetFeatureRequest
 *   project: "STRING_VALUE", // required
 *   feature: "STRING_VALUE", // required
 * };
 * const command = new GetFeatureCommand(input);
 * const response = await client.send(command);
 * // { // GetFeatureResponse
 * //   feature: { // Feature
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     project: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     description: "STRING_VALUE",
 * //     evaluationStrategy: "STRING_VALUE", // required
 * //     valueType: "STRING_VALUE", // required
 * //     variations: [ // VariationsList // required
 * //       { // Variation
 * //         name: "STRING_VALUE",
 * //         value: { // VariableValue Union: only one key present
 * //           boolValue: true || false,
 * //           stringValue: "STRING_VALUE",
 * //           longValue: Number("long"),
 * //           doubleValue: Number("double"),
 * //         },
 * //       },
 * //     ],
 * //     defaultVariation: "STRING_VALUE",
 * //     evaluationRules: [ // EvaluationRulesList
 * //       { // EvaluationRule
 * //         name: "STRING_VALUE",
 * //         type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     entityOverrides: { // EntityOverrideMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFeatureCommandInput - {@link GetFeatureCommandInput}
 * @returns {@link GetFeatureCommandOutput}
 * @see {@link GetFeatureCommandInput} for command's `input` shape.
 * @see {@link GetFeatureCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
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
export class GetFeatureCommand extends $Command<
  GetFeatureCommandInput,
  GetFeatureCommandOutput,
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
  constructor(readonly input: GetFeatureCommandInput) {
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
  ): Handler<GetFeatureCommandInput, GetFeatureCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetFeatureCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "GetFeatureCommand";
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
  private serialize(input: GetFeatureCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetFeatureCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFeatureCommandOutput> {
    return de_GetFeatureCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
