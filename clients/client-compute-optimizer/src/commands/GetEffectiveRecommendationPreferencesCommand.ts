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

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import {
  GetEffectiveRecommendationPreferencesRequest,
  GetEffectiveRecommendationPreferencesResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetEffectiveRecommendationPreferencesCommand,
  serializeAws_json1_0GetEffectiveRecommendationPreferencesCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link GetEffectiveRecommendationPreferencesCommand}.
 */
export interface GetEffectiveRecommendationPreferencesCommandInput
  extends GetEffectiveRecommendationPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link GetEffectiveRecommendationPreferencesCommand}.
 */
export interface GetEffectiveRecommendationPreferencesCommandOutput
  extends GetEffectiveRecommendationPreferencesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the recommendation preferences that are in effect for a given resource, such
 *             as enhanced infrastructure metrics. Considers all applicable preferences that you might
 *             have set at the resource, account, and organization level.</p>
 *          <p>When you create a recommendation preference, you can set its status to
 *                 <code>Active</code> or <code>Inactive</code>. Use this action to view the
 *             recommendation preferences that are in effect, or <code>Active</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEffectiveRecommendationPreferencesCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEffectiveRecommendationPreferencesCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const input = {
 *   resourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetEffectiveRecommendationPreferencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetEffectiveRecommendationPreferencesCommandInput - {@link GetEffectiveRecommendationPreferencesCommandInput}
 * @returns {@link GetEffectiveRecommendationPreferencesCommandOutput}
 * @see {@link GetEffectiveRecommendationPreferencesCommandInput} for command's `input` shape.
 * @see {@link GetEffectiveRecommendationPreferencesCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for ComputeOptimizerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Try your call again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value supplied for the input parameter is out of range or not valid.</p>
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *  <p>The request must contain either a valid (registered) Amazon Web Services access key ID
 *             or X.509 certificate.</p>
 *
 * @throws {@link OptInRequiredException} (client fault)
 *  <p>The account is not opted in to Compute Optimizer.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 *
 */
export class GetEffectiveRecommendationPreferencesCommand extends $Command<
  GetEffectiveRecommendationPreferencesCommandInput,
  GetEffectiveRecommendationPreferencesCommandOutput,
  ComputeOptimizerClientResolvedConfig
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
  constructor(readonly input: GetEffectiveRecommendationPreferencesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEffectiveRecommendationPreferencesCommandInput, GetEffectiveRecommendationPreferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEffectiveRecommendationPreferencesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "GetEffectiveRecommendationPreferencesCommand";
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
  private serialize(
    input: GetEffectiveRecommendationPreferencesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0GetEffectiveRecommendationPreferencesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEffectiveRecommendationPreferencesCommandOutput> {
    return deserializeAws_json1_0GetEffectiveRecommendationPreferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
