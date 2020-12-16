import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { DescribeConfigurationsRequest, DescribeConfigurationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeConfigurationsCommand,
  serializeAws_json1_1DescribeConfigurationsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeConfigurationsCommandInput = DescribeConfigurationsRequest;
export type DescribeConfigurationsCommandOutput = DescribeConfigurationsResponse & __MetadataBearer;

/**
 * <p>Retrieves attributes for a list of configuration item IDs.</p>
 *
 *          <note>
 *             <p>All of the supplied IDs must be for the same asset type from one of the
 *         following:</p>
 *             <ul>
 *                <li>
 *                   <p>server</p>
 *                </li>
 *                <li>
 *                   <p>application</p>
 *                </li>
 *                <li>
 *                   <p>process</p>
 *                </li>
 *                <li>
 *                   <p>connection</p>
 *                </li>
 *             </ul>
 *
 *             <p>Output fields are specific to the asset type specified. For example, the output for a
 *           <i>server</i> configuration item includes a list of attributes about the
 *         server, such as host name, operating system, number of network cards, etc.</p>
 *             <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>AWS Application
 *           Discovery Service User Guide</i>.</p>
 *          </note>
 */
export class DescribeConfigurationsCommand extends $Command<
  DescribeConfigurationsCommandInput,
  DescribeConfigurationsCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConfigurationsCommandInput) {
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
  ): Handler<DescribeConfigurationsCommandInput, DescribeConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "DescribeConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConfigurationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeConfigurationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeConfigurationsCommandOutput> {
    return deserializeAws_json1_1DescribeConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
