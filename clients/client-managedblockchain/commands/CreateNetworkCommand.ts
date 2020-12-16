import {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient";
import { CreateNetworkInput, CreateNetworkOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateNetworkCommand,
  serializeAws_restJson1CreateNetworkCommand,
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

export type CreateNetworkCommandInput = CreateNetworkInput;
export type CreateNetworkCommandOutput = CreateNetworkOutput & __MetadataBearer;

/**
 * <p>Creates a new blockchain network using Amazon Managed Blockchain.</p>
 */
export class CreateNetworkCommand extends $Command<
  CreateNetworkCommandInput,
  CreateNetworkCommandOutput,
  ManagedBlockchainClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateNetworkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ManagedBlockchainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNetworkCommandInput, CreateNetworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainClient";
    const commandName = "CreateNetworkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNetworkInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateNetworkOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateNetworkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateNetworkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNetworkCommandOutput> {
    return deserializeAws_restJson1CreateNetworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
