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
  DescribeVerifiedAccessInstanceLoggingConfigurationsRequest,
  DescribeVerifiedAccessInstanceLoggingConfigurationsResult,
} from "../models/models_5";
import {
  de_DescribeVerifiedAccessInstanceLoggingConfigurationsCommand,
  se_DescribeVerifiedAccessInstanceLoggingConfigurationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVerifiedAccessInstanceLoggingConfigurationsCommand}.
 */
export interface DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput
  extends DescribeVerifiedAccessInstanceLoggingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVerifiedAccessInstanceLoggingConfigurationsCommand}.
 */
export interface DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput
  extends DescribeVerifiedAccessInstanceLoggingConfigurationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Amazon Web Services Verified Access instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVerifiedAccessInstanceLoggingConfigurationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVerifiedAccessInstanceLoggingConfigurationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVerifiedAccessInstanceLoggingConfigurationsRequest
 *   VerifiedAccessInstanceIds: [ // VerifiedAccessInstanceIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeVerifiedAccessInstanceLoggingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVerifiedAccessInstanceLoggingConfigurationsResult
 * //   LoggingConfigurations: [ // VerifiedAccessInstanceLoggingConfigurationList
 * //     { // VerifiedAccessInstanceLoggingConfiguration
 * //       VerifiedAccessInstanceId: "STRING_VALUE",
 * //       AccessLogs: { // VerifiedAccessLogs
 * //         S3: { // VerifiedAccessLogS3Destination
 * //           Enabled: true || false,
 * //           DeliveryStatus: { // VerifiedAccessLogDeliveryStatus
 * //             Code: "success" || "failed",
 * //             Message: "STRING_VALUE",
 * //           },
 * //           BucketName: "STRING_VALUE",
 * //           Prefix: "STRING_VALUE",
 * //           BucketOwner: "STRING_VALUE",
 * //         },
 * //         CloudWatchLogs: { // VerifiedAccessLogCloudWatchLogsDestination
 * //           Enabled: true || false,
 * //           DeliveryStatus: {
 * //             Code: "success" || "failed",
 * //             Message: "STRING_VALUE",
 * //           },
 * //           LogGroup: "STRING_VALUE",
 * //         },
 * //         KinesisDataFirehose: { // VerifiedAccessLogKinesisDataFirehoseDestination
 * //           Enabled: true || false,
 * //           DeliveryStatus: {
 * //             Code: "success" || "failed",
 * //             Message: "STRING_VALUE",
 * //           },
 * //           DeliveryStream: "STRING_VALUE",
 * //         },
 * //         LogVersion: "STRING_VALUE",
 * //         IncludeTrustContext: true || false,
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput - {@link DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput}
 * @returns {@link DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput}
 * @see {@link DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeVerifiedAccessInstanceLoggingConfigurationsCommand extends $Command<
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput,
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput,
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
  constructor(readonly input: DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput) {
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
    DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput,
    DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeVerifiedAccessInstanceLoggingConfigurationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVerifiedAccessInstanceLoggingConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeVerifiedAccessInstanceLoggingConfigurations",
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
    input: DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeVerifiedAccessInstanceLoggingConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput> {
    return de_DescribeVerifiedAccessInstanceLoggingConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
