import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListInstanceProfilesRequest, ListInstanceProfilesResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListInstanceProfilesCommand,
  serializeAws_json1_1ListInstanceProfilesCommand,
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

export type ListInstanceProfilesCommandInput = ListInstanceProfilesRequest;
export type ListInstanceProfilesCommandOutput = ListInstanceProfilesResult & __MetadataBearer;

/**
 * <p>Returns information about all the instance profiles in an AWS account.</p>
 */
export class ListInstanceProfilesCommand extends $Command<
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListInstanceProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInstanceProfilesCommandInput, ListInstanceProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListInstanceProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInstanceProfilesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListInstanceProfilesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInstanceProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListInstanceProfilesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstanceProfilesCommandOutput> {
    return deserializeAws_json1_1ListInstanceProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
