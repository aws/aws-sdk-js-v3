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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetDataLakeSettingsRequest, GetDataLakeSettingsResponse } from "../models/models_0";
import { de_GetDataLakeSettingsCommand, se_GetDataLakeSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDataLakeSettingsCommand}.
 */
export interface GetDataLakeSettingsCommandInput extends GetDataLakeSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetDataLakeSettingsCommand}.
 */
export interface GetDataLakeSettingsCommandOutput extends GetDataLakeSettingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetDataLakeSettingsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetDataLakeSettingsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // GetDataLakeSettingsRequest
 *   CatalogId: "STRING_VALUE",
 * };
 * const command = new GetDataLakeSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetDataLakeSettingsResponse
 * //   DataLakeSettings: { // DataLakeSettings
 * //     DataLakeAdmins: [ // DataLakePrincipalList
 * //       { // DataLakePrincipal
 * //         DataLakePrincipalIdentifier: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CreateDatabaseDefaultPermissions: [ // PrincipalPermissionsList
 * //       { // PrincipalPermissions
 * //         Principal: {
 * //           DataLakePrincipalIdentifier: "STRING_VALUE",
 * //         },
 * //         Permissions: [ // PermissionList
 * //           "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_TAG" || "ASSOCIATE",
 * //         ],
 * //       },
 * //     ],
 * //     CreateTableDefaultPermissions: [
 * //       {
 * //         Principal: {
 * //           DataLakePrincipalIdentifier: "STRING_VALUE",
 * //         },
 * //         Permissions: [
 * //           "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_TAG" || "ASSOCIATE",
 * //         ],
 * //       },
 * //     ],
 * //     Parameters: { // ParametersMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     TrustedResourceOwners: [ // TrustedResourceOwners
 * //       "STRING_VALUE",
 * //     ],
 * //     AllowExternalDataFiltering: true || false,
 * //     ExternalDataFilteringAllowList: [
 * //       {
 * //         DataLakePrincipalIdentifier: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AuthorizedSessionTagValueList: [ // AuthorizedSessionTagValueList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataLakeSettingsCommandInput - {@link GetDataLakeSettingsCommandInput}
 * @returns {@link GetDataLakeSettingsCommandOutput}
 * @see {@link GetDataLakeSettingsCommandInput} for command's `input` shape.
 * @see {@link GetDataLakeSettingsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
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
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 */
export class GetDataLakeSettingsCommand extends $Command<
  GetDataLakeSettingsCommandInput,
  GetDataLakeSettingsCommandOutput,
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
  constructor(readonly input: GetDataLakeSettingsCommandInput) {
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
  ): Handler<GetDataLakeSettingsCommandInput, GetDataLakeSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataLakeSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "GetDataLakeSettingsCommand";
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
  private serialize(input: GetDataLakeSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDataLakeSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataLakeSettingsCommandOutput> {
    return de_GetDataLakeSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
