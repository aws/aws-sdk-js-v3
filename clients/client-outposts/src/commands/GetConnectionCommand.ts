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

import { GetConnectionRequest, GetConnectionResponse } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_GetConnectionCommand, se_GetConnectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConnectionCommand}.
 */
export interface GetConnectionCommandInput extends GetConnectionRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectionCommand}.
 */
export interface GetConnectionCommandOutput extends GetConnectionResponse, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>
 *       Amazon Web Services uses this action to install Outpost servers.</p>
 *          </note>
 *          <p>
 *       Gets information about the specified connection.
 *     </p>
 *          <p>
 *       Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For
 *       more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html">
 *       Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html">
 *       Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetConnectionCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetConnectionCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // GetConnectionRequest
 *   ConnectionId: "STRING_VALUE", // required
 * };
 * const command = new GetConnectionCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectionResponse
 * //   ConnectionId: "STRING_VALUE",
 * //   ConnectionDetails: { // ConnectionDetails
 * //     ClientPublicKey: "STRING_VALUE",
 * //     ServerPublicKey: "STRING_VALUE",
 * //     ServerEndpoint: "STRING_VALUE",
 * //     ClientTunnelAddress: "STRING_VALUE",
 * //     ServerTunnelAddress: "STRING_VALUE",
 * //     AllowedIps: [ // CIDRList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConnectionCommandInput - {@link GetConnectionCommandInput}
 * @returns {@link GetConnectionCommandOutput}
 * @see {@link GetConnectionCommandInput} for command's `input` shape.
 * @see {@link GetConnectionCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 */
export class GetConnectionCommand extends $Command<
  GetConnectionCommandInput,
  GetConnectionCommandOutput,
  OutpostsClientResolvedConfig
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
  constructor(readonly input: GetConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConnectionCommandInput, GetConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetConnectionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "GetConnectionCommand";
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
  private serialize(input: GetConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConnectionCommandOutput> {
    return de_GetConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
