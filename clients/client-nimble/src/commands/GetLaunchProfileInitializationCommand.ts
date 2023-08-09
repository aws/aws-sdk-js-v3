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
  GetLaunchProfileInitializationRequest,
  GetLaunchProfileInitializationResponse,
  GetLaunchProfileInitializationResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  de_GetLaunchProfileInitializationCommand,
  se_GetLaunchProfileInitializationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLaunchProfileInitializationCommand}.
 */
export interface GetLaunchProfileInitializationCommandInput extends GetLaunchProfileInitializationRequest {}
/**
 * @public
 *
 * The output of {@link GetLaunchProfileInitializationCommand}.
 */
export interface GetLaunchProfileInitializationCommandOutput
  extends GetLaunchProfileInitializationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Get a launch profile initialization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetLaunchProfileInitializationCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetLaunchProfileInitializationCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // GetLaunchProfileInitializationRequest
 *   launchProfileId: "STRING_VALUE", // required
 *   launchProfileProtocolVersions: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   launchPurpose: "STRING_VALUE", // required
 *   platform: "STRING_VALUE", // required
 *   studioId: "STRING_VALUE", // required
 * };
 * const command = new GetLaunchProfileInitializationCommand(input);
 * const response = await client.send(command);
 * // { // GetLaunchProfileInitializationResponse
 * //   launchProfileInitialization: { // LaunchProfileInitialization
 * //     activeDirectory: { // LaunchProfileInitializationActiveDirectory
 * //       computerAttributes: [ // ActiveDirectoryComputerAttributeList
 * //         { // ActiveDirectoryComputerAttribute
 * //           name: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       directoryId: "STRING_VALUE",
 * //       directoryName: "STRING_VALUE",
 * //       dnsIpAddresses: [ // ActiveDirectoryDnsIpAddressList
 * //         "STRING_VALUE",
 * //       ],
 * //       organizationalUnitDistinguishedName: "STRING_VALUE",
 * //       studioComponentId: "STRING_VALUE",
 * //       studioComponentName: "STRING_VALUE",
 * //     },
 * //     ec2SecurityGroupIds: [ // LaunchProfileSecurityGroupIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     launchProfileId: "STRING_VALUE",
 * //     launchProfileProtocolVersion: "STRING_VALUE",
 * //     launchPurpose: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     platform: "LINUX" || "WINDOWS",
 * //     systemInitializationScripts: [ // LaunchProfileInitializationScriptList
 * //       { // LaunchProfileInitializationScript
 * //         script: "STRING_VALUE",
 * //         studioComponentId: "STRING_VALUE",
 * //         studioComponentName: "STRING_VALUE",
 * //         secureInitializationRoleArn: "STRING_VALUE",
 * //         runtimeRoleArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     userInitializationScripts: [
 * //       {
 * //         script: "STRING_VALUE",
 * //         studioComponentId: "STRING_VALUE",
 * //         studioComponentName: "STRING_VALUE",
 * //         secureInitializationRoleArn: "STRING_VALUE",
 * //         runtimeRoleArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLaunchProfileInitializationCommandInput - {@link GetLaunchProfileInitializationCommandInput}
 * @returns {@link GetLaunchProfileInitializationCommandOutput}
 * @see {@link GetLaunchProfileInitializationCommandInput} for command's `input` shape.
 * @see {@link GetLaunchProfileInitializationCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another operation is in progress. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current quota does not allow you to perform the request action. You can request
 *             increases for some quotas, and other quotas cannot be increased.</p>
 *         <p>Please use Amazon Web Services Service Quotas to request an increase. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link NimbleServiceException}
 * <p>Base exception class for all service exceptions from Nimble service.</p>
 *
 */
export class GetLaunchProfileInitializationCommand extends $Command<
  GetLaunchProfileInitializationCommandInput,
  GetLaunchProfileInitializationCommandOutput,
  NimbleClientResolvedConfig
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
  constructor(readonly input: GetLaunchProfileInitializationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLaunchProfileInitializationCommandInput, GetLaunchProfileInitializationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLaunchProfileInitializationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "GetLaunchProfileInitializationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetLaunchProfileInitializationResponseFilterSensitiveLog,
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
    input: GetLaunchProfileInitializationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetLaunchProfileInitializationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLaunchProfileInitializationCommandOutput> {
    return de_GetLaunchProfileInitializationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
