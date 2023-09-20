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
import { DescribeClientVpnTargetNetworksRequest, DescribeClientVpnTargetNetworksResult } from "../models/models_3";
import {
  de_DescribeClientVpnTargetNetworksCommand,
  se_DescribeClientVpnTargetNetworksCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeClientVpnTargetNetworksCommand}.
 */
export interface DescribeClientVpnTargetNetworksCommandInput extends DescribeClientVpnTargetNetworksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClientVpnTargetNetworksCommand}.
 */
export interface DescribeClientVpnTargetNetworksCommandOutput
  extends DescribeClientVpnTargetNetworksResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the target networks associated with the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnTargetNetworksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnTargetNetworksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeClientVpnTargetNetworksRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   AssociationIds: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeClientVpnTargetNetworksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClientVpnTargetNetworksResult
 * //   ClientVpnTargetNetworks: [ // TargetNetworkSet
 * //     { // TargetNetwork
 * //       AssociationId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       TargetNetworkId: "STRING_VALUE",
 * //       ClientVpnEndpointId: "STRING_VALUE",
 * //       Status: { // AssociationStatus
 * //         Code: "associating" || "associated" || "association-failed" || "disassociating" || "disassociated",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       SecurityGroups: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeClientVpnTargetNetworksCommandInput - {@link DescribeClientVpnTargetNetworksCommandInput}
 * @returns {@link DescribeClientVpnTargetNetworksCommandOutput}
 * @see {@link DescribeClientVpnTargetNetworksCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnTargetNetworksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeClientVpnTargetNetworksCommand extends $Command<
  DescribeClientVpnTargetNetworksCommandInput,
  DescribeClientVpnTargetNetworksCommandOutput,
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
  constructor(readonly input: DescribeClientVpnTargetNetworksCommandInput) {
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
  ): Handler<DescribeClientVpnTargetNetworksCommandInput, DescribeClientVpnTargetNetworksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClientVpnTargetNetworksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeClientVpnTargetNetworksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeClientVpnTargetNetworks",
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
  private serialize(
    input: DescribeClientVpnTargetNetworksCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeClientVpnTargetNetworksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClientVpnTargetNetworksCommandOutput> {
    return de_DescribeClientVpnTargetNetworksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
