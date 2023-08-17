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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateServiceLinkedRoleRequest, CreateServiceLinkedRoleResponse } from "../models/models_0";
import { de_CreateServiceLinkedRoleCommand, se_CreateServiceLinkedRoleCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateServiceLinkedRoleCommand}.
 */
export interface CreateServiceLinkedRoleCommandInput extends CreateServiceLinkedRoleRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceLinkedRoleCommand}.
 */
export interface CreateServiceLinkedRoleCommandOutput extends CreateServiceLinkedRoleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an IAM role that is linked to a specific Amazon Web Services service. The service controls
 *             the attached policies and when the role can be deleted. This helps ensure that the
 *             service is not broken by an unexpectedly changed or deleted role, which could put your
 *             Amazon Web Services resources into an unknown state. Allowing the service to control the role helps
 *             improve service stability and proper cleanup when a service and its role are no longer
 *             needed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using service-linked
 *                 roles</a> in the <i>IAM User Guide</i>. </p>
 *          <p>To attach a policy to this service-linked role, you must make the request using the
 *             Amazon Web Services service that depends on this role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateServiceLinkedRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateServiceLinkedRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // CreateServiceLinkedRoleRequest
 *   AWSServiceName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   CustomSuffix: "STRING_VALUE",
 * };
 * const command = new CreateServiceLinkedRoleCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceLinkedRoleResponse
 * //   Role: { // Role
 * //     Path: "STRING_VALUE", // required
 * //     RoleName: "STRING_VALUE", // required
 * //     RoleId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     CreateDate: new Date("TIMESTAMP"), // required
 * //     AssumeRolePolicyDocument: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     MaxSessionDuration: Number("int"),
 * //     PermissionsBoundary: { // AttachedPermissionsBoundary
 * //       PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //       PermissionsBoundaryArn: "STRING_VALUE",
 * //     },
 * //     Tags: [ // tagListType
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     RoleLastUsed: { // RoleLastUsed
 * //       LastUsedDate: new Date("TIMESTAMP"),
 * //       Region: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateServiceLinkedRoleCommandInput - {@link CreateServiceLinkedRoleCommandInput}
 * @returns {@link CreateServiceLinkedRoleCommandOutput}
 * @see {@link CreateServiceLinkedRoleCommandInput} for command's `input` shape.
 * @see {@link CreateServiceLinkedRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 */
export class CreateServiceLinkedRoleCommand extends $Command<
  CreateServiceLinkedRoleCommandInput,
  CreateServiceLinkedRoleCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: CreateServiceLinkedRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateServiceLinkedRoleCommandInput, CreateServiceLinkedRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateServiceLinkedRoleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreateServiceLinkedRoleCommand";
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
  private serialize(input: CreateServiceLinkedRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateServiceLinkedRoleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateServiceLinkedRoleCommandOutput> {
    return de_CreateServiceLinkedRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
