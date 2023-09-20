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

import { UpdateMonitoringAlertRequest, UpdateMonitoringAlertResponse } from "../models/models_4";
import { de_UpdateMonitoringAlertCommand, se_UpdateMonitoringAlertCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateMonitoringAlertCommand}.
 */
export interface UpdateMonitoringAlertCommandInput extends UpdateMonitoringAlertRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMonitoringAlertCommand}.
 */
export interface UpdateMonitoringAlertCommandOutput extends UpdateMonitoringAlertResponse, __MetadataBearer {}

/**
 * @public
 * <p>Update the parameters of a model monitor alert.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateMonitoringAlertCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateMonitoringAlertCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateMonitoringAlertRequest
 *   MonitoringScheduleName: "STRING_VALUE", // required
 *   MonitoringAlertName: "STRING_VALUE", // required
 *   DatapointsToAlert: Number("int"), // required
 *   EvaluationPeriod: Number("int"), // required
 * };
 * const command = new UpdateMonitoringAlertCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMonitoringAlertResponse
 * //   MonitoringScheduleArn: "STRING_VALUE", // required
 * //   MonitoringAlertName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateMonitoringAlertCommandInput - {@link UpdateMonitoringAlertCommandInput}
 * @returns {@link UpdateMonitoringAlertCommandOutput}
 * @see {@link UpdateMonitoringAlertCommandInput} for command's `input` shape.
 * @see {@link UpdateMonitoringAlertCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class UpdateMonitoringAlertCommand extends $Command<
  UpdateMonitoringAlertCommandInput,
  UpdateMonitoringAlertCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: UpdateMonitoringAlertCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMonitoringAlertCommandInput, UpdateMonitoringAlertCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateMonitoringAlertCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateMonitoringAlertCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "UpdateMonitoringAlert",
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
  private serialize(input: UpdateMonitoringAlertCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateMonitoringAlertCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMonitoringAlertCommandOutput> {
    return de_UpdateMonitoringAlertCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
