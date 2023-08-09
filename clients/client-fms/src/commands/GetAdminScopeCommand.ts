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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetAdminScopeRequest, GetAdminScopeResponse } from "../models/models_0";
import { de_GetAdminScopeCommand, se_GetAdminScopeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAdminScopeCommand}.
 */
export interface GetAdminScopeCommandInput extends GetAdminScopeRequest {}
/**
 * @public
 *
 * The output of {@link GetAdminScopeCommand}.
 */
export interface GetAdminScopeCommandOutput extends GetAdminScopeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the specified account's administrative scope. The admistrative scope defines the resources that an Firewall Manager administrator can manage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetAdminScopeCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetAdminScopeCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // GetAdminScopeRequest
 *   AdminAccount: "STRING_VALUE", // required
 * };
 * const command = new GetAdminScopeCommand(input);
 * const response = await client.send(command);
 * // { // GetAdminScopeResponse
 * //   AdminScope: { // AdminScope
 * //     AccountScope: { // AccountScope
 * //       Accounts: [ // AccountIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       AllAccountsEnabled: true || false,
 * //       ExcludeSpecifiedAccounts: true || false,
 * //     },
 * //     OrganizationalUnitScope: { // OrganizationalUnitScope
 * //       OrganizationalUnits: [ // OrganizationalUnitIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       AllOrganizationalUnitsEnabled: true || false,
 * //       ExcludeSpecifiedOrganizationalUnits: true || false,
 * //     },
 * //     RegionScope: { // RegionScope
 * //       Regions: [ // AWSRegionList
 * //         "STRING_VALUE",
 * //       ],
 * //       AllRegionsEnabled: true || false,
 * //     },
 * //     PolicyTypeScope: { // PolicyTypeScope
 * //       PolicyTypes: [ // SecurityServiceTypeList
 * //         "WAF" || "WAFV2" || "SHIELD_ADVANCED" || "SECURITY_GROUPS_COMMON" || "SECURITY_GROUPS_CONTENT_AUDIT" || "SECURITY_GROUPS_USAGE_AUDIT" || "NETWORK_FIREWALL" || "DNS_FIREWALL" || "THIRD_PARTY_FIREWALL" || "IMPORT_NETWORK_FIREWALL",
 * //       ],
 * //       AllPolicyTypesEnabled: true || false,
 * //     },
 * //   },
 * //   Status: "ONBOARDING" || "ONBOARDING_COMPLETE" || "OFFBOARDING" || "OFFBOARDING_COMPLETE",
 * // };
 *
 * ```
 *
 * @param GetAdminScopeCommandInput - {@link GetAdminScopeCommandInput}
 * @returns {@link GetAdminScopeCommandOutput}
 * @see {@link GetAdminScopeCommandInput} for command's `input` shape.
 * @see {@link GetAdminScopeCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The parameters of the request were invalid.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation exceeds a resource limit, for example, the maximum number of
 *         <code>policy</code> objects that you can create for an Amazon Web Services account. For more information,
 *       see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html">Firewall
 *         Manager Limits</a> in the <i>WAF Developer Guide</i>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 */
export class GetAdminScopeCommand extends $Command<
  GetAdminScopeCommandInput,
  GetAdminScopeCommandOutput,
  FMSClientResolvedConfig
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
  constructor(readonly input: GetAdminScopeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAdminScopeCommandInput, GetAdminScopeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetAdminScopeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "GetAdminScopeCommand";
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
  private serialize(input: GetAdminScopeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAdminScopeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAdminScopeCommandOutput> {
    return de_GetAdminScopeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
