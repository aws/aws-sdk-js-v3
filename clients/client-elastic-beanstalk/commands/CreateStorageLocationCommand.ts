import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { CreateStorageLocationResultMessage } from "../models/models_0";
import {
  deserializeAws_queryCreateStorageLocationCommand,
  serializeAws_queryCreateStorageLocationCommand,
} from "../protocols/Aws_query";
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

export type CreateStorageLocationCommandInput = {};
export type CreateStorageLocationCommandOutput = CreateStorageLocationResultMessage & __MetadataBearer;

/**
 * <p>Creates a bucket in Amazon S3 to store application versions, logs, and other files used
 *       by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the
 *       first time you create an environment in a region. If the storage location already exists,
 *         <code>CreateStorageLocation</code> still returns the bucket name but does not create a new
 *       bucket.</p>
 */
export class CreateStorageLocationCommand extends $Command<
  CreateStorageLocationCommandInput,
  CreateStorageLocationCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateStorageLocationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStorageLocationCommandInput, CreateStorageLocationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "CreateStorageLocationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: CreateStorageLocationResultMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateStorageLocationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateStorageLocationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStorageLocationCommandOutput> {
    return deserializeAws_queryCreateStorageLocationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
