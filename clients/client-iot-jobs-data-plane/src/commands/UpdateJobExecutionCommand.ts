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

import { IoTJobsDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTJobsDataPlaneClient";
import { UpdateJobExecutionRequest, UpdateJobExecutionResponse } from "../models/models_0";
import { de_UpdateJobExecutionCommand, se_UpdateJobExecutionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateJobExecutionCommand}.
 */
export interface UpdateJobExecutionCommandInput extends UpdateJobExecutionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateJobExecutionCommand}.
 */
export interface UpdateJobExecutionCommandOutput extends UpdateJobExecutionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the status of a job execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, UpdateJobExecutionCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, UpdateJobExecutionCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * const client = new IoTJobsDataPlaneClient(config);
 * const input = { // UpdateJobExecutionRequest
 *   jobId: "STRING_VALUE", // required
 *   thingName: "STRING_VALUE", // required
 *   status: "STRING_VALUE", // required
 *   statusDetails: { // DetailsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   stepTimeoutInMinutes: Number("long"),
 *   expectedVersion: Number("long"),
 *   includeJobExecutionState: true || false,
 *   includeJobDocument: true || false,
 *   executionNumber: Number("long"),
 * };
 * const command = new UpdateJobExecutionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateJobExecutionResponse
 * //   executionState: { // JobExecutionState
 * //     status: "STRING_VALUE",
 * //     statusDetails: { // DetailsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     versionNumber: Number("long"),
 * //   },
 * //   jobDocument: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateJobExecutionCommandInput - {@link UpdateJobExecutionCommandInput}
 * @returns {@link UpdateJobExecutionCommandOutput}
 * @see {@link UpdateJobExecutionCommandInput} for command's `input` shape.
 * @see {@link UpdateJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTJobsDataPlaneClientResolvedConfig | config} for IoTJobsDataPlaneClient's `config` shape.
 *
 * @throws {@link CertificateValidationException} (client fault)
 *  <p>The certificate is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The contents of the request were invalid. For example, this code is returned when an UpdateJobExecution request contains invalid status details. The message contains details about the error.</p>
 *
 * @throws {@link InvalidStateTransitionException} (client fault)
 *  <p>An update attempted to change the job execution to a state that is invalid because of the job execution's
 *          current state (for example, an attempt to change a request in state SUCCESS to state IN_PROGRESS). In this
 *          case, the body of the error message also contains the executionState field.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTJobsDataPlaneServiceException}
 * <p>Base exception class for all service exceptions from IoTJobsDataPlane service.</p>
 *
 */
export class UpdateJobExecutionCommand extends $Command<
  UpdateJobExecutionCommandInput,
  UpdateJobExecutionCommandOutput,
  IoTJobsDataPlaneClientResolvedConfig
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
  constructor(readonly input: UpdateJobExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTJobsDataPlaneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateJobExecutionCommandInput, UpdateJobExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateJobExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTJobsDataPlaneClient";
    const commandName = "UpdateJobExecutionCommand";
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
  private serialize(input: UpdateJobExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateJobExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateJobExecutionCommandOutput> {
    return de_UpdateJobExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
