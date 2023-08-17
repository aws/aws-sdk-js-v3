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
  GetOrganizationConfigRuleDetailedStatusRequest,
  GetOrganizationConfigRuleDetailedStatusResponse,
} from "../models/models_0";
import {
  de_GetOrganizationConfigRuleDetailedStatusCommand,
  se_GetOrganizationConfigRuleDetailedStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetOrganizationConfigRuleDetailedStatusCommand}.
 */
export interface GetOrganizationConfigRuleDetailedStatusCommandInput
  extends GetOrganizationConfigRuleDetailedStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetOrganizationConfigRuleDetailedStatusCommand}.
 */
export interface GetOrganizationConfigRuleDetailedStatusCommandOutput
  extends GetOrganizationConfigRuleDetailedStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns detailed status for each member account within an organization for a given organization Config rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetOrganizationConfigRuleDetailedStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetOrganizationConfigRuleDetailedStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // GetOrganizationConfigRuleDetailedStatusRequest
 *   OrganizationConfigRuleName: "STRING_VALUE", // required
 *   Filters: { // StatusDetailFilters
 *     AccountId: "STRING_VALUE",
 *     MemberAccountRuleStatus: "CREATE_SUCCESSFUL" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_SUCCESSFUL" || "DELETE_FAILED" || "DELETE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED",
 *   },
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetOrganizationConfigRuleDetailedStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetOrganizationConfigRuleDetailedStatusResponse
 * //   OrganizationConfigRuleDetailedStatus: [ // OrganizationConfigRuleDetailedStatus
 * //     { // MemberAccountStatus
 * //       AccountId: "STRING_VALUE", // required
 * //       ConfigRuleName: "STRING_VALUE", // required
 * //       MemberAccountRuleStatus: "CREATE_SUCCESSFUL" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_SUCCESSFUL" || "DELETE_FAILED" || "DELETE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED", // required
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       LastUpdateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOrganizationConfigRuleDetailedStatusCommandInput - {@link GetOrganizationConfigRuleDetailedStatusCommandInput}
 * @returns {@link GetOrganizationConfigRuleDetailedStatusCommandOutput}
 * @see {@link GetOrganizationConfigRuleDetailedStatusCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationConfigRuleDetailedStatusCommandOutput} for command's `response` shape.
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
 * @throws {@link NoSuchOrganizationConfigRuleException} (client fault)
 *  <p>The Config rule in the request is not valid. Verify that the rule is an organization Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 *
 * @throws {@link OrganizationAccessDeniedException} (client fault)
 *  <p>For <code>PutConfigurationAggregator</code> API, you can see this exception for the following reasons:</p>
 *          <ul>
 *             <li>
 *                <p>No permission to call <code>EnableAWSServiceAccess</code> API</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator cannot be updated because your Amazon Web Services Organization management account or the delegated administrator role changed.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator is associated with a previous Amazon Web Services Organization and Config cannot aggregate data with current Amazon Web Services Organization.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>You are not a registered delegated administrator for Config with permissions to call <code>ListDelegatedAdministrators</code> API.
 * 			Ensure that the management account registers delagated administrator for Config service principle name before the delegated administrator creates an aggregator.</p>
 *             </li>
 *          </ul>
 *          <p>For all <code>OrganizationConfigRule</code> and <code>OrganizationConformancePack</code> APIs, Config throws an exception if APIs are called from member accounts. All APIs must be called from organization management account.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class GetOrganizationConfigRuleDetailedStatusCommand extends $Command<
  GetOrganizationConfigRuleDetailedStatusCommandInput,
  GetOrganizationConfigRuleDetailedStatusCommandOutput,
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
  constructor(readonly input: GetOrganizationConfigRuleDetailedStatusCommandInput) {
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
  ): Handler<
    GetOrganizationConfigRuleDetailedStatusCommandInput,
    GetOrganizationConfigRuleDetailedStatusCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetOrganizationConfigRuleDetailedStatusCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetOrganizationConfigRuleDetailedStatusCommand";
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
    input: GetOrganizationConfigRuleDetailedStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetOrganizationConfigRuleDetailedStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOrganizationConfigRuleDetailedStatusCommandOutput> {
    return de_GetOrganizationConfigRuleDetailedStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
