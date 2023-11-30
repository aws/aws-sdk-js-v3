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

import { UpdateScheduledActionRequest, UpdateScheduledActionResponse } from "../models/models_0";
import { de_UpdateScheduledActionCommand, se_UpdateScheduledActionCommand } from "../protocols/Aws_json1_1";
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
 * The input for {@link UpdateScheduledActionCommand}.
 */
export interface UpdateScheduledActionCommandInput extends UpdateScheduledActionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateScheduledActionCommand}.
 */
export interface UpdateScheduledActionCommandOutput extends UpdateScheduledActionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a scheduled action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, UpdateScheduledActionCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, UpdateScheduledActionCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // UpdateScheduledActionRequest
 *   scheduledActionName: "STRING_VALUE", // required
 *   targetAction: { // TargetAction Union: only one key present
 *     createSnapshot: { // CreateSnapshotScheduleActionParameters
 *       namespaceName: "STRING_VALUE", // required
 *       snapshotNamePrefix: "STRING_VALUE", // required
 *       retentionPeriod: Number("int"),
 *       tags: [ // TagList
 *         { // Tag
 *           key: "STRING_VALUE", // required
 *           value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   schedule: { // Schedule Union: only one key present
 *     at: new Date("TIMESTAMP"),
 *     cron: "STRING_VALUE",
 *   },
 *   roleArn: "STRING_VALUE",
 *   enabled: true || false,
 *   scheduledActionDescription: "STRING_VALUE",
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 * };
 * const command = new UpdateScheduledActionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateScheduledActionResponse
 * //   scheduledAction: { // ScheduledActionResponse
 * //     scheduledActionName: "STRING_VALUE",
 * //     schedule: { // Schedule Union: only one key present
 * //       at: new Date("TIMESTAMP"),
 * //       cron: "STRING_VALUE",
 * //     },
 * //     scheduledActionDescription: "STRING_VALUE",
 * //     nextInvocations: [ // NextInvocationsList
 * //       new Date("TIMESTAMP"),
 * //     ],
 * //     roleArn: "STRING_VALUE",
 * //     state: "STRING_VALUE",
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     targetAction: { // TargetAction Union: only one key present
 * //       createSnapshot: { // CreateSnapshotScheduleActionParameters
 * //         namespaceName: "STRING_VALUE", // required
 * //         snapshotNamePrefix: "STRING_VALUE", // required
 * //         retentionPeriod: Number("int"),
 * //         tags: [ // TagList
 * //           { // Tag
 * //             key: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     namespaceName: "STRING_VALUE",
 * //     scheduledActionUuid: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateScheduledActionCommandInput - {@link UpdateScheduledActionCommandInput}
 * @returns {@link UpdateScheduledActionCommandOutput}
 * @see {@link UpdateScheduledActionCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduledActionCommandOutput} for command's `response` shape.
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
export class UpdateScheduledActionCommand extends $Command<
  UpdateScheduledActionCommandInput,
  UpdateScheduledActionCommandOutput,
  RedshiftServerlessClientResolvedConfig
> {
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
  constructor(readonly input: UpdateScheduledActionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateScheduledActionCommandInput, UpdateScheduledActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateScheduledActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "UpdateScheduledActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServerless",
        operation: "UpdateScheduledAction",
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
  private serialize(input: UpdateScheduledActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateScheduledActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateScheduledActionCommandOutput> {
    return de_UpdateScheduledActionCommand(output, context);
  }
}
