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
import { GetIpamPoolCidrsRequest, GetIpamPoolCidrsResult } from "../models/models_5";
import { de_GetIpamPoolCidrsCommand, se_GetIpamPoolCidrsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIpamPoolCidrsCommand}.
 */
export interface GetIpamPoolCidrsCommandInput extends GetIpamPoolCidrsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamPoolCidrsCommand}.
 */
export interface GetIpamPoolCidrsCommandOutput extends GetIpamPoolCidrsResult, __MetadataBearer {}

/**
 * @public
 * <p>Get the CIDRs provisioned to an IPAM pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamPoolCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamPoolCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetIpamPoolCidrsRequest
 *   DryRun: true || false,
 *   IpamPoolId: "STRING_VALUE", // required
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
 * const command = new GetIpamPoolCidrsCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamPoolCidrsResult
 * //   IpamPoolCidrs: [ // IpamPoolCidrSet
 * //     { // IpamPoolCidr
 * //       Cidr: "STRING_VALUE",
 * //       State: "pending-provision" || "provisioned" || "failed-provision" || "pending-deprovision" || "deprovisioned" || "failed-deprovision" || "pending-import" || "failed-import",
 * //       FailureReason: { // IpamPoolCidrFailureReason
 * //         Code: "cidr-not-available" || "limit-exceeded",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       IpamPoolCidrId: "STRING_VALUE",
 * //       NetmaskLength: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamPoolCidrsCommandInput - {@link GetIpamPoolCidrsCommandInput}
 * @returns {@link GetIpamPoolCidrsCommandOutput}
 * @see {@link GetIpamPoolCidrsCommandInput} for command's `input` shape.
 * @see {@link GetIpamPoolCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetIpamPoolCidrsCommand extends $Command<
  GetIpamPoolCidrsCommandInput,
  GetIpamPoolCidrsCommandOutput,
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
  constructor(readonly input: GetIpamPoolCidrsCommandInput) {
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
  ): Handler<GetIpamPoolCidrsCommandInput, GetIpamPoolCidrsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIpamPoolCidrsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetIpamPoolCidrsCommand";
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
  private serialize(input: GetIpamPoolCidrsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetIpamPoolCidrsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIpamPoolCidrsCommandOutput> {
    return de_GetIpamPoolCidrsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
