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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { CreateSecurityProfileRequest, CreateSecurityProfileResponse } from "../models/models_0";
import { de_CreateSecurityProfileCommand, se_CreateSecurityProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSecurityProfileCommand}.
 */
export interface CreateSecurityProfileCommandInput extends CreateSecurityProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateSecurityProfileCommand}.
 */
export interface CreateSecurityProfileCommandOutput extends CreateSecurityProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a security profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateSecurityProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateSecurityProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // CreateSecurityProfileRequest
 *   SecurityProfileName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Permissions: [ // PermissionsList
 *     "STRING_VALUE",
 *   ],
 *   InstanceId: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AllowedAccessControlTags: { // AllowedAccessControlTags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TagRestrictedResources: [ // TagRestrictedResourceList
 *     "STRING_VALUE",
 *   ],
 *   Applications: [ // Applications
 *     { // Application
 *       Namespace: "STRING_VALUE",
 *       ApplicationPermissions: [ // ApplicationPermissions
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateSecurityProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateSecurityProfileResponse
 * //   SecurityProfileId: "STRING_VALUE",
 * //   SecurityProfileArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSecurityProfileCommandInput - {@link CreateSecurityProfileCommandInput}
 * @returns {@link CreateSecurityProfileCommandOutput}
 * @see {@link CreateSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class CreateSecurityProfileCommand extends $Command<
  CreateSecurityProfileCommandInput,
  CreateSecurityProfileCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: CreateSecurityProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSecurityProfileCommandInput, CreateSecurityProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSecurityProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "CreateSecurityProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "CreateSecurityProfile",
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
  private serialize(input: CreateSecurityProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSecurityProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSecurityProfileCommandOutput> {
    return de_CreateSecurityProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
