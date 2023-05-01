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

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { DeleteManagedEndpointRequest, DeleteManagedEndpointResponse } from "../models/models_0";
import { de_DeleteManagedEndpointCommand, se_DeleteManagedEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DeleteManagedEndpointCommand}.
 */
export interface DeleteManagedEndpointCommandInput extends DeleteManagedEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteManagedEndpointCommand}.
 */
export interface DeleteManagedEndpointCommandOutput extends DeleteManagedEndpointResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to
 *             Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual
 *          cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DeleteManagedEndpointCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DeleteManagedEndpointCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // DeleteManagedEndpointRequest
 *   id: "STRING_VALUE", // required
 *   virtualClusterId: "STRING_VALUE", // required
 * };
 * const command = new DeleteManagedEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteManagedEndpointCommandInput - {@link DeleteManagedEndpointCommandInput}
 * @returns {@link DeleteManagedEndpointCommandOutput}
 * @see {@link DeleteManagedEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteManagedEndpointCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 *
 */
export class DeleteManagedEndpointCommand extends $Command<
  DeleteManagedEndpointCommandInput,
  DeleteManagedEndpointCommandOutput,
  EMRContainersClientResolvedConfig
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
  constructor(readonly input: DeleteManagedEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRContainersClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteManagedEndpointCommandInput, DeleteManagedEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteManagedEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "DeleteManagedEndpointCommand";
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
  private serialize(input: DeleteManagedEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteManagedEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteManagedEndpointCommandOutput> {
    return de_DeleteManagedEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
