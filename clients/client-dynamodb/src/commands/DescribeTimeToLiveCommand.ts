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

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeTimeToLiveInput, DescribeTimeToLiveOutput } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeTimeToLiveCommand,
  serializeAws_json1_0DescribeTimeToLiveCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link DescribeTimeToLiveCommand}.
 */
export interface DescribeTimeToLiveCommandInput extends DescribeTimeToLiveInput {}
/**
 * @public
 *
 * The output of {@link DescribeTimeToLiveCommand}.
 */
export interface DescribeTimeToLiveCommandOutput extends DescribeTimeToLiveOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gives a description of the Time to Live (TTL) status on the specified table. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeTimeToLiveCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeTimeToLiveCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // DescribeTimeToLiveInput
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new DescribeTimeToLiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeTimeToLiveCommandInput - {@link DescribeTimeToLiveCommandInput}
 * @returns {@link DescribeTimeToLiveCommandOutput}
 * @see {@link DescribeTimeToLiveCommandInput} for command's `input` shape.
 * @see {@link DescribeTimeToLiveCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent table or index. The resource might not
 *             be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 *
 */
export class DescribeTimeToLiveCommand extends $Command<
  DescribeTimeToLiveCommandInput,
  DescribeTimeToLiveCommandOutput,
  DynamoDBClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: DescribeTimeToLiveCommandInput) {
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
  ): Handler<DescribeTimeToLiveCommandInput, DescribeTimeToLiveCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTimeToLiveCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DescribeTimeToLiveCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeTimeToLiveCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeTimeToLiveCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTimeToLiveCommandOutput> {
    return deserializeAws_json1_0DescribeTimeToLiveCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
