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

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { TagProjectRequest, TagProjectResult } from "../models/models_0";
import { de_TagProjectCommand, se_TagProjectCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TagProjectCommand}.
 */
export interface TagProjectCommandInput extends TagProjectRequest {}
/**
 * @public
 *
 * The output of {@link TagProjectCommand}.
 */
export interface TagProjectCommandOutput extends TagProjectResult, __MetadataBearer {}

/**
 * @public
 * <p>Adds tags to a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, TagProjectCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, TagProjectCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = { // TagProjectRequest
 *   id: "STRING_VALUE", // required
 *   tags: { // Tags // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new TagProjectCommand(input);
 * const response = await client.send(command);
 * // { // TagProjectResult
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param TagProjectCommandInput - {@link TagProjectCommandInput}
 * @returns {@link TagProjectCommandOutput}
 * @see {@link TagProjectCommandInput} for command's `input` shape.
 * @see {@link TagProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A resource limit has been exceeded.</p>
 *
 * @throws {@link ProjectNotFoundException} (client fault)
 *  <p>The specified AWS CodeStar project was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is either not valid, or it could not be validated.</p>
 *
 * @throws {@link CodeStarServiceException}
 * <p>Base exception class for all service exceptions from CodeStar service.</p>
 *
 */
export class TagProjectCommand extends $Command<
  TagProjectCommandInput,
  TagProjectCommandOutput,
  CodeStarClientResolvedConfig
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
  constructor(readonly input: TagProjectCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagProjectCommandInput, TagProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TagProjectCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "TagProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeStar_20170419",
        operation: "TagProject",
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
  private serialize(input: TagProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TagProjectCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagProjectCommandOutput> {
    return de_TagProjectCommand(output, context);
  }
}
