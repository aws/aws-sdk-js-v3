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
  ModifyTenantDatabaseMessage,
  ModifyTenantDatabaseMessageFilterSensitiveLog,
  ModifyTenantDatabaseResult,
  ModifyTenantDatabaseResultFilterSensitiveLog,
} from "../models/models_1";
import { de_ModifyTenantDatabaseCommand, se_ModifyTenantDatabaseCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyTenantDatabaseCommand}.
 */
export interface ModifyTenantDatabaseCommandInput extends ModifyTenantDatabaseMessage {}
/**
 * @public
 *
 * The output of {@link ModifyTenantDatabaseCommand}.
 */
export interface ModifyTenantDatabaseCommandOutput extends ModifyTenantDatabaseResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies an existing tenant database in a DB instance. You can change the tenant
 *             database name or the master user password. This operation is supported only for RDS for
 *             Oracle CDB instances using the multi-tenant configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyTenantDatabaseCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyTenantDatabaseCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyTenantDatabaseMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   TenantDBName: "STRING_VALUE", // required
 *   MasterUserPassword: "STRING_VALUE",
 *   NewTenantDBName: "STRING_VALUE",
 * };
 * const command = new ModifyTenantDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTenantDatabaseResult
 * //   TenantDatabase: { // TenantDatabase
 * //     TenantDatabaseCreateTime: new Date("TIMESTAMP"),
 * //     DBInstanceIdentifier: "STRING_VALUE",
 * //     TenantDBName: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     MasterUsername: "STRING_VALUE",
 * //     DbiResourceId: "STRING_VALUE",
 * //     TenantDatabaseResourceId: "STRING_VALUE",
 * //     TenantDatabaseARN: "STRING_VALUE",
 * //     CharacterSetName: "STRING_VALUE",
 * //     NcharCharacterSetName: "STRING_VALUE",
 * //     DeletionProtection: true || false,
 * //     PendingModifiedValues: { // TenantDatabasePendingModifiedValues
 * //       MasterUserPassword: "STRING_VALUE",
 * //       TenantDBName: "STRING_VALUE",
 * //     },
 * //     TagList: [ // TagList
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
 * @param ModifyTenantDatabaseCommandInput - {@link ModifyTenantDatabaseCommandInput}
 * @returns {@link ModifyTenantDatabaseCommandOutput}
 * @see {@link ModifyTenantDatabaseCommandInput} for command's `input` shape.
 * @see {@link ModifyTenantDatabaseCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link TenantDatabaseAlreadyExistsFault} (client fault)
 *  <p>You attempted to either create a tenant database that already exists or
 *                 modify a tenant database to use the name of an existing tenant database.</p>
 *
 * @throws {@link TenantDatabaseNotFoundFault} (client fault)
 *  <p>The specified tenant database wasn't found in the DB instance.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class ModifyTenantDatabaseCommand extends $Command<
  ModifyTenantDatabaseCommandInput,
  ModifyTenantDatabaseCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: ModifyTenantDatabaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyTenantDatabaseCommandInput, ModifyTenantDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyTenantDatabaseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyTenantDatabaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyTenantDatabaseMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyTenantDatabaseResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "ModifyTenantDatabase",
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
  private serialize(input: ModifyTenantDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyTenantDatabaseCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyTenantDatabaseCommandOutput> {
    return de_ModifyTenantDatabaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
