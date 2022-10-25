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

import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import {
  BatchGetStreamKeyRequest,
  BatchGetStreamKeyRequestFilterSensitiveLog,
  BatchGetStreamKeyResponse,
  BatchGetStreamKeyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchGetStreamKeyCommand,
  serializeAws_restJson1BatchGetStreamKeyCommand,
} from "../protocols/Aws_restJson1";

export interface BatchGetStreamKeyCommandInput extends BatchGetStreamKeyRequest {}
export interface BatchGetStreamKeyCommandOutput extends BatchGetStreamKeyResponse, __MetadataBearer {}

/**
 * <p>Performs <a>GetStreamKey</a> on multiple ARNs simultaneously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, BatchGetStreamKeyCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, BatchGetStreamKeyCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new BatchGetStreamKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetStreamKeyCommandInput} for command's `input` shape.
 * @see {@link BatchGetStreamKeyCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 */
export class BatchGetStreamKeyCommand extends $Command<
  BatchGetStreamKeyCommandInput,
  BatchGetStreamKeyCommandOutput,
  IvsClientResolvedConfig
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

  constructor(readonly input: BatchGetStreamKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetStreamKeyCommandInput, BatchGetStreamKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetStreamKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "BatchGetStreamKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetStreamKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchGetStreamKeyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetStreamKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchGetStreamKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetStreamKeyCommandOutput> {
    return deserializeAws_restJson1BatchGetStreamKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
