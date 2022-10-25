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
  SdkStream as __SdkStream,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  WithSdkStreamMixin as __WithSdkStreamMixin,
} from "@aws-sdk/types";

import { MediaStoreDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreDataClient";
import {
  GetObjectRequest,
  GetObjectRequestFilterSensitiveLog,
  GetObjectResponse,
  GetObjectResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetObjectCommand,
  serializeAws_restJson1GetObjectCommand,
} from "../protocols/Aws_restJson1";

export interface GetObjectCommandInput extends GetObjectRequest {}
export interface GetObjectCommandOutput extends __WithSdkStreamMixin<GetObjectResponse, "Body">, __MetadataBearer {}

/**
 * <p>Downloads the object at the specified path. If the object’s upload availability is set to <code>streaming</code>, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreDataClient, GetObjectCommand } from "@aws-sdk/client-mediastore-data"; // ES Modules import
 * // const { MediaStoreDataClient, GetObjectCommand } = require("@aws-sdk/client-mediastore-data"); // CommonJS import
 * const client = new MediaStoreDataClient(config);
 * const command = new GetObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetObjectCommandInput} for command's `input` shape.
 * @see {@link GetObjectCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreDataClientResolvedConfig | config} for MediaStoreDataClient's `config` shape.
 *
 */
export class GetObjectCommand extends $Command<
  GetObjectCommandInput,
  GetObjectCommandOutput,
  MediaStoreDataClientResolvedConfig
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

  constructor(readonly input: GetObjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetObjectCommandInput, GetObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetObjectCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreDataClient";
    const commandName = "GetObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetObjectRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetObjectResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetObjectCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<GetObjectCommandOutput> {
    return deserializeAws_restJson1GetObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
