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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetResourceEvaluationSummaryRequest, GetResourceEvaluationSummaryResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetResourceEvaluationSummaryCommand,
  serializeAws_json1_1GetResourceEvaluationSummaryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetResourceEvaluationSummaryCommand}.
 */
export interface GetResourceEvaluationSummaryCommandInput extends GetResourceEvaluationSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceEvaluationSummaryCommand}.
 */
export interface GetResourceEvaluationSummaryCommandOutput
  extends GetResourceEvaluationSummaryResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a summary of resource evaluation for the specified resource evaluation ID from the proactive rules that were run.
 * 			The results indicate which evaluation context was used to evaluate the rules, which resource details were evaluated,
 * 			the evaluation mode that was run, and whether the resource details comply with the configuration of the proactive rules. </p>
 *          <note>
 *             <p>To see additional information about the evaluation result, such as which rule flagged a resource as NON_COMPLIANT, use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByResource.html">GetComplianceDetailsByResource</a> API.
 * 			For more information, see the  <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceEvaluationSummary.html#API_GetResourceEvaluationSummary_Examples">Examples</a> section.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetResourceEvaluationSummaryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetResourceEvaluationSummaryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = {
 *   ResourceEvaluationId: "STRING_VALUE", // required
 * };
 * const command = new GetResourceEvaluationSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetResourceEvaluationSummaryCommandInput - {@link GetResourceEvaluationSummaryCommandInput}
 * @returns {@link GetResourceEvaluationSummaryCommandOutput}
 * @see {@link GetResourceEvaluationSummaryCommandInput} for command's `input` shape.
 * @see {@link GetResourceEvaluationSummaryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You have specified a resource that does not exist.</p>
 *
 *
 */
export class GetResourceEvaluationSummaryCommand extends $Command<
  GetResourceEvaluationSummaryCommandInput,
  GetResourceEvaluationSummaryCommandOutput,
  ConfigServiceClientResolvedConfig
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
  constructor(readonly input: GetResourceEvaluationSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceEvaluationSummaryCommandInput, GetResourceEvaluationSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourceEvaluationSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetResourceEvaluationSummaryCommand";
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
  private serialize(input: GetResourceEvaluationSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResourceEvaluationSummaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResourceEvaluationSummaryCommandOutput> {
    return deserializeAws_json1_1GetResourceEvaluationSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
