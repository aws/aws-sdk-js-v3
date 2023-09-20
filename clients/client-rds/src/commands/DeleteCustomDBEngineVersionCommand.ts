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

import { DBEngineVersion, DeleteCustomDBEngineVersionMessage } from "../models/models_0";
import { de_DeleteCustomDBEngineVersionCommand, se_DeleteCustomDBEngineVersionCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteCustomDBEngineVersionCommand}.
 */
export interface DeleteCustomDBEngineVersionCommandInput extends DeleteCustomDBEngineVersionMessage {}
/**
 * @public
 *
 * The output of {@link DeleteCustomDBEngineVersionCommand}.
 */
export interface DeleteCustomDBEngineVersionCommandOutput extends DBEngineVersion, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a custom engine version. To run this command, make sure you meet the following prerequisites:</p>
 *          <ul>
 *             <li>
 *                <p>The CEV must not be the default for RDS Custom. If it is, change the default
 *                 before running this command.</p>
 *             </li>
 *             <li>
 *                <p>The CEV must not be associated with an RDS Custom DB instance, RDS Custom instance snapshot,
 *                 or automated backup of your RDS Custom instance.</p>
 *             </li>
 *          </ul>
 *          <p>Typically, deletion takes a few minutes.</p>
 *          <note>
 *             <p>The MediaImport service that imports files from Amazon S3 to create CEVs isn't integrated with
 *             Amazon Web Services CloudTrail. If you turn on data logging for Amazon RDS in CloudTrail, calls to the
 *             <code>DeleteCustomDbEngineVersion</code> event aren't logged. However, you might see calls from the
 *             API gateway that accesses your Amazon S3 bucket. These calls originate from the MediaImport service for
 *             the <code>DeleteCustomDbEngineVersion</code> event.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.delete">Deleting a
 *                 CEV</a> in the <i>Amazon RDS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteCustomDBEngineVersionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteCustomDBEngineVersionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteCustomDBEngineVersionMessage
 *   Engine: "STRING_VALUE", // required
 *   EngineVersion: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomDBEngineVersionCommand(input);
 * const response = await client.send(command);
 * // { // DBEngineVersion
 * //   Engine: "STRING_VALUE",
 * //   EngineVersion: "STRING_VALUE",
 * //   DBParameterGroupFamily: "STRING_VALUE",
 * //   DBEngineDescription: "STRING_VALUE",
 * //   DBEngineVersionDescription: "STRING_VALUE",
 * //   DefaultCharacterSet: { // CharacterSet
 * //     CharacterSetName: "STRING_VALUE",
 * //     CharacterSetDescription: "STRING_VALUE",
 * //   },
 * //   Image: { // CustomDBEngineVersionAMI
 * //     ImageId: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //   },
 * //   DBEngineMediaType: "STRING_VALUE",
 * //   SupportedCharacterSets: [ // SupportedCharacterSetsList
 * //     {
 * //       CharacterSetName: "STRING_VALUE",
 * //       CharacterSetDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * //   SupportedNcharCharacterSets: [
 * //     {
 * //       CharacterSetName: "STRING_VALUE",
 * //       CharacterSetDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ValidUpgradeTarget: [ // ValidUpgradeTargetList
 * //     { // UpgradeTarget
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       AutoUpgrade: true || false,
 * //       IsMajorVersionUpgrade: true || false,
 * //       SupportedEngineModes: [ // EngineModeList
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportsParallelQuery: true || false,
 * //       SupportsGlobalDatabases: true || false,
 * //       SupportsBabelfish: true || false,
 * //       SupportsLocalWriteForwarding: true || false,
 * //     },
 * //   ],
 * //   SupportedTimezones: [ // SupportedTimezonesList
 * //     { // Timezone
 * //       TimezoneName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ExportableLogTypes: [ // LogTypeList
 * //     "STRING_VALUE",
 * //   ],
 * //   SupportsLogExportsToCloudwatchLogs: true || false,
 * //   SupportsReadReplica: true || false,
 * //   SupportedEngineModes: [
 * //     "STRING_VALUE",
 * //   ],
 * //   SupportedFeatureNames: [ // FeatureNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   Status: "STRING_VALUE",
 * //   SupportsParallelQuery: true || false,
 * //   SupportsGlobalDatabases: true || false,
 * //   MajorEngineVersion: "STRING_VALUE",
 * //   DatabaseInstallationFilesS3BucketName: "STRING_VALUE",
 * //   DatabaseInstallationFilesS3Prefix: "STRING_VALUE",
 * //   DBEngineVersionArn: "STRING_VALUE",
 * //   KMSKeyId: "STRING_VALUE",
 * //   CreateTime: new Date("TIMESTAMP"),
 * //   TagList: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   SupportsBabelfish: true || false,
 * //   CustomDBEngineVersionManifest: "STRING_VALUE",
 * //   SupportsCertificateRotationWithoutRestart: true || false,
 * //   SupportedCACertificateIdentifiers: [ // CACertificateIdentifiersList
 * //     "STRING_VALUE",
 * //   ],
 * //   SupportsLocalWriteForwarding: true || false,
 * // };
 *
 * ```
 *
 * @param DeleteCustomDBEngineVersionCommandInput - {@link DeleteCustomDBEngineVersionCommandInput}
 * @returns {@link DeleteCustomDBEngineVersionCommandOutput}
 * @see {@link DeleteCustomDBEngineVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomDBEngineVersionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link CustomDBEngineVersionNotFoundFault} (client fault)
 *  <p>The specified CEV was not found.</p>
 *
 * @throws {@link InvalidCustomDBEngineVersionStateFault} (client fault)
 *  <p>You can't delete the CEV.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class DeleteCustomDBEngineVersionCommand extends $Command<
  DeleteCustomDBEngineVersionCommandInput,
  DeleteCustomDBEngineVersionCommandOutput,
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
  constructor(readonly input: DeleteCustomDBEngineVersionCommandInput) {
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
  ): Handler<DeleteCustomDBEngineVersionCommandInput, DeleteCustomDBEngineVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCustomDBEngineVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteCustomDBEngineVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DeleteCustomDBEngineVersion",
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
  private serialize(input: DeleteCustomDBEngineVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteCustomDBEngineVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteCustomDBEngineVersionCommandOutput> {
    return de_DeleteCustomDBEngineVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
