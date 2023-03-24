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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DescribeReleaseLabelInput, DescribeReleaseLabelOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeReleaseLabelCommand,
  serializeAws_json1_1DescribeReleaseLabelCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeReleaseLabelCommand}.
 */
export interface DescribeReleaseLabelCommandInput extends DescribeReleaseLabelInput {}
/**
 * @public
 *
 * The output of {@link DescribeReleaseLabelCommand}.
 */
export interface DescribeReleaseLabelCommandOutput extends DescribeReleaseLabelOutput, __MetadataBearer {}

/**
 * @public
 * <p>Provides EMR release label details, such as releases available the region where the API
 *          request is run, and the available applications for a specific EMR release label. Can also
 *          list EMR release versions that support a specified version of Spark.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeReleaseLabelCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeReleaseLabelCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = {
 *   ReleaseLabel: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeReleaseLabelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeReleaseLabelCommandInput - {@link DescribeReleaseLabelCommandInput}
 * @returns {@link DescribeReleaseLabelCommandOutput}
 * @see {@link DescribeReleaseLabelCommandInput} for command's `input` shape.
 * @see {@link DescribeReleaseLabelCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 *
 */
export class DescribeReleaseLabelCommand extends $Command<
  DescribeReleaseLabelCommandInput,
  DescribeReleaseLabelCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: DescribeReleaseLabelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReleaseLabelCommandInput, DescribeReleaseLabelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReleaseLabelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "DescribeReleaseLabelCommand";
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
  private serialize(input: DescribeReleaseLabelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeReleaseLabelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeReleaseLabelCommandOutput> {
    return deserializeAws_json1_1DescribeReleaseLabelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
