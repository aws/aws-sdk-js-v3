import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { MergeBranchesByThreeWayInput, MergeBranchesByThreeWayOutput } from "../models/models_1";
import {
  deserializeAws_json1_1MergeBranchesByThreeWayCommand,
  serializeAws_json1_1MergeBranchesByThreeWayCommand,
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

export type MergeBranchesByThreeWayCommandInput = MergeBranchesByThreeWayInput;
export type MergeBranchesByThreeWayCommandOutput = MergeBranchesByThreeWayOutput & __MetadataBearer;

/**
 * <p>Merges two specified branches using the three-way merge strategy.</p>
 */
export class MergeBranchesByThreeWayCommand extends $Command<
  MergeBranchesByThreeWayCommandInput,
  MergeBranchesByThreeWayCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MergeBranchesByThreeWayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<MergeBranchesByThreeWayCommandInput, MergeBranchesByThreeWayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "MergeBranchesByThreeWayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MergeBranchesByThreeWayInput.filterSensitiveLog,
      outputFilterSensitiveLog: MergeBranchesByThreeWayOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MergeBranchesByThreeWayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1MergeBranchesByThreeWayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MergeBranchesByThreeWayCommandOutput> {
    return deserializeAws_json1_1MergeBranchesByThreeWayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
