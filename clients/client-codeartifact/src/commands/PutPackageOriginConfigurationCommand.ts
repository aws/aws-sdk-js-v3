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
  PutPackageOriginConfigurationRequest,
  PutPackageOriginConfigurationRequestFilterSensitiveLog,
  PutPackageOriginConfigurationResult,
  PutPackageOriginConfigurationResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutPackageOriginConfigurationCommand,
  serializeAws_restJson1PutPackageOriginConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface PutPackageOriginConfigurationCommandInput extends PutPackageOriginConfigurationRequest {}
export interface PutPackageOriginConfigurationCommandOutput
  extends PutPackageOriginConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Sets the package origin configuration for a package.</p>
 *          <p>The package origin configuration determines how new versions of a package can be added to a repository. You can allow or block direct
 *     publishing of new package versions, or ingestion and retaining of new package versions from an external connection or upstream source.
 *     For more information about package origin controls and configuration, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/package-origin-controls.html">Editing package origin controls</a> in the <i>CodeArtifact User Guide</i>.</p>
 *          <p>
 *             <code>PutPackageOriginConfiguration</code> can be called on a package that doesn't yet exist in the repository. When called
 *       on a package that does not exist, a package is created in the repository with no versions and the requested restrictions are set on the package.
 *       This can be used to preemptively block ingesting or retaining any versions from external connections or upstream repositories, or to block
 *       publishing any versions of the package into the repository before connecting any package managers or publishers to the repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, PutPackageOriginConfigurationCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, PutPackageOriginConfigurationCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new PutPackageOriginConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPackageOriginConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutPackageOriginConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 */
export class PutPackageOriginConfigurationCommand extends $Command<
  PutPackageOriginConfigurationCommandInput,
  PutPackageOriginConfigurationCommandOutput,
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

  constructor(readonly input: PutPackageOriginConfigurationCommandInput) {
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
  ): Handler<PutPackageOriginConfigurationCommandInput, PutPackageOriginConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutPackageOriginConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "PutPackageOriginConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPackageOriginConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutPackageOriginConfigurationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutPackageOriginConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutPackageOriginConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutPackageOriginConfigurationCommandOutput> {
    return deserializeAws_restJson1PutPackageOriginConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
