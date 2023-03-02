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
  ListServicesRequest,
  ListServicesRequestFilterSensitiveLog,
  ListServicesResponse,
  ListServicesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListServicesCommand,
  serializeAws_json1_1ListServicesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * The input for {@link ListServicesCommand}.
 */
export interface ListServicesCommandInput extends ListServicesRequest {}
/**
 * The output of {@link ListServicesCommand}.
 */
export interface ListServicesCommandOutput extends ListServicesResponse, __MetadataBearer {}

/**
 * <p>Lists summary information for all the services that are associated with one or more
 *    specified namespaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, ListServicesCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, ListServicesCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServicesCommandInput} for command's `input` shape.
 * @see {@link ListServicesCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @example Example: List services
 * ```javascript
 * // Example: List services
 * const input = {};
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Services": [
 *     {
 *       "Arn": "arn:aws:servicediscovery:us-west-2:123456789012:service/srv-p5zdwlg5uvvzjita",
 *       "CreateDate": 1587081768.334,
 *       "DnsConfig": {
 *         "DnsRecords": [
 *           {
 *             "TTL": 60,
 *             "Type": "A"
 *           }
 *         ],
 *         "RoutingPolicy": "MULTIVALUE"
 *       },
 *       "Id": "srv-p5zdwlg5uvvzjita",
 *       "Name": "myservice"
 *     }
 *   ]
 * }
 * *\/
 * // example id: example-list-services-1587236889840
 * ```
 *
 */
export class ListServicesCommand extends $Command<
  ListServicesCommandInput,
  ListServicesCommandOutput,
  ServiceDiscoveryClientResolvedConfig
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

  constructor(readonly input: ListServicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceDiscoveryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListServicesCommandInput, ListServicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListServicesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "ListServicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServicesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListServicesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListServicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListServicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListServicesCommandOutput> {
    return deserializeAws_json1_1ListServicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
