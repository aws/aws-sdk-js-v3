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

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { BatchGetApplicationRevisionsInput, BatchGetApplicationRevisionsOutput } from "../models/models_0";
import {
  de_BatchGetApplicationRevisionsCommand,
  se_BatchGetApplicationRevisionsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetApplicationRevisionsCommand}.
 */
export interface BatchGetApplicationRevisionsCommandInput extends BatchGetApplicationRevisionsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetApplicationRevisionsCommand}.
 */
export interface BatchGetApplicationRevisionsCommandOutput
  extends BatchGetApplicationRevisionsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information about one or more application revisions. The maximum number of
 *             application revisions that can be returned is 25.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, BatchGetApplicationRevisionsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, BatchGetApplicationRevisionsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // BatchGetApplicationRevisionsInput
 *   applicationName: "STRING_VALUE", // required
 *   revisions: [ // RevisionLocationList // required
 *     { // RevisionLocation
 *       revisionType: "S3" || "GitHub" || "String" || "AppSpecContent",
 *       s3Location: { // S3Location
 *         bucket: "STRING_VALUE",
 *         key: "STRING_VALUE",
 *         bundleType: "tar" || "tgz" || "zip" || "YAML" || "JSON",
 *         version: "STRING_VALUE",
 *         eTag: "STRING_VALUE",
 *       },
 *       gitHubLocation: { // GitHubLocation
 *         repository: "STRING_VALUE",
 *         commitId: "STRING_VALUE",
 *       },
 *       string: { // RawString
 *         content: "STRING_VALUE",
 *         sha256: "STRING_VALUE",
 *       },
 *       appSpecContent: { // AppSpecContent
 *         content: "STRING_VALUE",
 *         sha256: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchGetApplicationRevisionsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetApplicationRevisionsOutput
 * //   applicationName: "STRING_VALUE",
 * //   errorMessage: "STRING_VALUE",
 * //   revisions: [ // RevisionInfoList
 * //     { // RevisionInfo
 * //       revisionLocation: { // RevisionLocation
 * //         revisionType: "S3" || "GitHub" || "String" || "AppSpecContent",
 * //         s3Location: { // S3Location
 * //           bucket: "STRING_VALUE",
 * //           key: "STRING_VALUE",
 * //           bundleType: "tar" || "tgz" || "zip" || "YAML" || "JSON",
 * //           version: "STRING_VALUE",
 * //           eTag: "STRING_VALUE",
 * //         },
 * //         gitHubLocation: { // GitHubLocation
 * //           repository: "STRING_VALUE",
 * //           commitId: "STRING_VALUE",
 * //         },
 * //         string: { // RawString
 * //           content: "STRING_VALUE",
 * //           sha256: "STRING_VALUE",
 * //         },
 * //         appSpecContent: { // AppSpecContent
 * //           content: "STRING_VALUE",
 * //           sha256: "STRING_VALUE",
 * //         },
 * //       },
 * //       genericRevisionInfo: { // GenericRevisionInfo
 * //         description: "STRING_VALUE",
 * //         deploymentGroups: [ // DeploymentGroupsList
 * //           "STRING_VALUE",
 * //         ],
 * //         firstUsedTime: new Date("TIMESTAMP"),
 * //         lastUsedTime: new Date("TIMESTAMP"),
 * //         registerTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetApplicationRevisionsCommandInput - {@link BatchGetApplicationRevisionsCommandInput}
 * @returns {@link BatchGetApplicationRevisionsCommandOutput}
 * @see {@link BatchGetApplicationRevisionsCommandInput} for command's `input` shape.
 * @see {@link BatchGetApplicationRevisionsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link ApplicationDoesNotExistException} (client fault)
 *  <p>The application does not exist with the IAM user or Amazon Web Services account.</p>
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *  <p>The minimum number of required application names was not specified.</p>
 *
 * @throws {@link BatchLimitExceededException} (client fault)
 *  <p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *  <p>The application name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidRevisionException} (client fault)
 *  <p>The revision was specified in an invalid format.</p>
 *
 * @throws {@link RevisionRequiredException} (client fault)
 *  <p>The revision ID was not specified.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 */
export class BatchGetApplicationRevisionsCommand extends $Command<
  BatchGetApplicationRevisionsCommandInput,
  BatchGetApplicationRevisionsCommandOutput,
  CodeDeployClientResolvedConfig
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
  constructor(readonly input: BatchGetApplicationRevisionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetApplicationRevisionsCommandInput, BatchGetApplicationRevisionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetApplicationRevisionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "BatchGetApplicationRevisionsCommand";
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
  private serialize(input: BatchGetApplicationRevisionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetApplicationRevisionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetApplicationRevisionsCommandOutput> {
    return de_BatchGetApplicationRevisionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
