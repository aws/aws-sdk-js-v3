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
import { InvalidateProjectCacheInput, InvalidateProjectCacheOutput } from "../models/models_0";
import { de_InvalidateProjectCacheCommand, se_InvalidateProjectCacheCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link InvalidateProjectCacheCommand}.
 */
export interface InvalidateProjectCacheCommandInput extends InvalidateProjectCacheInput {}
/**
 * @public
 *
 * The output of {@link InvalidateProjectCacheCommand}.
 */
export interface InvalidateProjectCacheCommandOutput extends InvalidateProjectCacheOutput, __MetadataBearer {}

/**
 * @public
 * <p>Resets the cache for a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, InvalidateProjectCacheCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, InvalidateProjectCacheCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // InvalidateProjectCacheInput
 *   projectName: "STRING_VALUE", // required
 * };
 * const command = new InvalidateProjectCacheCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param InvalidateProjectCacheCommandInput - {@link InvalidateProjectCacheCommandInput}
 * @returns {@link InvalidateProjectCacheCommandOutput}
 * @see {@link InvalidateProjectCacheCommandInput} for command's `input` shape.
 * @see {@link InvalidateProjectCacheCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 */
export class InvalidateProjectCacheCommand extends $Command<
  InvalidateProjectCacheCommandInput,
  InvalidateProjectCacheCommandOutput,
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
  constructor(readonly input: InvalidateProjectCacheCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InvalidateProjectCacheCommandInput, InvalidateProjectCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InvalidateProjectCacheCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "InvalidateProjectCacheCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeBuild_20161006",
        operation: "InvalidateProjectCache",
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
  private serialize(input: InvalidateProjectCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InvalidateProjectCacheCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InvalidateProjectCacheCommandOutput> {
    return de_InvalidateProjectCacheCommand(output, context);
  }
}
