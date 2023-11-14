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

import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { AddApplicationOutputRequest, AddApplicationOutputResponse } from "../models/models_0";
import { de_AddApplicationOutputCommand, se_AddApplicationOutputCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddApplicationOutputCommand}.
 */
export interface AddApplicationOutputCommandInput extends AddApplicationOutputRequest {}
/**
 * @public
 *
 * The output of {@link AddApplicationOutputCommand}.
 */
export interface AddApplicationOutputCommandOutput extends AddApplicationOutputResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds an external destination to your SQL-based Kinesis Data Analytics application.</p>
 *          <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within
 *       your application to an external destination (such as an Kinesis data stream, a Kinesis Data
 *       Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to
 *       your application using this operation. You can configure one or more outputs for your
 *       application. Each output configuration maps an in-application stream and an external
 *       destination.</p>
 *          <p> You can use one of the output configurations to deliver data from your
 *       in-application error stream to an external destination so that you can analyze the
 *       errors.  </p>
 *          <p> Any configuration update, including adding a streaming source using this
 *       operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application
 *       version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationOutputCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationOutputCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // AddApplicationOutputRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   Output: { // Output
 *     Name: "STRING_VALUE", // required
 *     KinesisStreamsOutput: { // KinesisStreamsOutput
 *       ResourceARN: "STRING_VALUE", // required
 *     },
 *     KinesisFirehoseOutput: { // KinesisFirehoseOutput
 *       ResourceARN: "STRING_VALUE", // required
 *     },
 *     LambdaOutput: { // LambdaOutput
 *       ResourceARN: "STRING_VALUE", // required
 *     },
 *     DestinationSchema: { // DestinationSchema
 *       RecordFormatType: "JSON" || "CSV", // required
 *     },
 *   },
 * };
 * const command = new AddApplicationOutputCommand(input);
 * const response = await client.send(command);
 * // { // AddApplicationOutputResponse
 * //   ApplicationARN: "STRING_VALUE",
 * //   ApplicationVersionId: Number("long"),
 * //   OutputDescriptions: [ // OutputDescriptions
 * //     { // OutputDescription
 * //       OutputId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       KinesisStreamsOutputDescription: { // KinesisStreamsOutputDescription
 * //         ResourceARN: "STRING_VALUE", // required
 * //         RoleARN: "STRING_VALUE",
 * //       },
 * //       KinesisFirehoseOutputDescription: { // KinesisFirehoseOutputDescription
 * //         ResourceARN: "STRING_VALUE", // required
 * //         RoleARN: "STRING_VALUE",
 * //       },
 * //       LambdaOutputDescription: { // LambdaOutputDescription
 * //         ResourceARN: "STRING_VALUE", // required
 * //         RoleARN: "STRING_VALUE",
 * //       },
 * //       DestinationSchema: { // DestinationSchema
 * //         RecordFormatType: "JSON" || "CSV", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddApplicationOutputCommandInput - {@link AddApplicationOutputCommandInput}
 * @returns {@link AddApplicationOutputCommandOutput}
 * @see {@link AddApplicationOutputCommandInput} for command's `input` shape.
 * @see {@link AddApplicationOutputCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modifications to an application. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
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
export class AddApplicationOutputCommand extends $Command<
  AddApplicationOutputCommandInput,
  AddApplicationOutputCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
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
  constructor(readonly input: AddApplicationOutputCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddApplicationOutputCommandInput, AddApplicationOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddApplicationOutputCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "AddApplicationOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "KinesisAnalytics_20180523",
        operation: "AddApplicationOutput",
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
  private serialize(input: AddApplicationOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddApplicationOutputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddApplicationOutputCommandOutput> {
    return de_AddApplicationOutputCommand(output, context);
  }
}
