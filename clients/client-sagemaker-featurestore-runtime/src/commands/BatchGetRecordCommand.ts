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
  BatchGetRecordRequest,
  BatchGetRecordRequestFilterSensitiveLog,
  BatchGetRecordResponse,
  BatchGetRecordResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchGetRecordCommand,
  serializeAws_restJson1BatchGetRecordCommand,
} from "../protocols/Aws_restJson1";
import {
  SageMakerFeatureStoreRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerFeatureStoreRuntimeClient";

export interface BatchGetRecordCommandInput extends BatchGetRecordRequest {}
export interface BatchGetRecordCommandOutput extends BatchGetRecordResponse, __MetadataBearer {}

/**
 * <p>Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, BatchGetRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, BatchGetRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const command = new BatchGetRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetRecordCommandInput} for command's `input` shape.
 * @see {@link BatchGetRecordCommandOutput} for command's `response` shape.
 * @see {@link SageMakerFeatureStoreRuntimeClientResolvedConfig | config} for SageMakerFeatureStoreRuntimeClient's `config` shape.
 *
 */
export class BatchGetRecordCommand extends $Command<
  BatchGetRecordCommandInput,
  BatchGetRecordCommandOutput,
  SageMakerFeatureStoreRuntimeClientResolvedConfig
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

  constructor(readonly input: BatchGetRecordCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerFeatureStoreRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetRecordCommandInput, BatchGetRecordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetRecordCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerFeatureStoreRuntimeClient";
    const commandName = "BatchGetRecordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetRecordRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchGetRecordResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetRecordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchGetRecordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetRecordCommandOutput> {
    return deserializeAws_restJson1BatchGetRecordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
