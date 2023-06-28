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
import { DescribeIpamPoolsRequest, DescribeIpamPoolsResult } from "../models/models_4";
import { de_DescribeIpamPoolsCommand, se_DescribeIpamPoolsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeIpamPoolsCommand}.
 */
export interface DescribeIpamPoolsCommandInput extends DescribeIpamPoolsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpamPoolsCommand}.
 */
export interface DescribeIpamPoolsCommandOutput extends DescribeIpamPoolsResult, __MetadataBearer {}

/**
 * @public
 * <p>Get information about your IPAM pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamPoolsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamPoolsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeIpamPoolsRequest
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
 *   IpamPoolIds: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeIpamPoolsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpamPoolsResult
 * //   NextToken: "STRING_VALUE",
 * //   IpamPools: [ // IpamPoolSet
 * //     { // IpamPool
 * //       OwnerId: "STRING_VALUE",
 * //       IpamPoolId: "STRING_VALUE",
 * //       SourceIpamPoolId: "STRING_VALUE",
 * //       IpamPoolArn: "STRING_VALUE",
 * //       IpamScopeArn: "STRING_VALUE",
 * //       IpamScopeType: "public" || "private",
 * //       IpamArn: "STRING_VALUE",
 * //       IpamRegion: "STRING_VALUE",
 * //       Locale: "STRING_VALUE",
 * //       PoolDepth: Number("int"),
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //       StateMessage: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       AutoImport: true || false,
 * //       PubliclyAdvertisable: true || false,
 * //       AddressFamily: "ipv4" || "ipv6",
 * //       AllocationMinNetmaskLength: Number("int"),
 * //       AllocationMaxNetmaskLength: Number("int"),
 * //       AllocationDefaultNetmaskLength: Number("int"),
 * //       AllocationResourceTags: [ // IpamResourceTagList
 * //         { // IpamResourceTag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AwsService: "ec2",
 * //       PublicIpSource: "amazon" || "byoip",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeIpamPoolsCommandInput - {@link DescribeIpamPoolsCommandInput}
 * @returns {@link DescribeIpamPoolsCommandOutput}
 * @see {@link DescribeIpamPoolsCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamPoolsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeIpamPoolsCommand extends $Command<
  DescribeIpamPoolsCommandInput,
  DescribeIpamPoolsCommandOutput,
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
  constructor(readonly input: DescribeIpamPoolsCommandInput) {
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
  ): Handler<DescribeIpamPoolsCommandInput, DescribeIpamPoolsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeIpamPoolsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeIpamPoolsCommand";
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
  private serialize(input: DescribeIpamPoolsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeIpamPoolsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeIpamPoolsCommandOutput> {
    return de_DescribeIpamPoolsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
