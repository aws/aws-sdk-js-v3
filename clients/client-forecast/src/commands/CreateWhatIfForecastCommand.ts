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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  CreateWhatIfForecastRequest,
  CreateWhatIfForecastRequestFilterSensitiveLog,
  CreateWhatIfForecastResponse,
} from "../models/models_0";
import { de_CreateWhatIfForecastCommand, se_CreateWhatIfForecastCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateWhatIfForecastCommand}.
 */
export interface CreateWhatIfForecastCommandInput extends CreateWhatIfForecastRequest {}
/**
 * @public
 *
 * The output of {@link CreateWhatIfForecastCommand}.
 */
export interface CreateWhatIfForecastCommandOutput extends CreateWhatIfForecastResponse, __MetadataBearer {}

/**
 * @public
 * <p>A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each
 *       what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateWhatIfForecastCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateWhatIfForecastCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // CreateWhatIfForecastRequest
 *   WhatIfForecastName: "STRING_VALUE", // required
 *   WhatIfAnalysisArn: "STRING_VALUE", // required
 *   TimeSeriesTransformations: [ // TimeSeriesTransformations
 *     { // TimeSeriesTransformation
 *       Action: { // Action
 *         AttributeName: "STRING_VALUE", // required
 *         Operation: "ADD" || "SUBTRACT" || "MULTIPLY" || "DIVIDE", // required
 *         Value: Number("double"), // required
 *       },
 *       TimeSeriesConditions: [ // TimeSeriesConditions
 *         { // TimeSeriesCondition
 *           AttributeName: "STRING_VALUE", // required
 *           AttributeValue: "STRING_VALUE", // required
 *           Condition: "EQUALS" || "NOT_EQUALS" || "LESS_THAN" || "GREATER_THAN", // required
 *         },
 *       ],
 *     },
 *   ],
 *   TimeSeriesReplacementsDataSource: { // TimeSeriesReplacementsDataSource
 *     S3Config: { // S3Config
 *       Path: "STRING_VALUE", // required
 *       RoleArn: "STRING_VALUE", // required
 *       KMSKeyArn: "STRING_VALUE",
 *     },
 *     Schema: { // Schema
 *       Attributes: [ // SchemaAttributes
 *         { // SchemaAttribute
 *           AttributeName: "STRING_VALUE",
 *           AttributeType: "string" || "integer" || "float" || "timestamp" || "geolocation",
 *         },
 *       ],
 *     },
 *     Format: "STRING_VALUE",
 *     TimestampFormat: "STRING_VALUE",
 *   },
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateWhatIfForecastCommand(input);
 * const response = await client.send(command);
 * // { // CreateWhatIfForecastResponse
 * //   WhatIfForecastArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWhatIfForecastCommandInput - {@link CreateWhatIfForecastCommandInput}
 * @returns {@link CreateWhatIfForecastCommandOutput}
 * @see {@link CreateWhatIfForecastCommandInput} for command's `input` shape.
 * @see {@link CreateWhatIfForecastCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of resources per account has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>There is already a resource with this name. Try again with a different name.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 */
export class CreateWhatIfForecastCommand extends $Command<
  CreateWhatIfForecastCommandInput,
  CreateWhatIfForecastCommandOutput,
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
  constructor(readonly input: CreateWhatIfForecastCommandInput) {
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
  ): Handler<CreateWhatIfForecastCommandInput, CreateWhatIfForecastCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWhatIfForecastCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreateWhatIfForecastCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWhatIfForecastRequestFilterSensitiveLog,
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
  private serialize(input: CreateWhatIfForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateWhatIfForecastCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWhatIfForecastCommandOutput> {
    return de_CreateWhatIfForecastCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
