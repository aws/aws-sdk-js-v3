// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

import { AssociateVPCWithHostedZoneRequest, AssociateVPCWithHostedZoneResponse } from "../models/models_0";
import { de_AssociateVPCWithHostedZoneCommand, se_AssociateVPCWithHostedZoneCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateVPCWithHostedZoneCommand}.
 */
export interface AssociateVPCWithHostedZoneCommandInput extends AssociateVPCWithHostedZoneRequest {}
/**
 * @public
 *
 * The output of {@link AssociateVPCWithHostedZoneCommand}.
 */
export interface AssociateVPCWithHostedZoneCommandOutput extends AssociateVPCWithHostedZoneResponse, __MetadataBearer {}

/**
 * @public
 * <p>Associates an Amazon VPC with a private hosted zone. </p>
 *          <important>
 *             <p>To perform the association, the VPC and the private hosted zone must already
 * 				exist. You can't convert a public hosted zone into a private hosted zone.</p>
 *          </important>
 *          <note>
 *             <p>If you want to associate a VPC that was created by using one Amazon Web Services account with a private hosted zone that was created by using a
 * 				different account, the Amazon Web Services account that created the private hosted
 * 				zone must first submit a <code>CreateVPCAssociationAuthorization</code> request.
 * 				Then the account that created the VPC must submit an
 * 					<code>AssociateVPCWithHostedZone</code> request.</p>
 *          </note>
 *          <note>
 *             <p>When granting access, the hosted zone and the Amazon VPC must belong to
 * 				the same partition. A partition is a group of Amazon Web Services Regions. Each
 * 					Amazon Web Services account is scoped to one partition.</p>
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
 * import { Route53Client, AssociateVPCWithHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, AssociateVPCWithHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // AssociateVPCWithHostedZoneRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   VPC: { // VPC
 *     VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4",
 *     VPCId: "STRING_VALUE",
 *   },
 *   Comment: "STRING_VALUE",
 * };
 * const command = new AssociateVPCWithHostedZoneCommand(input);
 * const response = await client.send(command);
 * // { // AssociateVPCWithHostedZoneResponse
 * //   ChangeInfo: { // ChangeInfo
 * //     Id: "STRING_VALUE", // required
 * //     Status: "PENDING" || "INSYNC", // required
 * //     SubmittedAt: new Date("TIMESTAMP"), // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateVPCWithHostedZoneCommandInput - {@link AssociateVPCWithHostedZoneCommandInput}
 * @returns {@link AssociateVPCWithHostedZoneCommandOutput}
 * @see {@link AssociateVPCWithHostedZoneCommandInput} for command's `input` shape.
 * @see {@link AssociateVPCWithHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConflictingDomainExists} (client fault)
 *  <p>The cause of this error depends on the operation that you're performing:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Create a public hosted zone:</b> Two hosted zones
 * 					that have the same name or that have a parent/child relationship (example.com
 * 					and test.example.com) can't have any common name servers. You tried to create a
 * 					hosted zone that has the same name as an existing hosted zone or that's the
 * 					parent or child of an existing hosted zone, and you specified a delegation set
 * 					that shares one or more name servers with the existing hosted zone. For more
 * 					information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html">CreateReusableDelegationSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Create a private hosted zone:</b> A hosted zone
 * 					with the specified name already exists and is already associated with the Amazon
 * 					VPC that you specified.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Associate VPCs with a private hosted zone:</b>
 * 					The VPC that you specified is already associated with another hosted zone that
 * 					has the same name.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidVPCId} (client fault)
 *  <p>The VPC ID that you specified either isn't a valid ID or the current account is not
 * 			authorized to access this VPC.</p>
 *
 * @throws {@link LimitsExceeded} (client fault)
 *  <p>This operation can't be completed because the current account has reached the
 * 			limit on the resource you are trying to create. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support
 * 			Center.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>Associating the specified VPC with the specified hosted zone has not been
 * 			authorized.</p>
 *
 * @throws {@link PriorRequestNotComplete} (client fault)
 *  <p>If Amazon Route 53 can't process a request before the next request arrives, it will
 * 			reject subsequent requests for the same hosted zone and return an <code>HTTP 400
 * 				error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly
 * 			for the same request, we recommend that you wait, in intervals of increasing duration,
 * 			before you try the request again.</p>
 *
 * @throws {@link PublicZoneVPCAssociation} (client fault)
 *  <p>You're trying to associate a VPC with a public hosted zone. Amazon Route 53 doesn't
 * 			support associating a VPC with a public hosted zone.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 * @example To associate a VPC with a hosted zone
 * ```javascript
 * // The following example associates the VPC with ID vpc-1a2b3c4d with the hosted zone with ID Z3M3LMPEXAMPLE.
 * const input = {
 *   "Comment": "",
 *   "HostedZoneId": "Z3M3LMPEXAMPLE",
 *   "VPC": {
 *     "VPCId": "vpc-1a2b3c4d",
 *     "VPCRegion": "us-east-2"
 *   }
 * };
 * const command = new AssociateVPCWithHostedZoneCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeInfo": {
 *     "Comment": "",
 *     "Id": "/change/C3HC6WDB2UANE2",
 *     "Status": "INSYNC",
 *     "SubmittedAt": "2017-01-31T01:36:41.958Z"
 *   }
 * }
 * *\/
 * // example id: to-associate-a-vpc-with-a-hosted-zone-1484069228699
 * ```
 *
 */
export class AssociateVPCWithHostedZoneCommand extends $Command<
  AssociateVPCWithHostedZoneCommandInput,
  AssociateVPCWithHostedZoneCommandOutput,
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
  constructor(readonly input: AssociateVPCWithHostedZoneCommandInput) {
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
  ): Handler<AssociateVPCWithHostedZoneCommandInput, AssociateVPCWithHostedZoneCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateVPCWithHostedZoneCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "AssociateVPCWithHostedZoneCommand";
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
  private serialize(input: AssociateVPCWithHostedZoneCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateVPCWithHostedZoneCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateVPCWithHostedZoneCommandOutput> {
    return de_AssociateVPCWithHostedZoneCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
