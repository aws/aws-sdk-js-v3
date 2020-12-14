import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeSolutionVersionRequest, DescribeSolutionVersionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeSolutionVersionCommand,
  serializeAws_json1_1DescribeSolutionVersionCommand,
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

export type DescribeSolutionVersionCommandInput = DescribeSolutionVersionRequest;
export type DescribeSolutionVersionCommandOutput = DescribeSolutionVersionResponse & __MetadataBearer;

/**
 * <p>Describes a specific version of a solution. For more information on solutions, see <a>CreateSolution</a>.</p>
 */
export class DescribeSolutionVersionCommand extends $Command<
  DescribeSolutionVersionCommandInput,
  DescribeSolutionVersionCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSolutionVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSolutionVersionCommandInput, DescribeSolutionVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "DescribeSolutionVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSolutionVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSolutionVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSolutionVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSolutionVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSolutionVersionCommandOutput> {
    return deserializeAws_json1_1DescribeSolutionVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
