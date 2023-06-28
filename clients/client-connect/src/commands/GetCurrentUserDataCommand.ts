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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { GetCurrentUserDataRequest, GetCurrentUserDataResponse } from "../models/models_1";
import { de_GetCurrentUserDataCommand, se_GetCurrentUserDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCurrentUserDataCommand}.
 */
export interface GetCurrentUserDataCommandInput extends GetCurrentUserDataRequest {}
/**
 * @public
 *
 * The output of {@link GetCurrentUserDataCommand}.
 */
export interface GetCurrentUserDataCommandOutput extends GetCurrentUserDataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the real-time active user data from the specified Amazon Connect instance. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetCurrentUserDataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetCurrentUserDataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // GetCurrentUserDataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Filters: { // UserDataFilters
 *     Queues: [ // Queues
 *       "STRING_VALUE",
 *     ],
 *     ContactFilter: { // ContactFilter
 *       ContactStates: [ // ContactStates
 *         "INCOMING" || "PENDING" || "CONNECTING" || "CONNECTED" || "CONNECTED_ONHOLD" || "MISSED" || "ERROR" || "ENDED" || "REJECTED",
 *       ],
 *     },
 *     RoutingProfiles: [ // RoutingProfiles
 *       "STRING_VALUE",
 *     ],
 *     Agents: [ // AgentsMinOneMaxHundred
 *       "STRING_VALUE",
 *     ],
 *     UserHierarchyGroups: [ // UserDataHierarchyGroups
 *       "STRING_VALUE",
 *     ],
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetCurrentUserDataCommand(input);
 * const response = await client.send(command);
 * // { // GetCurrentUserDataResponse
 * //   NextToken: "STRING_VALUE",
 * //   UserDataList: [ // UserDataList
 * //     { // UserData
 * //       User: { // UserReference
 * //         Id: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       RoutingProfile: { // RoutingProfileReference
 * //         Id: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       HierarchyPath: { // HierarchyPathReference
 * //         LevelOne: { // HierarchyGroupSummaryReference
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         LevelTwo: {
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         LevelThree: {
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         LevelFour: {
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         LevelFive: {
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //         },
 * //       },
 * //       Status: { // AgentStatusReference
 * //         StatusStartTimestamp: new Date("TIMESTAMP"),
 * //         StatusArn: "STRING_VALUE",
 * //         StatusName: "STRING_VALUE",
 * //       },
 * //       AvailableSlotsByChannel: { // ChannelToCountMap
 * //         "<keys>": Number("int"),
 * //       },
 * //       MaxSlotsByChannel: {
 * //         "<keys>": Number("int"),
 * //       },
 * //       ActiveSlotsByChannel: {
 * //         "<keys>": Number("int"),
 * //       },
 * //       Contacts: [ // AgentContactReferenceList
 * //         { // AgentContactReference
 * //           ContactId: "STRING_VALUE",
 * //           Channel: "VOICE" || "CHAT" || "TASK",
 * //           InitiationMethod: "INBOUND" || "OUTBOUND" || "TRANSFER" || "QUEUE_TRANSFER" || "CALLBACK" || "API" || "DISCONNECT" || "MONITOR" || "EXTERNAL_OUTBOUND",
 * //           AgentContactState: "INCOMING" || "PENDING" || "CONNECTING" || "CONNECTED" || "CONNECTED_ONHOLD" || "MISSED" || "ERROR" || "ENDED" || "REJECTED",
 * //           StateStartTimestamp: new Date("TIMESTAMP"),
 * //           ConnectedToAgentTimestamp: new Date("TIMESTAMP"),
 * //           Queue: { // QueueReference
 * //             Id: "STRING_VALUE",
 * //             Arn: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       NextStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetCurrentUserDataCommandInput - {@link GetCurrentUserDataCommandInput}
 * @returns {@link GetCurrentUserDataCommandOutput}
 * @see {@link GetCurrentUserDataCommandInput} for command's `input` shape.
 * @see {@link GetCurrentUserDataCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class GetCurrentUserDataCommand extends $Command<
  GetCurrentUserDataCommandInput,
  GetCurrentUserDataCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: GetCurrentUserDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCurrentUserDataCommandInput, GetCurrentUserDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCurrentUserDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "GetCurrentUserDataCommand";
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
  private serialize(input: GetCurrentUserDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCurrentUserDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCurrentUserDataCommandOutput> {
    return de_GetCurrentUserDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
