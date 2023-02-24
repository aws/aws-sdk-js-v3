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

import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { DeleteDatasetRequest, DeleteDatasetRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_0DeleteDatasetCommand,
  serializeAws_json1_0DeleteDatasetCommand,
} from "../protocols/Aws_json1_0";

export interface DeleteDatasetCommandInput extends DeleteDatasetRequest {}
export interface DeleteDatasetCommandOutput extends __MetadataBearer {}

/**
 * <p> Deletes a dataset and associated artifacts. The operation will check to see if any
 *          inference scheduler or data ingestion job is currently using the dataset, and if there
 *          isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted.
 *          This does not affect any models that used this dataset for training and evaluation, but
 *          does prevent it from being used in the future. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DeleteDatasetCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DeleteDatasetCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new DeleteDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatasetCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 */
export class DeleteDatasetCommand extends $Command<
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput,
  LookoutEquipmentClientResolvedConfig
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

  constructor(readonly input: DeleteDatasetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDatasetCommandInput, DeleteDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteDatasetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "DeleteDatasetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDatasetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteDatasetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDatasetCommandOutput> {
    return deserializeAws_json1_0DeleteDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
