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
  CreateStudioRequest,
  CreateStudioRequestFilterSensitiveLog,
  CreateStudioResponse,
  CreateStudioResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_CreateStudioCommand, se_CreateStudioCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateStudioCommand}.
 */
export interface CreateStudioCommandInput extends CreateStudioRequest {}
/**
 * @public
 *
 * The output of {@link CreateStudioCommand}.
 */
export interface CreateStudioCommandOutput extends CreateStudioResponse, __MetadataBearer {}

/**
 * @public
 * <p>Create a new studio.</p>
 *         <p>When creating a studio, two IAM roles must be provided: the admin role
 *             and the user role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p>
 *         <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy
 *             attached for the portal to function properly.</p>
 *         <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed
 *             policy attached for the portal to function properly.</p>
 *         <p>You may optionally specify a KMS key in the
 *             <code>StudioEncryptionConfiguration</code>.</p>
 *         <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other
 *             data you provide are always encrypted at rest using an KMS key. By default, this key is
 *             owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key
 *             when calling <code>CreateStudio</code> to encrypt this data using a key you own and
 *             manage.</p>
 *         <p>When providing an KMS key during studio creation, Nimble Studio creates KMS
 *             grants in your account to provide your studio user and admin roles access to these KMS
 *             keys.</p>
 *         <p>If you delete this grant, the studio will no longer be accessible to your portal
 *             users.</p>
 *         <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateStudioCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateStudioCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // CreateStudioRequest
 *   adminRoleArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   displayName: "STRING_VALUE", // required
 *   studioEncryptionConfiguration: { // StudioEncryptionConfiguration
 *     keyArn: "STRING_VALUE",
 *     keyType: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KEY", // required
 *   },
 *   studioName: "STRING_VALUE", // required
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   userRoleArn: "STRING_VALUE", // required
 * };
 * const command = new CreateStudioCommand(input);
 * const response = await client.send(command);
 * // { // CreateStudioResponse
 * //   studio: { // Studio
 * //     adminRoleArn: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     displayName: "STRING_VALUE",
 * //     homeRegion: "STRING_VALUE",
 * //     ssoClientId: "STRING_VALUE",
 * //     state: "CREATE_IN_PROGRESS" || "READY" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DELETE_FAILED" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //     statusCode: "STUDIO_CREATED" || "STUDIO_DELETED" || "STUDIO_UPDATED" || "STUDIO_CREATE_IN_PROGRESS" || "STUDIO_UPDATE_IN_PROGRESS" || "STUDIO_DELETE_IN_PROGRESS" || "STUDIO_WITH_LAUNCH_PROFILES_NOT_DELETED" || "STUDIO_WITH_STUDIO_COMPONENTS_NOT_DELETED" || "STUDIO_WITH_STREAMING_IMAGES_NOT_DELETED" || "AWS_SSO_NOT_ENABLED" || "AWS_SSO_ACCESS_DENIED" || "ROLE_NOT_OWNED_BY_STUDIO_OWNER" || "ROLE_COULD_NOT_BE_ASSUMED" || "INTERNAL_ERROR" || "ENCRYPTION_KEY_NOT_FOUND" || "ENCRYPTION_KEY_ACCESS_DENIED" || "AWS_SSO_CONFIGURATION_REPAIRED" || "AWS_SSO_CONFIGURATION_REPAIR_IN_PROGRESS" || "AWS_STS_REGION_DISABLED",
 * //     statusMessage: "STRING_VALUE",
 * //     studioEncryptionConfiguration: { // StudioEncryptionConfiguration
 * //       keyArn: "STRING_VALUE",
 * //       keyType: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KEY", // required
 * //     },
 * //     studioId: "STRING_VALUE",
 * //     studioName: "STRING_VALUE",
 * //     studioUrl: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     userRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateStudioCommandInput - {@link CreateStudioCommandInput}
 * @returns {@link CreateStudioCommandOutput}
 * @see {@link CreateStudioCommandInput} for command's `input` shape.
 * @see {@link CreateStudioCommandOutput} for command's `response` shape.
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
export class CreateStudioCommand extends $Command<
  CreateStudioCommandInput,
  CreateStudioCommandOutput,
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
  constructor(readonly input: CreateStudioCommandInput) {
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
  ): Handler<CreateStudioCommandInput, CreateStudioCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateStudioCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "CreateStudioCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStudioRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateStudioResponseFilterSensitiveLog,
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
  private serialize(input: CreateStudioCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateStudioCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStudioCommandOutput> {
    return de_CreateStudioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
