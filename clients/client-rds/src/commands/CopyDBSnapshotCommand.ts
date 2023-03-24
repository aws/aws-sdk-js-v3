// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
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

import { CopyDBSnapshotMessage, CopyDBSnapshotResult } from "../models/models_0";
import {
  deserializeAws_queryCopyDBSnapshotCommand,
  serializeAws_queryCopyDBSnapshotCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link CopyDBSnapshotCommand}.
 */
export interface CopyDBSnapshotCommandInput extends CopyDBSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link CopyDBSnapshotCommand}.
 */
export interface CopyDBSnapshotCommandOutput extends CopyDBSnapshotResult, __MetadataBearer {}

/**
 * @public
 * <p>Copies the specified DB snapshot. The source DB snapshot must be in the <code>available</code> state.</p>
 *          <p>You can copy a snapshot from one Amazon Web Services Region to another. In that case, the
 *             Amazon Web Services Region where you call the <code>CopyDBSnapshot</code> operation is the destination
 *             Amazon Web Services Region for the DB snapshot copy.</p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 *          <p>For more information about copying snapshots, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopyDBSnapshot">Copying a DB Snapshot</a> in the <i>Amazon RDS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CopyDBSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CopyDBSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = {
 *   SourceDBSnapshotIdentifier: "STRING_VALUE", // required
 *   TargetDBSnapshotIdentifier: "STRING_VALUE", // required
 *   KmsKeyId: "STRING_VALUE",
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   CopyTags: true || false,
 *   PreSignedUrl: "STRING_VALUE",
 *   OptionGroupName: "STRING_VALUE",
 *   TargetCustomAvailabilityZone: "STRING_VALUE",
 *   CopyOptionGroup: true || false,
 * };
 * const command = new CopyDBSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CopyDBSnapshotCommandInput - {@link CopyDBSnapshotCommandInput}
 * @returns {@link CopyDBSnapshotCommandOutput}
 * @see {@link CopyDBSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyDBSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link CustomAvailabilityZoneNotFoundFault} (client fault)
 *  <p>
 *             <code>CustomAvailabilityZoneId</code> doesn't refer to an existing custom
 *             Availability Zone identifier.</p>
 *
 * @throws {@link DBSnapshotAlreadyExistsFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> is already used by an existing snapshot.</p>
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.</p>
 *
 * @throws {@link InvalidDBSnapshotStateFault} (client fault)
 *  <p>The state of the DB snapshot doesn't allow deletion.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB
 *             snapshots.</p>
 *
 *
 * @example To copy a DB snapshot
 * ```javascript
 * // This example copies a DB snapshot.
 * const input = {
 *   "SourceDBSnapshotIdentifier": "mydbsnapshot",
 *   "TargetDBSnapshotIdentifier": "mydbsnapshot-copy"
 * };
 * const command = new CopyDBSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBSnapshot": {}
 * }
 * *\/
 * // example id: copy-db-snapshot-1b2f0210-bc67-415d-9822-6eecf447dc86
 * ```
 *
 */
export class CopyDBSnapshotCommand extends $Command<
  CopyDBSnapshotCommandInput,
  CopyDBSnapshotCommandOutput,
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
  constructor(readonly input: CopyDBSnapshotCommandInput) {
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
  ): Handler<CopyDBSnapshotCommandInput, CopyDBSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CopyDBSnapshotCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CopyDBSnapshotCommand";
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
  private serialize(input: CopyDBSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCopyDBSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyDBSnapshotCommandOutput> {
    return deserializeAws_queryCopyDBSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
