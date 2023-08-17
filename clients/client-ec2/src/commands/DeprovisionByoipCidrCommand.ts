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
import { DeprovisionByoipCidrRequest, DeprovisionByoipCidrResult } from "../models/models_3";
import { de_DeprovisionByoipCidrCommand, se_DeprovisionByoipCidrCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeprovisionByoipCidrCommand}.
 */
export interface DeprovisionByoipCidrCommandInput extends DeprovisionByoipCidrRequest {}
/**
 * @public
 *
 * The output of {@link DeprovisionByoipCidrCommand}.
 */
export interface DeprovisionByoipCidrCommandOutput extends DeprovisionByoipCidrResult, __MetadataBearer {}

/**
 * @public
 * <p>Releases the specified address range that you provisioned for use with your Amazon Web Services resources
 *          through bring your own IP addresses (BYOIP) and deletes the corresponding address pool.</p>
 *          <p>Before you can release an address range, you must stop advertising it using <a>WithdrawByoipCidr</a> and you must not have any IP addresses allocated from its
 *          address range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeprovisionByoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeprovisionByoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeprovisionByoipCidrRequest
 *   Cidr: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeprovisionByoipCidrCommand(input);
 * const response = await client.send(command);
 * // { // DeprovisionByoipCidrResult
 * //   ByoipCidr: { // ByoipCidr
 * //     Cidr: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     State: "advertised" || "deprovisioned" || "failed-deprovision" || "failed-provision" || "pending-deprovision" || "pending-provision" || "provisioned" || "provisioned-not-publicly-advertisable",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeprovisionByoipCidrCommandInput - {@link DeprovisionByoipCidrCommandInput}
 * @returns {@link DeprovisionByoipCidrCommandOutput}
 * @see {@link DeprovisionByoipCidrCommandInput} for command's `input` shape.
 * @see {@link DeprovisionByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeprovisionByoipCidrCommand extends $Command<
  DeprovisionByoipCidrCommandInput,
  DeprovisionByoipCidrCommandOutput,
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
  constructor(readonly input: DeprovisionByoipCidrCommandInput) {
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
  ): Handler<DeprovisionByoipCidrCommandInput, DeprovisionByoipCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeprovisionByoipCidrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeprovisionByoipCidrCommand";
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
  private serialize(input: DeprovisionByoipCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeprovisionByoipCidrCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeprovisionByoipCidrCommandOutput> {
    return de_DeprovisionByoipCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
