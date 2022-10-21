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
import {
  UpdateContributorInsightsInput,
  UpdateContributorInsightsInputFilterSensitiveLog,
  UpdateContributorInsightsOutput,
  UpdateContributorInsightsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0UpdateContributorInsightsCommand,
  serializeAws_json1_0UpdateContributorInsightsCommand,
} from "../protocols/Aws_json1_0";

export interface UpdateContributorInsightsCommandInput extends UpdateContributorInsightsInput {}
export interface UpdateContributorInsightsCommandOutput extends UpdateContributorInsightsOutput, __MetadataBearer {}

/**
 * <p>Updates the status for contributor insights for a specific table or index. CloudWatch
 *             Contributor Insights for DynamoDB graphs display the partition key and (if applicable)
 *             sort key of frequently accessed items and frequently throttled items in plaintext. If
 *             you require the use of Amazon Web Services Key Management Service (KMS) to encrypt this
 *             table’s partition key and sort key data with an Amazon Web Services managed key or
 *             customer managed key, you should not enable CloudWatch Contributor Insights for DynamoDB
 *             for this table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateContributorInsightsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateContributorInsightsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateContributorInsightsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContributorInsightsCommandInput} for command's `input` shape.
 * @see {@link UpdateContributorInsightsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 */
export class UpdateContributorInsightsCommand extends $Command<
  UpdateContributorInsightsCommandInput,
  UpdateContributorInsightsCommandOutput,
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

  constructor(readonly input: UpdateContributorInsightsCommandInput) {
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
  ): Handler<UpdateContributorInsightsCommandInput, UpdateContributorInsightsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateContributorInsightsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "UpdateContributorInsightsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateContributorInsightsInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateContributorInsightsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateContributorInsightsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateContributorInsightsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateContributorInsightsCommandOutput> {
    return deserializeAws_json1_0UpdateContributorInsightsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
