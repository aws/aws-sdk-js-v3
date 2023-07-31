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

import { ListHostedZonesByVPCRequest, ListHostedZonesByVPCResponse } from "../models/models_0";
import { de_ListHostedZonesByVPCCommand, se_ListHostedZonesByVPCCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListHostedZonesByVPCCommand}.
 */
export interface ListHostedZonesByVPCCommandInput extends ListHostedZonesByVPCRequest {}
/**
 * @public
 *
 * The output of {@link ListHostedZonesByVPCCommand}.
 */
export interface ListHostedZonesByVPCCommandOutput extends ListHostedZonesByVPCResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all the private hosted zones that a specified VPC is associated with, regardless
 * 			of which Amazon Web Services account or Amazon Web Services service owns the hosted zones.
 * 			The <code>HostedZoneOwner</code> structure in the response contains one of the following
 * 			values:</p>
 *          <ul>
 *             <li>
 *                <p>An <code>OwningAccount</code> element, which contains the account number of
 * 					either the current Amazon Web Services account or another Amazon Web Services account. Some services, such as Cloud Map, create
 * 					hosted zones using the current account. </p>
 *             </li>
 *             <li>
 *                <p>An <code>OwningService</code> element, which identifies the Amazon Web Services
 * 					service that created and owns the hosted zone. For example, if a hosted zone was
 * 					created by Amazon Elastic File System (Amazon EFS), the value of
 * 						<code>Owner</code> is <code>efs.amazonaws.com</code>. </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>When listing private hosted zones, the hosted zone and the Amazon VPC must
 * 				belong to the same partition where the hosted zones were created. A partition is a
 * 				group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to
 * 				one partition.</p>
 *             <p>The following are the supported partitions:</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <code>aws</code> - Amazon Web Services Regions</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>aws-cn</code> - China Regions</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>aws-us-gov</code> - Amazon Web Services GovCloud (US) Region</p>
 *                </li>
 *             </ul>
 *             <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Access Management</a>
 * 				in the <i>Amazon Web Services General Reference</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHostedZonesByVPCCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHostedZonesByVPCCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // ListHostedZonesByVPCRequest
 *   VPCId: "STRING_VALUE", // required
 *   VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1", // required
 *   MaxItems: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListHostedZonesByVPCCommand(input);
 * const response = await client.send(command);
 * // { // ListHostedZonesByVPCResponse
 * //   HostedZoneSummaries: [ // HostedZoneSummaries // required
 * //     { // HostedZoneSummary
 * //       HostedZoneId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Owner: { // HostedZoneOwner
 * //         OwningAccount: "STRING_VALUE",
 * //         OwningService: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   MaxItems: Number("int"), // required
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHostedZonesByVPCCommandInput - {@link ListHostedZonesByVPCCommandInput}
 * @returns {@link ListHostedZonesByVPCCommandOutput}
 * @see {@link ListHostedZonesByVPCCommandInput} for command's `input` shape.
 * @see {@link ListHostedZonesByVPCCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *  <p>The value that you specified to get the second or subsequent page of results is
 * 			invalid.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class ListHostedZonesByVPCCommand extends $Command<
  ListHostedZonesByVPCCommandInput,
  ListHostedZonesByVPCCommandOutput,
  Route53ClientResolvedConfig
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
  constructor(readonly input: ListHostedZonesByVPCCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListHostedZonesByVPCCommandInput, ListHostedZonesByVPCCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHostedZonesByVPCCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListHostedZonesByVPCCommand";
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
  private serialize(input: ListHostedZonesByVPCCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListHostedZonesByVPCCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHostedZonesByVPCCommandOutput> {
    return de_ListHostedZonesByVPCCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
