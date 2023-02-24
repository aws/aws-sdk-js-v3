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
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import {
  DescribeTagsRequest,
  DescribeTagsRequestFilterSensitiveLog,
  DescribeTagsResponse,
  DescribeTagsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeTagsCommand,
  serializeAws_json1_1DescribeTagsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeTagsCommandInput extends DescribeTagsRequest {}
export interface DescribeTagsCommandOutput extends DescribeTagsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of configuration items that have tags as specified by the key-value
 *       pairs, name and value, passed to the optional parameter <code>filters</code>.</p>
 *          <p>There are three valid tag filter names:</p>
 *          <ul>
 *             <li>
 *                <p>tagKey</p>
 *             </li>
 *             <li>
 *                <p>tagValue</p>
 *             </li>
 *             <li>
 *                <p>configurationId</p>
 *             </li>
 *          </ul>
 *          <p>Also, all configuration items associated with your user account that have tags can be
 *       listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeTagsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeTagsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new DescribeTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTagsCommandInput} for command's `input` shape.
 * @see {@link DescribeTagsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 */
export class DescribeTagsCommand extends $Command<
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
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

  constructor(readonly input: DescribeTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTagsCommandInput, DescribeTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeTagsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "DescribeTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTagsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeTagsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTagsCommandOutput> {
    return deserializeAws_json1_1DescribeTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
