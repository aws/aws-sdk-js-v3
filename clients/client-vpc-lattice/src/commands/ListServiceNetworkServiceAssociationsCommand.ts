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

import {
  ListServiceNetworkServiceAssociationsRequest,
  ListServiceNetworkServiceAssociationsResponse,
} from "../models/models_0";
import {
  de_ListServiceNetworkServiceAssociationsCommand,
  se_ListServiceNetworkServiceAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListServiceNetworkServiceAssociationsCommand}.
 */
export interface ListServiceNetworkServiceAssociationsCommandInput
  extends ListServiceNetworkServiceAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceNetworkServiceAssociationsCommand}.
 */
export interface ListServiceNetworkServiceAssociationsCommandOutput
  extends ListServiceNetworkServiceAssociationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the associations between the service network and the service. You can filter the list
 *    either by service or service network. You must provide either the service network identifier or
 *    the service identifier.</p>
 *          <p>Every association in Amazon VPC Lattice is given a unique Amazon Resource Name (ARN), such as when a
 *    service network is associated with a VPC or when a service is associated with a service network.
 *    If the association is for a resource that is shared with another account, the association will
 *    include the local account ID as the prefix in the ARN for each account the resource is shared
 *    with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, ListServiceNetworkServiceAssociationsCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, ListServiceNetworkServiceAssociationsCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // ListServiceNetworkServiceAssociationsRequest
 *   serviceNetworkIdentifier: "STRING_VALUE",
 *   serviceIdentifier: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceNetworkServiceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceNetworkServiceAssociationsResponse
 * //   items: [ // ServiceNetworkServiceAssociationList // required
 * //     { // ServiceNetworkServiceAssociationSummary
 * //       id: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       createdBy: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       serviceId: "STRING_VALUE",
 * //       serviceName: "STRING_VALUE",
 * //       serviceArn: "STRING_VALUE",
 * //       serviceNetworkId: "STRING_VALUE",
 * //       serviceNetworkName: "STRING_VALUE",
 * //       serviceNetworkArn: "STRING_VALUE",
 * //       dnsEntry: { // DnsEntry
 * //         domainName: "STRING_VALUE",
 * //         hostedZoneId: "STRING_VALUE",
 * //       },
 * //       customDomainName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceNetworkServiceAssociationsCommandInput - {@link ListServiceNetworkServiceAssociationsCommandInput}
 * @returns {@link ListServiceNetworkServiceAssociationsCommandOutput}
 * @see {@link ListServiceNetworkServiceAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListServiceNetworkServiceAssociationsCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 */
export class ListServiceNetworkServiceAssociationsCommand extends $Command<
  ListServiceNetworkServiceAssociationsCommandInput,
  ListServiceNetworkServiceAssociationsCommandOutput,
  VPCLatticeClientResolvedConfig
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
  constructor(readonly input: ListServiceNetworkServiceAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: VPCLatticeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListServiceNetworkServiceAssociationsCommandInput, ListServiceNetworkServiceAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListServiceNetworkServiceAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VPCLatticeClient";
    const commandName = "ListServiceNetworkServiceAssociationsCommand";
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
    input: ListServiceNetworkServiceAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListServiceNetworkServiceAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListServiceNetworkServiceAssociationsCommandOutput> {
    return de_ListServiceNetworkServiceAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
