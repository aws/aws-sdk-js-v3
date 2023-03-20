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
import { DescribeDatasetGroupRequest, DescribeDatasetGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDatasetGroupCommand,
  serializeAws_json1_1DescribeDatasetGroupCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeDatasetGroupCommand}.
 */
export interface DescribeDatasetGroupCommandInput extends DescribeDatasetGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDatasetGroupCommand}.
 */
export interface DescribeDatasetGroupCommandOutput extends DescribeDatasetGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>
 *       operation.</p>
 *          <p>In addition to listing the parameters provided in the <code>CreateDatasetGroup</code>
 *       request, this operation includes the following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DatasetArns</code> - The datasets belonging to the group.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastModificationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeDatasetGroupCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeDatasetGroupCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DescribeDatasetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeDatasetGroupCommandInput - {@link DescribeDatasetGroupCommandInput}
 * @returns {@link DescribeDatasetGroupCommandOutput}
 * @see {@link DescribeDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 *
 */
export class DescribeDatasetGroupCommand extends $Command<
  DescribeDatasetGroupCommandInput,
  DescribeDatasetGroupCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DescribeDatasetGroupCommandInput) {
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
  ): Handler<DescribeDatasetGroupCommandInput, DescribeDatasetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDatasetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DescribeDatasetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeDatasetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDatasetGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDatasetGroupCommandOutput> {
    return deserializeAws_json1_1DescribeDatasetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
