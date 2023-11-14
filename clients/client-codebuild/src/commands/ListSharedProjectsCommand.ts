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
import { ListSharedProjectsInput, ListSharedProjectsOutput } from "../models/models_0";
import { de_ListSharedProjectsCommand, se_ListSharedProjectsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSharedProjectsCommand}.
 */
export interface ListSharedProjectsCommandInput extends ListSharedProjectsInput {}
/**
 * @public
 *
 * The output of {@link ListSharedProjectsCommand}.
 */
export interface ListSharedProjectsCommandOutput extends ListSharedProjectsOutput, __MetadataBearer {}

/**
 * @public
 * <p> Gets a list of projects that are shared with other Amazon Web Services accounts or users. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListSharedProjectsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListSharedProjectsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // ListSharedProjectsInput
 *   sortBy: "ARN" || "MODIFIED_TIME",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSharedProjectsCommand(input);
 * const response = await client.send(command);
 * // { // ListSharedProjectsOutput
 * //   nextToken: "STRING_VALUE",
 * //   projects: [ // ProjectArns
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSharedProjectsCommandInput - {@link ListSharedProjectsCommandInput}
 * @returns {@link ListSharedProjectsCommandOutput}
 * @see {@link ListSharedProjectsCommandInput} for command's `input` shape.
 * @see {@link ListSharedProjectsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 */
export class ListSharedProjectsCommand extends $Command<
  ListSharedProjectsCommandInput,
  ListSharedProjectsCommandOutput,
  CodeBuildClientResolvedConfig
> {
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
  constructor(readonly input: ListSharedProjectsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSharedProjectsCommandInput, ListSharedProjectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSharedProjectsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "ListSharedProjectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeBuild_20161006",
        operation: "ListSharedProjects",
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
  private serialize(input: ListSharedProjectsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSharedProjectsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSharedProjectsCommandOutput> {
    return de_ListSharedProjectsCommand(output, context);
  }
}
