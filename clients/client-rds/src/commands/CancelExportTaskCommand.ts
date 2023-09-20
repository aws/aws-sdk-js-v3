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

import { CancelExportTaskMessage, ExportTask } from "../models/models_0";
import { de_CancelExportTaskCommand, se_CancelExportTaskCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CancelExportTaskCommand}.
 */
export interface CancelExportTaskCommandInput extends CancelExportTaskMessage {}
/**
 * @public
 *
 * The output of {@link CancelExportTaskCommand}.
 */
export interface CancelExportTaskCommandOutput extends ExportTask, __MetadataBearer {}

/**
 * @public
 * <p>Cancels an export task in progress that is exporting a snapshot or cluster to Amazon S3.
 *             Any data that has already been written to the S3 bucket isn't removed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CancelExportTaskCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CancelExportTaskCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CancelExportTaskMessage
 *   ExportTaskIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CancelExportTaskCommand(input);
 * const response = await client.send(command);
 * // { // ExportTask
 * //   ExportTaskIdentifier: "STRING_VALUE",
 * //   SourceArn: "STRING_VALUE",
 * //   ExportOnly: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   SnapshotTime: new Date("TIMESTAMP"),
 * //   TaskStartTime: new Date("TIMESTAMP"),
 * //   TaskEndTime: new Date("TIMESTAMP"),
 * //   S3Bucket: "STRING_VALUE",
 * //   S3Prefix: "STRING_VALUE",
 * //   IamRoleArn: "STRING_VALUE",
 * //   KmsKeyId: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   PercentProgress: Number("int"),
 * //   TotalExtractedDataInGB: Number("int"),
 * //   FailureCause: "STRING_VALUE",
 * //   WarningMessage: "STRING_VALUE",
 * //   SourceType: "SNAPSHOT" || "CLUSTER",
 * // };
 *
 * ```
 *
 * @param CancelExportTaskCommandInput - {@link CancelExportTaskCommandInput}
 * @returns {@link CancelExportTaskCommandOutput}
 * @see {@link CancelExportTaskCommandInput} for command's `input` shape.
 * @see {@link CancelExportTaskCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link ExportTaskNotFoundFault} (client fault)
 *  <p>The export task doesn't exist.</p>
 *
 * @throws {@link InvalidExportTaskStateFault} (client fault)
 *  <p>You can't cancel an export task that has completed.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To cancel a snapshot export to Amazon S3
 * ```javascript
 * // The following example cancels an export task in progress that is exporting a snapshot to Amazon S3.
 * const input = {
 *   "ExportTaskIdentifier": "my-s3-export-1"
 * };
 * const command = new CancelExportTaskCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ExportTaskIdentifier": "my-s3-export-1",
 *   "IamRoleArn": "arn:aws:iam::123456789012:role/service-role/export-snap-S3-role",
 *   "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/abcd0000-7bfd-4594-af38-aabbccddeeff",
 *   "PercentProgress": 0,
 *   "S3Bucket": "mybucket",
 *   "S3Prefix": "",
 *   "SnapshotTime": "2019-03-24T20:01:09.815Z",
 *   "SourceArn": "arn:aws:rds:us-east-1:123456789012:snapshot:publisher-final-snapshot",
 *   "Status": "CANCELING",
 *   "TotalExtractedDataInGB": 0
 * }
 * *\/
 * // example id: to-cancel-a-snapshot-export-to-amazon-s3-1679694286587
 * ```
 *
 */
export class CancelExportTaskCommand extends $Command<
  CancelExportTaskCommandInput,
  CancelExportTaskCommandOutput,
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
  constructor(readonly input: CancelExportTaskCommandInput) {
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
  ): Handler<CancelExportTaskCommandInput, CancelExportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelExportTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CancelExportTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "CancelExportTask",
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
  private serialize(input: CancelExportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CancelExportTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelExportTaskCommandOutput> {
    return de_CancelExportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
