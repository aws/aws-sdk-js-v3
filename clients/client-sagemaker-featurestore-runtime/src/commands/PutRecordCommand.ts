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

import { PutRecordRequest, PutRecordRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1PutRecordCommand,
  serializeAws_restJson1PutRecordCommand,
} from "../protocols/Aws_restJson1";
import {
  SageMakerFeatureStoreRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerFeatureStoreRuntimeClient";

export interface PutRecordCommandInput extends PutRecordRequest {}
export interface PutRecordCommandOutput extends __MetadataBearer {}

/**
 * <p>Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code>
 *          API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the
 *          record is the latest record for the <code>recordIdentifier</code>, the record is written to
 *          both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a
 *          historic record, it is written only to the <code>OfflineStore</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, PutRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, PutRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const command = new PutRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRecordCommandInput} for command's `input` shape.
 * @see {@link PutRecordCommandOutput} for command's `response` shape.
 * @see {@link SageMakerFeatureStoreRuntimeClientResolvedConfig | config} for SageMakerFeatureStoreRuntimeClient's `config` shape.
 *
 */
export class PutRecordCommand extends $Command<
  PutRecordCommandInput,
  PutRecordCommandOutput,
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

  constructor(readonly input: PutRecordCommandInput) {
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
  ): Handler<PutRecordCommandInput, PutRecordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutRecordCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerFeatureStoreRuntimeClient";
    const commandName = "PutRecordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRecordRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRecordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutRecordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRecordCommandOutput> {
    return deserializeAws_restJson1PutRecordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
