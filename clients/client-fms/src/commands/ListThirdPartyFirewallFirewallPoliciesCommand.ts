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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import {
  ListThirdPartyFirewallFirewallPoliciesRequest,
  ListThirdPartyFirewallFirewallPoliciesResponse,
} from "../models/models_0";
import {
  de_ListThirdPartyFirewallFirewallPoliciesCommand,
  se_ListThirdPartyFirewallFirewallPoliciesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListThirdPartyFirewallFirewallPoliciesCommand}.
 */
export interface ListThirdPartyFirewallFirewallPoliciesCommandInput
  extends ListThirdPartyFirewallFirewallPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListThirdPartyFirewallFirewallPoliciesCommand}.
 */
export interface ListThirdPartyFirewallFirewallPoliciesCommandOutput
  extends ListThirdPartyFirewallFirewallPoliciesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListThirdPartyFirewallFirewallPoliciesCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListThirdPartyFirewallFirewallPoliciesCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // ListThirdPartyFirewallFirewallPoliciesRequest
 *   ThirdPartyFirewall: "PALO_ALTO_NETWORKS_CLOUD_NGFW" || "FORTIGATE_CLOUD_NATIVE_FIREWALL", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"), // required
 * };
 * const command = new ListThirdPartyFirewallFirewallPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListThirdPartyFirewallFirewallPoliciesResponse
 * //   ThirdPartyFirewallFirewallPolicies: [ // ThirdPartyFirewallFirewallPolicies
 * //     { // ThirdPartyFirewallFirewallPolicy
 * //       FirewallPolicyId: "STRING_VALUE",
 * //       FirewallPolicyName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThirdPartyFirewallFirewallPoliciesCommandInput - {@link ListThirdPartyFirewallFirewallPoliciesCommandInput}
 * @returns {@link ListThirdPartyFirewallFirewallPoliciesCommandOutput}
 * @see {@link ListThirdPartyFirewallFirewallPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListThirdPartyFirewallFirewallPoliciesCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 */
export class ListThirdPartyFirewallFirewallPoliciesCommand extends $Command<
  ListThirdPartyFirewallFirewallPoliciesCommandInput,
  ListThirdPartyFirewallFirewallPoliciesCommandOutput,
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
  constructor(readonly input: ListThirdPartyFirewallFirewallPoliciesCommandInput) {
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
  ): Handler<ListThirdPartyFirewallFirewallPoliciesCommandInput, ListThirdPartyFirewallFirewallPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListThirdPartyFirewallFirewallPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "ListThirdPartyFirewallFirewallPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSFMS_20180101",
        operation: "ListThirdPartyFirewallFirewallPolicies",
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
    input: ListThirdPartyFirewallFirewallPoliciesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListThirdPartyFirewallFirewallPoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListThirdPartyFirewallFirewallPoliciesCommandOutput> {
    return de_ListThirdPartyFirewallFirewallPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
