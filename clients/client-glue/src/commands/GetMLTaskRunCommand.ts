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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetMLTaskRunRequest, GetMLTaskRunResponse } from "../models/models_1";
import { de_GetMLTaskRunCommand, se_GetMLTaskRunCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMLTaskRunCommand}.
 */
export interface GetMLTaskRunCommandInput extends GetMLTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link GetMLTaskRunCommand}.
 */
export interface GetMLTaskRunCommandOutput extends GetMLTaskRunResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets details for a specific task run on a machine learning transform. Machine learning
 *       task runs are asynchronous tasks that Glue runs on your behalf as part of various machine
 *       learning workflows. You can check the stats of any task run by calling
 *         <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's
 *         <code>TransformID</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMLTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMLTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetMLTaskRunRequest
 *   TransformId: "STRING_VALUE", // required
 *   TaskRunId: "STRING_VALUE", // required
 * };
 * const command = new GetMLTaskRunCommand(input);
 * const response = await client.send(command);
 * // { // GetMLTaskRunResponse
 * //   TransformId: "STRING_VALUE",
 * //   TaskRunId: "STRING_VALUE",
 * //   Status: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT",
 * //   LogGroupName: "STRING_VALUE",
 * //   Properties: { // TaskRunProperties
 * //     TaskType: "EVALUATION" || "LABELING_SET_GENERATION" || "IMPORT_LABELS" || "EXPORT_LABELS" || "FIND_MATCHES",
 * //     ImportLabelsTaskRunProperties: { // ImportLabelsTaskRunProperties
 * //       InputS3Path: "STRING_VALUE",
 * //       Replace: true || false,
 * //     },
 * //     ExportLabelsTaskRunProperties: { // ExportLabelsTaskRunProperties
 * //       OutputS3Path: "STRING_VALUE",
 * //     },
 * //     LabelingSetGenerationTaskRunProperties: { // LabelingSetGenerationTaskRunProperties
 * //       OutputS3Path: "STRING_VALUE",
 * //     },
 * //     FindMatchesTaskRunProperties: { // FindMatchesTaskRunProperties
 * //       JobId: "STRING_VALUE",
 * //       JobName: "STRING_VALUE",
 * //       JobRunId: "STRING_VALUE",
 * //     },
 * //   },
 * //   ErrorString: "STRING_VALUE",
 * //   StartedOn: new Date("TIMESTAMP"),
 * //   LastModifiedOn: new Date("TIMESTAMP"),
 * //   CompletedOn: new Date("TIMESTAMP"),
 * //   ExecutionTime: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetMLTaskRunCommandInput - {@link GetMLTaskRunCommandInput}
 * @returns {@link GetMLTaskRunCommandOutput}
 * @see {@link GetMLTaskRunCommandInput} for command's `input` shape.
 * @see {@link GetMLTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetMLTaskRunCommand extends $Command<
  GetMLTaskRunCommandInput,
  GetMLTaskRunCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: GetMLTaskRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMLTaskRunCommandInput, GetMLTaskRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetMLTaskRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetMLTaskRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetMLTaskRun",
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
  private serialize(input: GetMLTaskRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMLTaskRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMLTaskRunCommandOutput> {
    return de_GetMLTaskRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
