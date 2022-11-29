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
  DescribeTemplateDefinitionRequest,
  DescribeTemplateDefinitionRequestFilterSensitiveLog,
  DescribeTemplateDefinitionResponse,
  DescribeTemplateDefinitionResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1DescribeTemplateDefinitionCommand,
  serializeAws_restJson1DescribeTemplateDefinitionCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

export interface DescribeTemplateDefinitionCommandInput extends DescribeTemplateDefinitionRequest {}
export interface DescribeTemplateDefinitionCommandOutput extends DescribeTemplateDefinitionResponse, __MetadataBearer {}

/**
 * <p>Provides a detailed description of the definition of a template.</p>
 *          <note>
 *             <p>If you do not need to know details about the content of a template, for instance if you
 * 				are trying to check the status of a recently created or updated template, use the
 * 				<a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplate.html">
 *                   <code>DescribeTemplate</code>
 *                </a> instead.
 * 			</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTemplateDefinitionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTemplateDefinitionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeTemplateDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTemplateDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeTemplateDefinitionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 */
export class DescribeTemplateDefinitionCommand extends $Command<
  DescribeTemplateDefinitionCommandInput,
  DescribeTemplateDefinitionCommandOutput,
  QuickSightClientResolvedConfig
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

  constructor(readonly input: DescribeTemplateDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTemplateDefinitionCommandInput, DescribeTemplateDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTemplateDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeTemplateDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTemplateDefinitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeTemplateDefinitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTemplateDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeTemplateDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTemplateDefinitionCommandOutput> {
    return deserializeAws_restJson1DescribeTemplateDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
