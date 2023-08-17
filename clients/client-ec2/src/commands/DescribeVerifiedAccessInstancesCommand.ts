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
import { DescribeVerifiedAccessInstancesRequest, DescribeVerifiedAccessInstancesResult } from "../models/models_5";
import {
  de_DescribeVerifiedAccessInstancesCommand,
  se_DescribeVerifiedAccessInstancesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVerifiedAccessInstancesCommand}.
 */
export interface DescribeVerifiedAccessInstancesCommandInput extends DescribeVerifiedAccessInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVerifiedAccessInstancesCommand}.
 */
export interface DescribeVerifiedAccessInstancesCommandOutput
  extends DescribeVerifiedAccessInstancesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Amazon Web Services Verified Access instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVerifiedAccessInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVerifiedAccessInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVerifiedAccessInstancesRequest
 *   VerifiedAccessInstanceIds: [ // VerifiedAccessInstanceIdList
 *     "STRING_VALUE",
 *   ],
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
 * const command = new DescribeVerifiedAccessInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVerifiedAccessInstancesResult
 * //   VerifiedAccessInstances: [ // VerifiedAccessInstanceList
 * //     { // VerifiedAccessInstance
 * //       VerifiedAccessInstanceId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       VerifiedAccessTrustProviders: [ // VerifiedAccessTrustProviderCondensedList
 * //         { // VerifiedAccessTrustProviderCondensed
 * //           VerifiedAccessTrustProviderId: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           TrustProviderType: "user" || "device",
 * //           UserTrustProviderType: "iam-identity-center" || "oidc",
 * //           DeviceTrustProviderType: "jamf" || "crowdstrike",
 * //         },
 * //       ],
 * //       CreationTime: "STRING_VALUE",
 * //       LastUpdatedTime: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVerifiedAccessInstancesCommandInput - {@link DescribeVerifiedAccessInstancesCommandInput}
 * @returns {@link DescribeVerifiedAccessInstancesCommandOutput}
 * @see {@link DescribeVerifiedAccessInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeVerifiedAccessInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeVerifiedAccessInstancesCommand extends $Command<
  DescribeVerifiedAccessInstancesCommandInput,
  DescribeVerifiedAccessInstancesCommandOutput,
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
  constructor(readonly input: DescribeVerifiedAccessInstancesCommandInput) {
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
  ): Handler<DescribeVerifiedAccessInstancesCommandInput, DescribeVerifiedAccessInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVerifiedAccessInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVerifiedAccessInstancesCommand";
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
    input: DescribeVerifiedAccessInstancesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeVerifiedAccessInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVerifiedAccessInstancesCommandOutput> {
    return de_DescribeVerifiedAccessInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
