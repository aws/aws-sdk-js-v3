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

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import {
  ImportSourceCredentialsInput,
  ImportSourceCredentialsInputFilterSensitiveLog,
  ImportSourceCredentialsOutput,
  ImportSourceCredentialsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ImportSourceCredentialsCommand,
  serializeAws_json1_1ImportSourceCredentialsCommand,
} from "../protocols/Aws_json1_1";

export interface ImportSourceCredentialsCommandInput extends ImportSourceCredentialsInput {}
export interface ImportSourceCredentialsCommandOutput extends ImportSourceCredentialsOutput, __MetadataBearer {}

/**
 * <p> Imports the source repository credentials for an CodeBuild project that has its
 *             source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ImportSourceCredentialsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ImportSourceCredentialsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ImportSourceCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportSourceCredentialsCommandInput} for command's `input` shape.
 * @see {@link ImportSourceCredentialsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 */
export class ImportSourceCredentialsCommand extends $Command<
  ImportSourceCredentialsCommandInput,
  ImportSourceCredentialsCommandOutput,
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

  constructor(readonly input: ImportSourceCredentialsCommandInput) {
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
  ): Handler<ImportSourceCredentialsCommandInput, ImportSourceCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportSourceCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "ImportSourceCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportSourceCredentialsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ImportSourceCredentialsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportSourceCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportSourceCredentialsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportSourceCredentialsCommandOutput> {
    return deserializeAws_json1_1ImportSourceCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
