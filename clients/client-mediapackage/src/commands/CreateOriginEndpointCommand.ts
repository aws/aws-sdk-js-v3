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
  CreateOriginEndpointRequest,
  CreateOriginEndpointRequestFilterSensitiveLog,
  CreateOriginEndpointResponse,
  CreateOriginEndpointResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateOriginEndpointCommand,
  serializeAws_restJson1CreateOriginEndpointCommand,
} from "../protocols/Aws_restJson1";

export interface CreateOriginEndpointCommandInput extends CreateOriginEndpointRequest {}
export interface CreateOriginEndpointCommandOutput extends CreateOriginEndpointResponse, __MetadataBearer {}

/**
 * Creates a new OriginEndpoint record.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, CreateOriginEndpointCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, CreateOriginEndpointCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new CreateOriginEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOriginEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateOriginEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for MediaPackageClient's `config` shape.
 *
 */
export class CreateOriginEndpointCommand extends $Command<
  CreateOriginEndpointCommandInput,
  CreateOriginEndpointCommandOutput,
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

  constructor(readonly input: CreateOriginEndpointCommandInput) {
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
  ): Handler<CreateOriginEndpointCommandInput, CreateOriginEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateOriginEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageClient";
    const commandName = "CreateOriginEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateOriginEndpointRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateOriginEndpointResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateOriginEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateOriginEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateOriginEndpointCommandOutput> {
    return deserializeAws_restJson1CreateOriginEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
