import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { CreateJobRequest, CreateJobResult } from "../models/models_0";
import { deserializeAws_json1_1CreateJobCommand, serializeAws_json1_1CreateJobCommand } from "../protocols/Aws_json1_1";
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

export type CreateJobCommandInput = CreateJobRequest;
export type CreateJobCommandOutput = CreateJobResult & __MetadataBearer;

/**
 * <p>Creates a job to import or export data between Amazon S3 and your on-premises data
 *       center. Your AWS account must have the right trust policies and permissions in place to create
 *       a job for a Snow device. If you're creating a job for a node in a cluster, you only need to provide
 *       the <code>clusterId</code> value; the other job attributes are inherited from the cluster.
 *     </p>
 */
export class CreateJobCommand extends $Command<
  CreateJobCommandInput,
  CreateJobCommandOutput,
  SnowballClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateJobCommandInput, CreateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "CreateJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateJobResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateJobCommandOutput> {
    return deserializeAws_json1_1CreateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
