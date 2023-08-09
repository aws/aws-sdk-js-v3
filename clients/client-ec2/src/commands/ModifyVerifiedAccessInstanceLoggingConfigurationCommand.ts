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
import {
  ModifyVerifiedAccessInstanceLoggingConfigurationRequest,
  ModifyVerifiedAccessInstanceLoggingConfigurationResult,
} from "../models/models_6";
import {
  de_ModifyVerifiedAccessInstanceLoggingConfigurationCommand,
  se_ModifyVerifiedAccessInstanceLoggingConfigurationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyVerifiedAccessInstanceLoggingConfigurationCommand}.
 */
export interface ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput
  extends ModifyVerifiedAccessInstanceLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVerifiedAccessInstanceLoggingConfigurationCommand}.
 */
export interface ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput
  extends ModifyVerifiedAccessInstanceLoggingConfigurationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the logging configuration for the specified Amazon Web Services Verified Access instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVerifiedAccessInstanceLoggingConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVerifiedAccessInstanceLoggingConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyVerifiedAccessInstanceLoggingConfigurationRequest
 *   VerifiedAccessInstanceId: "STRING_VALUE", // required
 *   AccessLogs: { // VerifiedAccessLogOptions
 *     S3: { // VerifiedAccessLogS3DestinationOptions
 *       Enabled: true || false, // required
 *       BucketName: "STRING_VALUE",
 *       Prefix: "STRING_VALUE",
 *       BucketOwner: "STRING_VALUE",
 *     },
 *     CloudWatchLogs: { // VerifiedAccessLogCloudWatchLogsDestinationOptions
 *       Enabled: true || false, // required
 *       LogGroup: "STRING_VALUE",
 *     },
 *     KinesisDataFirehose: { // VerifiedAccessLogKinesisDataFirehoseDestinationOptions
 *       Enabled: true || false, // required
 *       DeliveryStream: "STRING_VALUE",
 *     },
 *     LogVersion: "STRING_VALUE",
 *     IncludeTrustContext: true || false,
 *   },
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new ModifyVerifiedAccessInstanceLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVerifiedAccessInstanceLoggingConfigurationResult
 * //   LoggingConfiguration: { // VerifiedAccessInstanceLoggingConfiguration
 * //     VerifiedAccessInstanceId: "STRING_VALUE",
 * //     AccessLogs: { // VerifiedAccessLogs
 * //       S3: { // VerifiedAccessLogS3Destination
 * //         Enabled: true || false,
 * //         DeliveryStatus: { // VerifiedAccessLogDeliveryStatus
 * //           Code: "success" || "failed",
 * //           Message: "STRING_VALUE",
 * //         },
 * //         BucketName: "STRING_VALUE",
 * //         Prefix: "STRING_VALUE",
 * //         BucketOwner: "STRING_VALUE",
 * //       },
 * //       CloudWatchLogs: { // VerifiedAccessLogCloudWatchLogsDestination
 * //         Enabled: true || false,
 * //         DeliveryStatus: {
 * //           Code: "success" || "failed",
 * //           Message: "STRING_VALUE",
 * //         },
 * //         LogGroup: "STRING_VALUE",
 * //       },
 * //       KinesisDataFirehose: { // VerifiedAccessLogKinesisDataFirehoseDestination
 * //         Enabled: true || false,
 * //         DeliveryStatus: {
 * //           Code: "success" || "failed",
 * //           Message: "STRING_VALUE",
 * //         },
 * //         DeliveryStream: "STRING_VALUE",
 * //       },
 * //       LogVersion: "STRING_VALUE",
 * //       IncludeTrustContext: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput - {@link ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput}
 * @returns {@link ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput}
 * @see {@link ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyVerifiedAccessInstanceLoggingConfigurationCommand extends $Command<
  ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput,
  ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput,
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
  constructor(readonly input: ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput) {
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
    ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput,
    ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ModifyVerifiedAccessInstanceLoggingConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVerifiedAccessInstanceLoggingConfigurationCommand";
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
  private serialize(
    input: ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyVerifiedAccessInstanceLoggingConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput> {
    return de_ModifyVerifiedAccessInstanceLoggingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
