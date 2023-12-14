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

import { GetImportTaskInput, GetImportTaskOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_GetImportTaskCommand, se_GetImportTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetImportTaskCommand}.
 */
export interface GetImportTaskCommandInput extends GetImportTaskInput {}
/**
 * @public
 *
 * The output of {@link GetImportTaskCommand}.
 */
export interface GetImportTaskCommandOutput extends GetImportTaskOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a specified import task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, GetImportTaskCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, GetImportTaskCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * const client = new NeptuneGraphClient(config);
 * const input = { // GetImportTaskInput
 *   taskIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetImportTaskOutput
 * //   graphId: "STRING_VALUE",
 * //   taskId: "STRING_VALUE", // required
 * //   source: "STRING_VALUE", // required
 * //   format: "CSV" || "OPEN_CYPHER",
 * //   roleArn: "STRING_VALUE", // required
 * //   status: "INITIALIZING" || "EXPORTING" || "ANALYZING_DATA" || "IMPORTING" || "REPROVISIONING" || "ROLLING_BACK" || "SUCCEEDED" || "FAILED" || "CANCELLING" || "CANCELLED", // required
 * //   importOptions: { // ImportOptions Union: only one key present
 * //     neptune: { // NeptuneImportOptions
 * //       s3ExportPath: "STRING_VALUE", // required
 * //       s3ExportKmsKeyId: "STRING_VALUE", // required
 * //       preserveDefaultVertexLabels: true || false,
 * //       preserveEdgeIds: true || false,
 * //     },
 * //   },
 * //   importTaskDetails: { // ImportTaskDetails
 * //     status: "STRING_VALUE", // required
 * //     startTime: new Date("TIMESTAMP"), // required
 * //     timeElapsedSeconds: Number("long"), // required
 * //     progressPercentage: Number("int"), // required
 * //     errorCount: Number("int"), // required
 * //     errorDetails: "STRING_VALUE",
 * //     statementCount: Number("long"), // required
 * //     dictionaryEntryCount: Number("long"), // required
 * //   },
 * //   attemptNumber: Number("int"),
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetImportTaskCommandInput - {@link GetImportTaskCommandInput}
 * @returns {@link GetImportTaskCommandOutput}
 * @see {@link GetImportTaskCommandInput} for command's `input` shape.
 * @see {@link GetImportTaskCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be located.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception was interrupted by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A resource could not be validated</p>
 *
 * @throws {@link NeptuneGraphServiceException}
 * <p>Base exception class for all service exceptions from NeptuneGraph service.</p>
 *
 */
export class GetImportTaskCommand extends $Command<
  GetImportTaskCommandInput,
  GetImportTaskCommandOutput,
  NeptuneGraphClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      ApiType: { type: "staticContextParams", value: `ControlPlane` },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetImportTaskCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetImportTaskCommandInput, GetImportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetImportTaskCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneGraphClient";
    const commandName = "GetImportTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonNeptuneGraph",
        operation: "GetImportTask",
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
  private serialize(input: GetImportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetImportTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetImportTaskCommandOutput> {
    return de_GetImportTaskCommand(output, context);
  }
}
