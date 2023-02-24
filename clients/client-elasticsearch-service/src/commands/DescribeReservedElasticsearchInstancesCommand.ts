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

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  DescribeReservedElasticsearchInstancesRequest,
  DescribeReservedElasticsearchInstancesRequestFilterSensitiveLog,
  DescribeReservedElasticsearchInstancesResponse,
  DescribeReservedElasticsearchInstancesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommand,
  serializeAws_restJson1DescribeReservedElasticsearchInstancesCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeReservedElasticsearchInstancesCommandInput
  extends DescribeReservedElasticsearchInstancesRequest {}
export interface DescribeReservedElasticsearchInstancesCommandOutput
  extends DescribeReservedElasticsearchInstancesResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about reserved Elasticsearch instances for this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeReservedElasticsearchInstancesCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeReservedElasticsearchInstancesCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeReservedElasticsearchInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedElasticsearchInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedElasticsearchInstancesCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 */
export class DescribeReservedElasticsearchInstancesCommand extends $Command<
  DescribeReservedElasticsearchInstancesCommandInput,
  DescribeReservedElasticsearchInstancesCommandOutput,
  ElasticsearchServiceClientResolvedConfig
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

  constructor(readonly input: DescribeReservedElasticsearchInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReservedElasticsearchInstancesCommandInput, DescribeReservedElasticsearchInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReservedElasticsearchInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DescribeReservedElasticsearchInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReservedElasticsearchInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeReservedElasticsearchInstancesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReservedElasticsearchInstancesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeReservedElasticsearchInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedElasticsearchInstancesCommandOutput> {
    return deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
