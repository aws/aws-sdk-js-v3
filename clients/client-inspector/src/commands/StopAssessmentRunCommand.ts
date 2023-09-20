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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { StopAssessmentRunRequest } from "../models/models_0";
import { de_StopAssessmentRunCommand, se_StopAssessmentRunCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopAssessmentRunCommand}.
 */
export interface StopAssessmentRunCommandInput extends StopAssessmentRunRequest {}
/**
 * @public
 *
 * The output of {@link StopAssessmentRunCommand}.
 */
export interface StopAssessmentRunCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Stops the assessment run that is specified by the ARN of the assessment
 *          run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, StopAssessmentRunCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, StopAssessmentRunCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // StopAssessmentRunRequest
 *   assessmentRunArn: "STRING_VALUE", // required
 *   stopAction: "START_EVALUATION" || "SKIP_EVALUATION",
 * };
 * const command = new StopAssessmentRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopAssessmentRunCommandInput - {@link StopAssessmentRunCommandInput}
 * @returns {@link StopAssessmentRunCommandOutput}
 * @see {@link StopAssessmentRunCommandInput} for command's `input` shape.
 * @see {@link StopAssessmentRunCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *  <p>The serice is temporary unavailable.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @example Stop assessment run
 * ```javascript
 * // Stops the assessment run that is specified by the ARN of the assessment run.
 * const input = {
 *   "assessmentRunArn": "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-it5r2S4T/run/0-11LMTAVe"
 * };
 * const command = new StopAssessmentRunCommand(input);
 * await client.send(command);
 * // example id: stop-assessment-run-1481067502857
 * ```
 *
 */
export class StopAssessmentRunCommand extends $Command<
  StopAssessmentRunCommandInput,
  StopAssessmentRunCommandOutput,
  InspectorClientResolvedConfig
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
  constructor(readonly input: StopAssessmentRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopAssessmentRunCommandInput, StopAssessmentRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopAssessmentRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "StopAssessmentRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "InspectorService",
        operation: "StopAssessmentRun",
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
  private serialize(input: StopAssessmentRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopAssessmentRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopAssessmentRunCommandOutput> {
    return de_StopAssessmentRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
