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

import { RestoreCoreNetworkPolicyVersionRequest, RestoreCoreNetworkPolicyVersionResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_RestoreCoreNetworkPolicyVersionCommand,
  se_RestoreCoreNetworkPolicyVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RestoreCoreNetworkPolicyVersionCommand}.
 */
export interface RestoreCoreNetworkPolicyVersionCommandInput extends RestoreCoreNetworkPolicyVersionRequest {}
/**
 * @public
 *
 * The output of {@link RestoreCoreNetworkPolicyVersionCommand}.
 */
export interface RestoreCoreNetworkPolicyVersionCommandOutput
  extends RestoreCoreNetworkPolicyVersionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Restores a previous policy version as a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and restored policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, RestoreCoreNetworkPolicyVersionCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, RestoreCoreNetworkPolicyVersionCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // RestoreCoreNetworkPolicyVersionRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   PolicyVersionId: Number("int"), // required
 * };
 * const command = new RestoreCoreNetworkPolicyVersionCommand(input);
 * const response = await client.send(command);
 * // { // RestoreCoreNetworkPolicyVersionResponse
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
 * @param RestoreCoreNetworkPolicyVersionCommandInput - {@link RestoreCoreNetworkPolicyVersionCommandInput}
 * @returns {@link RestoreCoreNetworkPolicyVersionCommandOutput}
 * @see {@link RestoreCoreNetworkPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link RestoreCoreNetworkPolicyVersionCommandOutput} for command's `response` shape.
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
export class RestoreCoreNetworkPolicyVersionCommand extends $Command<
  RestoreCoreNetworkPolicyVersionCommandInput,
  RestoreCoreNetworkPolicyVersionCommandOutput,
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
  constructor(readonly input: RestoreCoreNetworkPolicyVersionCommandInput) {
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
  ): Handler<RestoreCoreNetworkPolicyVersionCommandInput, RestoreCoreNetworkPolicyVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreCoreNetworkPolicyVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "RestoreCoreNetworkPolicyVersionCommand";
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
    input: RestoreCoreNetworkPolicyVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_RestoreCoreNetworkPolicyVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreCoreNetworkPolicyVersionCommandOutput> {
    return de_RestoreCoreNetworkPolicyVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
