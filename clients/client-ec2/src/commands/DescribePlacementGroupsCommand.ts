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
import { DescribePlacementGroupsRequest, DescribePlacementGroupsResult } from "../models/models_4";
import { de_DescribePlacementGroupsCommand, se_DescribePlacementGroupsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePlacementGroupsCommand}.
 */
export interface DescribePlacementGroupsCommandInput extends DescribePlacementGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribePlacementGroupsCommand}.
 */
export interface DescribePlacementGroupsCommandOutput extends DescribePlacementGroupsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified placement groups or all of your placement groups. For more
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePlacementGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePlacementGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribePlacementGroupsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   GroupNames: [ // PlacementGroupStringList
 *     "STRING_VALUE",
 *   ],
 *   GroupIds: [ // PlacementGroupIdStringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribePlacementGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribePlacementGroupsResult
 * //   PlacementGroups: [ // PlacementGroupList
 * //     { // PlacementGroup
 * //       GroupName: "STRING_VALUE",
 * //       State: "pending" || "available" || "deleting" || "deleted",
 * //       Strategy: "cluster" || "spread" || "partition",
 * //       PartitionCount: Number("int"),
 * //       GroupId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       GroupArn: "STRING_VALUE",
 * //       SpreadLevel: "host" || "rack",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribePlacementGroupsCommandInput - {@link DescribePlacementGroupsCommandInput}
 * @returns {@link DescribePlacementGroupsCommandOutput}
 * @see {@link DescribePlacementGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribePlacementGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribePlacementGroupsCommand extends $Command<
  DescribePlacementGroupsCommandInput,
  DescribePlacementGroupsCommandOutput,
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
  constructor(readonly input: DescribePlacementGroupsCommandInput) {
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
  ): Handler<DescribePlacementGroupsCommandInput, DescribePlacementGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePlacementGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribePlacementGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribePlacementGroups",
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
  private serialize(input: DescribePlacementGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePlacementGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePlacementGroupsCommandOutput> {
    return de_DescribePlacementGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
