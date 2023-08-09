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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateMLTransformRequest, CreateMLTransformResponse } from "../models/models_1";
import { de_CreateMLTransformCommand, se_CreateMLTransformCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateMLTransformCommand}.
 */
export interface CreateMLTransformCommandInput extends CreateMLTransformRequest {}
/**
 * @public
 *
 * The output of {@link CreateMLTransformCommand}.
 */
export interface CreateMLTransformCommandOutput extends CreateMLTransformResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Glue machine learning transform. This operation creates the transform and
 *       all the necessary parameters to train it.</p>
 *          <p>Call this operation as the first step in the process of using a machine learning transform
 *       (such as the <code>FindMatches</code> transform) for deduplicating data. You can provide an
 *       optional <code>Description</code>, in addition to the parameters that you want to use for your
 *       algorithm.</p>
 *          <p>You must also specify certain parameters for the tasks that Glue runs on your
 *       behalf as part of learning from your data and creating a high-quality machine learning
 *       transform. These parameters include <code>Role</code>, and optionally,
 *         <code>AllocatedCapacity</code>, <code>Timeout</code>, and <code>MaxRetries</code>. For more
 *       information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html">Jobs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateMLTransformCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // CreateMLTransformRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   InputRecordTables: [ // GlueTables // required
 *     { // GlueTable
 *       DatabaseName: "STRING_VALUE", // required
 *       TableName: "STRING_VALUE", // required
 *       CatalogId: "STRING_VALUE",
 *       ConnectionName: "STRING_VALUE",
 *       AdditionalOptions: { // GlueTableAdditionalOptions
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   Parameters: { // TransformParameters
 *     TransformType: "FIND_MATCHES", // required
 *     FindMatchesParameters: { // FindMatchesParameters
 *       PrimaryKeyColumnName: "STRING_VALUE",
 *       PrecisionRecallTradeoff: Number("double"),
 *       AccuracyCostTradeoff: Number("double"),
 *       EnforceProvidedLabels: true || false,
 *     },
 *   },
 *   Role: "STRING_VALUE", // required
 *   GlueVersion: "STRING_VALUE",
 *   MaxCapacity: Number("double"),
 *   WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 *   NumberOfWorkers: Number("int"),
 *   Timeout: Number("int"),
 *   MaxRetries: Number("int"),
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TransformEncryption: { // TransformEncryption
 *     MlUserDataEncryption: { // MLUserDataEncryption
 *       MlUserDataEncryptionMode: "DISABLED" || "SSE-KMS", // required
 *       KmsKeyId: "STRING_VALUE",
 *     },
 *     TaskRunSecurityConfigurationName: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMLTransformCommand(input);
 * const response = await client.send(command);
 * // { // CreateMLTransformResponse
 * //   TransformId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMLTransformCommandInput - {@link CreateMLTransformCommandInput}
 * @returns {@link CreateMLTransformCommandOutput}
 * @see {@link CreateMLTransformCommandInput} for command's `input` shape.
 * @see {@link CreateMLTransformCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The same unique identifier was associated with two different records.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class CreateMLTransformCommand extends $Command<
  CreateMLTransformCommandInput,
  CreateMLTransformCommandOutput,
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
  constructor(readonly input: CreateMLTransformCommandInput) {
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
  ): Handler<CreateMLTransformCommandInput, CreateMLTransformCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMLTransformCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateMLTransformCommand";
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
  private serialize(input: CreateMLTransformCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMLTransformCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMLTransformCommandOutput> {
    return de_CreateMLTransformCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
