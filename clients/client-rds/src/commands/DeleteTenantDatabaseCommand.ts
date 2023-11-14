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
  DeleteTenantDatabaseMessage,
  DeleteTenantDatabaseResult,
  DeleteTenantDatabaseResultFilterSensitiveLog,
} from "../models/models_0";
import { de_DeleteTenantDatabaseCommand, se_DeleteTenantDatabaseCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteTenantDatabaseCommand}.
 */
export interface DeleteTenantDatabaseCommandInput extends DeleteTenantDatabaseMessage {}
/**
 * @public
 *
 * The output of {@link DeleteTenantDatabaseCommand}.
 */
export interface DeleteTenantDatabaseCommandOutput extends DeleteTenantDatabaseResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a tenant database from your DB instance. This command only applies to RDS for
 *             Oracle container database (CDB) instances.</p>
 *          <p>You can't delete a tenant database when it is the only tenant in the DB
 *             instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteTenantDatabaseCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteTenantDatabaseCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteTenantDatabaseMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   TenantDBName: "STRING_VALUE", // required
 *   SkipFinalSnapshot: true || false,
 *   FinalDBSnapshotIdentifier: "STRING_VALUE",
 * };
 * const command = new DeleteTenantDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTenantDatabaseResult
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
 * @param DeleteTenantDatabaseCommandInput - {@link DeleteTenantDatabaseCommandInput}
 * @returns {@link DeleteTenantDatabaseCommandOutput}
 * @see {@link DeleteTenantDatabaseCommandInput} for command's `input` shape.
 * @see {@link DeleteTenantDatabaseCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link TenantDatabaseNotFoundFault} (client fault)
 *  <p>The specified tenant database wasn't found in the DB instance.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class DeleteTenantDatabaseCommand extends $Command<
  DeleteTenantDatabaseCommandInput,
  DeleteTenantDatabaseCommandOutput,
  RDSClientResolvedConfig
> {
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
  constructor(readonly input: DeleteTenantDatabaseCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTenantDatabaseCommandInput, DeleteTenantDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTenantDatabaseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteTenantDatabaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DeleteTenantDatabaseResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DeleteTenantDatabase",
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
  private serialize(input: DeleteTenantDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteTenantDatabaseCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTenantDatabaseCommandOutput> {
    return de_DeleteTenantDatabaseCommand(output, context);
  }
}
