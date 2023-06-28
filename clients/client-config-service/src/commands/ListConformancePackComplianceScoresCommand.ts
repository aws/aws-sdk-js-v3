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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  ListConformancePackComplianceScoresRequest,
  ListConformancePackComplianceScoresResponse,
} from "../models/models_0";
import {
  de_ListConformancePackComplianceScoresCommand,
  se_ListConformancePackComplianceScoresCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListConformancePackComplianceScoresCommand}.
 */
export interface ListConformancePackComplianceScoresCommandInput extends ListConformancePackComplianceScoresRequest {}
/**
 * @public
 *
 * The output of {@link ListConformancePackComplianceScoresCommand}.
 */
export interface ListConformancePackComplianceScoresCommandOutput
  extends ListConformancePackComplianceScoresResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of conformance pack compliance scores.
 * 			A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack.
 * 			This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand
 * 			the level of compliance in your conformance packs.</p>
 *          <note>
 *             <p>Conformance packs with no evaluation results will have a compliance score of <code>INSUFFICIENT_DATA</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, ListConformancePackComplianceScoresCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, ListConformancePackComplianceScoresCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // ListConformancePackComplianceScoresRequest
 *   Filters: { // ConformancePackComplianceScoresFilters
 *     ConformancePackNames: [ // ConformancePackNameFilter // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   SortOrder: "ASCENDING" || "DESCENDING",
 *   SortBy: "SCORE",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListConformancePackComplianceScoresCommand(input);
 * const response = await client.send(command);
 * // { // ListConformancePackComplianceScoresResponse
 * //   NextToken: "STRING_VALUE",
 * //   ConformancePackComplianceScores: [ // ConformancePackComplianceScores // required
 * //     { // ConformancePackComplianceScore
 * //       Score: "STRING_VALUE",
 * //       ConformancePackName: "STRING_VALUE",
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListConformancePackComplianceScoresCommandInput - {@link ListConformancePackComplianceScoresCommandInput}
 * @returns {@link ListConformancePackComplianceScoresCommandOutput}
 * @see {@link ListConformancePackComplianceScoresCommandInput} for command's `input` shape.
 * @see {@link ListConformancePackComplianceScoresCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class ListConformancePackComplianceScoresCommand extends $Command<
  ListConformancePackComplianceScoresCommandInput,
  ListConformancePackComplianceScoresCommandOutput,
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
  constructor(readonly input: ListConformancePackComplianceScoresCommandInput) {
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
  ): Handler<ListConformancePackComplianceScoresCommandInput, ListConformancePackComplianceScoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListConformancePackComplianceScoresCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "ListConformancePackComplianceScoresCommand";
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
    input: ListConformancePackComplianceScoresCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListConformancePackComplianceScoresCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListConformancePackComplianceScoresCommandOutput> {
    return de_ListConformancePackComplianceScoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
