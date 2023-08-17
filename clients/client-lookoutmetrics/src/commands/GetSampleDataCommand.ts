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

import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { GetSampleDataRequest, GetSampleDataResponse } from "../models/models_0";
import { de_GetSampleDataCommand, se_GetSampleDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSampleDataCommand}.
 */
export interface GetSampleDataCommandInput extends GetSampleDataRequest {}
/**
 * @public
 *
 * The output of {@link GetSampleDataCommand}.
 */
export interface GetSampleDataCommandOutput extends GetSampleDataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a selection of sample records from an Amazon S3 datasource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, GetSampleDataCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, GetSampleDataCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const input = { // GetSampleDataRequest
 *   S3SourceConfig: { // SampleDataS3SourceConfig
 *     RoleArn: "STRING_VALUE", // required
 *     TemplatedPathList: [ // TemplatedPathList
 *       "STRING_VALUE",
 *     ],
 *     HistoricalDataPathList: [ // HistoricalDataPathList
 *       "STRING_VALUE",
 *     ],
 *     FileFormatDescriptor: { // FileFormatDescriptor
 *       CsvFormatDescriptor: { // CsvFormatDescriptor
 *         FileCompression: "STRING_VALUE",
 *         Charset: "STRING_VALUE",
 *         ContainsHeader: true || false,
 *         Delimiter: "STRING_VALUE",
 *         HeaderList: [ // HeaderList
 *           "STRING_VALUE",
 *         ],
 *         QuoteSymbol: "STRING_VALUE",
 *       },
 *       JsonFormatDescriptor: { // JsonFormatDescriptor
 *         FileCompression: "STRING_VALUE",
 *         Charset: "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new GetSampleDataCommand(input);
 * const response = await client.send(command);
 * // { // GetSampleDataResponse
 * //   HeaderValues: [ // HeaderValueList
 * //     "STRING_VALUE",
 * //   ],
 * //   SampleRows: [ // SampleRows
 * //     [ // SampleRow
 * //       "STRING_VALUE",
 * //     ],
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSampleDataCommandInput - {@link GetSampleDataCommandInput}
 * @returns {@link GetSampleDataCommandOutput}
 * @see {@link GetSampleDataCommandInput} for command's `input` shape.
 * @see {@link GetSampleDataCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to too many requests being submitted at the same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service. Check your input values and try
 *       again.</p>
 *
 * @throws {@link LookoutMetricsServiceException}
 * <p>Base exception class for all service exceptions from LookoutMetrics service.</p>
 *
 */
export class GetSampleDataCommand extends $Command<
  GetSampleDataCommandInput,
  GetSampleDataCommandOutput,
  LookoutMetricsClientResolvedConfig
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
  constructor(readonly input: GetSampleDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSampleDataCommandInput, GetSampleDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSampleDataCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "GetSampleDataCommand";
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
  private serialize(input: GetSampleDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSampleDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSampleDataCommandOutput> {
    return de_GetSampleDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
