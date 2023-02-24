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
  DescribeElasticsearchDomainConfigRequest,
  DescribeElasticsearchDomainConfigRequestFilterSensitiveLog,
  DescribeElasticsearchDomainConfigResponse,
  DescribeElasticsearchDomainConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeElasticsearchDomainConfigCommand,
  serializeAws_restJson1DescribeElasticsearchDomainConfigCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeElasticsearchDomainConfigCommandInput extends DescribeElasticsearchDomainConfigRequest {}
export interface DescribeElasticsearchDomainConfigCommandOutput
  extends DescribeElasticsearchDomainConfigResponse,
    __MetadataBearer {}

/**
 * <p>Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeElasticsearchDomainConfigCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeElasticsearchDomainConfigCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeElasticsearchDomainConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeElasticsearchDomainConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticsearchDomainConfigCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 */
export class DescribeElasticsearchDomainConfigCommand extends $Command<
  DescribeElasticsearchDomainConfigCommandInput,
  DescribeElasticsearchDomainConfigCommandOutput,
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

  constructor(readonly input: DescribeElasticsearchDomainConfigCommandInput) {
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
  ): Handler<DescribeElasticsearchDomainConfigCommandInput, DescribeElasticsearchDomainConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeElasticsearchDomainConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DescribeElasticsearchDomainConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeElasticsearchDomainConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeElasticsearchDomainConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeElasticsearchDomainConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeElasticsearchDomainConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeElasticsearchDomainConfigCommandOutput> {
    return deserializeAws_restJson1DescribeElasticsearchDomainConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
