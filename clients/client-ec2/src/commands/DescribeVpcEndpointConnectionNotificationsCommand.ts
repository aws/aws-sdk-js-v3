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
  DescribeVpcEndpointConnectionNotificationsRequest,
  DescribeVpcEndpointConnectionNotificationsResult,
} from "../models/models_5";
import {
  de_DescribeVpcEndpointConnectionNotificationsCommand,
  se_DescribeVpcEndpointConnectionNotificationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcEndpointConnectionNotificationsCommand}.
 */
export interface DescribeVpcEndpointConnectionNotificationsCommandInput
  extends DescribeVpcEndpointConnectionNotificationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcEndpointConnectionNotificationsCommand}.
 */
export interface DescribeVpcEndpointConnectionNotificationsCommandOutput
  extends DescribeVpcEndpointConnectionNotificationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the connection notifications for VPC endpoints and VPC endpoint
 *             services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointConnectionNotificationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointConnectionNotificationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcEndpointConnectionNotificationsRequest
 *   DryRun: true || false,
 *   ConnectionNotificationId: "STRING_VALUE",
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
 * const command = new DescribeVpcEndpointConnectionNotificationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcEndpointConnectionNotificationsResult
 * //   ConnectionNotificationSet: [ // ConnectionNotificationSet
 * //     { // ConnectionNotification
 * //       ConnectionNotificationId: "STRING_VALUE",
 * //       ServiceId: "STRING_VALUE",
 * //       VpcEndpointId: "STRING_VALUE",
 * //       ConnectionNotificationType: "Topic",
 * //       ConnectionNotificationArn: "STRING_VALUE",
 * //       ConnectionEvents: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       ConnectionNotificationState: "Enabled" || "Disabled",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVpcEndpointConnectionNotificationsCommandInput - {@link DescribeVpcEndpointConnectionNotificationsCommandInput}
 * @returns {@link DescribeVpcEndpointConnectionNotificationsCommandOutput}
 * @see {@link DescribeVpcEndpointConnectionNotificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointConnectionNotificationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeVpcEndpointConnectionNotificationsCommand extends $Command<
  DescribeVpcEndpointConnectionNotificationsCommandInput,
  DescribeVpcEndpointConnectionNotificationsCommandOutput,
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
  constructor(readonly input: DescribeVpcEndpointConnectionNotificationsCommandInput) {
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
  ): Handler<
    DescribeVpcEndpointConnectionNotificationsCommandInput,
    DescribeVpcEndpointConnectionNotificationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeVpcEndpointConnectionNotificationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcEndpointConnectionNotificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeVpcEndpointConnectionNotifications",
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
    input: DescribeVpcEndpointConnectionNotificationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeVpcEndpointConnectionNotificationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcEndpointConnectionNotificationsCommandOutput> {
    return de_DescribeVpcEndpointConnectionNotificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
