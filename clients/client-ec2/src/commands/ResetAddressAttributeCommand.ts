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
import { ResetAddressAttributeRequest, ResetAddressAttributeResult } from "../models/models_6";
import { de_ResetAddressAttributeCommand, se_ResetAddressAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ResetAddressAttributeCommand}.
 */
export interface ResetAddressAttributeCommandInput extends ResetAddressAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ResetAddressAttributeCommand}.
 */
export interface ResetAddressAttributeCommandOutput extends ResetAddressAttributeResult, __MetadataBearer {}

/**
 * @public
 * <p>Resets the attribute of the specified IP address. For requirements, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#Using_Elastic_Addressing_Reverse_DNS">Using reverse DNS for email applications</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetAddressAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetAddressAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ResetAddressAttributeRequest
 *   AllocationId: "STRING_VALUE", // required
 *   Attribute: "domain-name", // required
 *   DryRun: true || false,
 * };
 * const command = new ResetAddressAttributeCommand(input);
 * const response = await client.send(command);
 * // { // ResetAddressAttributeResult
 * //   Address: { // AddressAttribute
 * //     PublicIp: "STRING_VALUE",
 * //     AllocationId: "STRING_VALUE",
 * //     PtrRecord: "STRING_VALUE",
 * //     PtrRecordUpdate: { // PtrUpdateStatus
 * //       Value: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ResetAddressAttributeCommandInput - {@link ResetAddressAttributeCommandInput}
 * @returns {@link ResetAddressAttributeCommandOutput}
 * @see {@link ResetAddressAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetAddressAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ResetAddressAttributeCommand extends $Command<
  ResetAddressAttributeCommandInput,
  ResetAddressAttributeCommandOutput,
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
  constructor(readonly input: ResetAddressAttributeCommandInput) {
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
  ): Handler<ResetAddressAttributeCommandInput, ResetAddressAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetAddressAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ResetAddressAttributeCommand";
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
  private serialize(input: ResetAddressAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ResetAddressAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetAddressAttributeCommandOutput> {
    return de_ResetAddressAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
