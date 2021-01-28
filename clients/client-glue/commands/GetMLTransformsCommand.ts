import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetMLTransformsRequest, GetMLTransformsResponse } from "../models/models_1";
import {
  deserializeAws_json1_1GetMLTransformsCommand,
  serializeAws_json1_1GetMLTransformsCommand,
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

export type GetMLTransformsCommandInput = GetMLTransformsRequest;
export type GetMLTransformsCommandOutput = GetMLTransformsResponse & __MetadataBearer;

/**
 * <p>Gets a sortable, filterable list of existing AWS Glue machine learning transforms. Machine
 *       learning transforms are a special type of transform that use machine learning to learn the
 *       details of the transformation to be performed by learning from examples provided by humans.
 *       These transformations are then saved by AWS Glue, and you can retrieve their metadata by
 *       calling <code>GetMLTransforms</code>.</p>
 */
export class GetMLTransformsCommand extends $Command<
  GetMLTransformsCommandInput,
  GetMLTransformsCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMLTransformsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMLTransformsCommandInput, GetMLTransformsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetMLTransformsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMLTransformsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMLTransformsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMLTransformsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMLTransformsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMLTransformsCommandOutput> {
    return deserializeAws_json1_1GetMLTransformsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
