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

import {
  CreateTrustStoreRequest,
  CreateTrustStoreRequestFilterSensitiveLog,
  CreateTrustStoreResponse,
  CreateTrustStoreResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateTrustStoreCommand,
  serializeAws_restJson1CreateTrustStoreCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

export interface CreateTrustStoreCommandInput extends CreateTrustStoreRequest {}
export interface CreateTrustStoreCommandOutput extends CreateTrustStoreResponse, __MetadataBearer {}

/**
 * <p>Creates a trust store that can be associated with a web portal. A trust store contains
 *          certificate authority (CA) certificates. Once associated with a web portal, the browser in
 *          a streaming session will recognize certificates that have been issued using any of the CAs
 *          in the trust store. If your organization has internal websites that use certificates issued
 *          by private CAs, you should add the private CA certificate to the trust store. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, CreateTrustStoreCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, CreateTrustStoreCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const command = new CreateTrustStoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrustStoreCommandInput} for command's `input` shape.
 * @see {@link CreateTrustStoreCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 */
export class CreateTrustStoreCommand extends $Command<
  CreateTrustStoreCommandInput,
  CreateTrustStoreCommandOutput,
  WorkSpacesWebClientResolvedConfig
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

  constructor(readonly input: CreateTrustStoreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesWebClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTrustStoreCommandInput, CreateTrustStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTrustStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "CreateTrustStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTrustStoreRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTrustStoreResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTrustStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateTrustStoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTrustStoreCommandOutput> {
    return deserializeAws_restJson1CreateTrustStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
