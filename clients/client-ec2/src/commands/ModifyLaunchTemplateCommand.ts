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
import { ModifyLaunchTemplateRequest, ModifyLaunchTemplateResult } from "../models/models_6";
import { de_ModifyLaunchTemplateCommand, se_ModifyLaunchTemplateCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyLaunchTemplateCommand}.
 */
export interface ModifyLaunchTemplateCommandInput extends ModifyLaunchTemplateRequest {}
/**
 * @public
 *
 * The output of {@link ModifyLaunchTemplateCommand}.
 */
export interface ModifyLaunchTemplateCommandOutput extends ModifyLaunchTemplateResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies a launch template. You can specify which version of the launch template to
 *             set as the default version. When launching an instance, the default version applies when
 *             a launch template version is not specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyLaunchTemplateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyLaunchTemplateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyLaunchTemplateRequest
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 *   LaunchTemplateId: "STRING_VALUE",
 *   LaunchTemplateName: "STRING_VALUE",
 *   DefaultVersion: "STRING_VALUE",
 * };
 * const command = new ModifyLaunchTemplateCommand(input);
 * const response = await client.send(command);
 * // { // ModifyLaunchTemplateResult
 * //   LaunchTemplate: { // LaunchTemplate
 * //     LaunchTemplateId: "STRING_VALUE",
 * //     LaunchTemplateName: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     CreatedBy: "STRING_VALUE",
 * //     DefaultVersionNumber: Number("long"),
 * //     LatestVersionNumber: Number("long"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyLaunchTemplateCommandInput - {@link ModifyLaunchTemplateCommandInput}
 * @returns {@link ModifyLaunchTemplateCommandOutput}
 * @see {@link ModifyLaunchTemplateCommandInput} for command's `input` shape.
 * @see {@link ModifyLaunchTemplateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To change the default version of a launch template
 * ```javascript
 * // This example specifies version 2 as the default version of the specified launch template.
 * const input = {
 *   "DefaultVersion": "2",
 *   "LaunchTemplateId": "lt-0abcd290751193123"
 * };
 * const command = new ModifyLaunchTemplateCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LaunchTemplate": {
 *     "CreateTime": "2017-12-01T13:35:46.000Z",
 *     "CreatedBy": "arn:aws:iam::123456789012:root",
 *     "DefaultVersionNumber": 2,
 *     "LatestVersionNumber": 2,
 *     "LaunchTemplateId": "lt-0abcd290751193123",
 *     "LaunchTemplateName": "WebServers"
 *   }
 * }
 * *\/
 * // example id: to-change-the-default-version-of-a-launch-template-1529358440364
 * ```
 *
 */
export class ModifyLaunchTemplateCommand extends $Command<
  ModifyLaunchTemplateCommandInput,
  ModifyLaunchTemplateCommandOutput,
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
  constructor(readonly input: ModifyLaunchTemplateCommandInput) {
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
  ): Handler<ModifyLaunchTemplateCommandInput, ModifyLaunchTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyLaunchTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyLaunchTemplateCommand";
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
  private serialize(input: ModifyLaunchTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyLaunchTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyLaunchTemplateCommandOutput> {
    return de_ModifyLaunchTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
