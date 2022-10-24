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

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import {
  BatchDeleteDocumentRequest,
  BatchDeleteDocumentRequestFilterSensitiveLog,
  BatchDeleteDocumentResponse,
  BatchDeleteDocumentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchDeleteDocumentCommand,
  serializeAws_json1_1BatchDeleteDocumentCommand,
} from "../protocols/Aws_json1_1";

export interface BatchDeleteDocumentCommandInput extends BatchDeleteDocumentRequest {}
export interface BatchDeleteDocumentCommandOutput extends BatchDeleteDocumentResponse, __MetadataBearer {}

/**
 * <p>Removes one or more documents from an index. The documents must have
 *       been added with the <code>BatchPutDocument</code> API.</p>
 *          <p>The documents are deleted asynchronously. You can see the progress of
 *       the deletion by using Amazon Web Services CloudWatch. Any error messages related to the
 *       processing of the batch are sent to you CloudWatch log.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, BatchDeleteDocumentCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, BatchDeleteDocumentCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new BatchDeleteDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteDocumentCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteDocumentCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 */
export class BatchDeleteDocumentCommand extends $Command<
  BatchDeleteDocumentCommandInput,
  BatchDeleteDocumentCommandOutput,
  KendraClientResolvedConfig
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

  constructor(readonly input: BatchDeleteDocumentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeleteDocumentCommandInput, BatchDeleteDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDeleteDocumentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "BatchDeleteDocumentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteDocumentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteDocumentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDeleteDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchDeleteDocumentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDeleteDocumentCommandOutput> {
    return deserializeAws_json1_1BatchDeleteDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
