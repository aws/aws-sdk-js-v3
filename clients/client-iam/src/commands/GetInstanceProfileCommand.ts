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
import { GetInstanceProfileRequest, GetInstanceProfileResponse } from "../models/models_0";
import { de_GetInstanceProfileCommand, se_GetInstanceProfileCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInstanceProfileCommand}.
 */
export interface GetInstanceProfileCommandInput extends GetInstanceProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetInstanceProfileCommand}.
 */
export interface GetInstanceProfileCommandOutput extends GetInstanceProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p> Retrieves information about the specified instance profile, including the instance
 *             profile's path, GUID, ARN, and role. For more information about instance profiles, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html">Using
 *                 instance profiles</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetInstanceProfileRequest
 *   InstanceProfileName: "STRING_VALUE", // required
 * };
 * const command = new GetInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetInstanceProfileResponse
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
 * @param GetInstanceProfileCommandInput - {@link GetInstanceProfileCommandInput}
 * @returns {@link GetInstanceProfileCommandOutput}
 * @see {@link GetInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link GetInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
 * @example To get information about an instance profile
 * ```javascript
 * // The following command gets information about the instance profile named ExampleInstanceProfile.
 * const input = {
 *   "InstanceProfileName": "ExampleInstanceProfile"
 * };
 * const command = new GetInstanceProfileCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InstanceProfile": {
 *     "Arn": "arn:aws:iam::336924118301:instance-profile/ExampleInstanceProfile",
 *     "CreateDate": "2013-06-12T23:52:02Z",
 *     "InstanceProfileId": "AID2MAB8DPLSRHEXAMPLE",
 *     "InstanceProfileName": "ExampleInstanceProfile",
 *     "Path": "/",
 *     "Roles": [
 *       {
 *         "Arn": "arn:aws:iam::336924118301:role/Test-Role",
 *         "AssumeRolePolicyDocument": "<URL-encoded-JSON>",
 *         "CreateDate": "2013-01-09T06:33:26Z",
 *         "Path": "/",
 *         "RoleId": "AIDGPMS9RO4H3FEXAMPLE",
 *         "RoleName": "Test-Role"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: 463b9ba5-18cc-4608-9ccb-5a7c6b6e5fe7
 * ```
 *
 */
export class GetInstanceProfileCommand extends $Command<
  GetInstanceProfileCommandInput,
  GetInstanceProfileCommandOutput,
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
  constructor(readonly input: GetInstanceProfileCommandInput) {
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
  ): Handler<GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInstanceProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetInstanceProfileCommand";
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
  private serialize(input: GetInstanceProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInstanceProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstanceProfileCommandOutput> {
    return de_GetInstanceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
