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
  DescribeOptionGroupOptionsMessage,
  DescribeOptionGroupOptionsMessageFilterSensitiveLog,
  OptionGroupOptionsMessage,
  OptionGroupOptionsMessageFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryDescribeOptionGroupOptionsCommand,
  serializeAws_queryDescribeOptionGroupOptionsCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link DescribeOptionGroupOptionsCommand}.
 */
export interface DescribeOptionGroupOptionsCommandInput extends DescribeOptionGroupOptionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeOptionGroupOptionsCommand}.
 */
export interface DescribeOptionGroupOptionsCommandOutput extends OptionGroupOptionsMessage, __MetadataBearer {}

/**
 * @public
 * <p>Describes all available options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeOptionGroupOptionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeOptionGroupOptionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeOptionGroupOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeOptionGroupOptionsCommandInput - {@link DescribeOptionGroupOptionsCommandInput}
 * @returns {@link DescribeOptionGroupOptionsCommandOutput}
 * @see {@link DescribeOptionGroupOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOptionGroupOptionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 *
 * @example To list information about DB option group options
 * ```javascript
 * // This example lists information for all option group options for the specified DB engine.
 * const input = {
 *   "EngineName": "mysql",
 *   "MajorEngineVersion": "5.6"
 * };
 * const command = new DescribeOptionGroupOptionsCommand(input);
 * await client.send(command);
 * // example id: describe-option-group-options-30d735a4-81f1-49e4-b3f2-5dc45d50c8ed
 * ```
 *
 */
export class DescribeOptionGroupOptionsCommand extends $Command<
  DescribeOptionGroupOptionsCommandInput,
  DescribeOptionGroupOptionsCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: DescribeOptionGroupOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOptionGroupOptionsCommandInput, DescribeOptionGroupOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOptionGroupOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeOptionGroupOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOptionGroupOptionsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: OptionGroupOptionsMessageFilterSensitiveLog,
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
  private serialize(input: DescribeOptionGroupOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeOptionGroupOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOptionGroupOptionsCommandOutput> {
    return deserializeAws_queryDescribeOptionGroupOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
