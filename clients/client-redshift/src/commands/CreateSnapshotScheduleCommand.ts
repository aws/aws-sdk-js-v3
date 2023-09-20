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

import { CreateSnapshotScheduleMessage, SnapshotSchedule } from "../models/models_0";
import { de_CreateSnapshotScheduleCommand, se_CreateSnapshotScheduleCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSnapshotScheduleCommand}.
 */
export interface CreateSnapshotScheduleCommandInput extends CreateSnapshotScheduleMessage {}
/**
 * @public
 *
 * The output of {@link CreateSnapshotScheduleCommand}.
 */
export interface CreateSnapshotScheduleCommandOutput extends SnapshotSchedule, __MetadataBearer {}

/**
 * @public
 * <p>Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateSnapshotScheduleCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateSnapshotScheduleCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // CreateSnapshotScheduleMessage
 *   ScheduleDefinitions: [ // ScheduleDefinitionList
 *     "STRING_VALUE",
 *   ],
 *   ScheduleIdentifier: "STRING_VALUE",
 *   ScheduleDescription: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   DryRun: true || false,
 *   NextInvocations: Number("int"),
 * };
 * const command = new CreateSnapshotScheduleCommand(input);
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
 * @param CreateSnapshotScheduleCommandInput - {@link CreateSnapshotScheduleCommandInput}
 * @returns {@link CreateSnapshotScheduleCommandOutput}
 * @see {@link CreateSnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidScheduleFault} (client fault)
 *  <p>The schedule you submitted isn't valid.</p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link ScheduleDefinitionTypeUnsupportedFault} (client fault)
 *  <p>The definition you submitted is not supported.</p>
 *
 * @throws {@link SnapshotScheduleAlreadyExistsFault} (client fault)
 *  <p>The specified snapshot schedule already exists. </p>
 *
 * @throws {@link SnapshotScheduleQuotaExceededFault} (client fault)
 *  <p>You have exceeded the quota of snapshot schedules. </p>
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *  <p>You have exceeded the number of tags allowed.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class CreateSnapshotScheduleCommand extends $Command<
  CreateSnapshotScheduleCommandInput,
  CreateSnapshotScheduleCommandOutput,
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
  constructor(readonly input: CreateSnapshotScheduleCommandInput) {
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
  ): Handler<CreateSnapshotScheduleCommandInput, CreateSnapshotScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSnapshotScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CreateSnapshotScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "CreateSnapshotSchedule",
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
  private serialize(input: CreateSnapshotScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSnapshotScheduleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSnapshotScheduleCommandOutput> {
    return de_CreateSnapshotScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
