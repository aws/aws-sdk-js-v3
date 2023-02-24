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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  UpdateDatasetGroupRequest,
  UpdateDatasetGroupRequestFilterSensitiveLog,
  UpdateDatasetGroupResponse,
  UpdateDatasetGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDatasetGroupCommand,
  serializeAws_json1_1UpdateDatasetGroupCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateDatasetGroupCommandInput extends UpdateDatasetGroupRequest {}
export interface UpdateDatasetGroupCommandOutput extends UpdateDatasetGroupResponse, __MetadataBearer {}

/**
 * <p>Replaces the datasets in a dataset group with the specified datasets.</p>
 *          <note>
 *             <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can
 *         use the dataset group to create a predictor. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>
 *         operation to get the status.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, UpdateDatasetGroupCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, UpdateDatasetGroupCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new UpdateDatasetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class UpdateDatasetGroupCommand extends $Command<
  UpdateDatasetGroupCommandInput,
  UpdateDatasetGroupCommandOutput,
  ForecastClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDatasetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "UpdateDatasetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDatasetGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDatasetGroupResponseFilterSensitiveLog,
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
