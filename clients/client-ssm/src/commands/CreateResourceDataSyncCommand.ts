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

import { CreateResourceDataSyncRequest, CreateResourceDataSyncResult } from "../models/models_0";
import { de_CreateResourceDataSyncCommand, se_CreateResourceDataSyncCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateResourceDataSyncCommand}.
 */
export interface CreateResourceDataSyncCommandInput extends CreateResourceDataSyncRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceDataSyncCommand}.
 */
export interface CreateResourceDataSyncCommandOutput extends CreateResourceDataSyncResult, __MetadataBearer {}

/**
 * @public
 * <p>A resource data sync helps you view data from multiple sources in a single location.
 *    Amazon Web Services Systems Manager offers two types of resource data sync: <code>SyncToDestination</code> and
 *     <code>SyncFromSource</code>.</p>
 *          <p>You can configure Systems Manager Inventory to use the <code>SyncToDestination</code> type to
 *    synchronize Inventory data from multiple Amazon Web Services Regions to a single Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html">Configuring resource data
 *     sync for Inventory</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *          <p>You can configure Systems Manager Explorer to use the <code>SyncFromSource</code> type to synchronize
 *    operational work items (OpsItems) and operational data (OpsData) from multiple Amazon Web Services Regions to a
 *    single Amazon S3 bucket. This type can synchronize OpsItems and OpsData from multiple
 *    Amazon Web Services accounts and Amazon Web Services Regions or <code>EntireOrganization</code> by using Organizations. For more
 *    information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager
 *     Explorer to display data from multiple accounts and Regions</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *          <p>A resource data sync is an asynchronous operation that returns immediately. After a
 *    successful initial sync is completed, the system continuously syncs data. To check the status of
 *    a sync, use the <a>ListResourceDataSync</a>.</p>
 *          <note>
 *             <p>By default, data isn't encrypted in Amazon S3. We strongly recommend that you
 *     enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you
 *     secure access to the Amazon S3 bucket by creating a restrictive bucket policy. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // CreateResourceDataSyncRequest
 *   SyncName: "STRING_VALUE", // required
 *   S3Destination: { // ResourceDataSyncS3Destination
 *     BucketName: "STRING_VALUE", // required
 *     Prefix: "STRING_VALUE",
 *     SyncFormat: "JsonSerDe", // required
 *     Region: "STRING_VALUE", // required
 *     AWSKMSKeyARN: "STRING_VALUE",
 *     DestinationDataSharing: { // ResourceDataSyncDestinationDataSharing
 *       DestinationDataSharingType: "STRING_VALUE",
 *     },
 *   },
 *   SyncType: "STRING_VALUE",
 *   SyncSource: { // ResourceDataSyncSource
 *     SourceType: "STRING_VALUE", // required
 *     AwsOrganizationsSource: { // ResourceDataSyncAwsOrganizationsSource
 *       OrganizationSourceType: "STRING_VALUE", // required
 *       OrganizationalUnits: [ // ResourceDataSyncOrganizationalUnitList
 *         { // ResourceDataSyncOrganizationalUnit
 *           OrganizationalUnitId: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *     SourceRegions: [ // ResourceDataSyncSourceRegionList // required
 *       "STRING_VALUE",
 *     ],
 *     IncludeFutureRegions: true || false,
 *     EnableAllOpsDataSources: true || false,
 *   },
 * };
 * const command = new CreateResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateResourceDataSyncCommandInput - {@link CreateResourceDataSyncCommandInput}
 * @returns {@link CreateResourceDataSyncCommandOutput}
 * @see {@link CreateResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link CreateResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceDataSyncAlreadyExistsException} (client fault)
 *  <p>A sync configuration with the same name already exists.</p>
 *
 * @throws {@link ResourceDataSyncCountExceededException} (client fault)
 *  <p>You have exceeded the allowed maximum sync configurations.</p>
 *
 * @throws {@link ResourceDataSyncInvalidConfigurationException} (client fault)
 *  <p>The specified sync configuration is invalid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class CreateResourceDataSyncCommand extends $Command<
  CreateResourceDataSyncCommandInput,
  CreateResourceDataSyncCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: CreateResourceDataSyncCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateResourceDataSyncCommandInput, CreateResourceDataSyncCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateResourceDataSyncCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "CreateResourceDataSyncCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "CreateResourceDataSync",
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
  private serialize(input: CreateResourceDataSyncCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateResourceDataSyncCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateResourceDataSyncCommandOutput> {
    return de_CreateResourceDataSyncCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
