// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ExportTask } from "../models/models_0";
import { StartExportTaskMessage } from "../models/models_1";
import {
  deserializeAws_queryStartExportTaskCommand,
  serializeAws_queryStartExportTaskCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link StartExportTaskCommand}.
 */
export interface StartExportTaskCommandInput extends StartExportTaskMessage {}
/**
 * @public
 *
 * The output of {@link StartExportTaskCommand}.
 */
export interface StartExportTaskCommandOutput extends ExportTask, __MetadataBearer {}

/**
 * @public
 * <p>Starts an export of DB snapshot or DB cluster data to Amazon S3.
 *             The provided IAM role must have access to the S3 bucket.</p>
 *          <p>You can't export snapshot data from RDS Custom DB instances.</p>
 *          <p>You can't export cluster data from Multi-AZ DB clusters.</p>
 *          <p>For more information on exporting DB snapshot data, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html">Exporting DB snapshot
 *             data to Amazon S3</a> in the <i>Amazon RDS User Guide</i>
 *             or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-export-snapshot.html">Exporting DB
 *             cluster snapshot data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on exporting DB cluster data, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/export-cluster-data.html">Exporting DB
 *             cluster data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StartExportTaskCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartExportTaskCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // StartExportTaskMessage
 *   ExportTaskIdentifier: "STRING_VALUE", // required
 *   SourceArn: "STRING_VALUE", // required
 *   S3BucketName: "STRING_VALUE", // required
 *   IamRoleArn: "STRING_VALUE", // required
 *   KmsKeyId: "STRING_VALUE", // required
 *   S3Prefix: "STRING_VALUE",
 *   ExportOnly: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StartExportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartExportTaskCommandInput - {@link StartExportTaskCommandInput}
 * @returns {@link StartExportTaskCommandOutput}
 * @see {@link StartExportTaskCommandInput} for command's `input` shape.
 * @see {@link StartExportTaskCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot.</p>
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.</p>
 *
 * @throws {@link ExportTaskAlreadyExistsFault} (client fault)
 *  <p>You can't start an export task that's already running.</p>
 *
 * @throws {@link IamRoleMissingPermissionsFault} (client fault)
 *  <p>The IAM role requires additional permissions to export to an Amazon S3 bucket.</p>
 *
 * @throws {@link IamRoleNotFoundFault} (client fault)
 *  <p>The IAM role is missing for exporting to an Amazon S3 bucket.</p>
 *
 * @throws {@link InvalidExportOnlyFault} (client fault)
 *  <p>The export is invalid for exporting to an Amazon S3 bucket.</p>
 *
 * @throws {@link InvalidExportSourceStateFault} (client fault)
 *  <p>The state of the export snapshot is invalid for exporting to an Amazon S3 bucket.</p>
 *
 * @throws {@link InvalidS3BucketFault} (client fault)
 *  <p>The specified Amazon S3 bucket name can't be found or Amazon RDS isn't
 *             authorized to access the specified Amazon S3 bucket. Verify the <b>SourceS3BucketName</b> and <b>S3IngestionRoleArn</b> values and try again.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 *
 *
 */
export class StartExportTaskCommand extends $Command<
  StartExportTaskCommandInput,
  StartExportTaskCommandOutput,
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
  constructor(readonly input: StartExportTaskCommandInput) {
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
  ): Handler<StartExportTaskCommandInput, StartExportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartExportTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "StartExportTaskCommand";
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
  private serialize(input: StartExportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStartExportTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartExportTaskCommandOutput> {
    return deserializeAws_queryStartExportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
