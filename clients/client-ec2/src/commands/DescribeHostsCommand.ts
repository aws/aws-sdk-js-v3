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
import { DescribeHostsRequest, DescribeHostsResult } from "../models/models_3";
import { de_DescribeHostsCommand, se_DescribeHostsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeHostsCommand}.
 */
export interface DescribeHostsCommandInput extends DescribeHostsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHostsCommand}.
 */
export interface DescribeHostsCommandOutput extends DescribeHostsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Dedicated Hosts or all your Dedicated Hosts.</p>
 *          <p>The results describe only the Dedicated Hosts in the Region you're currently using.
 *             All listed instances consume capacity on your Dedicated Host. Dedicated Hosts that have
 *             recently been released are listed with the state <code>released</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeHostsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeHostsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeHostsRequest
 *   Filter: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   HostIds: [ // RequestHostIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeHostsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHostsResult
 * //   Hosts: [ // HostList
 * //     { // Host
 * //       AutoPlacement: "on" || "off",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailableCapacity: { // AvailableCapacity
 * //         AvailableInstanceCapacity: [ // AvailableInstanceCapacityList
 * //           { // InstanceCapacity
 * //             AvailableCapacity: Number("int"),
 * //             InstanceType: "STRING_VALUE",
 * //             TotalCapacity: Number("int"),
 * //           },
 * //         ],
 * //         AvailableVCpus: Number("int"),
 * //       },
 * //       ClientToken: "STRING_VALUE",
 * //       HostId: "STRING_VALUE",
 * //       HostProperties: { // HostProperties
 * //         Cores: Number("int"),
 * //         InstanceType: "STRING_VALUE",
 * //         InstanceFamily: "STRING_VALUE",
 * //         Sockets: Number("int"),
 * //         TotalVCpus: Number("int"),
 * //       },
 * //       HostReservationId: "STRING_VALUE",
 * //       Instances: [ // HostInstanceList
 * //         { // HostInstance
 * //           InstanceId: "STRING_VALUE",
 * //           InstanceType: "STRING_VALUE",
 * //           OwnerId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       State: "available" || "under-assessment" || "permanent-failure" || "released" || "released-permanent-failure" || "pending",
 * //       AllocationTime: new Date("TIMESTAMP"),
 * //       ReleaseTime: new Date("TIMESTAMP"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       HostRecovery: "on" || "off",
 * //       AllowsMultipleInstanceTypes: "on" || "off",
 * //       OwnerId: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       MemberOfServiceLinkedResourceGroup: true || false,
 * //       OutpostArn: "STRING_VALUE",
 * //       HostMaintenance: "on" || "off",
 * //       AssetId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeHostsCommandInput - {@link DescribeHostsCommandInput}
 * @returns {@link DescribeHostsCommandOutput}
 * @see {@link DescribeHostsCommandInput} for command's `input` shape.
 * @see {@link DescribeHostsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeHostsCommand extends $Command<
  DescribeHostsCommandInput,
  DescribeHostsCommandOutput,
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
  constructor(readonly input: DescribeHostsCommandInput) {
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
  ): Handler<DescribeHostsCommandInput, DescribeHostsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeHostsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeHostsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeHosts",
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
  private serialize(input: DescribeHostsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeHostsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeHostsCommandOutput> {
    return de_DescribeHostsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
