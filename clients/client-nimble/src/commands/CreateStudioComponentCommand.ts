// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateStudioComponentRequest,
  CreateStudioComponentRequestFilterSensitiveLog,
  CreateStudioComponentResponse,
  CreateStudioComponentResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  deserializeAws_restJson1CreateStudioComponentCommand,
  serializeAws_restJson1CreateStudioComponentCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateStudioComponentCommand}.
 */
export interface CreateStudioComponentCommandInput extends CreateStudioComponentRequest {}
/**
 * @public
 *
 * The output of {@link CreateStudioComponentCommand}.
 */
export interface CreateStudioComponentCommandOutput extends CreateStudioComponentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a studio component resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateStudioComponentCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateStudioComponentCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // CreateStudioComponentRequest
 *   clientToken: "STRING_VALUE",
 *   configuration: { // StudioComponentConfiguration
 *     activeDirectoryConfiguration: { // ActiveDirectoryConfiguration
 *       computerAttributes: [ // ActiveDirectoryComputerAttributeList
 *         { // ActiveDirectoryComputerAttribute
 *           name: "STRING_VALUE",
 *           value: "STRING_VALUE",
 *         },
 *       ],
 *       directoryId: "STRING_VALUE",
 *       organizationalUnitDistinguishedName: "STRING_VALUE",
 *     },
 *     computeFarmConfiguration: { // ComputeFarmConfiguration
 *       activeDirectoryUser: "STRING_VALUE",
 *       endpoint: "STRING_VALUE",
 *     },
 *     licenseServiceConfiguration: { // LicenseServiceConfiguration
 *       endpoint: "STRING_VALUE",
 *     },
 *     sharedFileSystemConfiguration: { // SharedFileSystemConfiguration
 *       endpoint: "STRING_VALUE",
 *       fileSystemId: "STRING_VALUE",
 *       linuxMountPoint: "STRING_VALUE",
 *       shareName: "STRING_VALUE",
 *       windowsMountDrive: "STRING_VALUE",
 *     },
 *   },
 *   description: "STRING_VALUE",
 *   ec2SecurityGroupIds: [ // StudioComponentSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   initializationScripts: [ // StudioComponentInitializationScriptList
 *     { // StudioComponentInitializationScript
 *       launchProfileProtocolVersion: "STRING_VALUE",
 *       platform: "LINUX" || "WINDOWS",
 *       runContext: "SYSTEM_INITIALIZATION" || "USER_INITIALIZATION",
 *       script: "STRING_VALUE",
 *     },
 *   ],
 *   name: "STRING_VALUE", // required
 *   scriptParameters: [ // StudioComponentScriptParameterKeyValueList
 *     { // ScriptParameterKeyValue
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   studioId: "STRING_VALUE", // required
 *   subtype: "AWS_MANAGED_MICROSOFT_AD" || "AMAZON_FSX_FOR_WINDOWS" || "AMAZON_FSX_FOR_LUSTRE" || "CUSTOM",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   type: "ACTIVE_DIRECTORY" || "SHARED_FILE_SYSTEM" || "COMPUTE_FARM" || "LICENSE_SERVICE" || "CUSTOM", // required
 *   secureInitializationRoleArn: "STRING_VALUE",
 *   runtimeRoleArn: "STRING_VALUE",
 * };
 * const command = new CreateStudioComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateStudioComponentCommandInput - {@link CreateStudioComponentCommandInput}
 * @returns {@link CreateStudioComponentCommandOutput}
 * @see {@link CreateStudioComponentCommandInput} for command's `input` shape.
 * @see {@link CreateStudioComponentCommandOutput} for command's `response` shape.
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
 *
 */
export class CreateStudioComponentCommand extends $Command<
  CreateStudioComponentCommandInput,
  CreateStudioComponentCommandOutput,
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
  constructor(readonly input: CreateStudioComponentCommandInput) {
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
  ): Handler<CreateStudioComponentCommandInput, CreateStudioComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateStudioComponentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "CreateStudioComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStudioComponentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateStudioComponentResponseFilterSensitiveLog,
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
  private serialize(input: CreateStudioComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateStudioComponentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStudioComponentCommandOutput> {
    return deserializeAws_restJson1CreateStudioComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
