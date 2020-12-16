import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { DescribeAccountAttributesMessage, DescribeAccountAttributesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAccountAttributesCommand,
  serializeAws_json1_1DescribeAccountAttributesCommand,
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

export type DescribeAccountAttributesCommandInput = DescribeAccountAttributesMessage;
export type DescribeAccountAttributesCommandOutput = DescribeAccountAttributesResponse & __MetadataBearer;

/**
 * <p>Lists all of the AWS DMS attributes for a customer account. These attributes include AWS
 *          DMS quotas for the account and a unique account identifier in a particular DMS region. DMS
 *          quotas include a list of resource quotas supported by the account, such as the number of
 *          replication instances allowed. The description for each resource quota, includes the quota
 *          name, current usage toward that quota, and the quota's maximum value. DMS uses the unique
 *          account identifier to name each artifact used by DMS in the given region.</p>
 *          <p>This command does not take any parameters.</p>
 */
export class DescribeAccountAttributesCommand extends $Command<
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAccountAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeAccountAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAccountAttributesMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccountAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAccountAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAccountAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountAttributesCommandOutput> {
    return deserializeAws_json1_1DescribeAccountAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
