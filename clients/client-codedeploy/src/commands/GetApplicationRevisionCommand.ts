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

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { GetApplicationRevisionInput, GetApplicationRevisionOutput } from "../models/models_0";
import { de_GetApplicationRevisionCommand, se_GetApplicationRevisionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationRevisionCommand}.
 */
export interface GetApplicationRevisionCommandInput extends GetApplicationRevisionInput {}
/**
 * @public
 *
 * The output of {@link GetApplicationRevisionCommand}.
 */
export interface GetApplicationRevisionCommandOutput extends GetApplicationRevisionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about an application revision.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetApplicationRevisionCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetApplicationRevisionCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // GetApplicationRevisionInput
 *   applicationName: "STRING_VALUE", // required
 *   revision: { // RevisionLocation
 *     revisionType: "S3" || "GitHub" || "String" || "AppSpecContent",
 *     s3Location: { // S3Location
 *       bucket: "STRING_VALUE",
 *       key: "STRING_VALUE",
 *       bundleType: "tar" || "tgz" || "zip" || "YAML" || "JSON",
 *       version: "STRING_VALUE",
 *       eTag: "STRING_VALUE",
 *     },
 *     gitHubLocation: { // GitHubLocation
 *       repository: "STRING_VALUE",
 *       commitId: "STRING_VALUE",
 *     },
 *     string: { // RawString
 *       content: "STRING_VALUE",
 *       sha256: "STRING_VALUE",
 *     },
 *     appSpecContent: { // AppSpecContent
 *       content: "STRING_VALUE",
 *       sha256: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new GetApplicationRevisionCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationRevisionOutput
 * //   applicationName: "STRING_VALUE",
 * //   revision: { // RevisionLocation
 * //     revisionType: "S3" || "GitHub" || "String" || "AppSpecContent",
 * //     s3Location: { // S3Location
 * //       bucket: "STRING_VALUE",
 * //       key: "STRING_VALUE",
 * //       bundleType: "tar" || "tgz" || "zip" || "YAML" || "JSON",
 * //       version: "STRING_VALUE",
 * //       eTag: "STRING_VALUE",
 * //     },
 * //     gitHubLocation: { // GitHubLocation
 * //       repository: "STRING_VALUE",
 * //       commitId: "STRING_VALUE",
 * //     },
 * //     string: { // RawString
 * //       content: "STRING_VALUE",
 * //       sha256: "STRING_VALUE",
 * //     },
 * //     appSpecContent: { // AppSpecContent
 * //       content: "STRING_VALUE",
 * //       sha256: "STRING_VALUE",
 * //     },
 * //   },
 * //   revisionInfo: { // GenericRevisionInfo
 * //     description: "STRING_VALUE",
 * //     deploymentGroups: [ // DeploymentGroupsList
 * //       "STRING_VALUE",
 * //     ],
 * //     firstUsedTime: new Date("TIMESTAMP"),
 * //     lastUsedTime: new Date("TIMESTAMP"),
 * //     registerTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApplicationRevisionCommandInput - {@link GetApplicationRevisionCommandInput}
 * @returns {@link GetApplicationRevisionCommandOutput}
 * @see {@link GetApplicationRevisionCommandInput} for command's `input` shape.
 * @see {@link GetApplicationRevisionCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link ApplicationDoesNotExistException} (client fault)
 *  <p>The application does not exist with the user or Amazon Web Services account.</p>
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *  <p>The minimum number of required application names was not specified.</p>
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *  <p>The application name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidRevisionException} (client fault)
 *  <p>The revision was specified in an invalid format.</p>
 *
 * @throws {@link RevisionDoesNotExistException} (client fault)
 *  <p>The named revision does not exist with the user or Amazon Web Services account.</p>
 *
 * @throws {@link RevisionRequiredException} (client fault)
 *  <p>The revision ID was not specified.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 */
export class GetApplicationRevisionCommand extends $Command<
  GetApplicationRevisionCommandInput,
  GetApplicationRevisionCommandOutput,
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
  constructor(readonly input: GetApplicationRevisionCommandInput) {
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
  ): Handler<GetApplicationRevisionCommandInput, GetApplicationRevisionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetApplicationRevisionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "GetApplicationRevisionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeDeploy_20141006",
        operation: "GetApplicationRevision",
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
  private serialize(input: GetApplicationRevisionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetApplicationRevisionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetApplicationRevisionCommandOutput> {
    return de_GetApplicationRevisionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
