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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  GetOrganizationConformancePackDetailedStatusRequest,
  GetOrganizationConformancePackDetailedStatusResponse,
} from "../models/models_0";
import {
  de_GetOrganizationConformancePackDetailedStatusCommand,
  se_GetOrganizationConformancePackDetailedStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetOrganizationConformancePackDetailedStatusCommand}.
 */
export interface GetOrganizationConformancePackDetailedStatusCommandInput
  extends GetOrganizationConformancePackDetailedStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetOrganizationConformancePackDetailedStatusCommand}.
 */
export interface GetOrganizationConformancePackDetailedStatusCommandOutput
  extends GetOrganizationConformancePackDetailedStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns detailed status for each member account within an organization for a given organization conformance pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetOrganizationConformancePackDetailedStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetOrganizationConformancePackDetailedStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // GetOrganizationConformancePackDetailedStatusRequest
 *   OrganizationConformancePackName: "STRING_VALUE", // required
 *   Filters: { // OrganizationResourceDetailedStatusFilters
 *     AccountId: "STRING_VALUE",
 *     Status: "CREATE_SUCCESSFUL" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_SUCCESSFUL" || "DELETE_FAILED" || "DELETE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED",
 *   },
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetOrganizationConformancePackDetailedStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetOrganizationConformancePackDetailedStatusResponse
 * //   OrganizationConformancePackDetailedStatuses: [ // OrganizationConformancePackDetailedStatuses
 * //     { // OrganizationConformancePackDetailedStatus
 * //       AccountId: "STRING_VALUE", // required
 * //       ConformancePackName: "STRING_VALUE", // required
 * //       Status: "CREATE_SUCCESSFUL" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_SUCCESSFUL" || "DELETE_FAILED" || "DELETE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED", // required
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
 * @param GetOrganizationConformancePackDetailedStatusCommandInput - {@link GetOrganizationConformancePackDetailedStatusCommandInput}
 * @returns {@link GetOrganizationConformancePackDetailedStatusCommandOutput}
 * @see {@link GetOrganizationConformancePackDetailedStatusCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationConformancePackDetailedStatusCommandOutput} for command's `response` shape.
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
 * @throws {@link NoSuchOrganizationConformancePackException} (client fault)
 *  <p>Config organization conformance pack that you passed in the filter does not exist.</p>
 *          <p>For DeleteOrganizationConformancePack, you tried to delete an organization conformance pack that does not exist.</p>
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
export class GetOrganizationConformancePackDetailedStatusCommand extends $Command<
  GetOrganizationConformancePackDetailedStatusCommandInput,
  GetOrganizationConformancePackDetailedStatusCommandOutput,
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
  constructor(readonly input: GetOrganizationConformancePackDetailedStatusCommandInput) {
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
    GetOrganizationConformancePackDetailedStatusCommandInput,
    GetOrganizationConformancePackDetailedStatusCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetOrganizationConformancePackDetailedStatusCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetOrganizationConformancePackDetailedStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StarlingDoveService",
        operation: "GetOrganizationConformancePackDetailedStatus",
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
    input: GetOrganizationConformancePackDetailedStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetOrganizationConformancePackDetailedStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOrganizationConformancePackDetailedStatusCommandOutput> {
    return de_GetOrganizationConformancePackDetailedStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
