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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { UpdateSharedVpcConfigurationRequest, UpdateSharedVpcConfigurationResponse } from "../models/models_0";
import {
  de_UpdateSharedVpcConfigurationCommand,
  se_UpdateSharedVpcConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSharedVpcConfigurationCommand}.
 */
export interface UpdateSharedVpcConfigurationCommandInput extends UpdateSharedVpcConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSharedVpcConfigurationCommand}.
 */
export interface UpdateSharedVpcConfigurationCommandOutput
  extends UpdateSharedVpcConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Configures whether participant accounts in your organization can create Amazon FSx for NetApp ONTAP Multi-AZ file systems in subnets that are shared by a virtual
 *             private cloud (VPC) owner. For more information, see the <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/maz-shared-vpc.html">Amazon FSx for NetApp ONTAP User
 *                 Guide</a>.</p>
 *          <note>
 *             <p>We strongly recommend that participant-created Multi-AZ file systems in the shared
 *                 VPC are deleted before you disable this feature. Once the feature is disabled, these
 *                 file systems will enter a <code>MISCONFIGURED</code> state and behave like Single-AZ
 *                 file systems. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/maz-shared-vpc.html#disabling-maz-vpc-sharing">Important considerations before disabling shared VPC support for Multi-AZ file
 *                     systems</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, UpdateSharedVpcConfigurationCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, UpdateSharedVpcConfigurationCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // UpdateSharedVpcConfigurationRequest
 *   EnableFsxRouteTableUpdatesFromParticipantAccounts: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new UpdateSharedVpcConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSharedVpcConfigurationResponse
 * //   EnableFsxRouteTableUpdatesFromParticipantAccounts: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSharedVpcConfigurationCommandInput - {@link UpdateSharedVpcConfigurationCommandInput}
 * @returns {@link UpdateSharedVpcConfigurationCommandOutput}
 * @see {@link UpdateSharedVpcConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateSharedVpcConfigurationCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 */
export class UpdateSharedVpcConfigurationCommand extends $Command<
  UpdateSharedVpcConfigurationCommandInput,
  UpdateSharedVpcConfigurationCommandOutput,
  FSxClientResolvedConfig
> {
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
  constructor(readonly input: UpdateSharedVpcConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSharedVpcConfigurationCommandInput, UpdateSharedVpcConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSharedVpcConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "UpdateSharedVpcConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSSimbaAPIService_v20180301",
        operation: "UpdateSharedVpcConfiguration",
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
  private serialize(input: UpdateSharedVpcConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSharedVpcConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSharedVpcConfigurationCommandOutput> {
    return de_UpdateSharedVpcConfigurationCommand(output, context);
  }
}
