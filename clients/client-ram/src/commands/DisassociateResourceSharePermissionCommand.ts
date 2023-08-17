// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  DisassociateResourceSharePermissionRequest,
  DisassociateResourceSharePermissionResponse,
} from "../models/models_0";
import {
  de_DisassociateResourceSharePermissionCommand,
  se_DisassociateResourceSharePermissionCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateResourceSharePermissionCommand}.
 */
export interface DisassociateResourceSharePermissionCommandInput extends DisassociateResourceSharePermissionRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateResourceSharePermissionCommand}.
 */
export interface DisassociateResourceSharePermissionCommandOutput
  extends DisassociateResourceSharePermissionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Removes a managed permission from a resource share. Permission changes take effect immediately. You can
 *             remove a managed permission from a resource share only if there are currently no resources of the relevant
 *             resource type currently attached to the resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, DisassociateResourceSharePermissionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, DisassociateResourceSharePermissionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // DisassociateResourceSharePermissionRequest
 *   resourceShareArn: "STRING_VALUE", // required
 *   permissionArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DisassociateResourceSharePermissionCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateResourceSharePermissionResponse
 * //   returnValue: true || false,
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateResourceSharePermissionCommandInput - {@link DisassociateResourceSharePermissionCommandInput}
 * @returns {@link DisassociateResourceSharePermissionCommandOutput}
 * @see {@link DisassociateResourceSharePermissionCommandInput} for command's `input` shape.
 * @see {@link DisassociateResourceSharePermissionCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The operation failed because the specified client token isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link InvalidStateTransitionException} (client fault)
 *  <p>The operation failed because the requested operation isn't valid for the resource
 *             share in its current state.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 */
export class DisassociateResourceSharePermissionCommand extends $Command<
  DisassociateResourceSharePermissionCommandInput,
  DisassociateResourceSharePermissionCommandOutput,
  RAMClientResolvedConfig
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
  constructor(readonly input: DisassociateResourceSharePermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateResourceSharePermissionCommandInput, DisassociateResourceSharePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateResourceSharePermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "DisassociateResourceSharePermissionCommand";
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
  private serialize(
    input: DisassociateResourceSharePermissionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisassociateResourceSharePermissionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateResourceSharePermissionCommandOutput> {
    return de_DisassociateResourceSharePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
