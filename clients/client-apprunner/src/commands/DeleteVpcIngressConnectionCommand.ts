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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { DeleteVpcIngressConnectionRequest, DeleteVpcIngressConnectionResponse } from "../models/models_0";
import { de_DeleteVpcIngressConnectionCommand, se_DeleteVpcIngressConnectionCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpcIngressConnectionCommand}.
 */
export interface DeleteVpcIngressConnectionCommandInput extends DeleteVpcIngressConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcIngressConnectionCommand}.
 */
export interface DeleteVpcIngressConnectionCommandOutput extends DeleteVpcIngressConnectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted:
 *     </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AVAILABLE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FAILED_CREATION</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FAILED_UPDATE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FAILED_DELETION</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DeleteVpcIngressConnectionCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DeleteVpcIngressConnectionCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const input = { // DeleteVpcIngressConnectionRequest
 *   VpcIngressConnectionArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteVpcIngressConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpcIngressConnectionResponse
 * //   VpcIngressConnection: { // VpcIngressConnection
 * //     VpcIngressConnectionArn: "STRING_VALUE",
 * //     VpcIngressConnectionName: "STRING_VALUE",
 * //     ServiceArn: "STRING_VALUE",
 * //     Status: "AVAILABLE" || "PENDING_CREATION" || "PENDING_UPDATE" || "PENDING_DELETION" || "FAILED_CREATION" || "FAILED_UPDATE" || "FAILED_DELETION" || "DELETED",
 * //     AccountId: "STRING_VALUE",
 * //     DomainName: "STRING_VALUE",
 * //     IngressVpcConfiguration: { // IngressVpcConfiguration
 * //       VpcId: "STRING_VALUE",
 * //       VpcEndpointId: "STRING_VALUE",
 * //     },
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     DeletedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteVpcIngressConnectionCommandInput - {@link DeleteVpcIngressConnectionCommandInput}
 * @returns {@link DeleteVpcIngressConnectionCommandOutput}
 * @see {@link DeleteVpcIngressConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcIngressConnectionCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>You can't perform this action when the resource is in its current state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource doesn't exist for the specified Amazon Resource Name (ARN) in your Amazon Web Services account.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 */
export class DeleteVpcIngressConnectionCommand extends $Command<
  DeleteVpcIngressConnectionCommandInput,
  DeleteVpcIngressConnectionCommandOutput,
  AppRunnerClientResolvedConfig
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
  constructor(readonly input: DeleteVpcIngressConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVpcIngressConnectionCommandInput, DeleteVpcIngressConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVpcIngressConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "DeleteVpcIngressConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AppRunner",
        operation: "DeleteVpcIngressConnection",
      },
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
  private serialize(input: DeleteVpcIngressConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteVpcIngressConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVpcIngressConnectionCommandOutput> {
    return de_DeleteVpcIngressConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
