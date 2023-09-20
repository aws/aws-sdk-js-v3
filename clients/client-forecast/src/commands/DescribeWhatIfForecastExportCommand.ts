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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribeWhatIfForecastExportRequest, DescribeWhatIfForecastExportResponse } from "../models/models_0";
import {
  de_DescribeWhatIfForecastExportCommand,
  se_DescribeWhatIfForecastExportCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeWhatIfForecastExportCommand}.
 */
export interface DescribeWhatIfForecastExportCommandInput extends DescribeWhatIfForecastExportRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWhatIfForecastExportCommand}.
 */
export interface DescribeWhatIfForecastExportCommandOutput
  extends DescribeWhatIfForecastExportResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation.</p>
 *          <p>In addition to listing the properties provided in the <code>CreateWhatIfForecastExport</code> request, this operation lists the following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastModificationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Message</code> - If an error occurred, information about the error.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeWhatIfForecastExportCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeWhatIfForecastExportCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // DescribeWhatIfForecastExportRequest
 *   WhatIfForecastExportArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeWhatIfForecastExportCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWhatIfForecastExportResponse
 * //   WhatIfForecastExportArn: "STRING_VALUE",
 * //   WhatIfForecastExportName: "STRING_VALUE",
 * //   WhatIfForecastArns: [ // LongArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   Destination: { // DataDestination
 * //     S3Config: { // S3Config
 * //       Path: "STRING_VALUE", // required
 * //       RoleArn: "STRING_VALUE", // required
 * //       KMSKeyArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   Message: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   EstimatedTimeRemainingInMinutes: Number("long"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * //   Format: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWhatIfForecastExportCommandInput - {@link DescribeWhatIfForecastExportCommandInput}
 * @returns {@link DescribeWhatIfForecastExportCommandOutput}
 * @see {@link DescribeWhatIfForecastExportCommandInput} for command's `input` shape.
 * @see {@link DescribeWhatIfForecastExportCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 */
export class DescribeWhatIfForecastExportCommand extends $Command<
  DescribeWhatIfForecastExportCommandInput,
  DescribeWhatIfForecastExportCommandOutput,
  ForecastClientResolvedConfig
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
  constructor(readonly input: DescribeWhatIfForecastExportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWhatIfForecastExportCommandInput, DescribeWhatIfForecastExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeWhatIfForecastExportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DescribeWhatIfForecastExportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonForecast",
        operation: "DescribeWhatIfForecastExport",
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
  private serialize(input: DescribeWhatIfForecastExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeWhatIfForecastExportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeWhatIfForecastExportCommandOutput> {
    return de_DescribeWhatIfForecastExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
