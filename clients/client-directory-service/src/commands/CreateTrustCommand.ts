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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import {
  CreateTrustRequest,
  CreateTrustRequestFilterSensitiveLog,
  CreateTrustResult,
  CreateTrustResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateTrustCommand,
  serializeAws_json1_1CreateTrustCommand,
} from "../protocols/Aws_json1_1";

export interface CreateTrustCommandInput extends CreateTrustRequest {}
export interface CreateTrustCommandOutput extends CreateTrustResult, __MetadataBearer {}

/**
 * <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For
 *       example, you can establish a trust between your Managed Microsoft AD directory, and your existing
 *       self-managed Microsoft Active Directory. This would allow you to provide users and groups
 *       access to resources in either domain, with a single set of credentials.</p>
 *          <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an
 *       Managed Microsoft AD directory and an external domain. You can create either a forest trust or an
 *       external trust.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateTrustCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateTrustCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new CreateTrustCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrustCommandInput} for command's `input` shape.
 * @see {@link CreateTrustCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 */
export class CreateTrustCommand extends $Command<
  CreateTrustCommandInput,
  CreateTrustCommandOutput,
  DirectoryServiceClientResolvedConfig
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

  constructor(readonly input: CreateTrustCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTrustCommandInput, CreateTrustCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateTrustCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "CreateTrustCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTrustRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTrustResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTrustCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTrustCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTrustCommandOutput> {
    return deserializeAws_json1_1CreateTrustCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
