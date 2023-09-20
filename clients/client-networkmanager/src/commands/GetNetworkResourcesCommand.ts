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

import { GetNetworkResourcesRequest, GetNetworkResourcesResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_GetNetworkResourcesCommand, se_GetNetworkResourcesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkResourcesCommand}.
 */
export interface GetNetworkResourcesCommandInput extends GetNetworkResourcesRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkResourcesCommand}.
 */
export interface GetNetworkResourcesCommandOutput extends GetNetworkResourcesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the network resources for the specified global network.</p>
 *          <p>The results include information from the corresponding Describe call for the resource, minus any sensitive information such as pre-shared keys.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetNetworkResourcesCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetNetworkResourcesCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // GetNetworkResourcesRequest
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
 * const command = new GetNetworkResourcesCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkResourcesResponse
 * //   NetworkResources: [ // NetworkResourceList
 * //     { // NetworkResource
 * //       RegisteredGatewayArn: "STRING_VALUE",
 * //       CoreNetworkId: "STRING_VALUE",
 * //       AwsRegion: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       Definition: "STRING_VALUE",
 * //       DefinitionTimestamp: new Date("TIMESTAMP"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Metadata: { // NetworkResourceMetadataMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetNetworkResourcesCommandInput - {@link GetNetworkResourcesCommandInput}
 * @returns {@link GetNetworkResourcesCommandOutput}
 * @see {@link GetNetworkResourcesCommandInput} for command's `input` shape.
 * @see {@link GetNetworkResourcesCommandOutput} for command's `response` shape.
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
export class GetNetworkResourcesCommand extends $Command<
  GetNetworkResourcesCommandInput,
  GetNetworkResourcesCommandOutput,
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
  constructor(readonly input: GetNetworkResourcesCommandInput) {
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
  ): Handler<GetNetworkResourcesCommandInput, GetNetworkResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetNetworkResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetNetworkResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkManager",
        operation: "GetNetworkResources",
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
  private serialize(input: GetNetworkResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetNetworkResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetNetworkResourcesCommandOutput> {
    return de_GetNetworkResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
