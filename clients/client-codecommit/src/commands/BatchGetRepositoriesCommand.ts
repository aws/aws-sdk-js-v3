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
  BatchGetRepositoriesInput,
  BatchGetRepositoriesInputFilterSensitiveLog,
  BatchGetRepositoriesOutput,
  BatchGetRepositoriesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetRepositoriesCommand,
  serializeAws_json1_1BatchGetRepositoriesCommand,
} from "../protocols/Aws_json1_1";

export interface BatchGetRepositoriesCommandInput extends BatchGetRepositoriesInput {}
export interface BatchGetRepositoriesCommandOutput extends BatchGetRepositoriesOutput, __MetadataBearer {}

/**
 * <p>Returns information about one or more repositories.</p>
 *         <note>
 *             <p>The description field for a repository accepts all HTML characters and all valid
 *                 Unicode characters. Applications that do not HTML-encode the description and display
 *                 it in a webpage can expose users to potentially malicious code. Make sure that you
 *                 HTML-encode the description field in any application that uses this API to display
 *                 the repository description on a webpage.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchGetRepositoriesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchGetRepositoriesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new BatchGetRepositoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetRepositoriesCommandInput} for command's `input` shape.
 * @see {@link BatchGetRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class BatchGetRepositoriesCommand extends $Command<
  BatchGetRepositoriesCommandInput,
  BatchGetRepositoriesCommandOutput,
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

  constructor(readonly input: BatchGetRepositoriesCommandInput) {
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
  ): Handler<BatchGetRepositoriesCommandInput, BatchGetRepositoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetRepositoriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "BatchGetRepositoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetRepositoriesInputFilterSensitiveLog,
      outputFilterSensitiveLog: BatchGetRepositoriesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetRepositoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetRepositoriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetRepositoriesCommandOutput> {
    return deserializeAws_json1_1BatchGetRepositoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
