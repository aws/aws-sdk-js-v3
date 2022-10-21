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
  UpdateNumberOfDomainControllersRequest,
  UpdateNumberOfDomainControllersRequestFilterSensitiveLog,
  UpdateNumberOfDomainControllersResult,
  UpdateNumberOfDomainControllersResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateNumberOfDomainControllersCommand,
  serializeAws_json1_1UpdateNumberOfDomainControllersCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateNumberOfDomainControllersCommandInput extends UpdateNumberOfDomainControllersRequest {}
export interface UpdateNumberOfDomainControllersCommandOutput
  extends UpdateNumberOfDomainControllersResult,
    __MetadataBearer {}

/**
 * <p>Adds or removes domain controllers to or from the directory. Based on the difference
 *       between current value and new value (provided through this API call), domain controllers will
 *       be added or removed. It may take up to 45 minutes for any new domain controllers to become
 *       fully active once the requested number of domain controllers is updated. During this time, you
 *       cannot make another update request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateNumberOfDomainControllersCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateNumberOfDomainControllersCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new UpdateNumberOfDomainControllersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNumberOfDomainControllersCommandInput} for command's `input` shape.
 * @see {@link UpdateNumberOfDomainControllersCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 */
export class UpdateNumberOfDomainControllersCommand extends $Command<
  UpdateNumberOfDomainControllersCommandInput,
  UpdateNumberOfDomainControllersCommandOutput,
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

  constructor(readonly input: UpdateNumberOfDomainControllersCommandInput) {
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
  ): Handler<UpdateNumberOfDomainControllersCommandInput, UpdateNumberOfDomainControllersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateNumberOfDomainControllersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "UpdateNumberOfDomainControllersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateNumberOfDomainControllersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateNumberOfDomainControllersResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateNumberOfDomainControllersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateNumberOfDomainControllersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateNumberOfDomainControllersCommandOutput> {
    return deserializeAws_json1_1UpdateNumberOfDomainControllersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
