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
  DescribeSNOMEDCTInferenceJobRequest,
  DescribeSNOMEDCTInferenceJobRequestFilterSensitiveLog,
  DescribeSNOMEDCTInferenceJobResponse,
  DescribeSNOMEDCTInferenceJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeSNOMEDCTInferenceJobCommand,
  serializeAws_json1_1DescribeSNOMEDCTInferenceJobCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeSNOMEDCTInferenceJobCommandInput extends DescribeSNOMEDCTInferenceJobRequest {}
export interface DescribeSNOMEDCTInferenceJobCommandOutput
  extends DescribeSNOMEDCTInferenceJobResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DescribeSNOMEDCTInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DescribeSNOMEDCTInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new DescribeSNOMEDCTInferenceJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSNOMEDCTInferenceJobCommandInput} for command's `input` shape.
 * @see {@link DescribeSNOMEDCTInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for ComprehendMedicalClient's `config` shape.
 *
 */
export class DescribeSNOMEDCTInferenceJobCommand extends $Command<
  DescribeSNOMEDCTInferenceJobCommandInput,
  DescribeSNOMEDCTInferenceJobCommandOutput,
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

  constructor(readonly input: DescribeSNOMEDCTInferenceJobCommandInput) {
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
  ): Handler<DescribeSNOMEDCTInferenceJobCommandInput, DescribeSNOMEDCTInferenceJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSNOMEDCTInferenceJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "DescribeSNOMEDCTInferenceJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSNOMEDCTInferenceJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeSNOMEDCTInferenceJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSNOMEDCTInferenceJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSNOMEDCTInferenceJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSNOMEDCTInferenceJobCommandOutput> {
    return deserializeAws_json1_1DescribeSNOMEDCTInferenceJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
