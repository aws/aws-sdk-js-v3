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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseRequest, GetRelationalDatabaseResult } from "../models/models_1";
import { de_GetRelationalDatabaseCommand, se_GetRelationalDatabaseCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRelationalDatabaseCommand}.
 */
export interface GetRelationalDatabaseCommandInput extends GetRelationalDatabaseRequest {}
/**
 * @public
 *
 * The output of {@link GetRelationalDatabaseCommand}.
 */
export interface GetRelationalDatabaseCommandOutput extends GetRelationalDatabaseResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a specific database in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetRelationalDatabaseRequest
 *   relationalDatabaseName: "STRING_VALUE", // required
 * };
 * const command = new GetRelationalDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // GetRelationalDatabaseResult
 * //   relationalDatabase: { // RelationalDatabase
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     supportCode: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     location: { // ResourceLocation
 * //       availabilityZone: "STRING_VALUE",
 * //       regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
 * //     },
 * //     resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     relationalDatabaseBlueprintId: "STRING_VALUE",
 * //     relationalDatabaseBundleId: "STRING_VALUE",
 * //     masterDatabaseName: "STRING_VALUE",
 * //     hardware: { // RelationalDatabaseHardware
 * //       cpuCount: Number("int"),
 * //       diskSizeInGb: Number("int"),
 * //       ramSizeInGb: Number("float"),
 * //     },
 * //     state: "STRING_VALUE",
 * //     secondaryAvailabilityZone: "STRING_VALUE",
 * //     backupRetentionEnabled: true || false,
 * //     pendingModifiedValues: { // PendingModifiedRelationalDatabaseValues
 * //       masterUserPassword: "STRING_VALUE",
 * //       engineVersion: "STRING_VALUE",
 * //       backupRetentionEnabled: true || false,
 * //     },
 * //     engine: "STRING_VALUE",
 * //     engineVersion: "STRING_VALUE",
 * //     latestRestorableTime: new Date("TIMESTAMP"),
 * //     masterUsername: "STRING_VALUE",
 * //     parameterApplyStatus: "STRING_VALUE",
 * //     preferredBackupWindow: "STRING_VALUE",
 * //     preferredMaintenanceWindow: "STRING_VALUE",
 * //     publiclyAccessible: true || false,
 * //     masterEndpoint: { // RelationalDatabaseEndpoint
 * //       port: Number("int"),
 * //       address: "STRING_VALUE",
 * //     },
 * //     pendingMaintenanceActions: [ // PendingMaintenanceActionList
 * //       { // PendingMaintenanceAction
 * //         action: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         currentApplyDate: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     caCertificateIdentifier: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRelationalDatabaseCommandInput - {@link GetRelationalDatabaseCommandInput}
 * @returns {@link GetRelationalDatabaseCommandOutput}
 * @see {@link GetRelationalDatabaseCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 */
export class GetRelationalDatabaseCommand extends $Command<
  GetRelationalDatabaseCommandInput,
  GetRelationalDatabaseCommandOutput,
  LightsailClientResolvedConfig
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
  constructor(readonly input: GetRelationalDatabaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRelationalDatabaseCommandInput, GetRelationalDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRelationalDatabaseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetRelationalDatabaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Lightsail_20161128",
        operation: "GetRelationalDatabase",
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
  private serialize(input: GetRelationalDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRelationalDatabaseCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRelationalDatabaseCommandOutput> {
    return de_GetRelationalDatabaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
