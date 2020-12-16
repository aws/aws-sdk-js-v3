import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { LifecycleConfigurationDescription, PutLifecycleConfigurationRequest } from "../models/models_0";
import {
  deserializeAws_restJson1PutLifecycleConfigurationCommand,
  serializeAws_restJson1PutLifecycleConfigurationCommand,
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

export type PutLifecycleConfigurationCommandInput = PutLifecycleConfigurationRequest;
export type PutLifecycleConfigurationCommandOutput = LifecycleConfigurationDescription & __MetadataBearer;

/**
 * <p>Enables lifecycle management by creating a new <code>LifecycleConfiguration</code>
 *       object. A <code>LifecycleConfiguration</code> object defines when files in an Amazon EFS file
 *       system are automatically transitioned to the lower-cost EFS Infrequent Access (IA) storage class.
 *       A <code>LifecycleConfiguration</code> applies to all files in a file system.</p>
 *          <p>Each Amazon EFS file system supports one lifecycle configuration, which applies to all files in the file system. If a
 *         <code>LifecycleConfiguration</code> object already exists for the specified file system, a
 *         <code>PutLifecycleConfiguration</code> call modifies the existing configuration. A
 *         <code>PutLifecycleConfiguration</code> call with an empty <code>LifecyclePolicies</code>
 *       array in the request body deletes any existing <code>LifecycleConfiguration</code> and
 *       disables lifecycle management.</p>
 *
 *
 *          <p>In the request, specify the following: </p>
 *          <ul>
 *             <li>
 *                <p>The ID for the file system for which you are enabling, disabling, or modifying lifecycle management.</p>
 *             </li>
 *             <li>
 *                <p>A <code>LifecyclePolicies</code> array of <code>LifecyclePolicy</code> objects that
 *           define when files are moved to the IA storage class. The array can contain only one
 *             <code>LifecyclePolicy</code> item.</p>
 *             </li>
 *          </ul>
 *
 *          <p>This operation requires permissions for the
 *         <code>elasticfilesystem:PutLifecycleConfiguration</code> operation.</p>
 *          <p>To apply a <code>LifecycleConfiguration</code> object to an encrypted file system, you
 *       need the same AWS Key Management Service (AWS KMS) permissions as when you created the encrypted
 *       file system. </p>
 */
export class PutLifecycleConfigurationCommand extends $Command<
  PutLifecycleConfigurationCommandInput,
  PutLifecycleConfigurationCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutLifecycleConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutLifecycleConfigurationCommandInput, PutLifecycleConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "PutLifecycleConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutLifecycleConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: LifecycleConfigurationDescription.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutLifecycleConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutLifecycleConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutLifecycleConfigurationCommandOutput> {
    return deserializeAws_restJson1PutLifecycleConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
