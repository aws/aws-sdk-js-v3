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

import { DeleteCoreNetworkRequest, DeleteCoreNetworkResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_DeleteCoreNetworkCommand, se_DeleteCoreNetworkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteCoreNetworkCommand}.
 */
export interface DeleteCoreNetworkCommandInput extends DeleteCoreNetworkRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCoreNetworkCommand}.
 */
export interface DeleteCoreNetworkCommandOutput extends DeleteCoreNetworkResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a core network along with all core network policies. This can only be done if there are no attachments on a core network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteCoreNetworkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteCoreNetworkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // DeleteCoreNetworkRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCoreNetworkCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCoreNetworkResponse
 * //   CoreNetwork: { // CoreNetwork
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     CoreNetworkId: "STRING_VALUE",
 * //     CoreNetworkArn: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     State: "CREATING" || "UPDATING" || "AVAILABLE" || "DELETING",
 * //     Segments: [ // CoreNetworkSegmentList
 * //       { // CoreNetworkSegment
 * //         Name: "STRING_VALUE",
 * //         EdgeLocations: [ // ExternalRegionCodeList
 * //           "STRING_VALUE",
 * //         ],
 * //         SharedSegments: [ // ConstrainedStringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     Edges: [ // CoreNetworkEdgeList
 * //       { // CoreNetworkEdge
 * //         EdgeLocation: "STRING_VALUE",
 * //         Asn: Number("long"),
 * //         InsideCidrBlocks: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteCoreNetworkCommandInput - {@link DeleteCoreNetworkCommandInput}
 * @returns {@link DeleteCoreNetworkCommandOutput}
 * @see {@link DeleteCoreNetworkCommandInput} for command's `input` shape.
 * @see {@link DeleteCoreNetworkCommandOutput} for command's `response` shape.
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
export class DeleteCoreNetworkCommand extends $Command<
  DeleteCoreNetworkCommandInput,
  DeleteCoreNetworkCommandOutput,
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
  constructor(readonly input: DeleteCoreNetworkCommandInput) {
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
  ): Handler<DeleteCoreNetworkCommandInput, DeleteCoreNetworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCoreNetworkCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "DeleteCoreNetworkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkManager",
        operation: "DeleteCoreNetwork",
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
  private serialize(input: DeleteCoreNetworkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteCoreNetworkCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCoreNetworkCommandOutput> {
    return de_DeleteCoreNetworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
