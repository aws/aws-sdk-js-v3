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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  DeleteObjectsOnCancelRequest,
  DeleteObjectsOnCancelRequestFilterSensitiveLog,
  DeleteObjectsOnCancelResponse,
  DeleteObjectsOnCancelResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteObjectsOnCancelCommand,
  serializeAws_restJson1DeleteObjectsOnCancelCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteObjectsOnCancelCommandInput extends DeleteObjectsOnCancelRequest {}
export interface DeleteObjectsOnCancelCommandOutput extends DeleteObjectsOnCancelResponse, __MetadataBearer {}

/**
 * <p>For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted
 *       if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels.
 *     </p>
 *          <p>
 *       The Glue ETL library function <code>write_dynamic_frame.from_catalog()</code> includes an option to automatically
 *       call <code>DeleteObjectsOnCancel</code> before writes. For more information, see
 *       <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/transactions-data-operations.html#rolling-back-writes">Rolling Back Amazon S3 Writes</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DeleteObjectsOnCancelCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DeleteObjectsOnCancelCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new DeleteObjectsOnCancelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteObjectsOnCancelCommandInput} for command's `input` shape.
 * @see {@link DeleteObjectsOnCancelCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 */
export class DeleteObjectsOnCancelCommand extends $Command<
  DeleteObjectsOnCancelCommandInput,
  DeleteObjectsOnCancelCommandOutput,
  LakeFormationClientResolvedConfig
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

  constructor(readonly input: DeleteObjectsOnCancelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteObjectsOnCancelCommandInput, DeleteObjectsOnCancelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteObjectsOnCancelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "DeleteObjectsOnCancelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteObjectsOnCancelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteObjectsOnCancelResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteObjectsOnCancelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteObjectsOnCancelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteObjectsOnCancelCommandOutput> {
    return deserializeAws_restJson1DeleteObjectsOnCancelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
