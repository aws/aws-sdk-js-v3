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
  GetMergeConflictsInput,
  GetMergeConflictsInputFilterSensitiveLog,
  GetMergeConflictsOutput,
  GetMergeConflictsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetMergeConflictsCommand,
  serializeAws_json1_1GetMergeConflictsCommand,
} from "../protocols/Aws_json1_1";

export interface GetMergeConflictsCommandInput extends GetMergeConflictsInput {}
export interface GetMergeConflictsCommandOutput extends GetMergeConflictsOutput, __MetadataBearer {}

/**
 * <p>Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetMergeConflictsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetMergeConflictsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetMergeConflictsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMergeConflictsCommandInput} for command's `input` shape.
 * @see {@link GetMergeConflictsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class GetMergeConflictsCommand extends $Command<
  GetMergeConflictsCommandInput,
  GetMergeConflictsCommandOutput,
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

  constructor(readonly input: GetMergeConflictsCommandInput) {
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
  ): Handler<GetMergeConflictsCommandInput, GetMergeConflictsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMergeConflictsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetMergeConflictsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMergeConflictsInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetMergeConflictsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMergeConflictsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMergeConflictsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMergeConflictsCommandOutput> {
    return deserializeAws_json1_1GetMergeConflictsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
