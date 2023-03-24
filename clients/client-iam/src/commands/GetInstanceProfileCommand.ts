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
import { GetInstanceProfileRequest, GetInstanceProfileResponse } from "../models/models_0";
import {
  deserializeAws_queryGetInstanceProfileCommand,
  serializeAws_queryGetInstanceProfileCommand,
} from "../protocols/Aws_query";

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
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About
 *                 instance profiles</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = {
 *   InstanceProfileName: "STRING_VALUE", // required
 * };
 * const command = new GetInstanceProfileCommand(input);
 * const response = await client.send(command);
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
    return serializeAws_queryGetInstanceProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstanceProfileCommandOutput> {
    return deserializeAws_queryGetInstanceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
