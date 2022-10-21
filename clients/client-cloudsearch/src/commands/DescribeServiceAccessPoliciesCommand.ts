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

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import {
  DescribeServiceAccessPoliciesRequest,
  DescribeServiceAccessPoliciesRequestFilterSensitiveLog,
  DescribeServiceAccessPoliciesResponse,
  DescribeServiceAccessPoliciesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeServiceAccessPoliciesCommand,
  serializeAws_queryDescribeServiceAccessPoliciesCommand,
} from "../protocols/Aws_query";

export interface DescribeServiceAccessPoliciesCommandInput extends DescribeServiceAccessPoliciesRequest {}
export interface DescribeServiceAccessPoliciesCommandOutput
  extends DescribeServiceAccessPoliciesResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information,
 *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeServiceAccessPoliciesCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeServiceAccessPoliciesCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DescribeServiceAccessPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceAccessPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceAccessPoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 */
export class DescribeServiceAccessPoliciesCommand extends $Command<
  DescribeServiceAccessPoliciesCommandInput,
  DescribeServiceAccessPoliciesCommandOutput,
  CloudSearchClientResolvedConfig
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

  constructor(readonly input: DescribeServiceAccessPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeServiceAccessPoliciesCommandInput, DescribeServiceAccessPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeServiceAccessPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DescribeServiceAccessPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeServiceAccessPoliciesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeServiceAccessPoliciesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeServiceAccessPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeServiceAccessPoliciesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeServiceAccessPoliciesCommandOutput> {
    return deserializeAws_queryDescribeServiceAccessPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
