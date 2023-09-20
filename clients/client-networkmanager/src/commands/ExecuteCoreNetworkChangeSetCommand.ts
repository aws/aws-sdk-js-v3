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

import { ExecuteCoreNetworkChangeSetRequest, ExecuteCoreNetworkChangeSetResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_ExecuteCoreNetworkChangeSetCommand,
  se_ExecuteCoreNetworkChangeSetCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExecuteCoreNetworkChangeSetCommand}.
 */
export interface ExecuteCoreNetworkChangeSetCommandInput extends ExecuteCoreNetworkChangeSetRequest {}
/**
 * @public
 *
 * The output of {@link ExecuteCoreNetworkChangeSetCommand}.
 */
export interface ExecuteCoreNetworkChangeSetCommandOutput
  extends ExecuteCoreNetworkChangeSetResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Executes a change set on your core network. Deploys changes globally based on the policy submitted..</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ExecuteCoreNetworkChangeSetCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ExecuteCoreNetworkChangeSetCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // ExecuteCoreNetworkChangeSetRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   PolicyVersionId: Number("int"), // required
 * };
 * const command = new ExecuteCoreNetworkChangeSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ExecuteCoreNetworkChangeSetCommandInput - {@link ExecuteCoreNetworkChangeSetCommandInput}
 * @returns {@link ExecuteCoreNetworkChangeSetCommandOutput}
 * @see {@link ExecuteCoreNetworkChangeSetCommandInput} for command's `input` shape.
 * @see {@link ExecuteCoreNetworkChangeSetCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 */
export class ExecuteCoreNetworkChangeSetCommand extends $Command<
  ExecuteCoreNetworkChangeSetCommandInput,
  ExecuteCoreNetworkChangeSetCommandOutput,
  NetworkManagerClientResolvedConfig
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
  constructor(readonly input: ExecuteCoreNetworkChangeSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteCoreNetworkChangeSetCommandInput, ExecuteCoreNetworkChangeSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExecuteCoreNetworkChangeSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "ExecuteCoreNetworkChangeSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkManager",
        operation: "ExecuteCoreNetworkChangeSet",
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
  private serialize(input: ExecuteCoreNetworkChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExecuteCoreNetworkChangeSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExecuteCoreNetworkChangeSetCommandOutput> {
    return de_ExecuteCoreNetworkChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
