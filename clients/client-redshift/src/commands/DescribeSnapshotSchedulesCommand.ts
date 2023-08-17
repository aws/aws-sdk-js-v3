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

import { DescribeSnapshotSchedulesMessage, DescribeSnapshotSchedulesOutputMessage } from "../models/models_1";
import { de_DescribeSnapshotSchedulesCommand, se_DescribeSnapshotSchedulesCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSnapshotSchedulesCommand}.
 */
export interface DescribeSnapshotSchedulesCommandInput extends DescribeSnapshotSchedulesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotSchedulesCommand}.
 */
export interface DescribeSnapshotSchedulesCommandOutput
  extends DescribeSnapshotSchedulesOutputMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of snapshot schedules. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeSnapshotSchedulesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeSnapshotSchedulesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeSnapshotSchedulesMessage
 *   ClusterIdentifier: "STRING_VALUE",
 *   ScheduleIdentifier: "STRING_VALUE",
 *   TagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 *   TagValues: [ // TagValueList
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeSnapshotSchedulesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapshotSchedulesOutputMessage
 * //   SnapshotSchedules: [ // SnapshotScheduleList
 * //     { // SnapshotSchedule
 * //       ScheduleDefinitions: [ // ScheduleDefinitionList
 * //         "STRING_VALUE",
 * //       ],
 * //       ScheduleIdentifier: "STRING_VALUE",
 * //       ScheduleDescription: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       NextInvocations: [ // ScheduledSnapshotTimeList
 * //         new Date("TIMESTAMP"),
 * //       ],
 * //       AssociatedClusterCount: Number("int"),
 * //       AssociatedClusters: [ // AssociatedClusterList
 * //         { // ClusterAssociatedToSchedule
 * //           ClusterIdentifier: "STRING_VALUE",
 * //           ScheduleAssociationState: "MODIFYING" || "ACTIVE" || "FAILED",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotSchedulesCommandInput - {@link DescribeSnapshotSchedulesCommandInput}
 * @returns {@link DescribeSnapshotSchedulesCommandOutput}
 * @see {@link DescribeSnapshotSchedulesCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotSchedulesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeSnapshotSchedulesCommand extends $Command<
  DescribeSnapshotSchedulesCommandInput,
  DescribeSnapshotSchedulesCommandOutput,
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
  constructor(readonly input: DescribeSnapshotSchedulesCommandInput) {
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
  ): Handler<DescribeSnapshotSchedulesCommandInput, DescribeSnapshotSchedulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSnapshotSchedulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeSnapshotSchedulesCommand";
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
  private serialize(input: DescribeSnapshotSchedulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSnapshotSchedulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSnapshotSchedulesCommandOutput> {
    return de_DescribeSnapshotSchedulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
