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
import { GetActionTypeInput, GetActionTypeOutput } from "../models/models_0";
import { de_GetActionTypeCommand, se_GetActionTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetActionTypeCommand}.
 */
export interface GetActionTypeCommandInput extends GetActionTypeInput {}
/**
 * @public
 *
 * The output of {@link GetActionTypeCommand}.
 */
export interface GetActionTypeCommandOutput extends GetActionTypeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about an action type created for an external provider, where the
 *             action is to be used by customers of the external provider. The action can be created
 *             with any supported integration model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // GetActionTypeInput
 *   category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval", // required
 *   owner: "STRING_VALUE", // required
 *   provider: "STRING_VALUE", // required
 *   version: "STRING_VALUE", // required
 * };
 * const command = new GetActionTypeCommand(input);
 * const response = await client.send(command);
 * // { // GetActionTypeOutput
 * //   actionType: { // ActionTypeDeclaration
 * //     description: "STRING_VALUE",
 * //     executor: { // ActionTypeExecutor
 * //       configuration: { // ExecutorConfiguration
 * //         lambdaExecutorConfiguration: { // LambdaExecutorConfiguration
 * //           lambdaFunctionArn: "STRING_VALUE", // required
 * //         },
 * //         jobWorkerExecutorConfiguration: { // JobWorkerExecutorConfiguration
 * //           pollingAccounts: [ // PollingAccountList
 * //             "STRING_VALUE",
 * //           ],
 * //           pollingServicePrincipals: [ // PollingServicePrincipalList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       type: "JobWorker" || "Lambda", // required
 * //       policyStatementsTemplate: "STRING_VALUE",
 * //       jobTimeout: Number("int"),
 * //     },
 * //     id: { // ActionTypeIdentifier
 * //       category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval", // required
 * //       owner: "STRING_VALUE", // required
 * //       provider: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //     },
 * //     inputArtifactDetails: { // ActionTypeArtifactDetails
 * //       minimumCount: Number("int"), // required
 * //       maximumCount: Number("int"), // required
 * //     },
 * //     outputArtifactDetails: {
 * //       minimumCount: Number("int"), // required
 * //       maximumCount: Number("int"), // required
 * //     },
 * //     permissions: { // ActionTypePermissions
 * //       allowedAccounts: [ // AllowedAccounts // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     properties: [ // ActionTypeProperties
 * //       { // ActionTypeProperty
 * //         name: "STRING_VALUE", // required
 * //         optional: true || false, // required
 * //         key: true || false, // required
 * //         noEcho: true || false, // required
 * //         queryable: true || false,
 * //         description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     urls: { // ActionTypeUrls
 * //       configurationUrl: "STRING_VALUE",
 * //       entityUrlTemplate: "STRING_VALUE",
 * //       executionUrlTemplate: "STRING_VALUE",
 * //       revisionUrlTemplate: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetActionTypeCommandInput - {@link GetActionTypeCommandInput}
 * @returns {@link GetActionTypeCommandOutput}
 * @see {@link GetActionTypeCommandInput} for command's `input` shape.
 * @see {@link GetActionTypeCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ActionTypeNotFoundException} (client fault)
 *  <p>The specified action type cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 */
export class GetActionTypeCommand extends $Command<
  GetActionTypeCommandInput,
  GetActionTypeCommandOutput,
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
  constructor(readonly input: GetActionTypeCommandInput) {
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
  ): Handler<GetActionTypeCommandInput, GetActionTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetActionTypeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "GetActionTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodePipeline_20150709",
        operation: "GetActionType",
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
  private serialize(input: GetActionTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetActionTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetActionTypeCommandOutput> {
    return de_GetActionTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
