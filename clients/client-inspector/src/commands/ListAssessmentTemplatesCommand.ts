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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListAssessmentTemplatesRequest, ListAssessmentTemplatesResponse } from "../models/models_0";
import { de_ListAssessmentTemplatesCommand, se_ListAssessmentTemplatesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAssessmentTemplatesCommand}.
 */
export interface ListAssessmentTemplatesCommandInput extends ListAssessmentTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentTemplatesCommand}.
 */
export interface ListAssessmentTemplatesCommandOutput extends ListAssessmentTemplatesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the assessment templates that correspond to the assessment targets that are
 *          specified by the ARNs of the assessment targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListAssessmentTemplatesCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListAssessmentTemplatesCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // ListAssessmentTemplatesRequest
 *   assessmentTargetArns: [ // ListParentArnList
 *     "STRING_VALUE",
 *   ],
 *   filter: { // AssessmentTemplateFilter
 *     namePattern: "STRING_VALUE",
 *     durationRange: { // DurationRange
 *       minSeconds: Number("int"),
 *       maxSeconds: Number("int"),
 *     },
 *     rulesPackageArns: [ // FilterRulesPackageArnList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssessmentTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentTemplatesResponse
 * //   assessmentTemplateArns: [ // ListReturnedArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentTemplatesCommandInput - {@link ListAssessmentTemplatesCommandInput}
 * @returns {@link ListAssessmentTemplatesCommandOutput}
 * @see {@link ListAssessmentTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentTemplatesCommandOutput} for command's `response` shape.
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
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @example List assessment templates
 * ```javascript
 * // Lists the assessment templates that correspond to the assessment targets that are specified by the ARNs of the assessment targets.
 * const input = {
 *   "assessmentTargetArns": [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq"
 *   ],
 *   "maxResults": 123
 * };
 * const command = new ListAssessmentTemplatesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "assessmentTemplateArns": [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw",
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-Uza6ihLh"
 *   ],
 *   "nextToken": "1"
 * }
 * *\/
 * // example id: list-assessment-templates-1481066623520
 * ```
 *
 */
export class ListAssessmentTemplatesCommand extends $Command<
  ListAssessmentTemplatesCommandInput,
  ListAssessmentTemplatesCommandOutput,
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
  constructor(readonly input: ListAssessmentTemplatesCommandInput) {
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
  ): Handler<ListAssessmentTemplatesCommandInput, ListAssessmentTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssessmentTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "ListAssessmentTemplatesCommand";
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
  private serialize(input: ListAssessmentTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAssessmentTemplatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssessmentTemplatesCommandOutput> {
    return de_ListAssessmentTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
