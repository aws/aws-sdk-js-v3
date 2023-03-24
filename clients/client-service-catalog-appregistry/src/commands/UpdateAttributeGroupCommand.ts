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

import { UpdateAttributeGroupRequest, UpdateAttributeGroupResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAttributeGroupCommand,
  serializeAws_restJson1UpdateAttributeGroupCommand,
} from "../protocols/Aws_restJson1";
import {
  ServiceCatalogAppRegistryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogAppRegistryClient";

/**
 * @public
 *
 * The input for {@link UpdateAttributeGroupCommand}.
 */
export interface UpdateAttributeGroupCommandInput extends UpdateAttributeGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAttributeGroupCommand}.
 */
export interface UpdateAttributeGroupCommandOutput extends UpdateAttributeGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing attribute group with new details. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, UpdateAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, UpdateAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const input = {
 *   attributeGroup: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   attributes: "STRING_VALUE",
 * };
 * const command = new UpdateAttributeGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateAttributeGroupCommandInput - {@link UpdateAttributeGroupCommandInput}
 * @returns {@link UpdateAttributeGroupCommandOutput}
 * @see {@link UpdateAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateAttributeGroupCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for ServiceCatalogAppRegistryClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when processing the request (for example, a resource with the given
 *       name already exists within the account).</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service is experiencing internal problems.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 *
 */
export class UpdateAttributeGroupCommand extends $Command<
  UpdateAttributeGroupCommandInput,
  UpdateAttributeGroupCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: UpdateAttributeGroupCommandInput) {
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
  ): Handler<UpdateAttributeGroupCommandInput, UpdateAttributeGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAttributeGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogAppRegistryClient";
    const commandName = "UpdateAttributeGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateAttributeGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAttributeGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAttributeGroupCommandOutput> {
    return deserializeAws_restJson1UpdateAttributeGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
