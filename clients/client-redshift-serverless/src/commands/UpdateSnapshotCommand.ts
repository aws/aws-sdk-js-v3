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

import { UpdateSnapshotRequest, UpdateSnapshotResponse } from "../models/models_0";
import { de_UpdateSnapshotCommand, se_UpdateSnapshotCommand } from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSnapshotCommand}.
 */
export interface UpdateSnapshotCommandInput extends UpdateSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSnapshotCommand}.
 */
export interface UpdateSnapshotCommandOutput extends UpdateSnapshotResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, UpdateSnapshotCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, UpdateSnapshotCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // UpdateSnapshotRequest
 *   snapshotName: "STRING_VALUE", // required
 *   retentionPeriod: Number("int"),
 * };
 * const command = new UpdateSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSnapshotResponse
 * //   snapshot: { // Snapshot
 * //     namespaceName: "STRING_VALUE",
 * //     namespaceArn: "STRING_VALUE",
 * //     snapshotName: "STRING_VALUE",
 * //     snapshotCreateTime: new Date("TIMESTAMP"),
 * //     adminUsername: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     kmsKeyId: "STRING_VALUE",
 * //     ownerAccount: "STRING_VALUE",
 * //     totalBackupSizeInMegaBytes: Number("double"),
 * //     actualIncrementalBackupSizeInMegaBytes: Number("double"),
 * //     backupProgressInMegaBytes: Number("double"),
 * //     currentBackupRateInMegaBytesPerSecond: Number("double"),
 * //     estimatedSecondsToCompletion: Number("long"),
 * //     elapsedTimeInSeconds: Number("long"),
 * //     snapshotRetentionPeriod: Number("int"),
 * //     snapshotRemainingDays: Number("int"),
 * //     snapshotRetentionStartTime: new Date("TIMESTAMP"),
 * //     snapshotArn: "STRING_VALUE",
 * //     accountsWithRestoreAccess: [ // AccountIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     accountsWithProvisionedRestoreAccess: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSnapshotCommandInput - {@link UpdateSnapshotCommandInput}
 * @returns {@link UpdateSnapshotCommandOutput}
 * @see {@link UpdateSnapshotCommandInput} for command's `input` shape.
 * @see {@link UpdateSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 */
export class UpdateSnapshotCommand extends $Command<
  UpdateSnapshotCommandInput,
  UpdateSnapshotCommandOutput,
  RedshiftServerlessClientResolvedConfig
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
  constructor(readonly input: UpdateSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSnapshotCommandInput, UpdateSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "UpdateSnapshotCommand";
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
  private serialize(input: UpdateSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSnapshotCommandOutput> {
    return de_UpdateSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
