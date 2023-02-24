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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  DeleteInstanceSnapshotRequest,
  DeleteInstanceSnapshotRequestFilterSensitiveLog,
  DeleteInstanceSnapshotResult,
  DeleteInstanceSnapshotResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteInstanceSnapshotCommand,
  serializeAws_json1_1DeleteInstanceSnapshotCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteInstanceSnapshotCommandInput extends DeleteInstanceSnapshotRequest {}
export interface DeleteInstanceSnapshotCommandOutput extends DeleteInstanceSnapshotResult, __MetadataBearer {}

/**
 * <p>Deletes a specific snapshot of a virtual private server (or
 *       <i>instance</i>).</p>
 *          <p>The <code>delete instance snapshot</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>instance snapshot name</code>. For
 *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteInstanceSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteInstanceSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteInstanceSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInstanceSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class DeleteInstanceSnapshotCommand extends $Command<
  DeleteInstanceSnapshotCommandInput,
  DeleteInstanceSnapshotCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: DeleteInstanceSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteInstanceSnapshotCommandInput, DeleteInstanceSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteInstanceSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteInstanceSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteInstanceSnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteInstanceSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteInstanceSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteInstanceSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteInstanceSnapshotCommandOutput> {
    return deserializeAws_json1_1DeleteInstanceSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
