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

import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { ListInferenceEventsRequest, ListInferenceEventsResponse } from "../models/models_0";
import { de_ListInferenceEventsCommand, se_ListInferenceEventsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListInferenceEventsCommand}.
 */
export interface ListInferenceEventsCommandInput extends ListInferenceEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListInferenceEventsCommand}.
 */
export interface ListInferenceEventsCommandOutput extends ListInferenceEventsResponse, __MetadataBearer {}

/**
 * @public
 * <p> Lists all inference events that have been found for the specified inference scheduler.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListInferenceEventsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListInferenceEventsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // ListInferenceEventsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   InferenceSchedulerName: "STRING_VALUE", // required
 *   IntervalStartTime: new Date("TIMESTAMP"), // required
 *   IntervalEndTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new ListInferenceEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListInferenceEventsResponse
 * //   NextToken: "STRING_VALUE",
 * //   InferenceEventSummaries: [ // InferenceEventSummaries
 * //     { // InferenceEventSummary
 * //       InferenceSchedulerArn: "STRING_VALUE",
 * //       InferenceSchedulerName: "STRING_VALUE",
 * //       EventStartTime: new Date("TIMESTAMP"),
 * //       EventEndTime: new Date("TIMESTAMP"),
 * //       Diagnostics: "STRING_VALUE",
 * //       EventDurationInSeconds: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListInferenceEventsCommandInput - {@link ListInferenceEventsCommandInput}
 * @returns {@link ListInferenceEventsCommandOutput}
 * @see {@link ListInferenceEventsCommandInput} for command's `input` shape.
 * @see {@link ListInferenceEventsCommandOutput} for command's `response` shape.
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
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services
 *          service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 */
export class ListInferenceEventsCommand extends $Command<
  ListInferenceEventsCommandInput,
  ListInferenceEventsCommandOutput,
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
  constructor(readonly input: ListInferenceEventsCommandInput) {
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
  ): Handler<ListInferenceEventsCommandInput, ListInferenceEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInferenceEventsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "ListInferenceEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLookoutEquipmentFrontendService",
        operation: "ListInferenceEvents",
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
  private serialize(input: ListInferenceEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListInferenceEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInferenceEventsCommandOutput> {
    return de_ListInferenceEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
