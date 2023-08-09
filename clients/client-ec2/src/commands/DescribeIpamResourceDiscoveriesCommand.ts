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
import { DescribeIpamResourceDiscoveriesRequest, DescribeIpamResourceDiscoveriesResult } from "../models/models_4";
import {
  de_DescribeIpamResourceDiscoveriesCommand,
  se_DescribeIpamResourceDiscoveriesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeIpamResourceDiscoveriesCommand}.
 */
export interface DescribeIpamResourceDiscoveriesCommandInput extends DescribeIpamResourceDiscoveriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpamResourceDiscoveriesCommand}.
 */
export interface DescribeIpamResourceDiscoveriesCommandOutput
  extends DescribeIpamResourceDiscoveriesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes IPAM resource discoveries. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamResourceDiscoveriesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamResourceDiscoveriesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeIpamResourceDiscoveriesRequest
 *   DryRun: true || false,
 *   IpamResourceDiscoveryIds: [ // ValueStringList
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
 * const command = new DescribeIpamResourceDiscoveriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpamResourceDiscoveriesResult
 * //   IpamResourceDiscoveries: [ // IpamResourceDiscoverySet
 * //     { // IpamResourceDiscovery
 * //       OwnerId: "STRING_VALUE",
 * //       IpamResourceDiscoveryId: "STRING_VALUE",
 * //       IpamResourceDiscoveryArn: "STRING_VALUE",
 * //       IpamResourceDiscoveryRegion: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       OperatingRegions: [ // IpamOperatingRegionSet
 * //         { // IpamOperatingRegion
 * //           RegionName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       IsDefault: true || false,
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
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
 * @param DescribeIpamResourceDiscoveriesCommandInput - {@link DescribeIpamResourceDiscoveriesCommandInput}
 * @returns {@link DescribeIpamResourceDiscoveriesCommandOutput}
 * @see {@link DescribeIpamResourceDiscoveriesCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamResourceDiscoveriesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeIpamResourceDiscoveriesCommand extends $Command<
  DescribeIpamResourceDiscoveriesCommandInput,
  DescribeIpamResourceDiscoveriesCommandOutput,
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
  constructor(readonly input: DescribeIpamResourceDiscoveriesCommandInput) {
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
  ): Handler<DescribeIpamResourceDiscoveriesCommandInput, DescribeIpamResourceDiscoveriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeIpamResourceDiscoveriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeIpamResourceDiscoveriesCommand";
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
    input: DescribeIpamResourceDiscoveriesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeIpamResourceDiscoveriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeIpamResourceDiscoveriesCommandOutput> {
    return de_DescribeIpamResourceDiscoveriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
