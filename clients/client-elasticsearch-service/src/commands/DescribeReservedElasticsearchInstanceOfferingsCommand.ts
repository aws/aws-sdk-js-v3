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
  DescribeReservedElasticsearchInstanceOfferingsRequest,
  DescribeReservedElasticsearchInstanceOfferingsRequestFilterSensitiveLog,
  DescribeReservedElasticsearchInstanceOfferingsResponse,
  DescribeReservedElasticsearchInstanceOfferingsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand,
  serializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeReservedElasticsearchInstanceOfferingsCommandInput
  extends DescribeReservedElasticsearchInstanceOfferingsRequest {}
export interface DescribeReservedElasticsearchInstanceOfferingsCommandOutput
  extends DescribeReservedElasticsearchInstanceOfferingsResponse,
    __MetadataBearer {}

/**
 * <p>Lists available reserved Elasticsearch instance offerings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeReservedElasticsearchInstanceOfferingsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeReservedElasticsearchInstanceOfferingsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeReservedElasticsearchInstanceOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedElasticsearchInstanceOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedElasticsearchInstanceOfferingsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 */
export class DescribeReservedElasticsearchInstanceOfferingsCommand extends $Command<
  DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  DescribeReservedElasticsearchInstanceOfferingsCommandOutput,
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

  constructor(readonly input: DescribeReservedElasticsearchInstanceOfferingsCommandInput) {
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
  ): Handler<
    DescribeReservedElasticsearchInstanceOfferingsCommandInput,
    DescribeReservedElasticsearchInstanceOfferingsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeReservedElasticsearchInstanceOfferingsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DescribeReservedElasticsearchInstanceOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReservedElasticsearchInstanceOfferingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeReservedElasticsearchInstanceOfferingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput> {
    return deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
