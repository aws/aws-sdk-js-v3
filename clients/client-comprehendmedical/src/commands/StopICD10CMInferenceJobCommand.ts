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

import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import {
  StopICD10CMInferenceJobRequest,
  StopICD10CMInferenceJobRequestFilterSensitiveLog,
  StopICD10CMInferenceJobResponse,
  StopICD10CMInferenceJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StopICD10CMInferenceJobCommand,
  serializeAws_json1_1StopICD10CMInferenceJobCommand,
} from "../protocols/Aws_json1_1";

export interface StopICD10CMInferenceJobCommandInput extends StopICD10CMInferenceJobRequest {}
export interface StopICD10CMInferenceJobCommandOutput extends StopICD10CMInferenceJobResponse, __MetadataBearer {}

/**
 * <p>Stops an InferICD10CM inference job in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StopICD10CMInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StopICD10CMInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new StopICD10CMInferenceJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopICD10CMInferenceJobCommandInput} for command's `input` shape.
 * @see {@link StopICD10CMInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for ComprehendMedicalClient's `config` shape.
 *
 */
export class StopICD10CMInferenceJobCommand extends $Command<
  StopICD10CMInferenceJobCommandInput,
  StopICD10CMInferenceJobCommandOutput,
  ComprehendMedicalClientResolvedConfig
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

  constructor(readonly input: StopICD10CMInferenceJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendMedicalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopICD10CMInferenceJobCommandInput, StopICD10CMInferenceJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopICD10CMInferenceJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "StopICD10CMInferenceJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopICD10CMInferenceJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopICD10CMInferenceJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopICD10CMInferenceJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopICD10CMInferenceJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopICD10CMInferenceJobCommandOutput> {
    return deserializeAws_json1_1StopICD10CMInferenceJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
