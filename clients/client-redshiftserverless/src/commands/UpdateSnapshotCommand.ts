// smithy-typescript generated code
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

import { UpdateSnapshotRequest, UpdateSnapshotResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateSnapshotCommand,
  serializeAws_json1_1UpdateSnapshotCommand,
} from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

export interface UpdateSnapshotCommandInput extends UpdateSnapshotRequest {}
export interface UpdateSnapshotCommandOutput extends UpdateSnapshotResponse, __MetadataBearer {}

/**
 * <p>Updates a snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, UpdateSnapshotCommand } from "@aws-sdk/client-redshiftserverless"; // ES Modules import
 * // const { RedshiftServerlessClient, UpdateSnapshotCommand } = require("@aws-sdk/client-redshiftserverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const command = new UpdateSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSnapshotCommandInput} for command's `input` shape.
 * @see {@link UpdateSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 */
export class UpdateSnapshotCommand extends $Command<
  UpdateSnapshotCommandInput,
  UpdateSnapshotCommandOutput,
  RedshiftServerlessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSnapshotCommandInput, UpdateSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "UpdateSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSnapshotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSnapshotResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSnapshotCommandOutput> {
    return deserializeAws_json1_1UpdateSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
