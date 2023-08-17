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
import { DescribeByoipCidrsRequest, DescribeByoipCidrsResult } from "../models/models_3";
import { de_DescribeByoipCidrsCommand, se_DescribeByoipCidrsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeByoipCidrsCommand}.
 */
export interface DescribeByoipCidrsCommandInput extends DescribeByoipCidrsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeByoipCidrsCommand}.
 */
export interface DescribeByoipCidrsCommandOutput extends DescribeByoipCidrsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the IP address ranges that were specified in calls to <a>ProvisionByoipCidr</a>.</p>
 *          <p>To describe the address pools that were created when you provisioned the address
 *           ranges, use <a>DescribePublicIpv4Pools</a> or <a>DescribeIpv6Pools</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeByoipCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeByoipCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeByoipCidrsRequest
 *   DryRun: true || false,
 *   MaxResults: Number("int"), // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeByoipCidrsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeByoipCidrsResult
 * //   ByoipCidrs: [ // ByoipCidrSet
 * //     { // ByoipCidr
 * //       Cidr: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       State: "advertised" || "deprovisioned" || "failed-deprovision" || "failed-provision" || "pending-deprovision" || "pending-provision" || "provisioned" || "provisioned-not-publicly-advertisable",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeByoipCidrsCommandInput - {@link DescribeByoipCidrsCommandInput}
 * @returns {@link DescribeByoipCidrsCommandOutput}
 * @see {@link DescribeByoipCidrsCommandInput} for command's `input` shape.
 * @see {@link DescribeByoipCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeByoipCidrsCommand extends $Command<
  DescribeByoipCidrsCommandInput,
  DescribeByoipCidrsCommandOutput,
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
  constructor(readonly input: DescribeByoipCidrsCommandInput) {
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
  ): Handler<DescribeByoipCidrsCommandInput, DescribeByoipCidrsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeByoipCidrsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeByoipCidrsCommand";
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
  private serialize(input: DescribeByoipCidrsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeByoipCidrsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeByoipCidrsCommandOutput> {
    return de_DescribeByoipCidrsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
