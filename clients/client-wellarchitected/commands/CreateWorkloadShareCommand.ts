import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { CreateWorkloadShareInput, CreateWorkloadShareOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateWorkloadShareCommand,
  serializeAws_restJson1CreateWorkloadShareCommand,
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

export type CreateWorkloadShareCommandInput = CreateWorkloadShareInput;
export type CreateWorkloadShareCommandOutput = CreateWorkloadShareOutput & __MetadataBearer;

/**
 * <p>Create a workload share.</p>
 *         <p>The owner of a workload can share it with other AWS accounts and IAM users in the same
 *             AWS Region. Shared access to a workload is not removed until the workload invitation is
 *             deleted.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a Workload</a> in the
 *                 <i>AWS Well-Architected Tool User Guide</i>.</p>
 */
export class CreateWorkloadShareCommand extends $Command<
  CreateWorkloadShareCommandInput,
  CreateWorkloadShareCommandOutput,
  WellArchitectedClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateWorkloadShareCommandInput) {
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
  ): Handler<CreateWorkloadShareCommandInput, CreateWorkloadShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "CreateWorkloadShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorkloadShareInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWorkloadShareOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWorkloadShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateWorkloadShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkloadShareCommandOutput> {
    return deserializeAws_restJson1CreateWorkloadShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
