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
} from "@smithy/types";

import { GetCoreNetworkChangeSetRequest, GetCoreNetworkChangeSetResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_GetCoreNetworkChangeSetCommand, se_GetCoreNetworkChangeSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCoreNetworkChangeSetCommand}.
 */
export interface GetCoreNetworkChangeSetCommandInput extends GetCoreNetworkChangeSetRequest {}
/**
 * @public
 *
 * The output of {@link GetCoreNetworkChangeSetCommand}.
 */
export interface GetCoreNetworkChangeSetCommandOutput extends GetCoreNetworkChangeSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a change set between the LIVE core network policy and a submitted policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetCoreNetworkChangeSetCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetCoreNetworkChangeSetCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // GetCoreNetworkChangeSetRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   PolicyVersionId: Number("int"), // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetCoreNetworkChangeSetCommand(input);
 * const response = await client.send(command);
 * // { // GetCoreNetworkChangeSetResponse
 * //   CoreNetworkChanges: [ // CoreNetworkChangeList
 * //     { // CoreNetworkChange
 * //       Type: "CORE_NETWORK_SEGMENT" || "CORE_NETWORK_EDGE" || "ATTACHMENT_MAPPING" || "ATTACHMENT_ROUTE_PROPAGATION" || "ATTACHMENT_ROUTE_STATIC" || "CORE_NETWORK_CONFIGURATION" || "SEGMENTS_CONFIGURATION" || "SEGMENT_ACTIONS_CONFIGURATION" || "ATTACHMENT_POLICIES_CONFIGURATION",
 * //       Action: "ADD" || "MODIFY" || "REMOVE",
 * //       Identifier: "STRING_VALUE",
 * //       PreviousValues: { // CoreNetworkChangeValues
 * //         SegmentName: "STRING_VALUE",
 * //         EdgeLocations: [ // ExternalRegionCodeList
 * //           "STRING_VALUE",
 * //         ],
 * //         Asn: Number("long"),
 * //         Cidr: "STRING_VALUE",
 * //         DestinationIdentifier: "STRING_VALUE",
 * //         InsideCidrBlocks: [ // ConstrainedStringList
 * //           "STRING_VALUE",
 * //         ],
 * //         SharedSegments: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       NewValues: {
 * //         SegmentName: "STRING_VALUE",
 * //         EdgeLocations: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Asn: Number("long"),
 * //         Cidr: "STRING_VALUE",
 * //         DestinationIdentifier: "STRING_VALUE",
 * //         InsideCidrBlocks: [
 * //           "STRING_VALUE",
 * //         ],
 * //         SharedSegments: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       IdentifierPath: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCoreNetworkChangeSetCommandInput - {@link GetCoreNetworkChangeSetCommandInput}
 * @returns {@link GetCoreNetworkChangeSetCommandOutput}
 * @see {@link GetCoreNetworkChangeSetCommandInput} for command's `input` shape.
 * @see {@link GetCoreNetworkChangeSetCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetCoreNetworkChangeSetCommand extends $Command<
  GetCoreNetworkChangeSetCommandInput,
  GetCoreNetworkChangeSetCommandOutput,
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
  constructor(readonly input: GetCoreNetworkChangeSetCommandInput) {
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
  ): Handler<GetCoreNetworkChangeSetCommandInput, GetCoreNetworkChangeSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCoreNetworkChangeSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetCoreNetworkChangeSetCommand";
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
  private serialize(input: GetCoreNetworkChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCoreNetworkChangeSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCoreNetworkChangeSetCommandOutput> {
    return de_GetCoreNetworkChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
