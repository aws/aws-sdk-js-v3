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
  ListVectorEnrichmentJobInput,
  ListVectorEnrichmentJobInputFilterSensitiveLog,
  ListVectorEnrichmentJobOutput,
  ListVectorEnrichmentJobOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListVectorEnrichmentJobsCommand,
  serializeAws_restJson1ListVectorEnrichmentJobsCommand,
} from "../protocols/Aws_restJson1";
import {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";

export interface ListVectorEnrichmentJobsCommandInput extends ListVectorEnrichmentJobInput {}
export interface ListVectorEnrichmentJobsCommandOutput extends ListVectorEnrichmentJobOutput, __MetadataBearer {}

/**
 * <p>Retrieves a list of vector enrichment jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, ListVectorEnrichmentJobsCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, ListVectorEnrichmentJobsCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * const client = new SageMakerGeospatialClient(config);
 * const command = new ListVectorEnrichmentJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVectorEnrichmentJobsCommandInput} for command's `input` shape.
 * @see {@link ListVectorEnrichmentJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGeospatialClientResolvedConfig | config} for SageMakerGeospatialClient's `config` shape.
 *
 */
export class ListVectorEnrichmentJobsCommand extends $Command<
  ListVectorEnrichmentJobsCommandInput,
  ListVectorEnrichmentJobsCommandOutput,
  SageMakerGeospatialClientResolvedConfig
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

  constructor(readonly input: ListVectorEnrichmentJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerGeospatialClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVectorEnrichmentJobsCommandInput, ListVectorEnrichmentJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVectorEnrichmentJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerGeospatialClient";
    const commandName = "ListVectorEnrichmentJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVectorEnrichmentJobInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListVectorEnrichmentJobOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVectorEnrichmentJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListVectorEnrichmentJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVectorEnrichmentJobsCommandOutput> {
    return deserializeAws_restJson1ListVectorEnrichmentJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
