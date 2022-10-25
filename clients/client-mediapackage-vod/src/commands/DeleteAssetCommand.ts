// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import {
  DeleteAssetRequest,
  DeleteAssetRequestFilterSensitiveLog,
  DeleteAssetResponse,
  DeleteAssetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAssetCommand,
  serializeAws_restJson1DeleteAssetCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteAssetCommandInput extends DeleteAssetRequest {}
export interface DeleteAssetCommandOutput extends DeleteAssetResponse, __MetadataBearer {}

/**
 * Deletes an existing MediaPackage VOD Asset resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, DeleteAssetCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, DeleteAssetCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new DeleteAssetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssetCommandInput} for command's `input` shape.
 * @see {@link DeleteAssetCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for MediaPackageVodClient's `config` shape.
 *
 */
export class DeleteAssetCommand extends $Command<
  DeleteAssetCommandInput,
  DeleteAssetCommandOutput,
  MediaPackageVodClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: DeleteAssetCommandInput) {
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
  ): Handler<DeleteAssetCommandInput, DeleteAssetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteAssetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageVodClient";
    const commandName = "DeleteAssetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAssetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteAssetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAssetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAssetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAssetCommandOutput> {
    return deserializeAws_restJson1DeleteAssetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
