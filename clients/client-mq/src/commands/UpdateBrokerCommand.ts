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

import { UpdateBrokerRequest, UpdateBrokerResponse } from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { de_UpdateBrokerCommand, se_UpdateBrokerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateBrokerCommand}.
 */
export interface UpdateBrokerCommandInput extends UpdateBrokerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBrokerCommand}.
 */
export interface UpdateBrokerCommandOutput extends UpdateBrokerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds a pending configuration change to a broker.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, UpdateBrokerCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, UpdateBrokerCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const input = { // UpdateBrokerRequest
 *   AuthenticationStrategy: "SIMPLE" || "LDAP",
 *   AutoMinorVersionUpgrade: true || false,
 *   BrokerId: "STRING_VALUE", // required
 *   Configuration: { // ConfigurationId
 *     Id: "STRING_VALUE", // required
 *     Revision: Number("int"),
 *   },
 *   EngineVersion: "STRING_VALUE",
 *   HostInstanceType: "STRING_VALUE",
 *   LdapServerMetadata: { // LdapServerMetadataInput
 *     Hosts: [ // __listOf__string // required
 *       "STRING_VALUE",
 *     ],
 *     RoleBase: "STRING_VALUE", // required
 *     RoleName: "STRING_VALUE",
 *     RoleSearchMatching: "STRING_VALUE", // required
 *     RoleSearchSubtree: true || false,
 *     ServiceAccountPassword: "STRING_VALUE", // required
 *     ServiceAccountUsername: "STRING_VALUE", // required
 *     UserBase: "STRING_VALUE", // required
 *     UserRoleName: "STRING_VALUE",
 *     UserSearchMatching: "STRING_VALUE", // required
 *     UserSearchSubtree: true || false,
 *   },
 *   Logs: { // Logs
 *     Audit: true || false,
 *     General: true || false,
 *   },
 *   MaintenanceWindowStartTime: { // WeeklyStartTime
 *     DayOfWeek: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY", // required
 *     TimeOfDay: "STRING_VALUE", // required
 *     TimeZone: "STRING_VALUE",
 *   },
 *   SecurityGroups: [
 *     "STRING_VALUE",
 *   ],
 *   DataReplicationMode: "NONE" || "CRDR",
 * };
 * const command = new UpdateBrokerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBrokerResponse
 * //   AuthenticationStrategy: "SIMPLE" || "LDAP",
 * //   AutoMinorVersionUpgrade: true || false,
 * //   BrokerId: "STRING_VALUE",
 * //   Configuration: { // ConfigurationId
 * //     Id: "STRING_VALUE", // required
 * //     Revision: Number("int"),
 * //   },
 * //   EngineVersion: "STRING_VALUE",
 * //   HostInstanceType: "STRING_VALUE",
 * //   LdapServerMetadata: { // LdapServerMetadataOutput
 * //     Hosts: [ // __listOf__string // required
 * //       "STRING_VALUE",
 * //     ],
 * //     RoleBase: "STRING_VALUE", // required
 * //     RoleName: "STRING_VALUE",
 * //     RoleSearchMatching: "STRING_VALUE", // required
 * //     RoleSearchSubtree: true || false,
 * //     ServiceAccountUsername: "STRING_VALUE", // required
 * //     UserBase: "STRING_VALUE", // required
 * //     UserRoleName: "STRING_VALUE",
 * //     UserSearchMatching: "STRING_VALUE", // required
 * //     UserSearchSubtree: true || false,
 * //   },
 * //   Logs: { // Logs
 * //     Audit: true || false,
 * //     General: true || false,
 * //   },
 * //   MaintenanceWindowStartTime: { // WeeklyStartTime
 * //     DayOfWeek: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY", // required
 * //     TimeOfDay: "STRING_VALUE", // required
 * //     TimeZone: "STRING_VALUE",
 * //   },
 * //   SecurityGroups: [
 * //     "STRING_VALUE",
 * //   ],
 * //   DataReplicationMetadata: { // DataReplicationMetadataOutput
 * //     DataReplicationCounterpart: { // DataReplicationCounterpart
 * //       BrokerId: "STRING_VALUE", // required
 * //       Region: "STRING_VALUE", // required
 * //     },
 * //     DataReplicationRole: "STRING_VALUE", // required
 * //   },
 * //   DataReplicationMode: "NONE" || "CRDR",
 * //   PendingDataReplicationMetadata: {
 * //     DataReplicationCounterpart: {
 * //       BrokerId: "STRING_VALUE", // required
 * //       Region: "STRING_VALUE", // required
 * //     },
 * //     DataReplicationRole: "STRING_VALUE", // required
 * //   },
 * //   PendingDataReplicationMode: "NONE" || "CRDR",
 * // };
 *
 * ```
 *
 * @param UpdateBrokerCommandInput - {@link UpdateBrokerCommandInput}
 * @returns {@link UpdateBrokerCommandOutput}
 * @see {@link UpdateBrokerCommandInput} for command's `input` shape.
 * @see {@link UpdateBrokerCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 */
export class UpdateBrokerCommand extends $Command<
  UpdateBrokerCommandInput,
  UpdateBrokerCommandOutput,
  MqClientResolvedConfig
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
  constructor(readonly input: UpdateBrokerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBrokerCommandInput, UpdateBrokerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateBrokerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "UpdateBrokerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "mq",
        operation: "UpdateBroker",
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
  private serialize(input: UpdateBrokerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateBrokerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBrokerCommandOutput> {
    return de_UpdateBrokerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
