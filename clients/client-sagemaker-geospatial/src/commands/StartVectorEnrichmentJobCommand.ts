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
  StartVectorEnrichmentJobInput,
  StartVectorEnrichmentJobInputFilterSensitiveLog,
  StartVectorEnrichmentJobOutput,
  StartVectorEnrichmentJobOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartVectorEnrichmentJobCommand,
  serializeAws_restJson1StartVectorEnrichmentJobCommand,
} from "../protocols/Aws_restJson1";
import {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";

export interface StartVectorEnrichmentJobCommandInput extends StartVectorEnrichmentJobInput {}
export interface StartVectorEnrichmentJobCommandOutput extends StartVectorEnrichmentJobOutput, __MetadataBearer {}

/**
 * <p>Creates a Vector Enrichment job for the supplied job type.  Currently, there are two supported job types: reverse geocoding and map matching.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, StartVectorEnrichmentJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, StartVectorEnrichmentJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * const client = new SageMakerGeospatialClient(config);
 * const command = new StartVectorEnrichmentJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartVectorEnrichmentJobCommandInput} for command's `input` shape.
 * @see {@link StartVectorEnrichmentJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGeospatialClientResolvedConfig | config} for SageMakerGeospatialClient's `config` shape.
 *
 */
export class StartVectorEnrichmentJobCommand extends $Command<
  StartVectorEnrichmentJobCommandInput,
  StartVectorEnrichmentJobCommandOutput,
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

  constructor(readonly input: StartVectorEnrichmentJobCommandInput) {
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
  ): Handler<StartVectorEnrichmentJobCommandInput, StartVectorEnrichmentJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartVectorEnrichmentJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerGeospatialClient";
    const commandName = "StartVectorEnrichmentJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartVectorEnrichmentJobInputFilterSensitiveLog,
      outputFilterSensitiveLog: StartVectorEnrichmentJobOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartVectorEnrichmentJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartVectorEnrichmentJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartVectorEnrichmentJobCommandOutput> {
    return deserializeAws_restJson1StartVectorEnrichmentJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
