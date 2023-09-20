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
import { GetTemporaryGlueTableCredentialsRequest, GetTemporaryGlueTableCredentialsResponse } from "../models/models_0";
import {
  de_GetTemporaryGlueTableCredentialsCommand,
  se_GetTemporaryGlueTableCredentialsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTemporaryGlueTableCredentialsCommand}.
 */
export interface GetTemporaryGlueTableCredentialsCommandInput extends GetTemporaryGlueTableCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link GetTemporaryGlueTableCredentialsCommand}.
 */
export interface GetTemporaryGlueTableCredentialsCommandOutput
  extends GetTemporaryGlueTableCredentialsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetTemporaryGlueTableCredentialsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetTemporaryGlueTableCredentialsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // GetTemporaryGlueTableCredentialsRequest
 *   TableArn: "STRING_VALUE", // required
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
 * const command = new GetTemporaryGlueTableCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetTemporaryGlueTableCredentialsResponse
 * //   AccessKeyId: "STRING_VALUE",
 * //   SecretAccessKey: "STRING_VALUE",
 * //   SessionToken: "STRING_VALUE",
 * //   Expiration: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetTemporaryGlueTableCredentialsCommandInput - {@link GetTemporaryGlueTableCredentialsCommandInput}
 * @returns {@link GetTemporaryGlueTableCredentialsCommandOutput}
 * @see {@link GetTemporaryGlueTableCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetTemporaryGlueTableCredentialsCommandOutput} for command's `response` shape.
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
export class GetTemporaryGlueTableCredentialsCommand extends $Command<
  GetTemporaryGlueTableCredentialsCommandInput,
  GetTemporaryGlueTableCredentialsCommandOutput,
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
  constructor(readonly input: GetTemporaryGlueTableCredentialsCommandInput) {
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
  ): Handler<GetTemporaryGlueTableCredentialsCommandInput, GetTemporaryGlueTableCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTemporaryGlueTableCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "GetTemporaryGlueTableCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLakeFormation",
        operation: "GetTemporaryGlueTableCredentials",
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
    input: GetTemporaryGlueTableCredentialsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetTemporaryGlueTableCredentialsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTemporaryGlueTableCredentialsCommandOutput> {
    return de_GetTemporaryGlueTableCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
