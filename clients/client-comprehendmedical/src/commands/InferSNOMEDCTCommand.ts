// smithy-typescript generated code
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
import { InferSNOMEDCTRequest, InferSNOMEDCTResponse } from "../models/models_0";
import {
  deserializeAws_json1_1InferSNOMEDCTCommand,
  serializeAws_json1_1InferSNOMEDCTCommand,
} from "../protocols/Aws_json1_1";

export interface InferSNOMEDCTCommandInput extends InferSNOMEDCTRequest {}
export interface InferSNOMEDCTCommandOutput extends InferSNOMEDCTResponse, __MetadataBearer {}

/**
 * <p>
 *       InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, InferSNOMEDCTCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, InferSNOMEDCTCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new InferSNOMEDCTCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InferSNOMEDCTCommandInput} for command's `input` shape.
 * @see {@link InferSNOMEDCTCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for ComprehendMedicalClient's `config` shape.
 *
 */
export class InferSNOMEDCTCommand extends $Command<
  InferSNOMEDCTCommandInput,
  InferSNOMEDCTCommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InferSNOMEDCTCommandInput) {
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
  ): Handler<InferSNOMEDCTCommandInput, InferSNOMEDCTCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "InferSNOMEDCTCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InferSNOMEDCTRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InferSNOMEDCTResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InferSNOMEDCTCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1InferSNOMEDCTCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InferSNOMEDCTCommandOutput> {
    return deserializeAws_json1_1InferSNOMEDCTCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
