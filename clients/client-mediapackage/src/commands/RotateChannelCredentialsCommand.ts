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

import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import {
  RotateChannelCredentialsRequest,
  RotateChannelCredentialsRequestFilterSensitiveLog,
  RotateChannelCredentialsResponse,
  RotateChannelCredentialsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RotateChannelCredentialsCommand,
  serializeAws_restJson1RotateChannelCredentialsCommand,
} from "../protocols/Aws_restJson1";

export interface RotateChannelCredentialsCommandInput extends RotateChannelCredentialsRequest {}
export interface RotateChannelCredentialsCommandOutput extends RotateChannelCredentialsResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * Changes the Channel's first IngestEndpoint's username and password. WARNING - This API is deprecated. Please use RotateIngestEndpointCredentials instead
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, RotateChannelCredentialsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, RotateChannelCredentialsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new RotateChannelCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RotateChannelCredentialsCommandInput} for command's `input` shape.
 * @see {@link RotateChannelCredentialsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for MediaPackageClient's `config` shape.
 *
 */
export class RotateChannelCredentialsCommand extends $Command<
  RotateChannelCredentialsCommandInput,
  RotateChannelCredentialsCommandOutput,
  MediaPackageClientResolvedConfig
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

  constructor(readonly input: RotateChannelCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RotateChannelCredentialsCommandInput, RotateChannelCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RotateChannelCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageClient";
    const commandName = "RotateChannelCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RotateChannelCredentialsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RotateChannelCredentialsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RotateChannelCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RotateChannelCredentialsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RotateChannelCredentialsCommandOutput> {
    return deserializeAws_restJson1RotateChannelCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
