import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutThirdPartyJobFailureResultInput } from "../models/models_0";
import {
  deserializeAws_json1_1PutThirdPartyJobFailureResultCommand,
  serializeAws_json1_1PutThirdPartyJobFailureResultCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface PutThirdPartyJobFailureResultCommandInput extends PutThirdPartyJobFailureResultInput {}
export interface PutThirdPartyJobFailureResultCommandOutput extends __MetadataBearer {}

/**
 * <p>Represents the failure of a third party job as returned to the pipeline by a job
 *             worker. Used for partner actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutThirdPartyJobFailureResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutThirdPartyJobFailureResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PutThirdPartyJobFailureResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutThirdPartyJobFailureResultCommandInput} for command's `input` shape.
 * @see {@link PutThirdPartyJobFailureResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutThirdPartyJobFailureResultCommand extends $Command<
  PutThirdPartyJobFailureResultCommandInput,
  PutThirdPartyJobFailureResultCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutThirdPartyJobFailureResultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutThirdPartyJobFailureResultCommandInput, PutThirdPartyJobFailureResultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "PutThirdPartyJobFailureResultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutThirdPartyJobFailureResultInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutThirdPartyJobFailureResultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutThirdPartyJobFailureResultCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutThirdPartyJobFailureResultCommandOutput> {
    return deserializeAws_json1_1PutThirdPartyJobFailureResultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
