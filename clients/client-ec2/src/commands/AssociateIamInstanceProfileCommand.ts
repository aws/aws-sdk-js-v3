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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateIamInstanceProfileRequest, AssociateIamInstanceProfileResult } from "../models/models_0";
import { de_AssociateIamInstanceProfileCommand, se_AssociateIamInstanceProfileCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateIamInstanceProfileCommand}.
 */
export interface AssociateIamInstanceProfileCommandInput extends AssociateIamInstanceProfileRequest {}
/**
 * @public
 *
 * The output of {@link AssociateIamInstanceProfileCommand}.
 */
export interface AssociateIamInstanceProfileCommandOutput extends AssociateIamInstanceProfileResult, __MetadataBearer {}

/**
 * @public
 * <p>Associates an IAM instance profile with a running or stopped instance. You cannot
 *             associate more than one IAM instance profile with an instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateIamInstanceProfileCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateIamInstanceProfileCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssociateIamInstanceProfileRequest
 *   IamInstanceProfile: { // IamInstanceProfileSpecification
 *     Arn: "STRING_VALUE",
 *     Name: "STRING_VALUE",
 *   },
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new AssociateIamInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // { // AssociateIamInstanceProfileResult
 * //   IamInstanceProfileAssociation: { // IamInstanceProfileAssociation
 * //     AssociationId: "STRING_VALUE",
 * //     InstanceId: "STRING_VALUE",
 * //     IamInstanceProfile: { // IamInstanceProfile
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //     },
 * //     State: "associating" || "associated" || "disassociating" || "disassociated",
 * //     Timestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateIamInstanceProfileCommandInput - {@link AssociateIamInstanceProfileCommandInput}
 * @returns {@link AssociateIamInstanceProfileCommandOutput}
 * @see {@link AssociateIamInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link AssociateIamInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To associate an IAM instance profile with an instance
 * ```javascript
 * // This example associates an IAM instance profile named admin-role with the specified instance.
 * const input = {
 *   "IamInstanceProfile": {
 *     "Name": "admin-role"
 *   },
 *   "InstanceId": "i-123456789abcde123"
 * };
 * const command = new AssociateIamInstanceProfileCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "IamInstanceProfileAssociation": {
 *     "AssociationId": "iip-assoc-0e7736511a163c209",
 *     "IamInstanceProfile": {
 *       "Arn": "arn:aws:iam::123456789012:instance-profile/admin-role",
 *       "Id": "AIPAJBLK7RKJKWDXVHIEC"
 *     },
 *     "InstanceId": "i-123456789abcde123",
 *     "State": "associating"
 *   }
 * }
 * *\/
 * // example id: to-associate-an-iam-instance-profile-with-an-instance-1528928429850
 * ```
 *
 */
export class AssociateIamInstanceProfileCommand extends $Command<
  AssociateIamInstanceProfileCommandInput,
  AssociateIamInstanceProfileCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: AssociateIamInstanceProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateIamInstanceProfileCommandInput, AssociateIamInstanceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateIamInstanceProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateIamInstanceProfileCommand";
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
  private serialize(input: AssociateIamInstanceProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateIamInstanceProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateIamInstanceProfileCommandOutput> {
    return de_AssociateIamInstanceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
