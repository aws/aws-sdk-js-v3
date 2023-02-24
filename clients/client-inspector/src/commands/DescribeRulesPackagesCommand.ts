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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import {
  DescribeRulesPackagesRequest,
  DescribeRulesPackagesRequestFilterSensitiveLog,
  DescribeRulesPackagesResponse,
  DescribeRulesPackagesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeRulesPackagesCommand,
  serializeAws_json1_1DescribeRulesPackagesCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeRulesPackagesCommandInput extends DescribeRulesPackagesRequest {}
export interface DescribeRulesPackagesCommandOutput extends DescribeRulesPackagesResponse, __MetadataBearer {}

/**
 * <p>Describes the rules packages that are specified by the ARNs of the rules
 *          packages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeRulesPackagesCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeRulesPackagesCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DescribeRulesPackagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRulesPackagesCommandInput} for command's `input` shape.
 * @see {@link DescribeRulesPackagesCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 */
export class DescribeRulesPackagesCommand extends $Command<
  DescribeRulesPackagesCommandInput,
  DescribeRulesPackagesCommandOutput,
  InspectorClientResolvedConfig
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

  constructor(readonly input: DescribeRulesPackagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRulesPackagesCommandInput, DescribeRulesPackagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRulesPackagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "DescribeRulesPackagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRulesPackagesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeRulesPackagesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRulesPackagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeRulesPackagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRulesPackagesCommandOutput> {
    return deserializeAws_json1_1DescribeRulesPackagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
