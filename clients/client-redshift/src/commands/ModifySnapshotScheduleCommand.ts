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

import { SnapshotSchedule } from "../models/models_0";
import { ModifySnapshotScheduleMessage } from "../models/models_1";
import { de_ModifySnapshotScheduleCommand, se_ModifySnapshotScheduleCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifySnapshotScheduleCommand}.
 */
export interface ModifySnapshotScheduleCommandInput extends ModifySnapshotScheduleMessage {}
/**
 * @public
 *
 * The output of {@link ModifySnapshotScheduleCommand}.
 */
export interface ModifySnapshotScheduleCommandOutput extends SnapshotSchedule, __MetadataBearer {}

/**
 * @public
 * <p>Modifies a snapshot schedule. Any schedule associated with a cluster is modified
 *             asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifySnapshotScheduleCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifySnapshotScheduleCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // ModifySnapshotScheduleMessage
 *   ScheduleIdentifier: "STRING_VALUE", // required
 *   ScheduleDefinitions: [ // ScheduleDefinitionList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifySnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * // { // SnapshotSchedule
 * //   ScheduleDefinitions: [ // ScheduleDefinitionList
 * //     "STRING_VALUE",
 * //   ],
 * //   ScheduleIdentifier: "STRING_VALUE",
 * //   ScheduleDescription: "STRING_VALUE",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextInvocations: [ // ScheduledSnapshotTimeList
 * //     new Date("TIMESTAMP"),
 * //   ],
 * //   AssociatedClusterCount: Number("int"),
 * //   AssociatedClusters: [ // AssociatedClusterList
 * //     { // ClusterAssociatedToSchedule
 * //       ClusterIdentifier: "STRING_VALUE",
 * //       ScheduleAssociationState: "MODIFYING" || "ACTIVE" || "FAILED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ModifySnapshotScheduleCommandInput - {@link ModifySnapshotScheduleCommandInput}
 * @returns {@link ModifySnapshotScheduleCommandOutput}
 * @see {@link ModifySnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link ModifySnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidScheduleFault} (client fault)
 *  <p>The schedule you submitted isn't valid.</p>
 *
 * @throws {@link SnapshotScheduleNotFoundFault} (client fault)
 *  <p>We could not find the specified snapshot schedule. </p>
 *
 * @throws {@link SnapshotScheduleUpdateInProgressFault} (client fault)
 *  <p>The specified snapshot schedule is already being updated.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class ModifySnapshotScheduleCommand extends $Command<
  ModifySnapshotScheduleCommandInput,
  ModifySnapshotScheduleCommandOutput,
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
  constructor(readonly input: ModifySnapshotScheduleCommandInput) {
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
  ): Handler<ModifySnapshotScheduleCommandInput, ModifySnapshotScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifySnapshotScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifySnapshotScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "ModifySnapshotSchedule",
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
  private serialize(input: ModifySnapshotScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifySnapshotScheduleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifySnapshotScheduleCommandOutput> {
    return de_ModifySnapshotScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
