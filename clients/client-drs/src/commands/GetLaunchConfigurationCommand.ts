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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { GetLaunchConfigurationRequest, LaunchConfiguration } from "../models/models_0";
import { de_GetLaunchConfigurationCommand, se_GetLaunchConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLaunchConfigurationCommand}.
 */
export interface GetLaunchConfigurationCommandInput extends GetLaunchConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetLaunchConfigurationCommand}.
 */
export interface GetLaunchConfigurationCommandOutput extends LaunchConfiguration, __MetadataBearer {}

/**
 * @public
 * <p>Gets a LaunchConfiguration, filtered by Source Server IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, GetLaunchConfigurationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, GetLaunchConfigurationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // GetLaunchConfigurationRequest
 *   sourceServerID: "STRING_VALUE", // required
 * };
 * const command = new GetLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // LaunchConfiguration
 * //   sourceServerID: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   ec2LaunchTemplateID: "STRING_VALUE",
 * //   launchDisposition: "STRING_VALUE",
 * //   targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 * //   copyPrivateIp: true || false,
 * //   copyTags: true || false,
 * //   licensing: { // Licensing
 * //     osByol: true || false,
 * //   },
 * //   postLaunchEnabled: true || false,
 * //   launchIntoInstanceProperties: { // LaunchIntoInstanceProperties
 * //     launchIntoEC2InstanceID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLaunchConfigurationCommandInput - {@link GetLaunchConfigurationCommandInput}
 * @returns {@link GetLaunchConfigurationCommandOutput}
 * @see {@link GetLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 */
export class GetLaunchConfigurationCommand extends $Command<
  GetLaunchConfigurationCommandInput,
  GetLaunchConfigurationCommandOutput,
  DrsClientResolvedConfig
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
  constructor(readonly input: GetLaunchConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLaunchConfigurationCommandInput, GetLaunchConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLaunchConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "GetLaunchConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticDisasterRecoveryService",
        operation: "GetLaunchConfiguration",
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
  private serialize(input: GetLaunchConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLaunchConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLaunchConfigurationCommandOutput> {
    return de_GetLaunchConfigurationCommand(output, context);
  }
}
