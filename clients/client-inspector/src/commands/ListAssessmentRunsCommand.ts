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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListAssessmentRunsRequest, ListAssessmentRunsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListAssessmentRunsCommand,
  serializeAws_json1_1ListAssessmentRunsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListAssessmentRunsCommand}.
 */
export interface ListAssessmentRunsCommandInput extends ListAssessmentRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentRunsCommand}.
 */
export interface ListAssessmentRunsCommandOutput extends ListAssessmentRunsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the assessment runs that correspond to the assessment templates that are
 *          specified by the ARNs of the assessment templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListAssessmentRunsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListAssessmentRunsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = {
 *   assessmentTemplateArns: [
 *     "STRING_VALUE",
 *   ],
 *   filter: {
 *     namePattern: "STRING_VALUE",
 *     states: [
 *       "STRING_VALUE",
 *     ],
 *     durationRange: {
 *       minSeconds: Number("int"),
 *       maxSeconds: Number("int"),
 *     },
 *     rulesPackageArns: [
 *       "STRING_VALUE",
 *     ],
 *     startTimeRange: {
 *       beginDate: new Date("TIMESTAMP"),
 *       endDate: new Date("TIMESTAMP"),
 *     },
 *     completionTimeRange: {
 *       beginDate: new Date("TIMESTAMP"),
 *       endDate: new Date("TIMESTAMP"),
 *     },
 *     stateChangeTimeRange: {
 *       beginDate: new Date("TIMESTAMP"),
 *       endDate: new Date("TIMESTAMP"),
 *     },
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssessmentRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListAssessmentRunsCommandInput - {@link ListAssessmentRunsCommandInput}
 * @returns {@link ListAssessmentRunsCommandOutput}
 * @see {@link ListAssessmentRunsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentRunsCommandOutput} for command's `response` shape.
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
 *
 * @example List assessment runs
 * ```javascript
 * // Lists the assessment runs that correspond to the assessment templates that are specified by the ARNs of the assessment templates.
 * const input = {
 *   "assessmentTemplateArns": [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw"
 *   ],
 *   "maxResults": 123
 * };
 * const command = new ListAssessmentRunsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "assessmentRunArns": [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE",
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-v5D6fI3v"
 *   ],
 *   "nextToken": "1"
 * }
 * *\/
 * // example id: list-assessment-runs-1481066340844
 * ```
 *
 */
export class ListAssessmentRunsCommand extends $Command<
  ListAssessmentRunsCommandInput,
  ListAssessmentRunsCommandOutput,
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
  constructor(readonly input: ListAssessmentRunsCommandInput) {
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
  ): Handler<ListAssessmentRunsCommandInput, ListAssessmentRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssessmentRunsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "ListAssessmentRunsCommand";
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
  private serialize(input: ListAssessmentRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAssessmentRunsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssessmentRunsCommandOutput> {
    return deserializeAws_json1_1ListAssessmentRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
