import {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";
import { GetTagValuesInput, GetTagValuesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetTagValuesCommand,
  serializeAws_json1_1GetTagValuesCommand,
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

export type GetTagValuesCommandInput = GetTagValuesInput;
export type GetTagValuesCommandOutput = GetTagValuesOutput & __MetadataBearer;

/**
 * <p>Returns all tag values for the specified key in the specified Region for the AWS
 *             account.</p>
 */
export class GetTagValuesCommand extends $Command<
  GetTagValuesCommandInput,
  GetTagValuesCommandOutput,
  ResourceGroupsTaggingAPIClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTagValuesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsTaggingAPIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTagValuesCommandInput, GetTagValuesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsTaggingAPIClient";
    const commandName = "GetTagValuesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTagValuesInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetTagValuesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTagValuesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetTagValuesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTagValuesCommandOutput> {
    return deserializeAws_json1_1GetTagValuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
