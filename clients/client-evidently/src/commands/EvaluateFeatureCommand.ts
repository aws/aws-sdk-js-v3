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

import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { EvaluateFeatureRequest, EvaluateFeatureResponse } from "../models/models_0";
import { de_EvaluateFeatureCommand, se_EvaluateFeatureCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EvaluateFeatureCommand}.
 */
export interface EvaluateFeatureCommandInput extends EvaluateFeatureRequest {}
/**
 * @public
 *
 * The output of {@link EvaluateFeatureCommand}.
 */
export interface EvaluateFeatureCommandOutput extends EvaluateFeatureResponse, __MetadataBearer {}

/**
 * @public
 * <p>This operation assigns a feature variation to one given user session. You pass in an
 *         <code>entityID</code> that represents the user. Evidently then checks the evaluation rules
 *       and assigns the variation.</p>
 *          <p>The first rules that are evaluated are the override rules. If the user's
 *         <code>entityID</code> matches an override rule, the user is served the variation specified
 *       by that rule.</p>
 *          <p>If there is a current launch with this feature that uses segment overrides, and
 *       if the user session's <code>evaluationContext</code> matches a segment rule defined in a
 *       segment override, the configuration in the segment overrides is used. For more information
 *       about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a>
 *       and
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Use segments to focus your
 *         audience</a>.</p>
 *          <p>If there is a launch with no segment overrides, the user might be assigned to a variation in
 *       the launch. The chance of this depends on the percentage of users that are allocated to that
 *       launch. If the user is enrolled in the launch, the variation they are served depends on the
 *       allocation of the various feature variations used for the launch.</p>
 *          <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might
 *       be assigned to a variation in the experiment. The chance of this
 *       depends on the percentage of users that are allocated to that experiment.</p>
 *          <p>If the experiment uses a segment, then only
 *       user sessions with <code>evaluationContext</code> values that match the segment rule are used in the experiment.</p>
 *          <p>If the user is enrolled in the experiment,
 *       the variation they are served depends on the allocation of the various feature variations used for the experiment. </p>
 *          <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, EvaluateFeatureCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, EvaluateFeatureCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // EvaluateFeatureRequest
 *   project: "STRING_VALUE", // required
 *   feature: "STRING_VALUE", // required
 *   entityId: "STRING_VALUE", // required
 *   evaluationContext: "STRING_VALUE",
 * };
 * const command = new EvaluateFeatureCommand(input);
 * const response = await client.send(command);
 * // { // EvaluateFeatureResponse
 * //   variation: "STRING_VALUE",
 * //   value: { // VariableValue Union: only one key present
 * //     boolValue: true || false,
 * //     stringValue: "STRING_VALUE",
 * //     longValue: Number("long"),
 * //     doubleValue: Number("double"),
 * //   },
 * //   reason: "STRING_VALUE",
 * //   details: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EvaluateFeatureCommandInput - {@link EvaluateFeatureCommandInput}
 * @returns {@link EvaluateFeatureCommandOutput}
 * @see {@link EvaluateFeatureCommandInput} for command's `input` shape.
 * @see {@link EvaluateFeatureCommandOutput} for command's `response` shape.
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
export class EvaluateFeatureCommand extends $Command<
  EvaluateFeatureCommandInput,
  EvaluateFeatureCommandOutput,
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
  constructor(readonly input: EvaluateFeatureCommandInput) {
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
  ): Handler<EvaluateFeatureCommandInput, EvaluateFeatureCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EvaluateFeatureCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "EvaluateFeatureCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Evidently",
        operation: "EvaluateFeature",
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
  private serialize(input: EvaluateFeatureCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EvaluateFeatureCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EvaluateFeatureCommandOutput> {
    return de_EvaluateFeatureCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
