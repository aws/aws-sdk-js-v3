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

import { RejectEnvironmentAccountConnectionInput, RejectEnvironmentAccountConnectionOutput } from "../models/models_0";
import {
  de_RejectEnvironmentAccountConnectionCommand,
  se_RejectEnvironmentAccountConnectionCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RejectEnvironmentAccountConnectionCommand}.
 */
export interface RejectEnvironmentAccountConnectionCommandInput extends RejectEnvironmentAccountConnectionInput {}
/**
 * @public
 *
 * The output of {@link RejectEnvironmentAccountConnectionCommand}.
 */
export interface RejectEnvironmentAccountConnectionCommandOutput
  extends RejectEnvironmentAccountConnectionOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>In a management account, reject an environment account connection from another environment account.</p>
 *          <p>After you reject an environment account connection request, you <i>can't</i> accept or use the rejected environment account
 *       connection.</p>
 *          <p>You <i>can’t</i> reject an environment account connection that's connected to an environment.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
 *         connections</a> in the <i>Proton User guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, RejectEnvironmentAccountConnectionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, RejectEnvironmentAccountConnectionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // RejectEnvironmentAccountConnectionInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new RejectEnvironmentAccountConnectionCommand(input);
 * const response = await client.send(command);
 * // { // RejectEnvironmentAccountConnectionOutput
 * //   environmentAccountConnection: { // EnvironmentAccountConnection
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     managementAccountId: "STRING_VALUE", // required
 * //     environmentAccountId: "STRING_VALUE", // required
 * //     roleArn: "STRING_VALUE", // required
 * //     environmentName: "STRING_VALUE", // required
 * //     requestedAt: new Date("TIMESTAMP"), // required
 * //     lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     componentRoleArn: "STRING_VALUE",
 * //     codebuildRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RejectEnvironmentAccountConnectionCommandInput - {@link RejectEnvironmentAccountConnectionCommandInput}
 * @returns {@link RejectEnvironmentAccountConnectionCommandOutput}
 * @see {@link RejectEnvironmentAccountConnectionCommandInput} for command's `input` shape.
 * @see {@link RejectEnvironmentAccountConnectionCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request <i>couldn't</i> be made due to a conflicting operation or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 */
export class RejectEnvironmentAccountConnectionCommand extends $Command<
  RejectEnvironmentAccountConnectionCommandInput,
  RejectEnvironmentAccountConnectionCommandOutput,
  ProtonClientResolvedConfig
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
  constructor(readonly input: RejectEnvironmentAccountConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RejectEnvironmentAccountConnectionCommandInput, RejectEnvironmentAccountConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RejectEnvironmentAccountConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "RejectEnvironmentAccountConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsProton20200720",
        operation: "RejectEnvironmentAccountConnection",
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
  private serialize(
    input: RejectEnvironmentAccountConnectionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_RejectEnvironmentAccountConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectEnvironmentAccountConnectionCommandOutput> {
    return de_RejectEnvironmentAccountConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
