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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateIamInstanceProfileRequest, DisassociateIamInstanceProfileResult } from "../models/models_5";
import {
  de_DisassociateIamInstanceProfileCommand,
  se_DisassociateIamInstanceProfileCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateIamInstanceProfileCommand}.
 */
export interface DisassociateIamInstanceProfileCommandInput extends DisassociateIamInstanceProfileRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateIamInstanceProfileCommand}.
 */
export interface DisassociateIamInstanceProfileCommandOutput
  extends DisassociateIamInstanceProfileResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates an IAM instance profile from a running or stopped instance.</p>
 *          <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association
 *             ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateIamInstanceProfileCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateIamInstanceProfileCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisassociateIamInstanceProfileRequest
 *   AssociationId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateIamInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateIamInstanceProfileResult
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
 * @param DisassociateIamInstanceProfileCommandInput - {@link DisassociateIamInstanceProfileCommandInput}
 * @returns {@link DisassociateIamInstanceProfileCommandOutput}
 * @see {@link DisassociateIamInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link DisassociateIamInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To disassociate an IAM instance profile
 * ```javascript
 * // This example disassociates the specified IAM instance profile from an instance.
 * const input = {
 *   "AssociationId": "iip-assoc-05020b59952902f5f"
 * };
 * const command = new DisassociateIamInstanceProfileCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "IamInstanceProfileAssociation": {
 *     "AssociationId": "iip-assoc-05020b59952902f5f",
 *     "IamInstanceProfile": {
 *       "Arn": "arn:aws:iam::123456789012:instance-profile/admin-role",
 *       "Id": "AIPAI5IVIHMFFYY2DKV5Y"
 *     },
 *     "InstanceId": "i-123456789abcde123",
 *     "State": "disassociating"
 *   }
 * }
 * *\/
 * // example id: to-disassociate-an-iam-instance-profile-1529355364478
 * ```
 *
 */
export class DisassociateIamInstanceProfileCommand extends $Command<
  DisassociateIamInstanceProfileCommandInput,
  DisassociateIamInstanceProfileCommandOutput,
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
  constructor(readonly input: DisassociateIamInstanceProfileCommandInput) {
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
  ): Handler<DisassociateIamInstanceProfileCommandInput, DisassociateIamInstanceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateIamInstanceProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateIamInstanceProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DisassociateIamInstanceProfile",
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
  private serialize(
    input: DisassociateIamInstanceProfileCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisassociateIamInstanceProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateIamInstanceProfileCommandOutput> {
    return de_DisassociateIamInstanceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
