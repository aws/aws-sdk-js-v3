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
import { DescribeVolumeAttributeRequest, DescribeVolumeAttributeResult } from "../models/models_5";
import { de_DescribeVolumeAttributeCommand, se_DescribeVolumeAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVolumeAttributeCommand}.
 */
export interface DescribeVolumeAttributeCommandInput extends DescribeVolumeAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVolumeAttributeCommand}.
 */
export interface DescribeVolumeAttributeCommandOutput extends DescribeVolumeAttributeResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified attribute of the specified volume. You can specify only one
 *       attribute at a time.</p>
 *          <p>For more information about EBS volumes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html">Amazon EBS volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVolumeAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVolumeAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVolumeAttributeRequest
 *   Attribute: "autoEnableIO" || "productCodes", // required
 *   VolumeId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DescribeVolumeAttributeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVolumeAttributeResult
 * //   AutoEnableIO: { // AttributeBooleanValue
 * //     Value: true || false,
 * //   },
 * //   ProductCodes: [ // ProductCodeList
 * //     { // ProductCode
 * //       ProductCodeId: "STRING_VALUE",
 * //       ProductCodeType: "devpay" || "marketplace",
 * //     },
 * //   ],
 * //   VolumeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVolumeAttributeCommandInput - {@link DescribeVolumeAttributeCommandInput}
 * @returns {@link DescribeVolumeAttributeCommandOutput}
 * @see {@link DescribeVolumeAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeVolumeAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe a volume attribute
 * ```javascript
 * // This example describes the ``autoEnableIo`` attribute of the volume with the ID ``vol-049df61146c4d7901``.
 * const input = {
 *   "Attribute": "autoEnableIO",
 *   "VolumeId": "vol-049df61146c4d7901"
 * };
 * const command = new DescribeVolumeAttributeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AutoEnableIO": {
 *     "Value": false
 *   },
 *   "VolumeId": "vol-049df61146c4d7901"
 * }
 * *\/
 * // example id: to-describe-a-volume-attribute-1472505773492
 * ```
 *
 */
export class DescribeVolumeAttributeCommand extends $Command<
  DescribeVolumeAttributeCommandInput,
  DescribeVolumeAttributeCommandOutput,
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
  constructor(readonly input: DescribeVolumeAttributeCommandInput) {
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
  ): Handler<DescribeVolumeAttributeCommandInput, DescribeVolumeAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVolumeAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVolumeAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeVolumeAttribute",
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
  private serialize(input: DescribeVolumeAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeVolumeAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVolumeAttributeCommandOutput> {
    return de_DescribeVolumeAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
