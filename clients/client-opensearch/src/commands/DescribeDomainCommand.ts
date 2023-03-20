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

import { DescribeDomainRequest, DescribeDomainResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  deserializeAws_restJson1DescribeDomainCommand,
  serializeAws_restJson1DescribeDomainCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeDomainCommand}.
 */
export interface DescribeDomainCommandInput extends DescribeDomainRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDomainCommand}.
 */
export interface DescribeDomainCommandOutput extends DescribeDomainResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the domain configuration for the specified Amazon OpenSearch Service domain,
 *    including the domain ID, domain service endpoint, and domain ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeDomainCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeDomainCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new DescribeDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeDomainCommandInput - {@link DescribeDomainCommandInput}
 * @returns {@link DescribeDomainCommandOutput}
 * @see {@link DescribeDomainCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist..</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 *
 */
export class DescribeDomainCommand extends $Command<
  DescribeDomainCommandInput,
  DescribeDomainCommandOutput,
  OpenSearchClientResolvedConfig
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
  constructor(readonly input: DescribeDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDomainCommandInput, DescribeDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDomainCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "DescribeDomainCommand";
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
  private serialize(input: DescribeDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDomainCommandOutput> {
    return deserializeAws_restJson1DescribeDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
