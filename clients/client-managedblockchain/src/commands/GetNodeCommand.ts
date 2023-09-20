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

import {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient";
import { GetNodeInput, GetNodeOutput } from "../models/models_0";
import { de_GetNodeCommand, se_GetNodeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetNodeCommand}.
 */
export interface GetNodeCommandInput extends GetNodeInput {}
/**
 * @public
 *
 * The output of {@link GetNodeCommand}.
 */
export interface GetNodeCommandOutput extends GetNodeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns detailed information about a node.</p>
 *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, GetNodeCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, GetNodeCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const input = { // GetNodeInput
 *   NetworkId: "STRING_VALUE", // required
 *   MemberId: "STRING_VALUE",
 *   NodeId: "STRING_VALUE", // required
 * };
 * const command = new GetNodeCommand(input);
 * const response = await client.send(command);
 * // { // GetNodeOutput
 * //   Node: { // Node
 * //     NetworkId: "STRING_VALUE",
 * //     MemberId: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     InstanceType: "STRING_VALUE",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     FrameworkAttributes: { // NodeFrameworkAttributes
 * //       Fabric: { // NodeFabricAttributes
 * //         PeerEndpoint: "STRING_VALUE",
 * //         PeerEventEndpoint: "STRING_VALUE",
 * //       },
 * //       Ethereum: { // NodeEthereumAttributes
 * //         HttpEndpoint: "STRING_VALUE",
 * //         WebSocketEndpoint: "STRING_VALUE",
 * //       },
 * //     },
 * //     LogPublishingConfiguration: { // NodeLogPublishingConfiguration
 * //       Fabric: { // NodeFabricLogPublishingConfiguration
 * //         ChaincodeLogs: { // LogConfigurations
 * //           Cloudwatch: { // LogConfiguration
 * //             Enabled: true || false,
 * //           },
 * //         },
 * //         PeerLogs: {
 * //           Cloudwatch: {
 * //             Enabled: true || false,
 * //           },
 * //         },
 * //       },
 * //     },
 * //     StateDB: "LevelDB" || "CouchDB",
 * //     Status: "CREATING" || "AVAILABLE" || "UNHEALTHY" || "CREATE_FAILED" || "UPDATING" || "DELETING" || "DELETED" || "FAILED" || "INACCESSIBLE_ENCRYPTION_KEY",
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     Tags: { // OutputTagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Arn: "STRING_VALUE",
 * //     KmsKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetNodeCommandInput - {@link GetNodeCommandInput}
 * @returns {@link GetNodeCommandOutput}
 * @see {@link GetNodeCommandInput} for command's `input` shape.
 * @see {@link GetNodeCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for ManagedBlockchainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource doesn't exist. It may have been deleted or referenced incorrectly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation couldn't be performed because a service is
 *          throttling requests. The most common source of throttling errors is
 *          creating resources that exceed your service limit for this resource type.
 *          Request a limit increase or delete unused resources if possible.</p>
 *
 * @throws {@link ManagedBlockchainServiceException}
 * <p>Base exception class for all service exceptions from ManagedBlockchain service.</p>
 *
 */
export class GetNodeCommand extends $Command<
  GetNodeCommandInput,
  GetNodeCommandOutput,
  ManagedBlockchainClientResolvedConfig
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
  constructor(readonly input: GetNodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ManagedBlockchainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetNodeCommandInput, GetNodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetNodeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainClient";
    const commandName = "GetNodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TaigaWebService",
        operation: "GetNode",
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
  private serialize(input: GetNodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetNodeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetNodeCommandOutput> {
    return de_GetNodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
