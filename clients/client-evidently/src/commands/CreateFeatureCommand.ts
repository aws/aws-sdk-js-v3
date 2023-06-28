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
import { CreateFeatureRequest, CreateFeatureResponse } from "../models/models_0";
import { de_CreateFeatureCommand, se_CreateFeatureCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateFeatureCommand}.
 */
export interface CreateFeatureCommandInput extends CreateFeatureRequest {}
/**
 * @public
 *
 * The output of {@link CreateFeatureCommand}.
 */
export interface CreateFeatureCommandOutput extends CreateFeatureResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Evidently <i>feature</i> that you want to launch or test. You can define up to
 *        five variations of a feature, and use these variations in your launches and experiments. A feature must be created in
 *        a project. For information about creating a project, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html">CreateProject</a>.</p>
 *          <p>Don't use this operation to update an existing feature. Instead, use
 *        <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateFeature.html">UpdateFeature</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, CreateFeatureCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, CreateFeatureCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // CreateFeatureRequest
 *   project: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   evaluationStrategy: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   variations: [ // VariationConfigsList // required
 *     { // VariationConfig
 *       name: "STRING_VALUE", // required
 *       value: { // VariableValue Union: only one key present
 *         boolValue: true || false,
 *         stringValue: "STRING_VALUE",
 *         longValue: Number("long"),
 *         doubleValue: Number("double"),
 *       },
 *     },
 *   ],
 *   defaultVariation: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   entityOverrides: { // EntityOverrideMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateFeatureCommand(input);
 * const response = await client.send(command);
 * // { // CreateFeatureResponse
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
 * @param CreateFeatureCommandInput - {@link CreateFeatureCommandInput}
 * @returns {@link CreateFeatureCommandOutput}
 * @see {@link CreateFeatureCommandInput} for command's `input` shape.
 * @see {@link CreateFeatureCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 */
export class CreateFeatureCommand extends $Command<
  CreateFeatureCommandInput,
  CreateFeatureCommandOutput,
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
  constructor(readonly input: CreateFeatureCommandInput) {
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
  ): Handler<CreateFeatureCommandInput, CreateFeatureCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateFeatureCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "CreateFeatureCommand";
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
  private serialize(input: CreateFeatureCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFeatureCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFeatureCommandOutput> {
    return de_CreateFeatureCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
