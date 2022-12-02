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
  ExportEarthObservationJobInput,
  ExportEarthObservationJobInputFilterSensitiveLog,
  ExportEarthObservationJobOutput,
  ExportEarthObservationJobOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ExportEarthObservationJobCommand,
  serializeAws_restJson1ExportEarthObservationJobCommand,
} from "../protocols/Aws_restJson1";
import {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";

export interface ExportEarthObservationJobCommandInput extends ExportEarthObservationJobInput {}
export interface ExportEarthObservationJobCommandOutput extends ExportEarthObservationJobOutput, __MetadataBearer {}

/**
 * <p>Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an S3 location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, ExportEarthObservationJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, ExportEarthObservationJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * const client = new SageMakerGeospatialClient(config);
 * const command = new ExportEarthObservationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportEarthObservationJobCommandInput} for command's `input` shape.
 * @see {@link ExportEarthObservationJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGeospatialClientResolvedConfig | config} for SageMakerGeospatialClient's `config` shape.
 *
 */
export class ExportEarthObservationJobCommand extends $Command<
  ExportEarthObservationJobCommandInput,
  ExportEarthObservationJobCommandOutput,
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

  constructor(readonly input: ExportEarthObservationJobCommandInput) {
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
  ): Handler<ExportEarthObservationJobCommandInput, ExportEarthObservationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportEarthObservationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerGeospatialClient";
    const commandName = "ExportEarthObservationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportEarthObservationJobInputFilterSensitiveLog,
      outputFilterSensitiveLog: ExportEarthObservationJobOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportEarthObservationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExportEarthObservationJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportEarthObservationJobCommandOutput> {
    return deserializeAws_restJson1ExportEarthObservationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
