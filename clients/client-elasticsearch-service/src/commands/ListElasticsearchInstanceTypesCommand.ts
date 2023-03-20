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
import { ListElasticsearchInstanceTypesRequest, ListElasticsearchInstanceTypesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListElasticsearchInstanceTypesCommand,
  serializeAws_restJson1ListElasticsearchInstanceTypesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListElasticsearchInstanceTypesCommand}.
 */
export interface ListElasticsearchInstanceTypesCommandInput extends ListElasticsearchInstanceTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListElasticsearchInstanceTypesCommand}.
 */
export interface ListElasticsearchInstanceTypesCommandOutput
  extends ListElasticsearchInstanceTypesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>List all Elasticsearch instance types that are supported for given ElasticsearchVersion</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListElasticsearchInstanceTypesCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, ListElasticsearchInstanceTypesCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new ListElasticsearchInstanceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListElasticsearchInstanceTypesCommandInput - {@link ListElasticsearchInstanceTypesCommandInput}
 * @returns {@link ListElasticsearchInstanceTypesCommandOutput}
 * @see {@link ListElasticsearchInstanceTypesCommandInput} for command's `input` shape.
 * @see {@link ListElasticsearchInstanceTypesCommandOutput} for command's `response` shape.
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
export class ListElasticsearchInstanceTypesCommand extends $Command<
  ListElasticsearchInstanceTypesCommandInput,
  ListElasticsearchInstanceTypesCommandOutput,
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
  constructor(readonly input: ListElasticsearchInstanceTypesCommandInput) {
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
  ): Handler<ListElasticsearchInstanceTypesCommandInput, ListElasticsearchInstanceTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListElasticsearchInstanceTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "ListElasticsearchInstanceTypesCommand";
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
  private serialize(
    input: ListElasticsearchInstanceTypesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListElasticsearchInstanceTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListElasticsearchInstanceTypesCommandOutput> {
    return deserializeAws_restJson1ListElasticsearchInstanceTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
