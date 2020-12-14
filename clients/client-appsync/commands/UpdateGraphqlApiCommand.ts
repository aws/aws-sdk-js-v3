import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { UpdateGraphqlApiRequest, UpdateGraphqlApiResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateGraphqlApiCommand,
  serializeAws_restJson1UpdateGraphqlApiCommand,
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

export type UpdateGraphqlApiCommandInput = UpdateGraphqlApiRequest;
export type UpdateGraphqlApiCommandOutput = UpdateGraphqlApiResponse & __MetadataBearer;

/**
 * <p>Updates a <code>GraphqlApi</code> object.</p>
 */
export class UpdateGraphqlApiCommand extends $Command<
  UpdateGraphqlApiCommandInput,
  UpdateGraphqlApiCommandOutput,
  AppSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateGraphqlApiCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateGraphqlApiCommandInput, UpdateGraphqlApiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "UpdateGraphqlApiCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGraphqlApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateGraphqlApiResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGraphqlApiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateGraphqlApiCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGraphqlApiCommandOutput> {
    return deserializeAws_restJson1UpdateGraphqlApiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
