import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeImageBuildersRequest, DescribeImageBuildersResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeImageBuildersCommand,
  serializeAws_json1_1DescribeImageBuildersCommand,
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

export type DescribeImageBuildersCommandInput = DescribeImageBuildersRequest;
export type DescribeImageBuildersCommandOutput = DescribeImageBuildersResult & __MetadataBearer;

/**
 * <p>Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.</p>
 */
export class DescribeImageBuildersCommand extends $Command<
  DescribeImageBuildersCommandInput,
  DescribeImageBuildersCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeImageBuildersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeImageBuildersCommandInput, DescribeImageBuildersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "DescribeImageBuildersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeImageBuildersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeImageBuildersResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeImageBuildersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeImageBuildersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeImageBuildersCommandOutput> {
    return deserializeAws_json1_1DescribeImageBuildersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
