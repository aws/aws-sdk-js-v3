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

import { UpdateHttpNamespaceRequest, UpdateHttpNamespaceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateHttpNamespaceCommand,
  serializeAws_json1_1UpdateHttpNamespaceCommand,
} from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 *
 * The input for {@link UpdateHttpNamespaceCommand}.
 */
export interface UpdateHttpNamespaceCommandInput extends UpdateHttpNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHttpNamespaceCommand}.
 */
export interface UpdateHttpNamespaceCommandOutput extends UpdateHttpNamespaceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an HTTP
 *    namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, UpdateHttpNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, UpdateHttpNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // UpdateHttpNamespaceRequest
 *   Id: "STRING_VALUE", // required
 *   UpdaterRequestId: "STRING_VALUE",
 *   Namespace: { // HttpNamespaceChange
 *     Description: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateHttpNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateHttpNamespaceCommandInput - {@link UpdateHttpNamespaceCommandInput}
 * @returns {@link UpdateHttpNamespaceCommandOutput}
 * @see {@link UpdateHttpNamespaceCommandInput} for command's `input` shape.
 * @see {@link UpdateHttpNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link DuplicateRequest} (client fault)
 *  <p>The operation is already in progress.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link NamespaceNotFound} (client fault)
 *  <p>No namespace exists with the specified ID.</p>
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>The specified resource can't be deleted because it contains other resources. For example,
 *    you can't delete a service that contains any instances.</p>
 *
 *
 */
export class UpdateHttpNamespaceCommand extends $Command<
  UpdateHttpNamespaceCommandInput,
  UpdateHttpNamespaceCommandOutput,
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
  constructor(readonly input: UpdateHttpNamespaceCommandInput) {
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
  ): Handler<UpdateHttpNamespaceCommandInput, UpdateHttpNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateHttpNamespaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "UpdateHttpNamespaceCommand";
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
  private serialize(input: UpdateHttpNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateHttpNamespaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateHttpNamespaceCommandOutput> {
    return deserializeAws_json1_1UpdateHttpNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
