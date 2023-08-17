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

import { AddRoleToDBInstanceMessage } from "../models/models_0";
import { de_AddRoleToDBInstanceCommand, se_AddRoleToDBInstanceCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddRoleToDBInstanceCommand}.
 */
export interface AddRoleToDBInstanceCommandInput extends AddRoleToDBInstanceMessage {}
/**
 * @public
 *
 * The output of {@link AddRoleToDBInstanceCommand}.
 */
export interface AddRoleToDBInstanceCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p>
 *          <note>
 *             <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p>
 *          </note>
 *          <p>This command doesn't apply to RDS Custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, AddRoleToDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, AddRoleToDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // AddRoleToDBInstanceMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   FeatureName: "STRING_VALUE", // required
 * };
 * const command = new AddRoleToDBInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddRoleToDBInstanceCommandInput - {@link AddRoleToDBInstanceCommandInput}
 * @returns {@link AddRoleToDBInstanceCommandOutput}
 * @see {@link AddRoleToDBInstanceCommandInput} for command's `input` shape.
 * @see {@link AddRoleToDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link DBInstanceRoleAlreadyExistsFault} (client fault)
 *  <p>The specified <code>RoleArn</code> or <code>FeatureName</code> value is already associated with the DB instance.</p>
 *
 * @throws {@link DBInstanceRoleQuotaExceededFault} (client fault)
 *  <p>You can't associate any more Amazon Web Services Identity and Access Management (IAM) roles with the DB instance because the quota has been reached.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To associate an AWS Identity and Access Management (IAM) role with a DB instance
 * ```javascript
 * // The following example adds the role to a DB instance named test-instance.
 * const input = {
 *   "DBInstanceIdentifier": "test-instance",
 *   "FeatureName": "S3_INTEGRATION",
 *   "RoleArn": "arn:aws:iam::111122223333:role/rds-s3-integration-role"
 * };
 * const command = new AddRoleToDBInstanceCommand(input);
 * await client.send(command);
 * // example id: to-associate-an-aws-identity-and-access-management-iam-role-with-a-db-instance-1679691512295
 * ```
 *
 */
export class AddRoleToDBInstanceCommand extends $Command<
  AddRoleToDBInstanceCommandInput,
  AddRoleToDBInstanceCommandOutput,
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
  constructor(readonly input: AddRoleToDBInstanceCommandInput) {
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
  ): Handler<AddRoleToDBInstanceCommandInput, AddRoleToDBInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddRoleToDBInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "AddRoleToDBInstanceCommand";
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
  private serialize(input: AddRoleToDBInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddRoleToDBInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddRoleToDBInstanceCommandOutput> {
    return de_AddRoleToDBInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
