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
  DescribeOrganizationConformancePackStatusesRequest,
  DescribeOrganizationConformancePackStatusesResponse,
} from "../models/models_0";
import {
  de_DescribeOrganizationConformancePackStatusesCommand,
  se_DescribeOrganizationConformancePackStatusesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationConformancePackStatusesCommand}.
 */
export interface DescribeOrganizationConformancePackStatusesCommandInput
  extends DescribeOrganizationConformancePackStatusesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationConformancePackStatusesCommand}.
 */
export interface DescribeOrganizationConformancePackStatusesCommandOutput
  extends DescribeOrganizationConformancePackStatusesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Provides organization conformance pack deployment status for an organization. </p>
 *          <note>
 *             <p>The status is not considered successful until organization conformance pack is successfully
 * 				deployed in all the member accounts with an exception of excluded accounts.</p>
 *             <p>When you specify the limit and the next token, you receive a paginated response.
 * 				Limit and next token are not applicable if you specify organization conformance pack names.
 * 				They are only applicable, when you request all the organization conformance packs.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeOrganizationConformancePackStatusesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeOrganizationConformancePackStatusesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeOrganizationConformancePackStatusesRequest
 *   OrganizationConformancePackNames: [ // OrganizationConformancePackNames
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeOrganizationConformancePackStatusesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationConformancePackStatusesResponse
 * //   OrganizationConformancePackStatuses: [ // OrganizationConformancePackStatuses
 * //     { // OrganizationConformancePackStatus
 * //       OrganizationConformancePackName: "STRING_VALUE", // required
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
 * @param DescribeOrganizationConformancePackStatusesCommandInput - {@link DescribeOrganizationConformancePackStatusesCommandInput}
 * @returns {@link DescribeOrganizationConformancePackStatusesCommandOutput}
 * @see {@link DescribeOrganizationConformancePackStatusesCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConformancePackStatusesCommandOutput} for command's `response` shape.
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
export class DescribeOrganizationConformancePackStatusesCommand extends $Command<
  DescribeOrganizationConformancePackStatusesCommandInput,
  DescribeOrganizationConformancePackStatusesCommandOutput,
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
  constructor(readonly input: DescribeOrganizationConformancePackStatusesCommandInput) {
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
    DescribeOrganizationConformancePackStatusesCommandInput,
    DescribeOrganizationConformancePackStatusesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeOrganizationConformancePackStatusesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeOrganizationConformancePackStatusesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StarlingDoveService",
        operation: "DescribeOrganizationConformancePackStatuses",
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
    input: DescribeOrganizationConformancePackStatusesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeOrganizationConformancePackStatusesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrganizationConformancePackStatusesCommandOutput> {
    return de_DescribeOrganizationConformancePackStatusesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
