import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { UpdateImagePermissionsRequest, UpdateImagePermissionsResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateImagePermissionsCommand,
  serializeAws_json1_1UpdateImagePermissionsCommand,
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

export type UpdateImagePermissionsCommandInput = UpdateImagePermissionsRequest;
export type UpdateImagePermissionsCommandOutput = UpdateImagePermissionsResult & __MetadataBearer;

/**
 * <p>Adds or updates permissions for the specified private image. </p>
 */
export class UpdateImagePermissionsCommand extends $Command<
  UpdateImagePermissionsCommandInput,
  UpdateImagePermissionsCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateImagePermissionsCommandInput) {
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
  ): Handler<UpdateImagePermissionsCommandInput, UpdateImagePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "UpdateImagePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateImagePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateImagePermissionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateImagePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateImagePermissionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateImagePermissionsCommandOutput> {
    return deserializeAws_json1_1UpdateImagePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
