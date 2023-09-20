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

import { CreateDBParameterGroupMessage, CreateDBParameterGroupResult } from "../models/models_0";
import { de_CreateDBParameterGroupCommand, se_CreateDBParameterGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDBParameterGroupCommand}.
 */
export interface CreateDBParameterGroupCommandInput extends CreateDBParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBParameterGroupCommand}.
 */
export interface CreateDBParameterGroupCommandOutput extends CreateDBParameterGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new DB parameter group.</p>
 *          <p>A DB parameter group is initially created with the default parameters for the
 *             database engine used by the DB instance. To provide custom values for any of the
 *             parameters, you must modify the group after creating it using
 *             <code>ModifyDBParameterGroup</code>. Once you've created a DB parameter group, you need to
 *             associate it with your DB instance using <code>ModifyDBInstance</code>. When you associate
 *             a new DB parameter group with a running DB instance, you need to reboot the DB
 *             instance without failover for the new DB parameter group and associated settings to take effect.</p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 *          <important>
 *             <p>After you create a DB parameter group, you should wait at least 5 minutes
 *                 before creating your first DB instance that uses that DB parameter group as the default parameter
 *                 group. This allows Amazon RDS to fully complete the create action before the parameter
 *                 group is used as the default for a new DB instance. This is especially important for parameters
 *                 that are critical when creating the default database for a DB instance, such as the character set
 *                 for the default database defined by the <code>character_set_database</code> parameter. You can use the
 *                 <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
 *                 <i>DescribeDBParameters</i> command to verify
 *                 that your DB parameter group has been created or modified.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CreateDBParameterGroupMessage
 *   DBParameterGroupName: "STRING_VALUE", // required
 *   DBParameterGroupFamily: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBParameterGroupResult
 * //   DBParameterGroup: { // DBParameterGroup
 * //     DBParameterGroupName: "STRING_VALUE",
 * //     DBParameterGroupFamily: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     DBParameterGroupArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDBParameterGroupCommandInput - {@link CreateDBParameterGroupCommandInput}
 * @returns {@link CreateDBParameterGroupCommandOutput}
 * @see {@link CreateDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBParameterGroupAlreadyExistsFault} (client fault)
 *  <p>A DB parameter group with the same name exists.</p>
 *
 * @throws {@link DBParameterGroupQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB parameter
 *             groups.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To create a DB parameter group
 * ```javascript
 * // The following example creates a DB parameter group.
 * const input = {
 *   "DBParameterGroupFamily": "MySQL8.0",
 *   "DBParameterGroupName": "mydbparametergroup",
 *   "Description": "My new parameter group"
 * };
 * const command = new CreateDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBParameterGroup": {
 *     "DBParameterGroupArn": "arn:aws:rds:us-east-1:123456789012:pg:mydbparametergroup",
 *     "DBParameterGroupFamily": "mysql8.0",
 *     "DBParameterGroupName": "mydbparametergroup",
 *     "Description": "My new parameter group"
 *   }
 * }
 * *\/
 * // example id: to-create-a-db-parameter-group-1679939227970
 * ```
 *
 */
export class CreateDBParameterGroupCommand extends $Command<
  CreateDBParameterGroupCommandInput,
  CreateDBParameterGroupCommandOutput,
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
  constructor(readonly input: CreateDBParameterGroupCommandInput) {
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
  ): Handler<CreateDBParameterGroupCommandInput, CreateDBParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDBParameterGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "CreateDBParameterGroup",
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
  private serialize(input: CreateDBParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDBParameterGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBParameterGroupCommandOutput> {
    return de_CreateDBParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
