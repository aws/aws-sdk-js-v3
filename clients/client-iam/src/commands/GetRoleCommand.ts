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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetRoleRequest, GetRoleResponse } from "../models/models_0";
import { deserializeAws_queryGetRoleCommand, serializeAws_queryGetRoleCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link GetRoleCommand}.
 */
export interface GetRoleCommandInput extends GetRoleRequest {}
/**
 * @public
 *
 * The output of {@link GetRoleCommand}.
 */
export interface GetRoleCommandOutput extends GetRoleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about the specified role, including the role's path, GUID, ARN,
 *             and the role's trust policy that grants permission to assume the role. For more
 *             information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p>
 *          <note>
 *             <p>Policies returned by this operation are URL-encoded compliant
 *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
 *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
 *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = {
 *   RoleName: "STRING_VALUE", // required
 * };
 * const command = new GetRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetRoleCommandInput - {@link GetRoleCommandInput}
 * @returns {@link GetRoleCommandOutput}
 * @see {@link GetRoleCommandInput} for command's `input` shape.
 * @see {@link GetRoleCommandOutput} for command's `response` shape.
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
 *
 * @example To get information about an IAM role
 * ```javascript
 * // The following command gets information about the role named Test-Role.
 * const input = {
 *   "RoleName": "Test-Role"
 * };
 * const command = new GetRoleCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Role": {
 *     "Arn": "arn:aws:iam::123456789012:role/Test-Role",
 *     "AssumeRolePolicyDocument": "<URL-encoded-JSON>",
 *     "CreateDate": "2013-04-18T05:01:58Z",
 *     "MaxSessionDuration": 3600,
 *     "Path": "/",
 *     "RoleId": "AROADBQP57FF2AEXAMPLE",
 *     "RoleLastUsed": {
 *       "LastUsedDate": "2019-11-18T05:01:58Z",
 *       "Region": "us-east-1"
 *     },
 *     "RoleName": "Test-Role"
 *   }
 * }
 * *\/
 * // example id: 5b7d03a6-340c-472d-aa77-56425950d8b0
 * ```
 *
 */
export class GetRoleCommand extends $Command<GetRoleCommandInput, GetRoleCommandOutput, IAMClientResolvedConfig> {
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
  constructor(readonly input: GetRoleCommandInput) {
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
  ): Handler<GetRoleCommandInput, GetRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetRoleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetRoleCommand";
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
  private serialize(input: GetRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetRoleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRoleCommandOutput> {
    return deserializeAws_queryGetRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
