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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeIpamResourceDiscoveryAssociationsRequest,
  DescribeIpamResourceDiscoveryAssociationsResult,
} from "../models/models_4";
import {
  de_DescribeIpamResourceDiscoveryAssociationsCommand,
  se_DescribeIpamResourceDiscoveryAssociationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeIpamResourceDiscoveryAssociationsCommand}.
 */
export interface DescribeIpamResourceDiscoveryAssociationsCommandInput
  extends DescribeIpamResourceDiscoveryAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpamResourceDiscoveryAssociationsCommand}.
 */
export interface DescribeIpamResourceDiscoveryAssociationsCommandOutput
  extends DescribeIpamResourceDiscoveryAssociationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes resource discovery association with an Amazon VPC IPAM. An associated resource discovery is a resource discovery that has been associated with an IPAM..</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamResourceDiscoveryAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamResourceDiscoveryAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeIpamResourceDiscoveryAssociationsRequest
 *   DryRun: true || false,
 *   IpamResourceDiscoveryAssociationIds: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeIpamResourceDiscoveryAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpamResourceDiscoveryAssociationsResult
 * //   IpamResourceDiscoveryAssociations: [ // IpamResourceDiscoveryAssociationSet
 * //     { // IpamResourceDiscoveryAssociation
 * //       OwnerId: "STRING_VALUE",
 * //       IpamResourceDiscoveryAssociationId: "STRING_VALUE",
 * //       IpamResourceDiscoveryAssociationArn: "STRING_VALUE",
 * //       IpamResourceDiscoveryId: "STRING_VALUE",
 * //       IpamId: "STRING_VALUE",
 * //       IpamArn: "STRING_VALUE",
 * //       IpamRegion: "STRING_VALUE",
 * //       IsDefault: true || false,
 * //       ResourceDiscoveryStatus: "active" || "not-found",
 * //       State: "associate-in-progress" || "associate-complete" || "associate-failed" || "disassociate-in-progress" || "disassociate-complete" || "disassociate-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeIpamResourceDiscoveryAssociationsCommandInput - {@link DescribeIpamResourceDiscoveryAssociationsCommandInput}
 * @returns {@link DescribeIpamResourceDiscoveryAssociationsCommandOutput}
 * @see {@link DescribeIpamResourceDiscoveryAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamResourceDiscoveryAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeIpamResourceDiscoveryAssociationsCommand extends $Command<
  DescribeIpamResourceDiscoveryAssociationsCommandInput,
  DescribeIpamResourceDiscoveryAssociationsCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DescribeIpamResourceDiscoveryAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeIpamResourceDiscoveryAssociationsCommandInput,
    DescribeIpamResourceDiscoveryAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeIpamResourceDiscoveryAssociationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeIpamResourceDiscoveryAssociationsCommand";
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
    input: DescribeIpamResourceDiscoveryAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeIpamResourceDiscoveryAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeIpamResourceDiscoveryAssociationsCommandOutput> {
    return de_DescribeIpamResourceDiscoveryAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
