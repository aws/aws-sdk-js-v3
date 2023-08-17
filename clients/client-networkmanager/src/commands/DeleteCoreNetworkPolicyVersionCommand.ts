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

import { DeleteCoreNetworkPolicyVersionRequest, DeleteCoreNetworkPolicyVersionResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_DeleteCoreNetworkPolicyVersionCommand,
  se_DeleteCoreNetworkPolicyVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteCoreNetworkPolicyVersionCommand}.
 */
export interface DeleteCoreNetworkPolicyVersionCommandInput extends DeleteCoreNetworkPolicyVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCoreNetworkPolicyVersionCommand}.
 */
export interface DeleteCoreNetworkPolicyVersionCommandOutput
  extends DeleteCoreNetworkPolicyVersionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes a policy version from a core network. You can't delete the current LIVE policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteCoreNetworkPolicyVersionCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteCoreNetworkPolicyVersionCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // DeleteCoreNetworkPolicyVersionRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   PolicyVersionId: Number("int"), // required
 * };
 * const command = new DeleteCoreNetworkPolicyVersionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCoreNetworkPolicyVersionResponse
 * //   CoreNetworkPolicy: { // CoreNetworkPolicy
 * //     CoreNetworkId: "STRING_VALUE",
 * //     PolicyVersionId: Number("int"),
 * //     Alias: "LIVE" || "LATEST",
 * //     Description: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     ChangeSetState: "PENDING_GENERATION" || "FAILED_GENERATION" || "READY_TO_EXECUTE" || "EXECUTING" || "EXECUTION_SUCCEEDED" || "OUT_OF_DATE",
 * //     PolicyErrors: [ // CoreNetworkPolicyErrorList
 * //       { // CoreNetworkPolicyError
 * //         ErrorCode: "STRING_VALUE", // required
 * //         Message: "STRING_VALUE", // required
 * //         Path: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PolicyDocument: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteCoreNetworkPolicyVersionCommandInput - {@link DeleteCoreNetworkPolicyVersionCommandInput}
 * @returns {@link DeleteCoreNetworkPolicyVersionCommandOutput}
 * @see {@link DeleteCoreNetworkPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteCoreNetworkPolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 */
export class DeleteCoreNetworkPolicyVersionCommand extends $Command<
  DeleteCoreNetworkPolicyVersionCommandInput,
  DeleteCoreNetworkPolicyVersionCommandOutput,
  NetworkManagerClientResolvedConfig
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
  constructor(readonly input: DeleteCoreNetworkPolicyVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCoreNetworkPolicyVersionCommandInput, DeleteCoreNetworkPolicyVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCoreNetworkPolicyVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "DeleteCoreNetworkPolicyVersionCommand";
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
    input: DeleteCoreNetworkPolicyVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteCoreNetworkPolicyVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteCoreNetworkPolicyVersionCommandOutput> {
    return de_DeleteCoreNetworkPolicyVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
