import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { GetDirectoryLimitsRequest, GetDirectoryLimitsResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetDirectoryLimitsCommand,
  serializeAws_json1_1GetDirectoryLimitsCommand,
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

export type GetDirectoryLimitsCommandInput = GetDirectoryLimitsRequest;
export type GetDirectoryLimitsCommandOutput = GetDirectoryLimitsResult & __MetadataBearer;

/**
 * <p>Obtains directory limit information for the current Region.</p>
 */
export class GetDirectoryLimitsCommand extends $Command<
  GetDirectoryLimitsCommandInput,
  GetDirectoryLimitsCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDirectoryLimitsCommandInput) {
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
  ): Handler<GetDirectoryLimitsCommandInput, GetDirectoryLimitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "GetDirectoryLimitsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDirectoryLimitsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDirectoryLimitsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDirectoryLimitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDirectoryLimitsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDirectoryLimitsCommandOutput> {
    return deserializeAws_json1_1GetDirectoryLimitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
