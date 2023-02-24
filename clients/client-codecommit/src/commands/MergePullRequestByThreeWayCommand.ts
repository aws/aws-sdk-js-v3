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
  MergePullRequestByThreeWayInput,
  MergePullRequestByThreeWayInputFilterSensitiveLog,
  MergePullRequestByThreeWayOutput,
  MergePullRequestByThreeWayOutputFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1MergePullRequestByThreeWayCommand,
  serializeAws_json1_1MergePullRequestByThreeWayCommand,
} from "../protocols/Aws_json1_1";

export interface MergePullRequestByThreeWayCommandInput extends MergePullRequestByThreeWayInput {}
export interface MergePullRequestByThreeWayCommandOutput extends MergePullRequestByThreeWayOutput, __MetadataBearer {}

/**
 * <p>Attempts to merge the source commit of a pull request into the specified destination
 *             branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergePullRequestByThreeWayCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergePullRequestByThreeWayCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new MergePullRequestByThreeWayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergePullRequestByThreeWayCommandInput} for command's `input` shape.
 * @see {@link MergePullRequestByThreeWayCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class MergePullRequestByThreeWayCommand extends $Command<
  MergePullRequestByThreeWayCommandInput,
  MergePullRequestByThreeWayCommandOutput,
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

  constructor(readonly input: MergePullRequestByThreeWayCommandInput) {
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
  ): Handler<MergePullRequestByThreeWayCommandInput, MergePullRequestByThreeWayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, MergePullRequestByThreeWayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "MergePullRequestByThreeWayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MergePullRequestByThreeWayInputFilterSensitiveLog,
      outputFilterSensitiveLog: MergePullRequestByThreeWayOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MergePullRequestByThreeWayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1MergePullRequestByThreeWayCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<MergePullRequestByThreeWayCommandOutput> {
    return deserializeAws_json1_1MergePullRequestByThreeWayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
