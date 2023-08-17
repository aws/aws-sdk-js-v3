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
import { DeprovisionPublicIpv4PoolCidrRequest, DeprovisionPublicIpv4PoolCidrResult } from "../models/models_3";
import { de_DeprovisionPublicIpv4PoolCidrCommand, se_DeprovisionPublicIpv4PoolCidrCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeprovisionPublicIpv4PoolCidrCommand}.
 */
export interface DeprovisionPublicIpv4PoolCidrCommandInput extends DeprovisionPublicIpv4PoolCidrRequest {}
/**
 * @public
 *
 * The output of {@link DeprovisionPublicIpv4PoolCidrCommand}.
 */
export interface DeprovisionPublicIpv4PoolCidrCommandOutput
  extends DeprovisionPublicIpv4PoolCidrResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deprovision a CIDR from a public IPv4 pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeprovisionPublicIpv4PoolCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeprovisionPublicIpv4PoolCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeprovisionPublicIpv4PoolCidrRequest
 *   DryRun: true || false,
 *   PoolId: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE", // required
 * };
 * const command = new DeprovisionPublicIpv4PoolCidrCommand(input);
 * const response = await client.send(command);
 * // { // DeprovisionPublicIpv4PoolCidrResult
 * //   PoolId: "STRING_VALUE",
 * //   DeprovisionedAddresses: [ // DeprovisionedAddressSet
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeprovisionPublicIpv4PoolCidrCommandInput - {@link DeprovisionPublicIpv4PoolCidrCommandInput}
 * @returns {@link DeprovisionPublicIpv4PoolCidrCommandOutput}
 * @see {@link DeprovisionPublicIpv4PoolCidrCommandInput} for command's `input` shape.
 * @see {@link DeprovisionPublicIpv4PoolCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeprovisionPublicIpv4PoolCidrCommand extends $Command<
  DeprovisionPublicIpv4PoolCidrCommandInput,
  DeprovisionPublicIpv4PoolCidrCommandOutput,
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
  constructor(readonly input: DeprovisionPublicIpv4PoolCidrCommandInput) {
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
  ): Handler<DeprovisionPublicIpv4PoolCidrCommandInput, DeprovisionPublicIpv4PoolCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeprovisionPublicIpv4PoolCidrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeprovisionPublicIpv4PoolCidrCommand";
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
  private serialize(input: DeprovisionPublicIpv4PoolCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeprovisionPublicIpv4PoolCidrCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeprovisionPublicIpv4PoolCidrCommandOutput> {
    return de_DeprovisionPublicIpv4PoolCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
