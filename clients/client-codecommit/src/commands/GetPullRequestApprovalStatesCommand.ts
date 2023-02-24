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
  GetPullRequestApprovalStatesInput,
  GetPullRequestApprovalStatesInputFilterSensitiveLog,
  GetPullRequestApprovalStatesOutput,
  GetPullRequestApprovalStatesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetPullRequestApprovalStatesCommand,
  serializeAws_json1_1GetPullRequestApprovalStatesCommand,
} from "../protocols/Aws_json1_1";

export interface GetPullRequestApprovalStatesCommandInput extends GetPullRequestApprovalStatesInput {}
export interface GetPullRequestApprovalStatesCommandOutput
  extends GetPullRequestApprovalStatesOutput,
    __MetadataBearer {}

/**
 * <p>Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more
 *         approval rules applied to them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetPullRequestApprovalStatesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetPullRequestApprovalStatesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetPullRequestApprovalStatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPullRequestApprovalStatesCommandInput} for command's `input` shape.
 * @see {@link GetPullRequestApprovalStatesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class GetPullRequestApprovalStatesCommand extends $Command<
  GetPullRequestApprovalStatesCommandInput,
  GetPullRequestApprovalStatesCommandOutput,
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

  constructor(readonly input: GetPullRequestApprovalStatesCommandInput) {
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
  ): Handler<GetPullRequestApprovalStatesCommandInput, GetPullRequestApprovalStatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPullRequestApprovalStatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetPullRequestApprovalStatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPullRequestApprovalStatesInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetPullRequestApprovalStatesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPullRequestApprovalStatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPullRequestApprovalStatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPullRequestApprovalStatesCommandOutput> {
    return deserializeAws_json1_1GetPullRequestApprovalStatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
