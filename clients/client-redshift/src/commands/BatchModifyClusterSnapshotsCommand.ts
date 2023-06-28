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

import { BatchModifyClusterSnapshotsMessage, BatchModifyClusterSnapshotsOutputMessage } from "../models/models_0";
import { de_BatchModifyClusterSnapshotsCommand, se_BatchModifyClusterSnapshotsCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchModifyClusterSnapshotsCommand}.
 */
export interface BatchModifyClusterSnapshotsCommandInput extends BatchModifyClusterSnapshotsMessage {}
/**
 * @public
 *
 * The output of {@link BatchModifyClusterSnapshotsCommand}.
 */
export interface BatchModifyClusterSnapshotsCommandOutput
  extends BatchModifyClusterSnapshotsOutputMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the settings for a set of cluster snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, BatchModifyClusterSnapshotsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, BatchModifyClusterSnapshotsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // BatchModifyClusterSnapshotsMessage
 *   SnapshotIdentifierList: [ // SnapshotIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 *   ManualSnapshotRetentionPeriod: Number("int"),
 *   Force: true || false,
 * };
 * const command = new BatchModifyClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // BatchModifyClusterSnapshotsOutputMessage
 * //   Resources: [ // SnapshotIdentifierList
 * //     "STRING_VALUE",
 * //   ],
 * //   Errors: [ // BatchSnapshotOperationErrors
 * //     { // SnapshotErrorMessage
 * //       SnapshotIdentifier: "STRING_VALUE",
 * //       SnapshotClusterIdentifier: "STRING_VALUE",
 * //       FailureCode: "STRING_VALUE",
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchModifyClusterSnapshotsCommandInput - {@link BatchModifyClusterSnapshotsCommandInput}
 * @returns {@link BatchModifyClusterSnapshotsCommandOutput}
 * @see {@link BatchModifyClusterSnapshotsCommandInput} for command's `input` shape.
 * @see {@link BatchModifyClusterSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link BatchModifyClusterSnapshotsLimitExceededFault} (client fault)
 *  <p>The maximum number for snapshot identifiers has been reached. The limit is 100.
 *         </p>
 *
 * @throws {@link InvalidRetentionPeriodFault} (client fault)
 *  <p>The retention period specified is either in the past or is not a valid value.</p>
 *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class BatchModifyClusterSnapshotsCommand extends $Command<
  BatchModifyClusterSnapshotsCommandInput,
  BatchModifyClusterSnapshotsCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: BatchModifyClusterSnapshotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchModifyClusterSnapshotsCommandInput, BatchModifyClusterSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchModifyClusterSnapshotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "BatchModifyClusterSnapshotsCommand";
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
  private serialize(input: BatchModifyClusterSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchModifyClusterSnapshotsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchModifyClusterSnapshotsCommandOutput> {
    return de_BatchModifyClusterSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
