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

import { DeleteFirewallRequest, DeleteFirewallResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { de_DeleteFirewallCommand, se_DeleteFirewallCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link DeleteFirewallCommand}.
 */
export interface DeleteFirewallCommandInput extends DeleteFirewallRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFirewallCommand}.
 */
export interface DeleteFirewallCommandOutput extends DeleteFirewallResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>.
 *        This operation requires the firewall's <code>DeleteProtection</code> flag to be
 *             <code>FALSE</code>. You can't revert this operation. </p>
 *          <p>You can check whether a firewall is
 *          in use by reviewing the route tables for the Availability Zones where you have
 *          firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>.
 *          You define and update the route tables through Amazon VPC. As needed, update the route tables for the
 *          zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints,
 *          you can remove the firewall safely.</p>
 *          <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>,
 *          then delete the firewall by calling <a>DeleteFirewall</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteFirewallCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteFirewallCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // DeleteFirewallRequest
 *   FirewallName: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 * };
 * const command = new DeleteFirewallCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFirewallResponse
 * //   Firewall: { // Firewall
 * //     FirewallName: "STRING_VALUE",
 * //     FirewallArn: "STRING_VALUE",
 * //     FirewallPolicyArn: "STRING_VALUE", // required
 * //     VpcId: "STRING_VALUE", // required
 * //     SubnetMappings: [ // SubnetMappings // required
 * //       { // SubnetMapping
 * //         SubnetId: "STRING_VALUE", // required
 * //         IPAddressType: "DUALSTACK" || "IPV4" || "IPV6",
 * //       },
 * //     ],
 * //     DeleteProtection: true || false,
 * //     SubnetChangeProtection: true || false,
 * //     FirewallPolicyChangeProtection: true || false,
 * //     Description: "STRING_VALUE",
 * //     FirewallId: "STRING_VALUE", // required
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     EncryptionConfiguration: { // EncryptionConfiguration
 * //       KeyId: "STRING_VALUE",
 * //       Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 * //     },
 * //   },
 * //   FirewallStatus: { // FirewallStatus
 * //     Status: "PROVISIONING" || "DELETING" || "READY", // required
 * //     ConfigurationSyncStateSummary: "PENDING" || "IN_SYNC" || "CAPACITY_CONSTRAINED", // required
 * //     SyncStates: { // SyncStates
 * //       "<keys>": { // SyncState
 * //         Attachment: { // Attachment
 * //           SubnetId: "STRING_VALUE",
 * //           EndpointId: "STRING_VALUE",
 * //           Status: "CREATING" || "DELETING" || "FAILED" || "ERROR" || "SCALING" || "READY",
 * //           StatusMessage: "STRING_VALUE",
 * //         },
 * //         Config: { // SyncStateConfig
 * //           "<keys>": { // PerObjectStatus
 * //             SyncStatus: "PENDING" || "IN_SYNC" || "CAPACITY_CONSTRAINED",
 * //             UpdateToken: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //     CapacityUsageSummary: { // CapacityUsageSummary
 * //       CIDRs: { // CIDRSummary
 * //         AvailableCIDRCount: Number("int"),
 * //         UtilizedCIDRCount: Number("int"),
 * //         IPSetReferences: { // IPSetMetadataMap
 * //           "<keys>": { // IPSetMetadata
 * //             ResolvedCIDRCount: Number("int"),
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteFirewallCommandInput - {@link DeleteFirewallCommandInput}
 * @returns {@link DeleteFirewallCommandOutput}
 * @see {@link DeleteFirewallCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn’t perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because it's not valid. For example, you might have tried to delete
 *          a rule group or firewall policy that's in use.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation you requested isn't supported by Network Firewall. </p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 */
export class DeleteFirewallCommand extends $Command<
  DeleteFirewallCommandInput,
  DeleteFirewallCommandOutput,
  NetworkFirewallClientResolvedConfig
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
  constructor(readonly input: DeleteFirewallCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkFirewallClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFirewallCommandInput, DeleteFirewallCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteFirewallCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "DeleteFirewallCommand";
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
  private serialize(input: DeleteFirewallCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteFirewallCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFirewallCommandOutput> {
    return de_DeleteFirewallCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
