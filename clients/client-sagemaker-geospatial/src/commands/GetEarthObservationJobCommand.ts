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
  GetEarthObservationJobInput,
  GetEarthObservationJobInputFilterSensitiveLog,
  GetEarthObservationJobOutput,
  GetEarthObservationJobOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetEarthObservationJobCommand,
  serializeAws_restJson1GetEarthObservationJobCommand,
} from "../protocols/Aws_restJson1";
import {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";

export interface GetEarthObservationJobCommandInput extends GetEarthObservationJobInput {}
export interface GetEarthObservationJobCommandOutput extends GetEarthObservationJobOutput, __MetadataBearer {}

/**
 * <p>Get the details for a previously initiated Earth Observation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, GetEarthObservationJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, GetEarthObservationJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * const client = new SageMakerGeospatialClient(config);
 * const command = new GetEarthObservationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEarthObservationJobCommandInput} for command's `input` shape.
 * @see {@link GetEarthObservationJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGeospatialClientResolvedConfig | config} for SageMakerGeospatialClient's `config` shape.
 *
 */
export class GetEarthObservationJobCommand extends $Command<
  GetEarthObservationJobCommandInput,
  GetEarthObservationJobCommandOutput,
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

  constructor(readonly input: GetEarthObservationJobCommandInput) {
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
  ): Handler<GetEarthObservationJobCommandInput, GetEarthObservationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEarthObservationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerGeospatialClient";
    const commandName = "GetEarthObservationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEarthObservationJobInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetEarthObservationJobOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEarthObservationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEarthObservationJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEarthObservationJobCommandOutput> {
    return deserializeAws_restJson1GetEarthObservationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
