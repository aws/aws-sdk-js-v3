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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  GetTemporaryGluePartitionCredentialsRequest,
  GetTemporaryGluePartitionCredentialsResponse,
} from "../models/models_0";
import {
  de_GetTemporaryGluePartitionCredentialsCommand,
  se_GetTemporaryGluePartitionCredentialsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTemporaryGluePartitionCredentialsCommand}.
 */
export interface GetTemporaryGluePartitionCredentialsCommandInput extends GetTemporaryGluePartitionCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link GetTemporaryGluePartitionCredentialsCommand}.
 */
export interface GetTemporaryGluePartitionCredentialsCommandOutput
  extends GetTemporaryGluePartitionCredentialsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>This API is identical to <code>GetTemporaryTableCredentials</code> except that this is used when the target Data Catalog resource is of type Partition.  Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetTemporaryGluePartitionCredentialsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetTemporaryGluePartitionCredentialsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // GetTemporaryGluePartitionCredentialsRequest
 *   TableArn: "STRING_VALUE", // required
 *   Partition: { // PartitionValueList
 *     Values: [ // ValueStringList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Permissions: [ // PermissionList
 *     "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_LF_TAG" || "ASSOCIATE" || "GRANT_WITH_LF_TAG_EXPRESSION",
 *   ],
 *   DurationSeconds: Number("int"),
 *   AuditContext: { // AuditContext
 *     AdditionalAuditContext: "STRING_VALUE",
 *   },
 *   SupportedPermissionTypes: [ // PermissionTypeList
 *     "COLUMN_PERMISSION" || "CELL_FILTER_PERMISSION" || "NESTED_PERMISSION" || "NESTED_CELL_PERMISSION",
 *   ],
 * };
 * const command = new GetTemporaryGluePartitionCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetTemporaryGluePartitionCredentialsResponse
 * //   AccessKeyId: "STRING_VALUE",
 * //   SecretAccessKey: "STRING_VALUE",
 * //   SessionToken: "STRING_VALUE",
 * //   Expiration: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetTemporaryGluePartitionCredentialsCommandInput - {@link GetTemporaryGluePartitionCredentialsCommandInput}
 * @returns {@link GetTemporaryGluePartitionCredentialsCommandOutput}
 * @see {@link GetTemporaryGluePartitionCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetTemporaryGluePartitionCredentialsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link PermissionTypeMismatchException} (client fault)
 *  <p>The engine does not support filtering data based on the enforced permissions. For example, if you call the <code>GetTemporaryGlueTableCredentials</code> operation with <code>SupportedPermissionType</code> equal to <code>ColumnPermission</code>, but cell-level permissions exist on the table, this exception is thrown.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 */
export class GetTemporaryGluePartitionCredentialsCommand extends $Command<
  GetTemporaryGluePartitionCredentialsCommandInput,
  GetTemporaryGluePartitionCredentialsCommandOutput,
  LakeFormationClientResolvedConfig
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
  constructor(readonly input: GetTemporaryGluePartitionCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTemporaryGluePartitionCredentialsCommandInput, GetTemporaryGluePartitionCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTemporaryGluePartitionCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "GetTemporaryGluePartitionCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLakeFormation",
        operation: "GetTemporaryGluePartitionCredentials",
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
  private serialize(
    input: GetTemporaryGluePartitionCredentialsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetTemporaryGluePartitionCredentialsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTemporaryGluePartitionCredentialsCommandOutput> {
    return de_GetTemporaryGluePartitionCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
