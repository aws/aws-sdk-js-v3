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
import { ListApplicationRevisionsInput, ListApplicationRevisionsOutput } from "../models/models_0";
import { de_ListApplicationRevisionsCommand, se_ListApplicationRevisionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationRevisionsCommand}.
 */
export interface ListApplicationRevisionsCommandInput extends ListApplicationRevisionsInput {}
/**
 * @public
 *
 * The output of {@link ListApplicationRevisionsCommand}.
 */
export interface ListApplicationRevisionsCommandOutput extends ListApplicationRevisionsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists information about revisions for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListApplicationRevisionsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListApplicationRevisionsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // ListApplicationRevisionsInput
 *   applicationName: "STRING_VALUE", // required
 *   sortBy: "registerTime" || "firstUsedTime" || "lastUsedTime",
 *   sortOrder: "ascending" || "descending",
 *   s3Bucket: "STRING_VALUE",
 *   s3KeyPrefix: "STRING_VALUE",
 *   deployed: "include" || "exclude" || "ignore",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationRevisionsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationRevisionsOutput
 * //   revisions: [ // RevisionLocationList
 * //     { // RevisionLocation
 * //       revisionType: "S3" || "GitHub" || "String" || "AppSpecContent",
 * //       s3Location: { // S3Location
 * //         bucket: "STRING_VALUE",
 * //         key: "STRING_VALUE",
 * //         bundleType: "tar" || "tgz" || "zip" || "YAML" || "JSON",
 * //         version: "STRING_VALUE",
 * //         eTag: "STRING_VALUE",
 * //       },
 * //       gitHubLocation: { // GitHubLocation
 * //         repository: "STRING_VALUE",
 * //         commitId: "STRING_VALUE",
 * //       },
 * //       string: { // RawString
 * //         content: "STRING_VALUE",
 * //         sha256: "STRING_VALUE",
 * //       },
 * //       appSpecContent: { // AppSpecContent
 * //         content: "STRING_VALUE",
 * //         sha256: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationRevisionsCommandInput - {@link ListApplicationRevisionsCommandInput}
 * @returns {@link ListApplicationRevisionsCommandOutput}
 * @see {@link ListApplicationRevisionsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationRevisionsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link ApplicationDoesNotExistException} (client fault)
 *  <p>The application does not exist with the IAM user or Amazon Web Services account.</p>
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *  <p>The minimum number of required application names was not specified.</p>
 *
 * @throws {@link BucketNameFilterRequiredException} (client fault)
 *  <p>A bucket name is required, but was not provided.</p>
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *  <p>The application name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidBucketNameFilterException} (client fault)
 *  <p>The bucket name either doesn't exist or was specified in an invalid format.</p>
 *
 * @throws {@link InvalidDeployedStateFilterException} (client fault)
 *  <p>The deployed state filter was specified in an invalid format.</p>
 *
 * @throws {@link InvalidKeyPrefixFilterException} (client fault)
 *  <p>The specified key prefix filter was specified in an invalid format.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token was specified in an invalid format.</p>
 *
 * @throws {@link InvalidSortByException} (client fault)
 *  <p>The column name to sort by is either not present or was specified in an invalid
 *             format.</p>
 *
 * @throws {@link InvalidSortOrderException} (client fault)
 *  <p>The sort order was specified in an invalid format.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 */
export class ListApplicationRevisionsCommand extends $Command<
  ListApplicationRevisionsCommandInput,
  ListApplicationRevisionsCommandOutput,
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
  constructor(readonly input: ListApplicationRevisionsCommandInput) {
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
  ): Handler<ListApplicationRevisionsCommandInput, ListApplicationRevisionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListApplicationRevisionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "ListApplicationRevisionsCommand";
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
  private serialize(input: ListApplicationRevisionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListApplicationRevisionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListApplicationRevisionsCommandOutput> {
    return de_ListApplicationRevisionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
