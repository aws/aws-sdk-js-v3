import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetContainerImagesRequest, GetContainerImagesResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetContainerImagesCommand,
  serializeAws_json1_1GetContainerImagesCommand,
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

export type GetContainerImagesCommandInput = GetContainerImagesRequest;
export type GetContainerImagesCommandOutput = GetContainerImagesResult & __MetadataBearer;

/**
 * <p>Returns the container images that are registered to your Amazon Lightsail container
 *       service.</p>
 *
 *          <note>
 *             <p>If you created a deployment on your Lightsail container service that uses container
 *         images from a public registry like Docker Hub, those images are not returned as part of this
 *         action. Those images are not registered to your Lightsail container service.</p>
 *          </note>
 */
export class GetContainerImagesCommand extends $Command<
  GetContainerImagesCommandInput,
  GetContainerImagesCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetContainerImagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetContainerImagesCommandInput, GetContainerImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetContainerImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContainerImagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetContainerImagesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContainerImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetContainerImagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetContainerImagesCommandOutput> {
    return deserializeAws_json1_1GetContainerImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
