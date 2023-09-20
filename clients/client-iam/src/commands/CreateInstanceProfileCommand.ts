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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateInstanceProfileRequest, CreateInstanceProfileResponse } from "../models/models_0";
import { de_CreateInstanceProfileCommand, se_CreateInstanceProfileCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateInstanceProfileCommand}.
 */
export interface CreateInstanceProfileCommandInput extends CreateInstanceProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateInstanceProfileCommand}.
 */
export interface CreateInstanceProfileCommandOutput extends CreateInstanceProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p> Creates a new instance profile. For information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html">Using
 *                 roles for applications on Amazon EC2</a> in the
 *                 <i>IAM User Guide</i>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#ec2-instance-profile">Instance profiles</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p> For information about the number of instance profiles you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM object
 *                 quotas</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // CreateInstanceProfileRequest
 *   InstanceProfileName: "STRING_VALUE", // required
 *   Path: "STRING_VALUE",
 *   Tags: [ // tagListType
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateInstanceProfileResponse
 * //   InstanceProfile: { // InstanceProfile
 * //     Path: "STRING_VALUE", // required
 * //     InstanceProfileName: "STRING_VALUE", // required
 * //     InstanceProfileId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     CreateDate: new Date("TIMESTAMP"), // required
 * //     Roles: [ // roleListType // required
 * //       { // Role
 * //         Path: "STRING_VALUE", // required
 * //         RoleName: "STRING_VALUE", // required
 * //         RoleId: "STRING_VALUE", // required
 * //         Arn: "STRING_VALUE", // required
 * //         CreateDate: new Date("TIMESTAMP"), // required
 * //         AssumeRolePolicyDocument: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         MaxSessionDuration: Number("int"),
 * //         PermissionsBoundary: { // AttachedPermissionsBoundary
 * //           PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //           PermissionsBoundaryArn: "STRING_VALUE",
 * //         },
 * //         Tags: [ // tagListType
 * //           { // Tag
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         RoleLastUsed: { // RoleLastUsed
 * //           LastUsedDate: new Date("TIMESTAMP"),
 * //           Region: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     Tags: [
 * //       {
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateInstanceProfileCommandInput - {@link CreateInstanceProfileCommandInput}
 * @returns {@link CreateInstanceProfileCommandOutput}
 * @see {@link CreateInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To create an instance profile
 * ```javascript
 * // The following command creates an instance profile named Webserver that is ready to have a role attached and then be associated with an EC2 instance.
 * const input = {
 *   "InstanceProfileName": "Webserver"
 * };
 * const command = new CreateInstanceProfileCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InstanceProfile": {
 *     "Arn": "arn:aws:iam::123456789012:instance-profile/Webserver",
 *     "CreateDate": "2015-03-09T20:33:19.626Z",
 *     "InstanceProfileId": "AIPAJMBYC7DLSPEXAMPLE",
 *     "InstanceProfileName": "Webserver",
 *     "Path": "/",
 *     "Roles": []
 *   }
 * }
 * *\/
 * // example id: 5d84e6ae-5921-4e39-8454-10232cd9ff9a
 * ```
 *
 */
export class CreateInstanceProfileCommand extends $Command<
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
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
  constructor(readonly input: CreateInstanceProfileCommandInput) {
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
  ): Handler<CreateInstanceProfileCommandInput, CreateInstanceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateInstanceProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreateInstanceProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "CreateInstanceProfile",
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
  private serialize(input: CreateInstanceProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateInstanceProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInstanceProfileCommandOutput> {
    return de_CreateInstanceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
