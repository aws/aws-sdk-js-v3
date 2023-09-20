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

import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeAffectedEntitiesRequest, DescribeAffectedEntitiesResponse } from "../models/models_0";
import { de_DescribeAffectedEntitiesCommand, se_DescribeAffectedEntitiesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAffectedEntitiesCommand}.
 */
export interface DescribeAffectedEntitiesCommandInput extends DescribeAffectedEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAffectedEntitiesCommand}.
 */
export interface DescribeAffectedEntitiesCommandOutput extends DescribeAffectedEntitiesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of entities that have been affected by the specified events, based on the
 *          specified filter criteria. Entities can refer to individual customer resources, groups of
 *          customer resources, or any other construct, depending on the Amazon Web Service. Events that
 *          have impact beyond that of the affected entities, or where the extent of impact is unknown,
 *          include at least one entity indicating this.</p>
 *          <p>At least one event ARN is required.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *                </li>
 *                <li>
 *                   <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific Health events. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeAffectedEntitiesCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeAffectedEntitiesCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const input = { // DescribeAffectedEntitiesRequest
 *   filter: { // EntityFilter
 *     eventArns: [ // eventArnList // required
 *       "STRING_VALUE",
 *     ],
 *     entityArns: [ // entityArnList
 *       "STRING_VALUE",
 *     ],
 *     entityValues: [ // entityValueList
 *       "STRING_VALUE",
 *     ],
 *     lastUpdatedTimes: [ // dateTimeRangeList
 *       { // DateTimeRange
 *         from: new Date("TIMESTAMP"),
 *         to: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     tags: [ // tagFilter
 *       { // tagSet
 *         "<keys>": "STRING_VALUE",
 *       },
 *     ],
 *     statusCodes: [ // entityStatusCodeList
 *       "IMPAIRED" || "UNIMPAIRED" || "UNKNOWN" || "PENDING" || "RESOLVED",
 *     ],
 *   },
 *   locale: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeAffectedEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAffectedEntitiesResponse
 * //   entities: [ // EntityList
 * //     { // AffectedEntity
 * //       entityArn: "STRING_VALUE",
 * //       eventArn: "STRING_VALUE",
 * //       entityValue: "STRING_VALUE",
 * //       entityUrl: "STRING_VALUE",
 * //       awsAccountId: "STRING_VALUE",
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       statusCode: "IMPAIRED" || "UNIMPAIRED" || "UNKNOWN" || "PENDING" || "RESOLVED",
 * //       tags: { // tagSet
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAffectedEntitiesCommandInput - {@link DescribeAffectedEntitiesCommandInput}
 * @returns {@link DescribeAffectedEntitiesCommandOutput}
 * @see {@link DescribeAffectedEntitiesCommandInput} for command's `input` shape.
 * @see {@link DescribeAffectedEntitiesCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *  <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
 *
 * @throws {@link UnsupportedLocale} (client fault)
 *  <p>The specified locale is not supported.</p>
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 */
export class DescribeAffectedEntitiesCommand extends $Command<
  DescribeAffectedEntitiesCommandInput,
  DescribeAffectedEntitiesCommandOutput,
  HealthClientResolvedConfig
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
  constructor(readonly input: DescribeAffectedEntitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAffectedEntitiesCommandInput, DescribeAffectedEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAffectedEntitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeAffectedEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHealth_20160804",
        operation: "DescribeAffectedEntities",
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
  private serialize(input: DescribeAffectedEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAffectedEntitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAffectedEntitiesCommandOutput> {
    return de_DescribeAffectedEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
