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
import { StopRetrainingSchedulerRequest, StopRetrainingSchedulerResponse } from "../models/models_0";
import { de_StopRetrainingSchedulerCommand, se_StopRetrainingSchedulerCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopRetrainingSchedulerCommand}.
 */
export interface StopRetrainingSchedulerCommandInput extends StopRetrainingSchedulerRequest {}
/**
 * @public
 *
 * The output of {@link StopRetrainingSchedulerCommand}.
 */
export interface StopRetrainingSchedulerCommandOutput extends StopRetrainingSchedulerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Stops a retraining scheduler. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, StopRetrainingSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, StopRetrainingSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // StopRetrainingSchedulerRequest
 *   ModelName: "STRING_VALUE", // required
 * };
 * const command = new StopRetrainingSchedulerCommand(input);
 * const response = await client.send(command);
 * // { // StopRetrainingSchedulerResponse
 * //   ModelName: "STRING_VALUE",
 * //   ModelArn: "STRING_VALUE",
 * //   Status: "PENDING" || "RUNNING" || "STOPPING" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StopRetrainingSchedulerCommandInput - {@link StopRetrainingSchedulerCommandInput}
 * @returns {@link StopRetrainingSchedulerCommandOutput}
 * @see {@link StopRetrainingSchedulerCommandInput} for command's `input` shape.
 * @see {@link StopRetrainingSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The request could not be completed due to a conflict with the current state of the
 *          target resource. </p>
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
 * @example Stops a retraining scheduler
 * ```javascript
 * //
 * const input = {
 *   "ModelName": "sample-model"
 * };
 * const command = new StopRetrainingSchedulerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ModelArn": "arn:aws:lookoutequipment:us-east-1:123456789012:model/sample-model/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   "ModelName": "sample-model",
 *   "Status": "STOPPING"
 * }
 * *\/
 * // example id: stops-a-retraining-scheduler-1694019734149
 * ```
 *
 */
export class StopRetrainingSchedulerCommand extends $Command<
  StopRetrainingSchedulerCommandInput,
  StopRetrainingSchedulerCommandOutput,
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
  constructor(readonly input: StopRetrainingSchedulerCommandInput) {
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
  ): Handler<StopRetrainingSchedulerCommandInput, StopRetrainingSchedulerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopRetrainingSchedulerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "StopRetrainingSchedulerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLookoutEquipmentFrontendService",
        operation: "StopRetrainingScheduler",
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
  private serialize(input: StopRetrainingSchedulerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopRetrainingSchedulerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopRetrainingSchedulerCommandOutput> {
    return de_StopRetrainingSchedulerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
