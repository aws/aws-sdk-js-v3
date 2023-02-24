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

import { MediaStoreDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreDataClient";
import {
  DescribeObjectRequest,
  DescribeObjectRequestFilterSensitiveLog,
  DescribeObjectResponse,
  DescribeObjectResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeObjectCommand,
  serializeAws_restJson1DescribeObjectCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeObjectCommandInput extends DescribeObjectRequest {}
export interface DescribeObjectCommandOutput extends DescribeObjectResponse, __MetadataBearer {}

/**
 * <p>Gets the headers for an object at the specified path.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreDataClient, DescribeObjectCommand } from "@aws-sdk/client-mediastore-data"; // ES Modules import
 * // const { MediaStoreDataClient, DescribeObjectCommand } = require("@aws-sdk/client-mediastore-data"); // CommonJS import
 * const client = new MediaStoreDataClient(config);
 * const command = new DescribeObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeObjectCommandInput} for command's `input` shape.
 * @see {@link DescribeObjectCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreDataClientResolvedConfig | config} for MediaStoreDataClient's `config` shape.
 *
 */
export class DescribeObjectCommand extends $Command<
  DescribeObjectCommandInput,
  DescribeObjectCommandOutput,
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

  constructor(readonly input: DescribeObjectCommandInput) {
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
  ): Handler<DescribeObjectCommandInput, DescribeObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeObjectCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreDataClient";
    const commandName = "DescribeObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeObjectRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeObjectResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeObjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeObjectCommandOutput> {
    return deserializeAws_restJson1DescribeObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
