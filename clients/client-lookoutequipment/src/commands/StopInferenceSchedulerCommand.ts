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
  StopInferenceSchedulerRequest,
  StopInferenceSchedulerRequestFilterSensitiveLog,
  StopInferenceSchedulerResponse,
  StopInferenceSchedulerResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0StopInferenceSchedulerCommand,
  serializeAws_json1_0StopInferenceSchedulerCommand,
} from "../protocols/Aws_json1_0";

export interface StopInferenceSchedulerCommandInput extends StopInferenceSchedulerRequest {}
export interface StopInferenceSchedulerCommandOutput extends StopInferenceSchedulerResponse, __MetadataBearer {}

/**
 * <p>Stops an inference scheduler. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, StopInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, StopInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new StopInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link StopInferenceSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 */
export class StopInferenceSchedulerCommand extends $Command<
  StopInferenceSchedulerCommandInput,
  StopInferenceSchedulerCommandOutput,
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

  constructor(readonly input: StopInferenceSchedulerCommandInput) {
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
  ): Handler<StopInferenceSchedulerCommandInput, StopInferenceSchedulerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopInferenceSchedulerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "StopInferenceSchedulerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopInferenceSchedulerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopInferenceSchedulerResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopInferenceSchedulerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0StopInferenceSchedulerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopInferenceSchedulerCommandOutput> {
    return deserializeAws_json1_0StopInferenceSchedulerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
