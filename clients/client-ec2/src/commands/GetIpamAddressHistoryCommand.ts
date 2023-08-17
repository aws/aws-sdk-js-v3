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
import { GetIpamAddressHistoryRequest, GetIpamAddressHistoryResult } from "../models/models_5";
import { de_GetIpamAddressHistoryCommand, se_GetIpamAddressHistoryCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIpamAddressHistoryCommand}.
 */
export interface GetIpamAddressHistoryCommandInput extends GetIpamAddressHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamAddressHistoryCommand}.
 */
export interface GetIpamAddressHistoryCommandOutput extends GetIpamAddressHistoryResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieve historical information about a CIDR within an IPAM scope. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/view-history-cidr-ipam.html">View the history of IP addresses</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamAddressHistoryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamAddressHistoryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetIpamAddressHistoryRequest
 *   DryRun: true || false,
 *   Cidr: "STRING_VALUE", // required
 *   IpamScopeId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetIpamAddressHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamAddressHistoryResult
 * //   HistoryRecords: [ // IpamAddressHistoryRecordSet
 * //     { // IpamAddressHistoryRecord
 * //       ResourceOwnerId: "STRING_VALUE",
 * //       ResourceRegion: "STRING_VALUE",
 * //       ResourceType: "eip" || "vpc" || "subnet" || "network-interface" || "instance",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceCidr: "STRING_VALUE",
 * //       ResourceName: "STRING_VALUE",
 * //       ResourceComplianceStatus: "compliant" || "noncompliant" || "unmanaged" || "ignored",
 * //       ResourceOverlapStatus: "overlapping" || "nonoverlapping" || "ignored",
 * //       VpcId: "STRING_VALUE",
 * //       SampledStartTime: new Date("TIMESTAMP"),
 * //       SampledEndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamAddressHistoryCommandInput - {@link GetIpamAddressHistoryCommandInput}
 * @returns {@link GetIpamAddressHistoryCommandOutput}
 * @see {@link GetIpamAddressHistoryCommandInput} for command's `input` shape.
 * @see {@link GetIpamAddressHistoryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetIpamAddressHistoryCommand extends $Command<
  GetIpamAddressHistoryCommandInput,
  GetIpamAddressHistoryCommandOutput,
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
  constructor(readonly input: GetIpamAddressHistoryCommandInput) {
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
  ): Handler<GetIpamAddressHistoryCommandInput, GetIpamAddressHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIpamAddressHistoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetIpamAddressHistoryCommand";
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
  private serialize(input: GetIpamAddressHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetIpamAddressHistoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIpamAddressHistoryCommandOutput> {
    return de_GetIpamAddressHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
