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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeTypeInput, DescribeTypeOutput } from "../models/models_0";
import { deserializeAws_queryDescribeTypeCommand, serializeAws_queryDescribeTypeCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribeTypeCommand}.
 */
export interface DescribeTypeCommandInput extends DescribeTypeInput {}
/**
 * @public
 *
 * The output of {@link DescribeTypeCommand}.
 */
export interface DescribeTypeCommandOutput extends DescribeTypeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns detailed information about an extension that has been registered.</p>
 *          <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information
 *          about that specific extension version. Otherwise, it returns information about the default
 *          extension version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeTypeCommandInput - {@link DescribeTypeCommandInput}
 * @returns {@link DescribeTypeCommandOutput}
 * @see {@link DescribeTypeCommandInput} for command's `input` shape.
 * @see {@link DescribeTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link TypeNotFoundException} (client fault)
 *  <p>The specified extension doesn't exist in the CloudFormation registry.</p>
 *
 *
 */
export class DescribeTypeCommand extends $Command<
  DescribeTypeCommandInput,
  DescribeTypeCommandOutput,
  CloudFormationClientResolvedConfig
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
  constructor(readonly input: DescribeTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTypeCommandInput, DescribeTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeTypeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeTypeCommand";
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
  private serialize(input: DescribeTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTypeCommandOutput> {
    return deserializeAws_queryDescribeTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
