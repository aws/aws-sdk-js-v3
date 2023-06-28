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
import { DescribeMovingAddressesRequest, DescribeMovingAddressesResult } from "../models/models_4";
import { de_DescribeMovingAddressesCommand, se_DescribeMovingAddressesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMovingAddressesCommand}.
 */
export interface DescribeMovingAddressesCommandInput extends DescribeMovingAddressesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMovingAddressesCommand}.
 */
export interface DescribeMovingAddressesCommandOutput extends DescribeMovingAddressesResult, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Describes your Elastic IP addresses that are being moved from or being restored to the EC2-Classic platform.
 *       This request does not return information about any other Elastic IP addresses in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeMovingAddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeMovingAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeMovingAddressesRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   PublicIps: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeMovingAddressesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMovingAddressesResult
 * //   MovingAddressStatuses: [ // MovingAddressStatusSet
 * //     { // MovingAddressStatus
 * //       MoveStatus: "movingToVpc" || "restoringToClassic",
 * //       PublicIp: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMovingAddressesCommandInput - {@link DescribeMovingAddressesCommandInput}
 * @returns {@link DescribeMovingAddressesCommandOutput}
 * @see {@link DescribeMovingAddressesCommandInput} for command's `input` shape.
 * @see {@link DescribeMovingAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe your moving addresses
 * ```javascript
 * // This example describes all of your moving Elastic IP addresses.
 * const input = undefined;
 * const command = new DescribeMovingAddressesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "MovingAddressStatuses": [
 *     {
 *       "MoveStatus": "movingToVpc",
 *       "PublicIp": "198.51.100.0"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-moving-addresses-1
 * ```
 *
 */
export class DescribeMovingAddressesCommand extends $Command<
  DescribeMovingAddressesCommandInput,
  DescribeMovingAddressesCommandOutput,
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
  constructor(readonly input: DescribeMovingAddressesCommandInput) {
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
  ): Handler<DescribeMovingAddressesCommandInput, DescribeMovingAddressesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMovingAddressesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeMovingAddressesCommand";
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
  private serialize(input: DescribeMovingAddressesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeMovingAddressesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMovingAddressesCommandOutput> {
    return de_DescribeMovingAddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
