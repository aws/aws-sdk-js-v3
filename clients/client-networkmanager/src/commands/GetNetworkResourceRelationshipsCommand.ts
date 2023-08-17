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

import { GetNetworkResourceRelationshipsRequest, GetNetworkResourceRelationshipsResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_GetNetworkResourceRelationshipsCommand,
  se_GetNetworkResourceRelationshipsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkResourceRelationshipsCommand}.
 */
export interface GetNetworkResourceRelationshipsCommandInput extends GetNetworkResourceRelationshipsRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkResourceRelationshipsCommand}.
 */
export interface GetNetworkResourceRelationshipsCommandOutput
  extends GetNetworkResourceRelationshipsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the network resource relationships for the specified global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetNetworkResourceRelationshipsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetNetworkResourceRelationshipsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // GetNetworkResourceRelationshipsRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   CoreNetworkId: "STRING_VALUE",
 *   RegisteredGatewayArn: "STRING_VALUE",
 *   AwsRegion: "STRING_VALUE",
 *   AccountId: "STRING_VALUE",
 *   ResourceType: "STRING_VALUE",
 *   ResourceArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetNetworkResourceRelationshipsCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkResourceRelationshipsResponse
 * //   Relationships: [ // RelationshipList
 * //     { // Relationship
 * //       From: "STRING_VALUE",
 * //       To: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetNetworkResourceRelationshipsCommandInput - {@link GetNetworkResourceRelationshipsCommandInput}
 * @returns {@link GetNetworkResourceRelationshipsCommandOutput}
 * @see {@link GetNetworkResourceRelationshipsCommandInput} for command's `input` shape.
 * @see {@link GetNetworkResourceRelationshipsCommandOutput} for command's `response` shape.
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
export class GetNetworkResourceRelationshipsCommand extends $Command<
  GetNetworkResourceRelationshipsCommandInput,
  GetNetworkResourceRelationshipsCommandOutput,
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
  constructor(readonly input: GetNetworkResourceRelationshipsCommandInput) {
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
  ): Handler<GetNetworkResourceRelationshipsCommandInput, GetNetworkResourceRelationshipsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetNetworkResourceRelationshipsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetNetworkResourceRelationshipsCommand";
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
  private serialize(
    input: GetNetworkResourceRelationshipsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetNetworkResourceRelationshipsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetNetworkResourceRelationshipsCommandOutput> {
    return de_GetNetworkResourceRelationshipsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
