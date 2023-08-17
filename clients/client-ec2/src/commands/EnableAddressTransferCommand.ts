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
import { EnableAddressTransferRequest, EnableAddressTransferResult } from "../models/models_5";
import { de_EnableAddressTransferCommand, se_EnableAddressTransferCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableAddressTransferCommand}.
 */
export interface EnableAddressTransferCommandInput extends EnableAddressTransferRequest {}
/**
 * @public
 *
 * The output of {@link EnableAddressTransferCommand}.
 */
export interface EnableAddressTransferCommandOutput extends EnableAddressTransferResult, __MetadataBearer {}

/**
 * @public
 * <p>Enables Elastic IP address transfer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro">Transfer Elastic IP addresses</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableAddressTransferCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableAddressTransferCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableAddressTransferRequest
 *   AllocationId: "STRING_VALUE", // required
 *   TransferAccountId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new EnableAddressTransferCommand(input);
 * const response = await client.send(command);
 * // { // EnableAddressTransferResult
 * //   AddressTransfer: { // AddressTransfer
 * //     PublicIp: "STRING_VALUE",
 * //     AllocationId: "STRING_VALUE",
 * //     TransferAccountId: "STRING_VALUE",
 * //     TransferOfferExpirationTimestamp: new Date("TIMESTAMP"),
 * //     TransferOfferAcceptedTimestamp: new Date("TIMESTAMP"),
 * //     AddressTransferStatus: "pending" || "disabled" || "accepted",
 * //   },
 * // };
 *
 * ```
 *
 * @param EnableAddressTransferCommandInput - {@link EnableAddressTransferCommandInput}
 * @returns {@link EnableAddressTransferCommandOutput}
 * @see {@link EnableAddressTransferCommandInput} for command's `input` shape.
 * @see {@link EnableAddressTransferCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class EnableAddressTransferCommand extends $Command<
  EnableAddressTransferCommandInput,
  EnableAddressTransferCommandOutput,
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
  constructor(readonly input: EnableAddressTransferCommandInput) {
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
  ): Handler<EnableAddressTransferCommandInput, EnableAddressTransferCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableAddressTransferCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableAddressTransferCommand";
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
  private serialize(input: EnableAddressTransferCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EnableAddressTransferCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableAddressTransferCommandOutput> {
    return de_EnableAddressTransferCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
