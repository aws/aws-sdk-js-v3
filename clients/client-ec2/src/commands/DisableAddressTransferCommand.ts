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
import { DisableAddressTransferRequest, DisableAddressTransferResult } from "../models/models_5";
import { de_DisableAddressTransferCommand, se_DisableAddressTransferCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisableAddressTransferCommand}.
 */
export interface DisableAddressTransferCommandInput extends DisableAddressTransferRequest {}
/**
 * @public
 *
 * The output of {@link DisableAddressTransferCommand}.
 */
export interface DisableAddressTransferCommandOutput extends DisableAddressTransferResult, __MetadataBearer {}

/**
 * @public
 * <p>Disables Elastic IP address transfer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro">Transfer Elastic IP addresses</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableAddressTransferCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableAddressTransferCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisableAddressTransferRequest
 *   AllocationId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisableAddressTransferCommand(input);
 * const response = await client.send(command);
 * // { // DisableAddressTransferResult
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
 * @param DisableAddressTransferCommandInput - {@link DisableAddressTransferCommandInput}
 * @returns {@link DisableAddressTransferCommandOutput}
 * @see {@link DisableAddressTransferCommandInput} for command's `input` shape.
 * @see {@link DisableAddressTransferCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DisableAddressTransferCommand extends $Command<
  DisableAddressTransferCommandInput,
  DisableAddressTransferCommandOutput,
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
  constructor(readonly input: DisableAddressTransferCommandInput) {
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
  ): Handler<DisableAddressTransferCommandInput, DisableAddressTransferCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableAddressTransferCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableAddressTransferCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DisableAddressTransfer",
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
  private serialize(input: DisableAddressTransferCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisableAddressTransferCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableAddressTransferCommandOutput> {
    return de_DisableAddressTransferCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
