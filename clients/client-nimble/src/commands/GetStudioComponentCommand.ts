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

import {
  GetStudioComponentRequest,
  GetStudioComponentResponse,
  GetStudioComponentResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_GetStudioComponentCommand, se_GetStudioComponentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetStudioComponentCommand}.
 */
export interface GetStudioComponentCommandInput extends GetStudioComponentRequest {}
/**
 * @public
 *
 * The output of {@link GetStudioComponentCommand}.
 */
export interface GetStudioComponentCommandOutput extends GetStudioComponentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a studio component resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStudioComponentCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStudioComponentCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // GetStudioComponentRequest
 *   studioComponentId: "STRING_VALUE", // required
 *   studioId: "STRING_VALUE", // required
 * };
 * const command = new GetStudioComponentCommand(input);
 * const response = await client.send(command);
 * // { // GetStudioComponentResponse
 * //   studioComponent: { // StudioComponent
 * //     arn: "STRING_VALUE",
 * //     configuration: { // StudioComponentConfiguration
 * //       activeDirectoryConfiguration: { // ActiveDirectoryConfiguration
 * //         computerAttributes: [ // ActiveDirectoryComputerAttributeList
 * //           { // ActiveDirectoryComputerAttribute
 * //             name: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         directoryId: "STRING_VALUE",
 * //         organizationalUnitDistinguishedName: "STRING_VALUE",
 * //       },
 * //       computeFarmConfiguration: { // ComputeFarmConfiguration
 * //         activeDirectoryUser: "STRING_VALUE",
 * //         endpoint: "STRING_VALUE",
 * //       },
 * //       licenseServiceConfiguration: { // LicenseServiceConfiguration
 * //         endpoint: "STRING_VALUE",
 * //       },
 * //       sharedFileSystemConfiguration: { // SharedFileSystemConfiguration
 * //         endpoint: "STRING_VALUE",
 * //         fileSystemId: "STRING_VALUE",
 * //         linuxMountPoint: "STRING_VALUE",
 * //         shareName: "STRING_VALUE",
 * //         windowsMountDrive: "STRING_VALUE",
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     createdBy: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     ec2SecurityGroupIds: [ // StudioComponentSecurityGroupIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     initializationScripts: [ // StudioComponentInitializationScriptList
 * //       { // StudioComponentInitializationScript
 * //         launchProfileProtocolVersion: "STRING_VALUE",
 * //         platform: "LINUX" || "WINDOWS",
 * //         runContext: "SYSTEM_INITIALIZATION" || "USER_INITIALIZATION",
 * //         script: "STRING_VALUE",
 * //       },
 * //     ],
 * //     name: "STRING_VALUE",
 * //     scriptParameters: [ // StudioComponentScriptParameterKeyValueList
 * //       { // ScriptParameterKeyValue
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     state: "CREATE_IN_PROGRESS" || "READY" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DELETE_FAILED" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //     statusCode: "ACTIVE_DIRECTORY_ALREADY_EXISTS" || "STUDIO_COMPONENT_CREATED" || "STUDIO_COMPONENT_UPDATED" || "STUDIO_COMPONENT_DELETED" || "ENCRYPTION_KEY_ACCESS_DENIED" || "ENCRYPTION_KEY_NOT_FOUND" || "STUDIO_COMPONENT_CREATE_IN_PROGRESS" || "STUDIO_COMPONENT_UPDATE_IN_PROGRESS" || "STUDIO_COMPONENT_DELETE_IN_PROGRESS" || "INTERNAL_ERROR",
 * //     statusMessage: "STRING_VALUE",
 * //     studioComponentId: "STRING_VALUE",
 * //     subtype: "AWS_MANAGED_MICROSOFT_AD" || "AMAZON_FSX_FOR_WINDOWS" || "AMAZON_FSX_FOR_LUSTRE" || "CUSTOM",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     type: "ACTIVE_DIRECTORY" || "SHARED_FILE_SYSTEM" || "COMPUTE_FARM" || "LICENSE_SERVICE" || "CUSTOM",
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     updatedBy: "STRING_VALUE",
 * //     secureInitializationRoleArn: "STRING_VALUE",
 * //     runtimeRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStudioComponentCommandInput - {@link GetStudioComponentCommandInput}
 * @returns {@link GetStudioComponentCommandOutput}
 * @see {@link GetStudioComponentCommandInput} for command's `input` shape.
 * @see {@link GetStudioComponentCommandOutput} for command's `response` shape.
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
export class GetStudioComponentCommand extends $Command<
  GetStudioComponentCommandInput,
  GetStudioComponentCommandOutput,
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
  constructor(readonly input: GetStudioComponentCommandInput) {
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
  ): Handler<GetStudioComponentCommandInput, GetStudioComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetStudioComponentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "GetStudioComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetStudioComponentResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "nimble",
        operation: "GetStudioComponent",
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
  private serialize(input: GetStudioComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetStudioComponentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetStudioComponentCommandOutput> {
    return de_GetStudioComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
