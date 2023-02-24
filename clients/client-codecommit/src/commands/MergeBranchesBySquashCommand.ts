// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import {
  MergeBranchesBySquashInput,
  MergeBranchesBySquashInputFilterSensitiveLog,
  MergeBranchesBySquashOutput,
  MergeBranchesBySquashOutputFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1MergeBranchesBySquashCommand,
  serializeAws_json1_1MergeBranchesBySquashCommand,
} from "../protocols/Aws_json1_1";

export interface MergeBranchesBySquashCommandInput extends MergeBranchesBySquashInput {}
export interface MergeBranchesBySquashCommandOutput extends MergeBranchesBySquashOutput, __MetadataBearer {}

/**
 * <p>Merges two branches using the squash merge strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergeBranchesBySquashCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergeBranchesBySquashCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new MergeBranchesBySquashCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergeBranchesBySquashCommandInput} for command's `input` shape.
 * @see {@link MergeBranchesBySquashCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class MergeBranchesBySquashCommand extends $Command<
  MergeBranchesBySquashCommandInput,
  MergeBranchesBySquashCommandOutput,
  CodeCommitClientResolvedConfig
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

  constructor(readonly input: MergeBranchesBySquashCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<MergeBranchesBySquashCommandInput, MergeBranchesBySquashCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, MergeBranchesBySquashCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "MergeBranchesBySquashCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MergeBranchesBySquashInputFilterSensitiveLog,
      outputFilterSensitiveLog: MergeBranchesBySquashOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MergeBranchesBySquashCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1MergeBranchesBySquashCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MergeBranchesBySquashCommandOutput> {
    return deserializeAws_json1_1MergeBranchesBySquashCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
