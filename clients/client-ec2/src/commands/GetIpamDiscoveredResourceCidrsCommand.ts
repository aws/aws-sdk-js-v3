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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetIpamDiscoveredResourceCidrsRequest, GetIpamDiscoveredResourceCidrsResult } from "../models/models_5";
import {
  de_GetIpamDiscoveredResourceCidrsCommand,
  se_GetIpamDiscoveredResourceCidrsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link GetIpamDiscoveredResourceCidrsCommand}.
 */
export interface GetIpamDiscoveredResourceCidrsCommandInput extends GetIpamDiscoveredResourceCidrsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamDiscoveredResourceCidrsCommand}.
 */
export interface GetIpamDiscoveredResourceCidrsCommandOutput
  extends GetIpamDiscoveredResourceCidrsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the resource CIDRs that are monitored as part of a resource discovery. A discovered resource is a resource CIDR monitored under a resource discovery. The following resources can be discovered: VPCs, Public IPv4 pools, VPC subnets, and Elastic IP addresses. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamDiscoveredResourceCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamDiscoveredResourceCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetIpamDiscoveredResourceCidrsRequest
 *   DryRun: true || false,
 *   IpamResourceDiscoveryId: "STRING_VALUE", // required
 *   ResourceRegion: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetIpamDiscoveredResourceCidrsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetIpamDiscoveredResourceCidrsCommandInput - {@link GetIpamDiscoveredResourceCidrsCommandInput}
 * @returns {@link GetIpamDiscoveredResourceCidrsCommandOutput}
 * @see {@link GetIpamDiscoveredResourceCidrsCommandInput} for command's `input` shape.
 * @see {@link GetIpamDiscoveredResourceCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class GetIpamDiscoveredResourceCidrsCommand extends $Command<
  GetIpamDiscoveredResourceCidrsCommandInput,
  GetIpamDiscoveredResourceCidrsCommandOutput,
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
  constructor(readonly input: GetIpamDiscoveredResourceCidrsCommandInput) {
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
  ): Handler<GetIpamDiscoveredResourceCidrsCommandInput, GetIpamDiscoveredResourceCidrsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIpamDiscoveredResourceCidrsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetIpamDiscoveredResourceCidrsCommand";
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
    input: GetIpamDiscoveredResourceCidrsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetIpamDiscoveredResourceCidrsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIpamDiscoveredResourceCidrsCommandOutput> {
    return de_GetIpamDiscoveredResourceCidrsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
