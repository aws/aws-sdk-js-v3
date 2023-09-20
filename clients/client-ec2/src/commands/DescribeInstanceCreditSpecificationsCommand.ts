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
import {
  DescribeInstanceCreditSpecificationsRequest,
  DescribeInstanceCreditSpecificationsResult,
} from "../models/models_3";
import {
  de_DescribeInstanceCreditSpecificationsCommand,
  se_DescribeInstanceCreditSpecificationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceCreditSpecificationsCommand}.
 */
export interface DescribeInstanceCreditSpecificationsCommandInput extends DescribeInstanceCreditSpecificationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceCreditSpecificationsCommand}.
 */
export interface DescribeInstanceCreditSpecificationsCommandOutput
  extends DescribeInstanceCreditSpecificationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the credit option for CPU usage of the specified burstable performance
 *             instances. The credit options are <code>standard</code> and
 *             <code>unlimited</code>.</p>
 *          <p>If you do not specify an instance ID, Amazon EC2 returns burstable performance
 *             instances with the <code>unlimited</code> credit option, as well as instances that were
 *             previously configured as T2, T3, and T3a with the <code>unlimited</code> credit option.
 *             For example, if you resize a T2 instance, while it is configured as
 *                 <code>unlimited</code>, to an M4 instance, Amazon EC2 returns the M4
 *             instance.</p>
 *          <p>If you specify one or more instance IDs, Amazon EC2 returns the credit option
 *                 (<code>standard</code> or <code>unlimited</code>) of those instances. If you specify
 *             an instance ID that is not valid, such as an instance that is not a burstable
 *             performance instance, an error is returned.</p>
 *          <p>Recently terminated instances might appear in the returned results. This interval is
 *             usually less than one hour.</p>
 *          <p>If an Availability Zone is experiencing a service disruption and you specify instance
 *             IDs in the affected zone, or do not specify any instance IDs at all, the call fails. If
 *             you specify only instance IDs in an unaffected zone, the call works normally.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *                 performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceCreditSpecificationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceCreditSpecificationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeInstanceCreditSpecificationsRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   InstanceIds: [ // InstanceIdStringList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeInstanceCreditSpecificationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceCreditSpecificationsResult
 * //   InstanceCreditSpecifications: [ // InstanceCreditSpecificationList
 * //     { // InstanceCreditSpecification
 * //       InstanceId: "STRING_VALUE",
 * //       CpuCredits: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstanceCreditSpecificationsCommandInput - {@link DescribeInstanceCreditSpecificationsCommandInput}
 * @returns {@link DescribeInstanceCreditSpecificationsCommandOutput}
 * @see {@link DescribeInstanceCreditSpecificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceCreditSpecificationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeInstanceCreditSpecificationsCommand extends $Command<
  DescribeInstanceCreditSpecificationsCommandInput,
  DescribeInstanceCreditSpecificationsCommandOutput,
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
  constructor(readonly input: DescribeInstanceCreditSpecificationsCommandInput) {
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
  ): Handler<DescribeInstanceCreditSpecificationsCommandInput, DescribeInstanceCreditSpecificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstanceCreditSpecificationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInstanceCreditSpecificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeInstanceCreditSpecifications",
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
    input: DescribeInstanceCreditSpecificationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeInstanceCreditSpecificationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceCreditSpecificationsCommandOutput> {
    return de_DescribeInstanceCreditSpecificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
