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
import { DescribeTableReplicaAutoScalingInput, DescribeTableReplicaAutoScalingOutput } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand,
  serializeAws_json1_0DescribeTableReplicaAutoScalingCommand,
} from "../protocols/Aws_json1_0";

export interface DescribeTableReplicaAutoScalingCommandInput extends DescribeTableReplicaAutoScalingInput {}
export interface DescribeTableReplicaAutoScalingCommandOutput
  extends DescribeTableReplicaAutoScalingOutput,
    __MetadataBearer {}

/**
 * <p>Describes auto scaling settings across replicas of the global table at once.</p>
 *          <note>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> of global tables.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeTableReplicaAutoScalingCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeTableReplicaAutoScalingCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeTableReplicaAutoScalingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTableReplicaAutoScalingCommandInput} for command's `input` shape.
 * @see {@link DescribeTableReplicaAutoScalingCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeTableReplicaAutoScalingCommand extends $Command<
  DescribeTableReplicaAutoScalingCommandInput,
  DescribeTableReplicaAutoScalingCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTableReplicaAutoScalingCommandInput) {
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
  ): Handler<DescribeTableReplicaAutoScalingCommandInput, DescribeTableReplicaAutoScalingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DescribeTableReplicaAutoScalingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTableReplicaAutoScalingInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTableReplicaAutoScalingOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeTableReplicaAutoScalingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeTableReplicaAutoScalingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTableReplicaAutoScalingCommandOutput> {
    return deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
