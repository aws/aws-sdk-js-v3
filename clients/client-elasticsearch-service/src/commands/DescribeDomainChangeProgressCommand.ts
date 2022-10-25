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
  DescribeDomainChangeProgressRequest,
  DescribeDomainChangeProgressRequestFilterSensitiveLog,
  DescribeDomainChangeProgressResponse,
  DescribeDomainChangeProgressResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeDomainChangeProgressCommand,
  serializeAws_restJson1DescribeDomainChangeProgressCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeDomainChangeProgressCommandInput extends DescribeDomainChangeProgressRequest {}
export interface DescribeDomainChangeProgressCommandOutput
  extends DescribeDomainChangeProgressResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about the current blue/green deployment happening on a domain, including
 *         a change ID, status, and progress stages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeDomainChangeProgressCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeDomainChangeProgressCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeDomainChangeProgressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDomainChangeProgressCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainChangeProgressCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 */
export class DescribeDomainChangeProgressCommand extends $Command<
  DescribeDomainChangeProgressCommandInput,
  DescribeDomainChangeProgressCommandOutput,
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

  constructor(readonly input: DescribeDomainChangeProgressCommandInput) {
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
  ): Handler<DescribeDomainChangeProgressCommandInput, DescribeDomainChangeProgressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDomainChangeProgressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DescribeDomainChangeProgressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDomainChangeProgressRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeDomainChangeProgressResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDomainChangeProgressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDomainChangeProgressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDomainChangeProgressCommandOutput> {
    return deserializeAws_restJson1DescribeDomainChangeProgressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
