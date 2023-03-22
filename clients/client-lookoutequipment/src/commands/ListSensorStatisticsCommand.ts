// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import {
  ListSensorStatisticsRequest,
  ListSensorStatisticsRequestFilterSensitiveLog,
  ListSensorStatisticsResponse,
  ListSensorStatisticsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListSensorStatisticsCommand,
  serializeAws_json1_0ListSensorStatisticsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link ListSensorStatisticsCommand}.
 */
export interface ListSensorStatisticsCommandInput extends ListSensorStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link ListSensorStatisticsCommand}.
 */
export interface ListSensorStatisticsCommandOutput extends ListSensorStatisticsResponse, __MetadataBearer {}

/**
 * @public
 * <p> Lists statistics about the data collected for each of the sensors that have been
 *          successfully ingested in the particular dataset. Can also be used to retreive Sensor
 *          Statistics for a previous ingestion job. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListSensorStatisticsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListSensorStatisticsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new ListSensorStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListSensorStatisticsCommandInput - {@link ListSensorStatisticsCommandInput}
 * @returns {@link ListSensorStatisticsCommandOutput}
 * @see {@link ListSensorStatisticsCommandInput} for command's `input` shape.
 * @see {@link ListSensorStatisticsCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource requested could not be found. Verify the resource ID and retry your
 *          request. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a
 *          related AWS service that's being utilized. </p>
 *
 *
 */
export class ListSensorStatisticsCommand extends $Command<
  ListSensorStatisticsCommandInput,
  ListSensorStatisticsCommandOutput,
  LookoutEquipmentClientResolvedConfig
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
  constructor(readonly input: ListSensorStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSensorStatisticsCommandInput, ListSensorStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSensorStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "ListSensorStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSensorStatisticsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSensorStatisticsResponseFilterSensitiveLog,
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
  private serialize(input: ListSensorStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListSensorStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSensorStatisticsCommandOutput> {
    return deserializeAws_json1_0ListSensorStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
