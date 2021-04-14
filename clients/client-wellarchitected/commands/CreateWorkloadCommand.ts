import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { CreateWorkloadInput, CreateWorkloadOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateWorkloadCommand,
  serializeAws_restJson1CreateWorkloadCommand,
} from "../protocols/Aws_restJson1";
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

export type CreateWorkloadCommandInput = CreateWorkloadInput;
export type CreateWorkloadCommandOutput = CreateWorkloadOutput & __MetadataBearer;

/**
 * <p>Create a new workload.</p>
 *         <p>The owner of a workload can share the workload with other AWS accounts and IAM users
 *             in the same AWS Region. Only the owner of a workload can delete it.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the
 *                 <i>AWS Well-Architected Tool User Guide</i>.</p>
 */
export class CreateWorkloadCommand extends $Command<
  CreateWorkloadCommandInput,
  CreateWorkloadCommandOutput,
  WellArchitectedClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateWorkloadCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWorkloadCommandInput, CreateWorkloadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "CreateWorkloadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorkloadInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWorkloadOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWorkloadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateWorkloadCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkloadCommandOutput> {
    return deserializeAws_restJson1CreateWorkloadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
