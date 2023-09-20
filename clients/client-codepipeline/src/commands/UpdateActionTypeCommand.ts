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

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { UpdateActionTypeInput } from "../models/models_0";
import { de_UpdateActionTypeCommand, se_UpdateActionTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateActionTypeCommand}.
 */
export interface UpdateActionTypeCommandInput extends UpdateActionTypeInput {}
/**
 * @public
 *
 * The output of {@link UpdateActionTypeCommand}.
 */
export interface UpdateActionTypeCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates an action type that was created with any supported integration model, where
 *             the action type is to be used by customers of the action type provider. Use a JSON file
 *             with the action definition and <code>UpdateActionType</code> to provide the full
 *             structure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, UpdateActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, UpdateActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // UpdateActionTypeInput
 *   actionType: { // ActionTypeDeclaration
 *     description: "STRING_VALUE",
 *     executor: { // ActionTypeExecutor
 *       configuration: { // ExecutorConfiguration
 *         lambdaExecutorConfiguration: { // LambdaExecutorConfiguration
 *           lambdaFunctionArn: "STRING_VALUE", // required
 *         },
 *         jobWorkerExecutorConfiguration: { // JobWorkerExecutorConfiguration
 *           pollingAccounts: [ // PollingAccountList
 *             "STRING_VALUE",
 *           ],
 *           pollingServicePrincipals: [ // PollingServicePrincipalList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       type: "JobWorker" || "Lambda", // required
 *       policyStatementsTemplate: "STRING_VALUE",
 *       jobTimeout: Number("int"),
 *     },
 *     id: { // ActionTypeIdentifier
 *       category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval", // required
 *       owner: "STRING_VALUE", // required
 *       provider: "STRING_VALUE", // required
 *       version: "STRING_VALUE", // required
 *     },
 *     inputArtifactDetails: { // ActionTypeArtifactDetails
 *       minimumCount: Number("int"), // required
 *       maximumCount: Number("int"), // required
 *     },
 *     outputArtifactDetails: {
 *       minimumCount: Number("int"), // required
 *       maximumCount: Number("int"), // required
 *     },
 *     permissions: { // ActionTypePermissions
 *       allowedAccounts: [ // AllowedAccounts // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     properties: [ // ActionTypeProperties
 *       { // ActionTypeProperty
 *         name: "STRING_VALUE", // required
 *         optional: true || false, // required
 *         key: true || false, // required
 *         noEcho: true || false, // required
 *         queryable: true || false,
 *         description: "STRING_VALUE",
 *       },
 *     ],
 *     urls: { // ActionTypeUrls
 *       configurationUrl: "STRING_VALUE",
 *       entityUrlTemplate: "STRING_VALUE",
 *       executionUrlTemplate: "STRING_VALUE",
 *       revisionUrlTemplate: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateActionTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateActionTypeCommandInput - {@link UpdateActionTypeCommandInput}
 * @returns {@link UpdateActionTypeCommandOutput}
 * @see {@link UpdateActionTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateActionTypeCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ActionTypeNotFoundException} (client fault)
 *  <p>The specified action type cannot be found.</p>
 *
 * @throws {@link RequestFailedException} (client fault)
 *  <p>The request failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 */
export class UpdateActionTypeCommand extends $Command<
  UpdateActionTypeCommandInput,
  UpdateActionTypeCommandOutput,
  CodePipelineClientResolvedConfig
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
  constructor(readonly input: UpdateActionTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateActionTypeCommandInput, UpdateActionTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateActionTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "UpdateActionTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodePipeline_20150709",
        operation: "UpdateActionType",
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
  private serialize(input: UpdateActionTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateActionTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateActionTypeCommandOutput> {
    return de_UpdateActionTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
