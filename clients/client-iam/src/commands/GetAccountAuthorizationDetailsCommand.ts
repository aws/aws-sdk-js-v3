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
import { GetAccountAuthorizationDetailsRequest, GetAccountAuthorizationDetailsResponse } from "../models/models_0";
import {
  de_GetAccountAuthorizationDetailsCommand,
  se_GetAccountAuthorizationDetailsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAccountAuthorizationDetailsCommand}.
 */
export interface GetAccountAuthorizationDetailsCommandInput extends GetAccountAuthorizationDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountAuthorizationDetailsCommand}.
 */
export interface GetAccountAuthorizationDetailsCommandOutput
  extends GetAccountAuthorizationDetailsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about all IAM users, groups, roles, and policies in your Amazon Web Services
 *             account, including their relationships to one another. Use this operation to obtain a
 *             snapshot of the configuration of IAM permissions (users, groups, roles, and policies)
 *             in your account.</p>
 *          <note>
 *             <p>Policies returned by this operation are URL-encoded compliant
 *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
 *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
 *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
 *          </note>
 *          <p>You can optionally filter the results using the <code>Filter</code> parameter. You can
 *             paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetAccountAuthorizationDetailsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetAccountAuthorizationDetailsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetAccountAuthorizationDetailsRequest
 *   Filter: [ // entityListType
 *     "User" || "Role" || "Group" || "LocalManagedPolicy" || "AWSManagedPolicy",
 *   ],
 *   MaxItems: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new GetAccountAuthorizationDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountAuthorizationDetailsResponse
 * //   UserDetailList: [ // userDetailListType
 * //     { // UserDetail
 * //       Path: "STRING_VALUE",
 * //       UserName: "STRING_VALUE",
 * //       UserId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       UserPolicyList: [ // policyDetailListType
 * //         { // PolicyDetail
 * //           PolicyName: "STRING_VALUE",
 * //           PolicyDocument: "STRING_VALUE",
 * //         },
 * //       ],
 * //       GroupList: [ // groupNameListType
 * //         "STRING_VALUE",
 * //       ],
 * //       AttachedManagedPolicies: [ // attachedPoliciesListType
 * //         { // AttachedPolicy
 * //           PolicyName: "STRING_VALUE",
 * //           PolicyArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PermissionsBoundary: { // AttachedPermissionsBoundary
 * //         PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //         PermissionsBoundaryArn: "STRING_VALUE",
 * //       },
 * //       Tags: [ // tagListType
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   GroupDetailList: [ // groupDetailListType
 * //     { // GroupDetail
 * //       Path: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       GroupId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       GroupPolicyList: [
 * //         {
 * //           PolicyName: "STRING_VALUE",
 * //           PolicyDocument: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AttachedManagedPolicies: [
 * //         {
 * //           PolicyName: "STRING_VALUE",
 * //           PolicyArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   RoleDetailList: [ // roleDetailListType
 * //     { // RoleDetail
 * //       Path: "STRING_VALUE",
 * //       RoleName: "STRING_VALUE",
 * //       RoleId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       AssumeRolePolicyDocument: "STRING_VALUE",
 * //       InstanceProfileList: [ // instanceProfileListType
 * //         { // InstanceProfile
 * //           Path: "STRING_VALUE", // required
 * //           InstanceProfileName: "STRING_VALUE", // required
 * //           InstanceProfileId: "STRING_VALUE", // required
 * //           Arn: "STRING_VALUE", // required
 * //           CreateDate: new Date("TIMESTAMP"), // required
 * //           Roles: [ // roleListType // required
 * //             { // Role
 * //               Path: "STRING_VALUE", // required
 * //               RoleName: "STRING_VALUE", // required
 * //               RoleId: "STRING_VALUE", // required
 * //               Arn: "STRING_VALUE", // required
 * //               CreateDate: new Date("TIMESTAMP"), // required
 * //               AssumeRolePolicyDocument: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               MaxSessionDuration: Number("int"),
 * //               PermissionsBoundary: {
 * //                 PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //                 PermissionsBoundaryArn: "STRING_VALUE",
 * //               },
 * //               Tags: [
 * //                 {
 * //                   Key: "STRING_VALUE", // required
 * //                   Value: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //               RoleLastUsed: { // RoleLastUsed
 * //                 LastUsedDate: new Date("TIMESTAMP"),
 * //                 Region: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           Tags: "<tagListType>",
 * //         },
 * //       ],
 * //       RolePolicyList: [
 * //         {
 * //           PolicyName: "STRING_VALUE",
 * //           PolicyDocument: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AttachedManagedPolicies: [
 * //         {
 * //           PolicyName: "STRING_VALUE",
 * //           PolicyArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PermissionsBoundary: {
 * //         PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //         PermissionsBoundaryArn: "STRING_VALUE",
 * //       },
 * //       Tags: "<tagListType>",
 * //       RoleLastUsed: {
 * //         LastUsedDate: new Date("TIMESTAMP"),
 * //         Region: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Policies: [ // ManagedPolicyDetailListType
 * //     { // ManagedPolicyDetail
 * //       PolicyName: "STRING_VALUE",
 * //       PolicyId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Path: "STRING_VALUE",
 * //       DefaultVersionId: "STRING_VALUE",
 * //       AttachmentCount: Number("int"),
 * //       PermissionsBoundaryUsageCount: Number("int"),
 * //       IsAttachable: true || false,
 * //       Description: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       UpdateDate: new Date("TIMESTAMP"),
 * //       PolicyVersionList: [ // policyDocumentVersionListType
 * //         { // PolicyVersion
 * //           Document: "STRING_VALUE",
 * //           VersionId: "STRING_VALUE",
 * //           IsDefaultVersion: true || false,
 * //           CreateDate: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccountAuthorizationDetailsCommandInput - {@link GetAccountAuthorizationDetailsCommandInput}
 * @returns {@link GetAccountAuthorizationDetailsCommandOutput}
 * @see {@link GetAccountAuthorizationDetailsCommandInput} for command's `input` shape.
 * @see {@link GetAccountAuthorizationDetailsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 */
export class GetAccountAuthorizationDetailsCommand extends $Command<
  GetAccountAuthorizationDetailsCommandInput,
  GetAccountAuthorizationDetailsCommandOutput,
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
  constructor(readonly input: GetAccountAuthorizationDetailsCommandInput) {
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
  ): Handler<GetAccountAuthorizationDetailsCommandInput, GetAccountAuthorizationDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAccountAuthorizationDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetAccountAuthorizationDetailsCommand";
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
  private serialize(
    input: GetAccountAuthorizationDetailsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetAccountAuthorizationDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAccountAuthorizationDetailsCommandOutput> {
    return de_GetAccountAuthorizationDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
