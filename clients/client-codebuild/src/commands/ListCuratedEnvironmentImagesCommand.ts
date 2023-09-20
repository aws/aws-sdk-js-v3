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

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListCuratedEnvironmentImagesInput, ListCuratedEnvironmentImagesOutput } from "../models/models_0";
import {
  de_ListCuratedEnvironmentImagesCommand,
  se_ListCuratedEnvironmentImagesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCuratedEnvironmentImagesCommand}.
 */
export interface ListCuratedEnvironmentImagesCommandInput extends ListCuratedEnvironmentImagesInput {}
/**
 * @public
 *
 * The output of {@link ListCuratedEnvironmentImagesCommand}.
 */
export interface ListCuratedEnvironmentImagesCommandOutput
  extends ListCuratedEnvironmentImagesOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information about Docker images that are managed by CodeBuild.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListCuratedEnvironmentImagesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListCuratedEnvironmentImagesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = {};
 * const command = new ListCuratedEnvironmentImagesCommand(input);
 * const response = await client.send(command);
 * // { // ListCuratedEnvironmentImagesOutput
 * //   platforms: [ // EnvironmentPlatforms
 * //     { // EnvironmentPlatform
 * //       platform: "DEBIAN" || "AMAZON_LINUX" || "UBUNTU" || "WINDOWS_SERVER",
 * //       languages: [ // EnvironmentLanguages
 * //         { // EnvironmentLanguage
 * //           language: "JAVA" || "PYTHON" || "NODE_JS" || "RUBY" || "GOLANG" || "DOCKER" || "ANDROID" || "DOTNET" || "BASE" || "PHP",
 * //           images: [ // EnvironmentImages
 * //             { // EnvironmentImage
 * //               name: "STRING_VALUE",
 * //               description: "STRING_VALUE",
 * //               versions: [ // ImageVersions
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCuratedEnvironmentImagesCommandInput - {@link ListCuratedEnvironmentImagesCommandInput}
 * @returns {@link ListCuratedEnvironmentImagesCommandOutput}
 * @see {@link ListCuratedEnvironmentImagesCommandInput} for command's `input` shape.
 * @see {@link ListCuratedEnvironmentImagesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 */
export class ListCuratedEnvironmentImagesCommand extends $Command<
  ListCuratedEnvironmentImagesCommandInput,
  ListCuratedEnvironmentImagesCommandOutput,
  CodeBuildClientResolvedConfig
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
  constructor(readonly input: ListCuratedEnvironmentImagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCuratedEnvironmentImagesCommandInput, ListCuratedEnvironmentImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCuratedEnvironmentImagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "ListCuratedEnvironmentImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeBuild_20161006",
        operation: "ListCuratedEnvironmentImages",
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
  private serialize(input: ListCuratedEnvironmentImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCuratedEnvironmentImagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCuratedEnvironmentImagesCommandOutput> {
    return de_ListCuratedEnvironmentImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
