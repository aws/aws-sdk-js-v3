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

import { DynamoDBStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBStreamsClient";
import {
  GetShardIteratorInput,
  GetShardIteratorInputFilterSensitiveLog,
  GetShardIteratorOutput,
  GetShardIteratorOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetShardIteratorCommand,
  serializeAws_json1_0GetShardIteratorCommand,
} from "../protocols/Aws_json1_0";

export interface GetShardIteratorCommandInput extends GetShardIteratorInput {}
export interface GetShardIteratorCommandOutput extends GetShardIteratorOutput, __MetadataBearer {}

/**
 * <p>Returns a shard iterator. A shard iterator provides information
 *       about how to retrieve the stream records from within a shard.  Use
 *       the shard iterator in a subsequent
 *       <code>GetRecords</code> request to read the stream records
 *       from the shard.</p>
 *          <note>
 *             <p>A shard iterator expires 15 minutes after it is returned to the requester.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBStreamsClient, GetShardIteratorCommand } from "@aws-sdk/client-dynamodb-streams"; // ES Modules import
 * // const { DynamoDBStreamsClient, GetShardIteratorCommand } = require("@aws-sdk/client-dynamodb-streams"); // CommonJS import
 * const client = new DynamoDBStreamsClient(config);
 * const command = new GetShardIteratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetShardIteratorCommandInput} for command's `input` shape.
 * @see {@link GetShardIteratorCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBStreamsClientResolvedConfig | config} for DynamoDBStreamsClient's `config` shape.
 *
 */
export class GetShardIteratorCommand extends $Command<
  GetShardIteratorCommandInput,
  GetShardIteratorCommandOutput,
  DynamoDBStreamsClientResolvedConfig
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

  constructor(readonly input: GetShardIteratorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBStreamsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetShardIteratorCommandInput, GetShardIteratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetShardIteratorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBStreamsClient";
    const commandName = "GetShardIteratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetShardIteratorInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetShardIteratorOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetShardIteratorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetShardIteratorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetShardIteratorCommandOutput> {
    return deserializeAws_json1_0GetShardIteratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
