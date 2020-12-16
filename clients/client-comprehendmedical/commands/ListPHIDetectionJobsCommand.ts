import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { ListPHIDetectionJobsRequest, ListPHIDetectionJobsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListPHIDetectionJobsCommand,
  serializeAws_json1_1ListPHIDetectionJobsCommand,
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

export type ListPHIDetectionJobsCommandInput = ListPHIDetectionJobsRequest;
export type ListPHIDetectionJobsCommandOutput = ListPHIDetectionJobsResponse & __MetadataBearer;

/**
 * <p>Gets a list of protected health information (PHI) detection jobs that you have
 *       submitted.</p>
 */
export class ListPHIDetectionJobsCommand extends $Command<
  ListPHIDetectionJobsCommandInput,
  ListPHIDetectionJobsCommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPHIDetectionJobsCommandInput) {
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
  ): Handler<ListPHIDetectionJobsCommandInput, ListPHIDetectionJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "ListPHIDetectionJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPHIDetectionJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPHIDetectionJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPHIDetectionJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPHIDetectionJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPHIDetectionJobsCommandOutput> {
    return deserializeAws_json1_1ListPHIDetectionJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
