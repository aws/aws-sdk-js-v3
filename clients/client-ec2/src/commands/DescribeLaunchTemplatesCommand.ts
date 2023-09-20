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
import { DescribeLaunchTemplatesRequest, DescribeLaunchTemplatesResult } from "../models/models_4";
import { de_DescribeLaunchTemplatesCommand, se_DescribeLaunchTemplatesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLaunchTemplatesCommand}.
 */
export interface DescribeLaunchTemplatesCommandInput extends DescribeLaunchTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLaunchTemplatesCommand}.
 */
export interface DescribeLaunchTemplatesCommandOutput extends DescribeLaunchTemplatesResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more launch templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLaunchTemplatesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLaunchTemplatesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeLaunchTemplatesRequest
 *   DryRun: true || false,
 *   LaunchTemplateIds: [ // LaunchTemplateIdStringList
 *     "STRING_VALUE",
 *   ],
 *   LaunchTemplateNames: [ // LaunchTemplateNameStringList
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
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeLaunchTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLaunchTemplatesResult
 * //   LaunchTemplates: [ // LaunchTemplateSet
 * //     { // LaunchTemplate
 * //       LaunchTemplateId: "STRING_VALUE",
 * //       LaunchTemplateName: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       CreatedBy: "STRING_VALUE",
 * //       DefaultVersionNumber: Number("long"),
 * //       LatestVersionNumber: Number("long"),
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
 * @param DescribeLaunchTemplatesCommandInput - {@link DescribeLaunchTemplatesCommandInput}
 * @returns {@link DescribeLaunchTemplatesCommandOutput}
 * @see {@link DescribeLaunchTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeLaunchTemplatesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe a launch template
 * ```javascript
 * // This example describes the specified launch template.
 * const input = {
 *   "LaunchTemplateIds": [
 *     "lt-01238c059e3466abc"
 *   ]
 * };
 * const command = new DescribeLaunchTemplatesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LaunchTemplates": [
 *     {
 *       "CreateTime": "2018-01-16T04:32:57.000Z",
 *       "CreatedBy": "arn:aws:iam::123456789012:root",
 *       "DefaultVersionNumber": 1,
 *       "LatestVersionNumber": 1,
 *       "LaunchTemplateId": "lt-01238c059e3466abc",
 *       "LaunchTemplateName": "my-template"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-a-launch-template-1529344182862
 * ```
 *
 */
export class DescribeLaunchTemplatesCommand extends $Command<
  DescribeLaunchTemplatesCommandInput,
  DescribeLaunchTemplatesCommandOutput,
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
  constructor(readonly input: DescribeLaunchTemplatesCommandInput) {
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
  ): Handler<DescribeLaunchTemplatesCommandInput, DescribeLaunchTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLaunchTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeLaunchTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeLaunchTemplates",
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
  private serialize(input: DescribeLaunchTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLaunchTemplatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLaunchTemplatesCommandOutput> {
    return de_DescribeLaunchTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
