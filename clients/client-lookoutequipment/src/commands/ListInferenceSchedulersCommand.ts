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

import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { ListInferenceSchedulersRequest, ListInferenceSchedulersResponse } from "../models/models_0";
import { de_ListInferenceSchedulersCommand, se_ListInferenceSchedulersCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListInferenceSchedulersCommand}.
 */
export interface ListInferenceSchedulersCommandInput extends ListInferenceSchedulersRequest {}
/**
 * @public
 *
 * The output of {@link ListInferenceSchedulersCommand}.
 */
export interface ListInferenceSchedulersCommandOutput extends ListInferenceSchedulersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of all inference schedulers currently available for your account.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListInferenceSchedulersCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListInferenceSchedulersCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // ListInferenceSchedulersRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   InferenceSchedulerNameBeginsWith: "STRING_VALUE",
 *   ModelName: "STRING_VALUE",
 *   Status: "PENDING" || "RUNNING" || "STOPPING" || "STOPPED",
 * };
 * const command = new ListInferenceSchedulersCommand(input);
 * const response = await client.send(command);
 * // { // ListInferenceSchedulersResponse
 * //   NextToken: "STRING_VALUE",
 * //   InferenceSchedulerSummaries: [ // InferenceSchedulerSummaries
 * //     { // InferenceSchedulerSummary
 * //       ModelName: "STRING_VALUE",
 * //       ModelArn: "STRING_VALUE",
 * //       InferenceSchedulerName: "STRING_VALUE",
 * //       InferenceSchedulerArn: "STRING_VALUE",
 * //       Status: "PENDING" || "RUNNING" || "STOPPING" || "STOPPED",
 * //       DataDelayOffsetInMinutes: Number("long"),
 * //       DataUploadFrequency: "PT5M" || "PT10M" || "PT15M" || "PT30M" || "PT1H",
 * //       LatestInferenceResult: "ANOMALOUS" || "NORMAL",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListInferenceSchedulersCommandInput - {@link ListInferenceSchedulersCommandInput}
 * @returns {@link ListInferenceSchedulersCommandOutput}
 * @see {@link ListInferenceSchedulersCommandInput} for command's `input` shape.
 * @see {@link ListInferenceSchedulersCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a
 *          related Amazon Web Services service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 */
export class ListInferenceSchedulersCommand extends $Command<
  ListInferenceSchedulersCommandInput,
  ListInferenceSchedulersCommandOutput,
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
  constructor(readonly input: ListInferenceSchedulersCommandInput) {
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
  ): Handler<ListInferenceSchedulersCommandInput, ListInferenceSchedulersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInferenceSchedulersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "ListInferenceSchedulersCommand";
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
  private serialize(input: ListInferenceSchedulersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListInferenceSchedulersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInferenceSchedulersCommandOutput> {
    return de_ListInferenceSchedulersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
