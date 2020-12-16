import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { UpdateDatasetGroupRequest, UpdateDatasetGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDatasetGroupCommand,
  serializeAws_json1_1UpdateDatasetGroupCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type UpdateDatasetGroupCommandInput = UpdateDatasetGroupRequest;
export type UpdateDatasetGroupCommandOutput = UpdateDatasetGroupResponse & __MetadataBearer;

/**
 * <p>Replaces the datasets in a dataset group with the specified datasets.</p>
 *          <note>
 *             <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can
 *         use the dataset group to create a predictor. Use the <a>DescribeDatasetGroup</a>
 *         operation to get the status.</p>
 *          </note>
 */
export class UpdateDatasetGroupCommand extends $Command<
  UpdateDatasetGroupCommandInput,
  UpdateDatasetGroupCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDatasetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDatasetGroupCommandInput, UpdateDatasetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "UpdateDatasetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDatasetGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDatasetGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDatasetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDatasetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDatasetGroupCommandOutput> {
    return deserializeAws_json1_1UpdateDatasetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
