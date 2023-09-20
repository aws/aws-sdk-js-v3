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
import {
  ReplaceIamInstanceProfileAssociationRequest,
  ReplaceIamInstanceProfileAssociationResult,
} from "../models/models_6";
import {
  de_ReplaceIamInstanceProfileAssociationCommand,
  se_ReplaceIamInstanceProfileAssociationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReplaceIamInstanceProfileAssociationCommand}.
 */
export interface ReplaceIamInstanceProfileAssociationCommandInput extends ReplaceIamInstanceProfileAssociationRequest {}
/**
 * @public
 *
 * The output of {@link ReplaceIamInstanceProfileAssociationCommand}.
 */
export interface ReplaceIamInstanceProfileAssociationCommandOutput
  extends ReplaceIamInstanceProfileAssociationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Replaces an IAM instance profile for the specified running instance. You can use
 *             this action to change the IAM instance profile that's associated with an instance
 *             without having to disassociate the existing IAM instance profile first.</p>
 *          <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association
 *             ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceIamInstanceProfileAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceIamInstanceProfileAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ReplaceIamInstanceProfileAssociationRequest
 *   IamInstanceProfile: { // IamInstanceProfileSpecification
 *     Arn: "STRING_VALUE",
 *     Name: "STRING_VALUE",
 *   },
 *   AssociationId: "STRING_VALUE", // required
 * };
 * const command = new ReplaceIamInstanceProfileAssociationCommand(input);
 * const response = await client.send(command);
 * // { // ReplaceIamInstanceProfileAssociationResult
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
 * @param ReplaceIamInstanceProfileAssociationCommandInput - {@link ReplaceIamInstanceProfileAssociationCommandInput}
 * @returns {@link ReplaceIamInstanceProfileAssociationCommandOutput}
 * @see {@link ReplaceIamInstanceProfileAssociationCommandInput} for command's `input` shape.
 * @see {@link ReplaceIamInstanceProfileAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ReplaceIamInstanceProfileAssociationCommand extends $Command<
  ReplaceIamInstanceProfileAssociationCommandInput,
  ReplaceIamInstanceProfileAssociationCommandOutput,
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
  constructor(readonly input: ReplaceIamInstanceProfileAssociationCommandInput) {
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
  ): Handler<ReplaceIamInstanceProfileAssociationCommandInput, ReplaceIamInstanceProfileAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReplaceIamInstanceProfileAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReplaceIamInstanceProfileAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ReplaceIamInstanceProfileAssociation",
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
    input: ReplaceIamInstanceProfileAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ReplaceIamInstanceProfileAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ReplaceIamInstanceProfileAssociationCommandOutput> {
    return de_ReplaceIamInstanceProfileAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
