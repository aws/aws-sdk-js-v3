import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { CreateDBClusterMessage, CreateDBClusterResult } from "../models/models_0";
import {
  deserializeAws_queryCreateDBClusterCommand,
  serializeAws_queryCreateDBClusterCommand,
} from "../protocols/Aws_query";
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
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

export type CreateDBClusterCommandInput = CreateDBClusterMessage;
export type CreateDBClusterCommandOutput = CreateDBClusterResult & __MetadataBearer;

/**
 * <p>Creates a new Amazon Neptune DB cluster.</p>
 *          <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB
 *       cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.</p>
 *          <p>Note that when you create a new cluster using <code>CreateDBCluster</code> directly,
 *       deletion protection is disabled by default (when you create a new production cluster in
 *       the console, deletion protection is enabled by default). You can only delete a DB
 *       cluster if its <code>DeletionProtection</code> field is set to <code>false</code>.</p>
 */
export class CreateDBClusterCommand extends $Command<
  CreateDBClusterCommandInput,
  CreateDBClusterCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDBClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDBClusterCommandInput, CreateDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "CreateDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDBClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBClusterCommandOutput> {
    return deserializeAws_queryCreateDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
