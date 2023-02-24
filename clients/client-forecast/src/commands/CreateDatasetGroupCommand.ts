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
  CreateDatasetGroupRequest,
  CreateDatasetGroupRequestFilterSensitiveLog,
  CreateDatasetGroupResponse,
  CreateDatasetGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateDatasetGroupCommand,
  serializeAws_json1_1CreateDatasetGroupCommand,
} from "../protocols/Aws_json1_1";

export interface CreateDatasetGroupCommandInput extends CreateDatasetGroupRequest {}
export interface CreateDatasetGroupCommandOutput extends CreateDatasetGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a dataset group, which holds a collection of related datasets. You can add
 *       datasets to the dataset group when you create the dataset group, or later by using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation.</p>
 *          <p>After creating a dataset group and adding datasets, you use the dataset group when you
 *       create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Dataset groups</a>.</p>
 *          <p>To get a list of all your datasets groups, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a>
 *       operation.</p>
 *          <note>
 *             <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can
 *         use the dataset group to create a predictor. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateDatasetGroupCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateDatasetGroupCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new CreateDatasetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class CreateDatasetGroupCommand extends $Command<
  CreateDatasetGroupCommandInput,
  CreateDatasetGroupCommandOutput,
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

  constructor(readonly input: CreateDatasetGroupCommandInput) {
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
  ): Handler<CreateDatasetGroupCommandInput, CreateDatasetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDatasetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreateDatasetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDatasetGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDatasetGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDatasetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDatasetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDatasetGroupCommandOutput> {
    return deserializeAws_json1_1CreateDatasetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
