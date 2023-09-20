// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DiscoverInstancesRevisionRequest, DiscoverInstancesRevisionResponse } from "../models/models_0";
import { de_DiscoverInstancesRevisionCommand, se_DiscoverInstancesRevisionCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DiscoverInstancesRevisionCommand}.
 */
export interface DiscoverInstancesRevisionCommandInput extends DiscoverInstancesRevisionRequest {}
/**
 * @public
 *
 * The output of {@link DiscoverInstancesRevisionCommand}.
 */
export interface DiscoverInstancesRevisionCommandOutput extends DiscoverInstancesRevisionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Discovers the increasing revision associated with an instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, DiscoverInstancesRevisionCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, DiscoverInstancesRevisionCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // DiscoverInstancesRevisionRequest
 *   NamespaceName: "STRING_VALUE", // required
 *   ServiceName: "STRING_VALUE", // required
 * };
 * const command = new DiscoverInstancesRevisionCommand(input);
 * const response = await client.send(command);
 * // { // DiscoverInstancesRevisionResponse
 * //   InstancesRevision: Number("long"),
 * // };
 *
 * ```
 *
 * @param DiscoverInstancesRevisionCommandInput - {@link DiscoverInstancesRevisionCommandInput}
 * @returns {@link DiscoverInstancesRevisionCommandOutput}
 * @see {@link DiscoverInstancesRevisionCommandInput} for command's `input` shape.
 * @see {@link DiscoverInstancesRevisionCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link NamespaceNotFound} (client fault)
 *  <p>No namespace exists with the specified ID.</p>
 *
 * @throws {@link RequestLimitExceeded} (client fault)
 *  <p>The operation can't be completed because you've reached the quota for the number of
 *    requests. For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/throttling.html">Cloud Map API request throttling quota</a> in the
 *     <i>Cloud Map Developer Guide</i>.</p>
 *
 * @throws {@link ServiceNotFound} (client fault)
 *  <p>No service exists with the specified ID.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 */
export class DiscoverInstancesRevisionCommand extends $Command<
  DiscoverInstancesRevisionCommandInput,
  DiscoverInstancesRevisionCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DiscoverInstancesRevisionCommandInput) {
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
  ): Handler<DiscoverInstancesRevisionCommandInput, DiscoverInstancesRevisionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DiscoverInstancesRevisionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "DiscoverInstancesRevisionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53AutoNaming_v20170314",
        operation: "DiscoverInstancesRevision",
      },
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
  private serialize(input: DiscoverInstancesRevisionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DiscoverInstancesRevisionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DiscoverInstancesRevisionCommandOutput> {
    return de_DiscoverInstancesRevisionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
