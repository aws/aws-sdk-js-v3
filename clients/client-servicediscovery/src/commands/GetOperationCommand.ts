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

import { GetOperationRequest, GetOperationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetOperationCommand,
  serializeAws_json1_1GetOperationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 *
 * The input for {@link GetOperationCommand}.
 */
export interface GetOperationCommandInput extends GetOperationRequest {}
/**
 * @public
 *
 * The output of {@link GetOperationCommand}.
 */
export interface GetOperationCommandOutput extends GetOperationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about any operation that returns an operation ID in the response, such as a
 *     <code>CreateService</code> request.</p>
 *          <note>
 *             <p>To get a list of operations that match specified criteria, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetOperationCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetOperationCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new GetOperationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetOperationCommandInput - {@link GetOperationCommandInput}
 * @returns {@link GetOperationCommandOutput}
 * @see {@link GetOperationCommandInput} for command's `input` shape.
 * @see {@link GetOperationCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link OperationNotFound} (client fault)
 *  <p>No operation exists with the specified ID.</p>
 *
 *
 * @example Example: Get operation result
 * ```javascript
 * // Example: Get operation result
 * const input = {
 *   "OperationId": "gv4g5meo7ndmeh4fqskygvk23d2fijwa-k9302yzd"
 * };
 * const command = new GetOperationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Operation": {
 *     "CreateDate": 1587055860.121,
 *     "Id": "gv4g5meo7ndmeh4fqskygvk23d2fijwa-k9302yzd",
 *     "Status": "SUCCESS",
 *     "Targets": {
 *       "NAMESPACE": "ns-ylexjili4cdxy3xm"
 *     },
 *     "Type": "CREATE_NAMESPACE",
 *     "UpdateDate": 1587055900.469
 *   }
 * }
 * *\/
 * // example id: example-get-operation-result-1587073807124
 * ```
 *
 */
export class GetOperationCommand extends $Command<
  GetOperationCommandInput,
  GetOperationCommandOutput,
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
  constructor(readonly input: GetOperationCommandInput) {
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
  ): Handler<GetOperationCommandInput, GetOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetOperationCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "GetOperationCommand";
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
  private serialize(input: GetOperationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetOperationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOperationCommandOutput> {
    return deserializeAws_json1_1GetOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
