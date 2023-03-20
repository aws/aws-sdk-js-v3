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
import { DescribeElasticsearchDomainRequest, DescribeElasticsearchDomainResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeElasticsearchDomainCommand,
  serializeAws_restJson1DescribeElasticsearchDomainCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeElasticsearchDomainCommand}.
 */
export interface DescribeElasticsearchDomainCommandInput extends DescribeElasticsearchDomainRequest {}
/**
 * @public
 *
 * The output of {@link DescribeElasticsearchDomainCommand}.
 */
export interface DescribeElasticsearchDomainCommandOutput
  extends DescribeElasticsearchDomainResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeElasticsearchDomainCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeElasticsearchDomainCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeElasticsearchDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeElasticsearchDomainCommandInput - {@link DescribeElasticsearchDomainCommandInput}
 * @returns {@link DescribeElasticsearchDomainCommandOutput}
 * @see {@link DescribeElasticsearchDomainCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticsearchDomainCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 *
 */
export class DescribeElasticsearchDomainCommand extends $Command<
  DescribeElasticsearchDomainCommandInput,
  DescribeElasticsearchDomainCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DescribeElasticsearchDomainCommandInput) {
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
  ): Handler<DescribeElasticsearchDomainCommandInput, DescribeElasticsearchDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeElasticsearchDomainCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DescribeElasticsearchDomainCommand";
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
  private serialize(input: DescribeElasticsearchDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeElasticsearchDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeElasticsearchDomainCommandOutput> {
    return deserializeAws_restJson1DescribeElasticsearchDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
