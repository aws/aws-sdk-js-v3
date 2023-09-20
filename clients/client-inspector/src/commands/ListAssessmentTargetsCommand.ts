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
import { ListAssessmentTargetsRequest, ListAssessmentTargetsResponse } from "../models/models_0";
import { de_ListAssessmentTargetsCommand, se_ListAssessmentTargetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAssessmentTargetsCommand}.
 */
export interface ListAssessmentTargetsCommandInput extends ListAssessmentTargetsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentTargetsCommand}.
 */
export interface ListAssessmentTargetsCommandOutput extends ListAssessmentTargetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the ARNs of the assessment targets within this AWS account. For more
 *          information about assessment targets, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">Amazon Inspector Assessment
 *             Targets</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListAssessmentTargetsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListAssessmentTargetsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // ListAssessmentTargetsRequest
 *   filter: { // AssessmentTargetFilter
 *     assessmentTargetNamePattern: "STRING_VALUE",
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssessmentTargetsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentTargetsResponse
 * //   assessmentTargetArns: [ // ListReturnedArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentTargetsCommandInput - {@link ListAssessmentTargetsCommandInput}
 * @returns {@link ListAssessmentTargetsCommandOutput}
 * @see {@link ListAssessmentTargetsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentTargetsCommandOutput} for command's `response` shape.
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
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @example List assessment targets
 * ```javascript
 * // Lists the ARNs of the assessment targets within this AWS account.
 * const input = {
 *   "maxResults": 123
 * };
 * const command = new ListAssessmentTargetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "assessmentTargetArns": [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq"
 *   ],
 *   "nextToken": "1"
 * }
 * *\/
 * // example id: list-assessment-targets-1481066540849
 * ```
 *
 */
export class ListAssessmentTargetsCommand extends $Command<
  ListAssessmentTargetsCommandInput,
  ListAssessmentTargetsCommandOutput,
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
  constructor(readonly input: ListAssessmentTargetsCommandInput) {
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
  ): Handler<ListAssessmentTargetsCommandInput, ListAssessmentTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssessmentTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "ListAssessmentTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "InspectorService",
        operation: "ListAssessmentTargets",
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
  private serialize(input: ListAssessmentTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAssessmentTargetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssessmentTargetsCommandOutput> {
    return de_ListAssessmentTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
