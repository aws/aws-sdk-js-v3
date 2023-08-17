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

import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import {
  DeleteApplicationCloudWatchLoggingOptionRequest,
  DeleteApplicationCloudWatchLoggingOptionResponse,
} from "../models/models_0";
import {
  de_DeleteApplicationCloudWatchLoggingOptionCommand,
  se_DeleteApplicationCloudWatchLoggingOptionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteApplicationCloudWatchLoggingOptionCommand}.
 */
export interface DeleteApplicationCloudWatchLoggingOptionCommandInput
  extends DeleteApplicationCloudWatchLoggingOptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationCloudWatchLoggingOptionCommand}.
 */
export interface DeleteApplicationCloudWatchLoggingOptionCommandOutput
  extends DeleteApplicationCloudWatchLoggingOptionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes an Amazon CloudWatch log stream from an Kinesis Data Analytics application. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DeleteApplicationCloudWatchLoggingOptionCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DeleteApplicationCloudWatchLoggingOptionCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // DeleteApplicationCloudWatchLoggingOptionRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"),
 *   CloudWatchLoggingOptionId: "STRING_VALUE", // required
 *   ConditionalToken: "STRING_VALUE",
 * };
 * const command = new DeleteApplicationCloudWatchLoggingOptionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteApplicationCloudWatchLoggingOptionResponse
 * //   ApplicationARN: "STRING_VALUE",
 * //   ApplicationVersionId: Number("long"),
 * //   CloudWatchLoggingOptionDescriptions: [ // CloudWatchLoggingOptionDescriptions
 * //     { // CloudWatchLoggingOptionDescription
 * //       CloudWatchLoggingOptionId: "STRING_VALUE",
 * //       LogStreamARN: "STRING_VALUE", // required
 * //       RoleARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteApplicationCloudWatchLoggingOptionCommandInput - {@link DeleteApplicationCloudWatchLoggingOptionCommandInput}
 * @returns {@link DeleteApplicationCloudWatchLoggingOptionCommandOutput}
 * @see {@link DeleteApplicationCloudWatchLoggingOptionCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationCloudWatchLoggingOptionCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modifications to an application. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 *
 * @throws {@link InvalidApplicationConfigurationException} (client fault)
 *  <p>The user-provided application configuration is not valid.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request JSON is not valid for the operation.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The application is not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 */
export class DeleteApplicationCloudWatchLoggingOptionCommand extends $Command<
  DeleteApplicationCloudWatchLoggingOptionCommandInput,
  DeleteApplicationCloudWatchLoggingOptionCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
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
  constructor(readonly input: DeleteApplicationCloudWatchLoggingOptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteApplicationCloudWatchLoggingOptionCommandInput,
    DeleteApplicationCloudWatchLoggingOptionCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DeleteApplicationCloudWatchLoggingOptionCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "DeleteApplicationCloudWatchLoggingOptionCommand";
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
    input: DeleteApplicationCloudWatchLoggingOptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteApplicationCloudWatchLoggingOptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteApplicationCloudWatchLoggingOptionCommandOutput> {
    return de_DeleteApplicationCloudWatchLoggingOptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
