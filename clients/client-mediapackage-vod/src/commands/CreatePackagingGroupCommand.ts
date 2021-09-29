import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { CreatePackagingGroupRequest, CreatePackagingGroupResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreatePackagingGroupCommand,
  serializeAws_restJson1CreatePackagingGroupCommand,
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

export interface CreatePackagingGroupCommandInput extends CreatePackagingGroupRequest {}
export interface CreatePackagingGroupCommandOutput extends CreatePackagingGroupResponse, __MetadataBearer {}

/**
 * Creates a new MediaPackage VOD PackagingGroup resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, CreatePackagingGroupCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, CreatePackagingGroupCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new CreatePackagingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePackagingGroupCommandInput} for command's `input` shape.
 * @see {@link CreatePackagingGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreatePackagingGroupCommand extends $Command<
  CreatePackagingGroupCommandInput,
  CreatePackagingGroupCommandOutput,
  MediaPackageVodClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePackagingGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageVodClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePackagingGroupCommandInput, CreatePackagingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageVodClient";
    const commandName = "CreatePackagingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePackagingGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePackagingGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePackagingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreatePackagingGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePackagingGroupCommandOutput> {
    return deserializeAws_restJson1CreatePackagingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
