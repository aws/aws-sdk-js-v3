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

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { UpdateTableReplicaAutoScalingInput, UpdateTableReplicaAutoScalingOutput } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand,
  serializeAws_json1_0UpdateTableReplicaAutoScalingCommand,
} from "../protocols/Aws_json1_0";

export interface UpdateTableReplicaAutoScalingCommandInput extends UpdateTableReplicaAutoScalingInput {}
export interface UpdateTableReplicaAutoScalingCommandOutput
  extends UpdateTableReplicaAutoScalingOutput,
    __MetadataBearer {}

/**
 * <p>Updates auto scaling settings on your global tables at once.</p>
 *          <note>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> of global tables.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateTableReplicaAutoScalingCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateTableReplicaAutoScalingCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateTableReplicaAutoScalingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTableReplicaAutoScalingCommandInput} for command's `input` shape.
 * @see {@link UpdateTableReplicaAutoScalingCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateTableReplicaAutoScalingCommand extends $Command<
  UpdateTableReplicaAutoScalingCommandInput,
  UpdateTableReplicaAutoScalingCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateTableReplicaAutoScalingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTableReplicaAutoScalingCommandInput, UpdateTableReplicaAutoScalingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "UpdateTableReplicaAutoScalingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTableReplicaAutoScalingInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTableReplicaAutoScalingOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTableReplicaAutoScalingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateTableReplicaAutoScalingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateTableReplicaAutoScalingCommandOutput> {
    return deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
