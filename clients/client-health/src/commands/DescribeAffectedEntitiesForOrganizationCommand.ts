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
import {
  DescribeAffectedEntitiesForOrganizationRequest,
  DescribeAffectedEntitiesForOrganizationResponse,
} from "../models/models_0";
import {
  de_DescribeAffectedEntitiesForOrganizationCommand,
  se_DescribeAffectedEntitiesForOrganizationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAffectedEntitiesForOrganizationCommand}.
 */
export interface DescribeAffectedEntitiesForOrganizationCommandInput
  extends DescribeAffectedEntitiesForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAffectedEntitiesForOrganizationCommand}.
 */
export interface DescribeAffectedEntitiesForOrganizationCommandOutput
  extends DescribeAffectedEntitiesForOrganizationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of entities that have been affected by one or more events for one or more
 *          accounts in your organization in Organizations, based on the filter criteria. Entities can refer
 *          to individual customer resources, groups of customer resources, or any other construct,
 *          depending on the Amazon Web Service.</p>
 *          <p>At least one event Amazon Resource Name (ARN) and account ID are required.</p>
 *          <p>Before you can call this operation, you must first enable Health to work with
 *          Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
 *          management account.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *                </li>
 *                <li>
 *                   <p>This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific Health events. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeAffectedEntitiesForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeAffectedEntitiesForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const input = { // DescribeAffectedEntitiesForOrganizationRequest
 *   organizationEntityFilters: [ // OrganizationEntityFiltersList
 *     { // EventAccountFilter
 *       eventArn: "STRING_VALUE", // required
 *       awsAccountId: "STRING_VALUE",
 *     },
 *   ],
 *   locale: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   organizationEntityAccountFilters: [ // OrganizationEntityAccountFiltersList
 *     { // EntityAccountFilter
 *       eventArn: "STRING_VALUE", // required
 *       awsAccountId: "STRING_VALUE",
 *       statusCodes: [ // entityStatusCodeList
 *         "IMPAIRED" || "UNIMPAIRED" || "UNKNOWN" || "PENDING" || "RESOLVED",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeAffectedEntitiesForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAffectedEntitiesForOrganizationResponse
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
 * //   failedSet: [ // DescribeAffectedEntitiesForOrganizationFailedSet
 * //     { // OrganizationAffectedEntitiesErrorItem
 * //       awsAccountId: "STRING_VALUE",
 * //       eventArn: "STRING_VALUE",
 * //       errorName: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAffectedEntitiesForOrganizationCommandInput - {@link DescribeAffectedEntitiesForOrganizationCommandInput}
 * @returns {@link DescribeAffectedEntitiesForOrganizationCommandOutput}
 * @see {@link DescribeAffectedEntitiesForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeAffectedEntitiesForOrganizationCommandOutput} for command's `response` shape.
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
export class DescribeAffectedEntitiesForOrganizationCommand extends $Command<
  DescribeAffectedEntitiesForOrganizationCommandInput,
  DescribeAffectedEntitiesForOrganizationCommandOutput,
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
  constructor(readonly input: DescribeAffectedEntitiesForOrganizationCommandInput) {
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
  ): Handler<
    DescribeAffectedEntitiesForOrganizationCommandInput,
    DescribeAffectedEntitiesForOrganizationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeAffectedEntitiesForOrganizationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeAffectedEntitiesForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHealth_20160804",
        operation: "DescribeAffectedEntitiesForOrganization",
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
  private serialize(
    input: DescribeAffectedEntitiesForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeAffectedEntitiesForOrganizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput> {
    return de_DescribeAffectedEntitiesForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
