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

import { CreateGraphUsingImportTaskInput, CreateGraphUsingImportTaskOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_CreateGraphUsingImportTaskCommand, se_CreateGraphUsingImportTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateGraphUsingImportTaskCommand}.
 */
export interface CreateGraphUsingImportTaskCommandInput extends CreateGraphUsingImportTaskInput {}
/**
 * @public
 *
 * The output of {@link CreateGraphUsingImportTaskCommand}.
 */
export interface CreateGraphUsingImportTaskCommandOutput extends CreateGraphUsingImportTaskOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new Neptune Analytics graph and imports data into it, either from Amazon Simple Storage Service (S3) or from a Neptune database
 *     or a Neptune database snapshot.</p>
 *          <p>The data can be loaded from files in S3 that in either the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html">Gremlin CSV
 *       format</a> or the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html">openCypher
 *       load format</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, CreateGraphUsingImportTaskCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, CreateGraphUsingImportTaskCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * const client = new NeptuneGraphClient(config);
 * const input = { // CreateGraphUsingImportTaskInput
 *   graphName: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   publicConnectivity: true || false,
 *   kmsKeyIdentifier: "STRING_VALUE",
 *   vectorSearchConfiguration: { // VectorSearchConfiguration
 *     dimension: Number("int"), // required
 *   },
 *   replicaCount: Number("int"),
 *   deletionProtection: true || false,
 *   importOptions: { // ImportOptions Union: only one key present
 *     neptune: { // NeptuneImportOptions
 *       s3ExportPath: "STRING_VALUE", // required
 *       s3ExportKmsKeyId: "STRING_VALUE", // required
 *       preserveDefaultVertexLabels: true || false,
 *       preserveEdgeIds: true || false,
 *     },
 *   },
 *   maxProvisionedMemory: Number("int"),
 *   minProvisionedMemory: Number("int"),
 *   failOnError: true || false,
 *   source: "STRING_VALUE", // required
 *   format: "CSV" || "OPEN_CYPHER",
 *   roleArn: "STRING_VALUE", // required
 * };
 * const command = new CreateGraphUsingImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateGraphUsingImportTaskOutput
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
 * // };
 *
 * ```
 *
 * @param CreateGraphUsingImportTaskCommandInput - {@link CreateGraphUsingImportTaskCommandInput}
 * @returns {@link CreateGraphUsingImportTaskCommandOutput}
 * @see {@link CreateGraphUsingImportTaskCommandInput} for command's `input` shape.
 * @see {@link CreateGraphUsingImportTaskCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Raised when a conflict is encountered.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota was exceeded.</p>
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
export class CreateGraphUsingImportTaskCommand extends $Command<
  CreateGraphUsingImportTaskCommandInput,
  CreateGraphUsingImportTaskCommandOutput,
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
  constructor(readonly input: CreateGraphUsingImportTaskCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateGraphUsingImportTaskCommandInput, CreateGraphUsingImportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateGraphUsingImportTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneGraphClient";
    const commandName = "CreateGraphUsingImportTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonNeptuneGraph",
        operation: "CreateGraphUsingImportTask",
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
  private serialize(input: CreateGraphUsingImportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateGraphUsingImportTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateGraphUsingImportTaskCommandOutput> {
    return de_CreateGraphUsingImportTaskCommand(output, context);
  }
}
