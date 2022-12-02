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
  ListEarthObservationJobInput,
  ListEarthObservationJobInputFilterSensitiveLog,
  ListEarthObservationJobOutput,
  ListEarthObservationJobOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListEarthObservationJobsCommand,
  serializeAws_restJson1ListEarthObservationJobsCommand,
} from "../protocols/Aws_restJson1";
import {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";

export interface ListEarthObservationJobsCommandInput extends ListEarthObservationJobInput {}
export interface ListEarthObservationJobsCommandOutput extends ListEarthObservationJobOutput, __MetadataBearer {}

/**
 * <p>Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, ListEarthObservationJobsCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, ListEarthObservationJobsCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * const client = new SageMakerGeospatialClient(config);
 * const command = new ListEarthObservationJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEarthObservationJobsCommandInput} for command's `input` shape.
 * @see {@link ListEarthObservationJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGeospatialClientResolvedConfig | config} for SageMakerGeospatialClient's `config` shape.
 *
 */
export class ListEarthObservationJobsCommand extends $Command<
  ListEarthObservationJobsCommandInput,
  ListEarthObservationJobsCommandOutput,
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

  constructor(readonly input: ListEarthObservationJobsCommandInput) {
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
  ): Handler<ListEarthObservationJobsCommandInput, ListEarthObservationJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEarthObservationJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerGeospatialClient";
    const commandName = "ListEarthObservationJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEarthObservationJobInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListEarthObservationJobOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEarthObservationJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEarthObservationJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEarthObservationJobsCommandOutput> {
    return deserializeAws_restJson1ListEarthObservationJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
