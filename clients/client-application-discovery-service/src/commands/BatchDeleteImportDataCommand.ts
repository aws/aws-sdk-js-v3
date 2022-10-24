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
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import {
  BatchDeleteImportDataRequest,
  BatchDeleteImportDataRequestFilterSensitiveLog,
  BatchDeleteImportDataResponse,
  BatchDeleteImportDataResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchDeleteImportDataCommand,
  serializeAws_json1_1BatchDeleteImportDataCommand,
} from "../protocols/Aws_json1_1";

export interface BatchDeleteImportDataCommandInput extends BatchDeleteImportDataRequest {}
export interface BatchDeleteImportDataCommandOutput extends BatchDeleteImportDataResponse, __MetadataBearer {}

/**
 * <p>Deletes one or more import tasks, each identified by their import ID. Each import task has
 *       a number of records that can identify servers or applications. </p>
 *
 *          <p>Amazon Web Services Application Discovery Service has built-in matching logic that will identify when
 *       discovered servers match existing entries that you've previously discovered, the information
 *       for the already-existing discovered server is updated. When you delete an import task that
 *       contains records that were used to match, the information in those matched records that comes
 *       from the deleted records will also be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, BatchDeleteImportDataCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, BatchDeleteImportDataCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new BatchDeleteImportDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteImportDataCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteImportDataCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 */
export class BatchDeleteImportDataCommand extends $Command<
  BatchDeleteImportDataCommandInput,
  BatchDeleteImportDataCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
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

  constructor(readonly input: BatchDeleteImportDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeleteImportDataCommandInput, BatchDeleteImportDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDeleteImportDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "BatchDeleteImportDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteImportDataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteImportDataResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDeleteImportDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchDeleteImportDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDeleteImportDataCommandOutput> {
    return deserializeAws_json1_1BatchDeleteImportDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
