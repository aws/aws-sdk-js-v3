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

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import {
  ListBillingGroupsInput,
  ListBillingGroupsOutput,
  ListBillingGroupsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListBillingGroupsCommand, se_ListBillingGroupsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListBillingGroupsCommand}.
 */
export interface ListBillingGroupsCommandInput extends ListBillingGroupsInput {}
/**
 * @public
 *
 * The output of {@link ListBillingGroupsCommand}.
 */
export interface ListBillingGroupsCommandOutput extends ListBillingGroupsOutput, __MetadataBearer {}

/**
 * @public
 * <p>A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListBillingGroupsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListBillingGroupsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const input = { // ListBillingGroupsInput
 *   BillingPeriod: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: { // ListBillingGroupsFilter
 *     Arns: [ // BillingGroupArnList
 *       "STRING_VALUE",
 *     ],
 *     PricingPlan: "STRING_VALUE",
 *     Statuses: [ // BillingGroupStatusList
 *       "STRING_VALUE",
 *     ],
 *     AutoAssociate: true || false,
 *   },
 * };
 * const command = new ListBillingGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListBillingGroupsOutput
 * //   BillingGroups: [ // BillingGroupList
 * //     { // BillingGroupListElement
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       PrimaryAccountId: "STRING_VALUE",
 * //       ComputationPreference: { // ComputationPreference
 * //         PricingPlanArn: "STRING_VALUE", // required
 * //       },
 * //       Size: Number("long"),
 * //       CreationTime: Number("long"),
 * //       LastModifiedTime: Number("long"),
 * //       Status: "STRING_VALUE",
 * //       StatusReason: "STRING_VALUE",
 * //       AccountGrouping: { // ListBillingGroupAccountGrouping
 * //         AutoAssociate: true || false,
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBillingGroupsCommandInput - {@link ListBillingGroupsCommandInput}
 * @returns {@link ListBillingGroupsCommandOutput}
 * @see {@link ListBillingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListBillingGroupsCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services.</p>
 *
 * @throws {@link BillingconductorServiceException}
 * <p>Base exception class for all service exceptions from Billingconductor service.</p>
 *
 */
export class ListBillingGroupsCommand extends $Command<
  ListBillingGroupsCommandInput,
  ListBillingGroupsCommandOutput,
  BillingconductorClientResolvedConfig
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
  constructor(readonly input: ListBillingGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BillingconductorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBillingGroupsCommandInput, ListBillingGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBillingGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "ListBillingGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListBillingGroupsOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBillingConductor",
        operation: "ListBillingGroups",
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
  private serialize(input: ListBillingGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListBillingGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBillingGroupsCommandOutput> {
    return de_ListBillingGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
