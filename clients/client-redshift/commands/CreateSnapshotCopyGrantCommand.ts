import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateSnapshotCopyGrantMessage, CreateSnapshotCopyGrantResult } from "../models/models_0";
import {
  deserializeAws_queryCreateSnapshotCopyGrantCommand,
  serializeAws_queryCreateSnapshotCopyGrantCommand,
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

export type CreateSnapshotCopyGrantCommandInput = CreateSnapshotCopyGrantMessage;
export type CreateSnapshotCopyGrantCommandOutput = CreateSnapshotCopyGrantResult & __MetadataBearer;

/**
 * <p>Creates a snapshot copy grant that permits Amazon Redshift to use a customer master key
 *             (CMK) from AWS Key Management Service (AWS KMS) to encrypt copied snapshots in a
 *             destination region.</p>
 *         <p>
 * For more information about managing snapshot copy grants, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export class CreateSnapshotCopyGrantCommand extends $Command<
  CreateSnapshotCopyGrantCommandInput,
  CreateSnapshotCopyGrantCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSnapshotCopyGrantCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSnapshotCopyGrantCommandInput, CreateSnapshotCopyGrantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CreateSnapshotCopyGrantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSnapshotCopyGrantMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSnapshotCopyGrantResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSnapshotCopyGrantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateSnapshotCopyGrantCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSnapshotCopyGrantCommandOutput> {
    return deserializeAws_queryCreateSnapshotCopyGrantCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
