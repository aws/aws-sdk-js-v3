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
import { BatchEvaluateFeatureRequest, BatchEvaluateFeatureResponse } from "../models/models_0";
import { de_BatchEvaluateFeatureCommand, se_BatchEvaluateFeatureCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchEvaluateFeatureCommand}.
 */
export interface BatchEvaluateFeatureCommandInput extends BatchEvaluateFeatureRequest {}
/**
 * @public
 *
 * The output of {@link BatchEvaluateFeatureCommand}.
 */
export interface BatchEvaluateFeatureCommandOutput extends BatchEvaluateFeatureResponse, __MetadataBearer {}

/**
 * @public
 * <p>This operation assigns feature variation to user sessions. For each user session, you pass
 *       in an <code>entityID</code> that represents the user. Evidently then checks the evaluation
 *       rules and assigns the variation.</p>
 *          <p>The first rules that are evaluated are the override rules. If the user's
 *         <code>entityID</code> matches an override rule, the user is served the variation specified
 *       by that rule.</p>
 *          <p>Next, if there is a launch of the feature, the user might be assigned to a variation in
 *       the launch. The chance of this depends on the percentage of users that are allocated to that
 *       launch. If the user is enrolled in the launch, the variation they are served depends on the
 *       allocation of the various feature variations used for the launch.</p>
 *          <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature,  the user might
 *       be assigned to a variation in the experiment. The chance of this
 *       depends on the percentage of users that are allocated to that experiment. If the user is enrolled in the experiment,
 *       the variation they are served depends on the allocation of the various feature variations used for the experiment. </p>
 *          <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, BatchEvaluateFeatureCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, BatchEvaluateFeatureCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // BatchEvaluateFeatureRequest
 *   project: "STRING_VALUE", // required
 *   requests: [ // EvaluationRequestsList // required
 *     { // EvaluationRequest
 *       feature: "STRING_VALUE", // required
 *       entityId: "STRING_VALUE", // required
 *       evaluationContext: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchEvaluateFeatureCommand(input);
 * const response = await client.send(command);
 * // { // BatchEvaluateFeatureResponse
 * //   results: [ // EvaluationResultsList
 * //     { // EvaluationResult
 * //       project: "STRING_VALUE",
 * //       feature: "STRING_VALUE", // required
 * //       variation: "STRING_VALUE",
 * //       value: { // VariableValue Union: only one key present
 * //         boolValue: true || false,
 * //         stringValue: "STRING_VALUE",
 * //         longValue: Number("long"),
 * //         doubleValue: Number("double"),
 * //       },
 * //       entityId: "STRING_VALUE", // required
 * //       reason: "STRING_VALUE",
 * //       details: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchEvaluateFeatureCommandInput - {@link BatchEvaluateFeatureCommandInput}
 * @returns {@link BatchEvaluateFeatureCommandOutput}
 * @see {@link BatchEvaluateFeatureCommandInput} for command's `input` shape.
 * @see {@link BatchEvaluateFeatureCommandOutput} for command's `response` shape.
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
export class BatchEvaluateFeatureCommand extends $Command<
  BatchEvaluateFeatureCommandInput,
  BatchEvaluateFeatureCommandOutput,
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
  constructor(readonly input: BatchEvaluateFeatureCommandInput) {
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
  ): Handler<BatchEvaluateFeatureCommandInput, BatchEvaluateFeatureCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchEvaluateFeatureCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "BatchEvaluateFeatureCommand";
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
  private serialize(input: BatchEvaluateFeatureCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchEvaluateFeatureCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchEvaluateFeatureCommandOutput> {
    return de_BatchEvaluateFeatureCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
