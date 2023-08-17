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
import { GetIpamPoolAllocationsRequest, GetIpamPoolAllocationsResult } from "../models/models_5";
import { de_GetIpamPoolAllocationsCommand, se_GetIpamPoolAllocationsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIpamPoolAllocationsCommand}.
 */
export interface GetIpamPoolAllocationsCommandInput extends GetIpamPoolAllocationsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamPoolAllocationsCommand}.
 */
export interface GetIpamPoolAllocationsCommandOutput extends GetIpamPoolAllocationsResult, __MetadataBearer {}

/**
 * @public
 * <p>Get a list of all the CIDR allocations in an IPAM pool. The Region you use should be the IPAM pool locale. The locale is the Amazon Web Services Region where this IPAM pool is available for allocations.</p>
 *          <note>
 *             <p>If you use this action after <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AllocateIpamPoolCidr.html">AllocateIpamPoolCidr</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseIpamPoolAllocation.html">ReleaseIpamPoolAllocation</a>, note that all EC2 API actions follow an <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/query-api-troubleshooting.html#eventual-consistency">eventual consistency</a> model.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamPoolAllocationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamPoolAllocationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetIpamPoolAllocationsRequest
 *   DryRun: true || false,
 *   IpamPoolId: "STRING_VALUE", // required
 *   IpamPoolAllocationId: "STRING_VALUE",
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
 * };
 * const command = new GetIpamPoolAllocationsCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamPoolAllocationsResult
 * //   IpamPoolAllocations: [ // IpamPoolAllocationSet
 * //     { // IpamPoolAllocation
 * //       Cidr: "STRING_VALUE",
 * //       IpamPoolAllocationId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "ipam-pool" || "vpc" || "ec2-public-ipv4-pool" || "custom",
 * //       ResourceRegion: "STRING_VALUE",
 * //       ResourceOwner: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamPoolAllocationsCommandInput - {@link GetIpamPoolAllocationsCommandInput}
 * @returns {@link GetIpamPoolAllocationsCommandOutput}
 * @see {@link GetIpamPoolAllocationsCommandInput} for command's `input` shape.
 * @see {@link GetIpamPoolAllocationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetIpamPoolAllocationsCommand extends $Command<
  GetIpamPoolAllocationsCommandInput,
  GetIpamPoolAllocationsCommandOutput,
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
  constructor(readonly input: GetIpamPoolAllocationsCommandInput) {
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
  ): Handler<GetIpamPoolAllocationsCommandInput, GetIpamPoolAllocationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIpamPoolAllocationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetIpamPoolAllocationsCommand";
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
  private serialize(input: GetIpamPoolAllocationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetIpamPoolAllocationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIpamPoolAllocationsCommandOutput> {
    return de_GetIpamPoolAllocationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
