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
  CreateAttributeGroupRequest,
  CreateAttributeGroupRequestFilterSensitiveLog,
  CreateAttributeGroupResponse,
  CreateAttributeGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateAttributeGroupCommand,
  serializeAws_restJson1CreateAttributeGroupCommand,
} from "../protocols/Aws_restJson1";
import {
  ServiceCatalogAppRegistryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogAppRegistryClient";

export interface CreateAttributeGroupCommandInput extends CreateAttributeGroupRequest {}
export interface CreateAttributeGroupCommandOutput extends CreateAttributeGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a new attribute group as a container for user-defined attributes. This feature
 *       enables users to have full control over their cloud application's metadata in a rich
 *       machine-readable format to facilitate integration with automated workflows and third-party
 *       tools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, CreateAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, CreateAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new CreateAttributeGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link CreateAttributeGroupCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for ServiceCatalogAppRegistryClient's `config` shape.
 *
 */
export class CreateAttributeGroupCommand extends $Command<
  CreateAttributeGroupCommandInput,
  CreateAttributeGroupCommandOutput,
  ServiceCatalogAppRegistryClientResolvedConfig
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

  constructor(readonly input: CreateAttributeGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogAppRegistryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAttributeGroupCommandInput, CreateAttributeGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAttributeGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogAppRegistryClient";
    const commandName = "CreateAttributeGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAttributeGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAttributeGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAttributeGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAttributeGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAttributeGroupCommandOutput> {
    return deserializeAws_restJson1CreateAttributeGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
