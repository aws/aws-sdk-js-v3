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
import { DescribeIndexFieldsRequest, DescribeIndexFieldsResponse } from "../models/models_0";
import {
  deserializeAws_queryDescribeIndexFieldsCommand,
  serializeAws_queryDescribeIndexFieldsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribeIndexFieldsCommand}.
 */
export interface DescribeIndexFieldsCommandInput extends DescribeIndexFieldsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIndexFieldsCommand}.
 */
export interface DescribeIndexFieldsCommandOutput extends DescribeIndexFieldsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the index fields configured for the search domain.
 *       Can be limited to specific fields by name.  By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information,
 *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeIndexFieldsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeIndexFieldsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const input = { // DescribeIndexFieldsRequest
 *   DomainName: "STRING_VALUE", // required
 *   FieldNames: [ // DynamicFieldNameList
 *     "STRING_VALUE",
 *   ],
 *   Deployed: true || false,
 * };
 * const command = new DescribeIndexFieldsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeIndexFieldsCommandInput - {@link DescribeIndexFieldsCommandInput}
 * @returns {@link DescribeIndexFieldsCommandOutput}
 * @see {@link DescribeIndexFieldsCommandInput} for command's `input` shape.
 * @see {@link DescribeIndexFieldsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 *
 *
 */
export class DescribeIndexFieldsCommand extends $Command<
  DescribeIndexFieldsCommandInput,
  DescribeIndexFieldsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DescribeIndexFieldsCommandInput) {
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
  ): Handler<DescribeIndexFieldsCommandInput, DescribeIndexFieldsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeIndexFieldsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DescribeIndexFieldsCommand";
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
  private serialize(input: DescribeIndexFieldsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeIndexFieldsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeIndexFieldsCommandOutput> {
    return deserializeAws_queryDescribeIndexFieldsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
