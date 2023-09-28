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
import { DescribeVerifiedAccessGroupsRequest, DescribeVerifiedAccessGroupsResult } from "../models/models_5";
import { de_DescribeVerifiedAccessGroupsCommand, se_DescribeVerifiedAccessGroupsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVerifiedAccessGroupsCommand}.
 */
export interface DescribeVerifiedAccessGroupsCommandInput extends DescribeVerifiedAccessGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVerifiedAccessGroupsCommand}.
 */
export interface DescribeVerifiedAccessGroupsCommandOutput
  extends DescribeVerifiedAccessGroupsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Verified Access groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVerifiedAccessGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVerifiedAccessGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVerifiedAccessGroupsRequest
 *   VerifiedAccessGroupIds: [ // VerifiedAccessGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   VerifiedAccessInstanceId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeVerifiedAccessGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVerifiedAccessGroupsResult
 * //   VerifiedAccessGroups: [ // VerifiedAccessGroupList
 * //     { // VerifiedAccessGroup
 * //       VerifiedAccessGroupId: "STRING_VALUE",
 * //       VerifiedAccessInstanceId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       VerifiedAccessGroupArn: "STRING_VALUE",
 * //       CreationTime: "STRING_VALUE",
 * //       LastUpdatedTime: "STRING_VALUE",
 * //       DeletionTime: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SseSpecification: { // VerifiedAccessSseSpecificationResponse
 * //         CustomerManagedKeyEnabled: true || false,
 * //         KmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVerifiedAccessGroupsCommandInput - {@link DescribeVerifiedAccessGroupsCommandInput}
 * @returns {@link DescribeVerifiedAccessGroupsCommandOutput}
 * @see {@link DescribeVerifiedAccessGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeVerifiedAccessGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeVerifiedAccessGroupsCommand extends $Command<
  DescribeVerifiedAccessGroupsCommandInput,
  DescribeVerifiedAccessGroupsCommandOutput,
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
  constructor(readonly input: DescribeVerifiedAccessGroupsCommandInput) {
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
  ): Handler<DescribeVerifiedAccessGroupsCommandInput, DescribeVerifiedAccessGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVerifiedAccessGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVerifiedAccessGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeVerifiedAccessGroups",
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
  private serialize(input: DescribeVerifiedAccessGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeVerifiedAccessGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVerifiedAccessGroupsCommandOutput> {
    return de_DescribeVerifiedAccessGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
