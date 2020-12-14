import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CreateAliasRequest, CreateAliasResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateAliasCommand,
  serializeAws_json1_1CreateAliasCommand,
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

export type CreateAliasCommandInput = CreateAliasRequest;
export type CreateAliasCommandOutput = CreateAliasResult & __MetadataBearer;

/**
 * <p>Creates an alias for a directory and assigns the alias to the directory. The alias is used
 *          to construct the access URL for the directory, such as
 *             <code>http://<alias>.awsapps.com</code>.</p>
 *          <important>
 *             <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p>
 *          </important>
 */
export class CreateAliasCommand extends $Command<
  CreateAliasCommandInput,
  CreateAliasCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAliasCommandInput, CreateAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "CreateAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAliasResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAliasCommandOutput> {
    return deserializeAws_json1_1CreateAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
