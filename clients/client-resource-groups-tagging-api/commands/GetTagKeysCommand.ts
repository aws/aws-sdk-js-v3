import {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";
import { GetTagKeysInput, GetTagKeysOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetTagKeysCommand,
  serializeAws_json1_1GetTagKeysCommand,
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

export type GetTagKeysCommandInput = GetTagKeysInput;
export type GetTagKeysCommandOutput = GetTagKeysOutput & __MetadataBearer;

/**
 * <p>Returns all tag keys in the specified Region for the AWS account.</p>
 */
export class GetTagKeysCommand extends $Command<
  GetTagKeysCommandInput,
  GetTagKeysCommandOutput,
  ResourceGroupsTaggingAPIClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTagKeysCommandInput) {
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
  ): Handler<GetTagKeysCommandInput, GetTagKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsTaggingAPIClient";
    const commandName = "GetTagKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTagKeysInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetTagKeysOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTagKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetTagKeysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTagKeysCommandOutput> {
    return deserializeAws_json1_1GetTagKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
