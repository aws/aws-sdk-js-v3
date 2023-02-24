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

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import {
  UpdatePackageVersionsStatusRequest,
  UpdatePackageVersionsStatusRequestFilterSensitiveLog,
  UpdatePackageVersionsStatusResult,
  UpdatePackageVersionsStatusResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdatePackageVersionsStatusCommand,
  serializeAws_restJson1UpdatePackageVersionsStatusCommand,
} from "../protocols/Aws_restJson1";

export interface UpdatePackageVersionsStatusCommandInput extends UpdatePackageVersionsStatusRequest {}
export interface UpdatePackageVersionsStatusCommandOutput extends UpdatePackageVersionsStatusResult, __MetadataBearer {}

/**
 * <p>
 *       Updates the status of one or more versions of a package. Using <code>UpdatePackageVersionsStatus</code>,
 *       you can update the status of package versions to <code>Archived</code>, <code>Published</code>, or <code>Unlisted</code>.
 *       To set the status of a package version to <code>Disposed</code>, use
 *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DisposePackageVersions.html">DisposePackageVersions</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, UpdatePackageVersionsStatusCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, UpdatePackageVersionsStatusCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new UpdatePackageVersionsStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePackageVersionsStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePackageVersionsStatusCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 */
export class UpdatePackageVersionsStatusCommand extends $Command<
  UpdatePackageVersionsStatusCommandInput,
  UpdatePackageVersionsStatusCommandOutput,
  CodeartifactClientResolvedConfig
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

  constructor(readonly input: UpdatePackageVersionsStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePackageVersionsStatusCommandInput, UpdatePackageVersionsStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePackageVersionsStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "UpdatePackageVersionsStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePackageVersionsStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdatePackageVersionsStatusResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePackageVersionsStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdatePackageVersionsStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdatePackageVersionsStatusCommandOutput> {
    return deserializeAws_restJson1UpdatePackageVersionsStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
