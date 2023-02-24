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
  DescribeMergeConflictsInput,
  DescribeMergeConflictsInputFilterSensitiveLog,
  DescribeMergeConflictsOutput,
  DescribeMergeConflictsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeMergeConflictsCommand,
  serializeAws_json1_1DescribeMergeConflictsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeMergeConflictsCommandInput extends DescribeMergeConflictsInput {}
export interface DescribeMergeConflictsCommandOutput extends DescribeMergeConflictsOutput, __MetadataBearer {}

/**
 * <p>Returns information about one or more merge conflicts in the attempted merge of two
 *             commit specifiers using the squash or three-way merge strategy. If the merge option for
 *             the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DescribeMergeConflictsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DescribeMergeConflictsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DescribeMergeConflictsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMergeConflictsCommandInput} for command's `input` shape.
 * @see {@link DescribeMergeConflictsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class DescribeMergeConflictsCommand extends $Command<
  DescribeMergeConflictsCommandInput,
  DescribeMergeConflictsCommandOutput,
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

  constructor(readonly input: DescribeMergeConflictsCommandInput) {
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
  ): Handler<DescribeMergeConflictsCommandInput, DescribeMergeConflictsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMergeConflictsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "DescribeMergeConflictsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMergeConflictsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeMergeConflictsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeMergeConflictsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMergeConflictsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMergeConflictsCommandOutput> {
    return deserializeAws_json1_1DescribeMergeConflictsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
