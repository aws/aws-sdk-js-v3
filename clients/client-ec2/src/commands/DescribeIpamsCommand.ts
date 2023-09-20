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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeIpamsRequest, DescribeIpamsResult } from "../models/models_4";
import { de_DescribeIpamsCommand, se_DescribeIpamsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeIpamsCommand}.
 */
export interface DescribeIpamsCommandInput extends DescribeIpamsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpamsCommand}.
 */
export interface DescribeIpamsCommandOutput extends DescribeIpamsResult, __MetadataBearer {}

/**
 * @public
 * <p>Get information about your IPAM pools.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeIpamsRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   IpamIds: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeIpamsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpamsResult
 * //   NextToken: "STRING_VALUE",
 * //   Ipams: [ // IpamSet
 * //     { // Ipam
 * //       OwnerId: "STRING_VALUE",
 * //       IpamId: "STRING_VALUE",
 * //       IpamArn: "STRING_VALUE",
 * //       IpamRegion: "STRING_VALUE",
 * //       PublicDefaultScopeId: "STRING_VALUE",
 * //       PrivateDefaultScopeId: "STRING_VALUE",
 * //       ScopeCount: Number("int"),
 * //       Description: "STRING_VALUE",
 * //       OperatingRegions: [ // IpamOperatingRegionSet
 * //         { // IpamOperatingRegion
 * //           RegionName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DefaultResourceDiscoveryId: "STRING_VALUE",
 * //       DefaultResourceDiscoveryAssociationId: "STRING_VALUE",
 * //       ResourceDiscoveryAssociationCount: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeIpamsCommandInput - {@link DescribeIpamsCommandInput}
 * @returns {@link DescribeIpamsCommandOutput}
 * @see {@link DescribeIpamsCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeIpamsCommand extends $Command<
  DescribeIpamsCommandInput,
  DescribeIpamsCommandOutput,
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
  constructor(readonly input: DescribeIpamsCommandInput) {
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
  ): Handler<DescribeIpamsCommandInput, DescribeIpamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeIpamsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeIpamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeIpams",
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
  private serialize(input: DescribeIpamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeIpamsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeIpamsCommandOutput> {
    return de_DescribeIpamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
