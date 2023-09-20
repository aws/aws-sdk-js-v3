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

import { UpdateNetworkResourceMetadataRequest, UpdateNetworkResourceMetadataResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_UpdateNetworkResourceMetadataCommand,
  se_UpdateNetworkResourceMetadataCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateNetworkResourceMetadataCommand}.
 */
export interface UpdateNetworkResourceMetadataCommandInput extends UpdateNetworkResourceMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNetworkResourceMetadataCommand}.
 */
export interface UpdateNetworkResourceMetadataCommandOutput
  extends UpdateNetworkResourceMetadataResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the resource metadata for the specified global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateNetworkResourceMetadataCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateNetworkResourceMetadataCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // UpdateNetworkResourceMetadataRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 *   Metadata: { // NetworkResourceMetadataMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateNetworkResourceMetadataCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNetworkResourceMetadataResponse
 * //   ResourceArn: "STRING_VALUE",
 * //   Metadata: { // NetworkResourceMetadataMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateNetworkResourceMetadataCommandInput - {@link UpdateNetworkResourceMetadataCommandInput}
 * @returns {@link UpdateNetworkResourceMetadataCommandOutput}
 * @see {@link UpdateNetworkResourceMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateNetworkResourceMetadataCommandOutput} for command's `response` shape.
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
export class UpdateNetworkResourceMetadataCommand extends $Command<
  UpdateNetworkResourceMetadataCommandInput,
  UpdateNetworkResourceMetadataCommandOutput,
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
  constructor(readonly input: UpdateNetworkResourceMetadataCommandInput) {
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
  ): Handler<UpdateNetworkResourceMetadataCommandInput, UpdateNetworkResourceMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateNetworkResourceMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "UpdateNetworkResourceMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkManager",
        operation: "UpdateNetworkResourceMetadata",
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
  private serialize(input: UpdateNetworkResourceMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateNetworkResourceMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateNetworkResourceMetadataCommandOutput> {
    return de_UpdateNetworkResourceMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
