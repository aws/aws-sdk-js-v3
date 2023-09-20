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
  DescribeIamInstanceProfileAssociationsRequest,
  DescribeIamInstanceProfileAssociationsResult,
} from "../models/models_3";
import {
  de_DescribeIamInstanceProfileAssociationsCommand,
  se_DescribeIamInstanceProfileAssociationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeIamInstanceProfileAssociationsCommand}.
 */
export interface DescribeIamInstanceProfileAssociationsCommandInput
  extends DescribeIamInstanceProfileAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIamInstanceProfileAssociationsCommand}.
 */
export interface DescribeIamInstanceProfileAssociationsCommandOutput
  extends DescribeIamInstanceProfileAssociationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes your IAM instance profile associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIamInstanceProfileAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIamInstanceProfileAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeIamInstanceProfileAssociationsRequest
 *   AssociationIds: [ // AssociationIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeIamInstanceProfileAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIamInstanceProfileAssociationsResult
 * //   IamInstanceProfileAssociations: [ // IamInstanceProfileAssociationSet
 * //     { // IamInstanceProfileAssociation
 * //       AssociationId: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       IamInstanceProfile: { // IamInstanceProfile
 * //         Arn: "STRING_VALUE",
 * //         Id: "STRING_VALUE",
 * //       },
 * //       State: "associating" || "associated" || "disassociating" || "disassociated",
 * //       Timestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeIamInstanceProfileAssociationsCommandInput - {@link DescribeIamInstanceProfileAssociationsCommandInput}
 * @returns {@link DescribeIamInstanceProfileAssociationsCommandOutput}
 * @see {@link DescribeIamInstanceProfileAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeIamInstanceProfileAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe an IAM instance profile association
 * ```javascript
 * // This example describes the specified IAM instance profile association.
 * const input = {
 *   "AssociationIds": [
 *     "iip-assoc-0db249b1f25fa24b8"
 *   ]
 * };
 * const command = new DescribeIamInstanceProfileAssociationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "IamInstanceProfileAssociations": [
 *     {
 *       "AssociationId": "iip-assoc-0db249b1f25fa24b8",
 *       "IamInstanceProfile": {
 *         "Arn": "arn:aws:iam::123456789012:instance-profile/admin-role",
 *         "Id": "AIPAJVQN4F5WVLGCJDRGM"
 *       },
 *       "InstanceId": "i-09eb09efa73ec1dee",
 *       "State": "associated"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-an-iam-instance-profile-association-1529025123918
 * ```
 *
 */
export class DescribeIamInstanceProfileAssociationsCommand extends $Command<
  DescribeIamInstanceProfileAssociationsCommandInput,
  DescribeIamInstanceProfileAssociationsCommandOutput,
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
  constructor(readonly input: DescribeIamInstanceProfileAssociationsCommandInput) {
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
  ): Handler<DescribeIamInstanceProfileAssociationsCommandInput, DescribeIamInstanceProfileAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeIamInstanceProfileAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeIamInstanceProfileAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeIamInstanceProfileAssociations",
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
    input: DescribeIamInstanceProfileAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeIamInstanceProfileAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeIamInstanceProfileAssociationsCommandOutput> {
    return de_DescribeIamInstanceProfileAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
