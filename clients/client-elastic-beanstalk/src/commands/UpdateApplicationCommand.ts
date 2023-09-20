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

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ApplicationDescriptionMessage, UpdateApplicationMessage } from "../models/models_0";
import { de_UpdateApplicationCommand, se_UpdateApplicationCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandInput extends UpdateApplicationMessage {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandOutput extends ApplicationDescriptionMessage, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified application to have the specified properties.</p>
 *          <note>
 *             <p>If a property (for example, <code>description</code>) is not provided, the value
 *         remains unchanged. To clear these properties, specify an empty string.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateApplicationCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateApplicationCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // UpdateApplicationMessage
 *   ApplicationName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // ApplicationDescriptionMessage
 * //   Application: { // ApplicationDescription
 * //     ApplicationArn: "STRING_VALUE",
 * //     ApplicationName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     DateCreated: new Date("TIMESTAMP"),
 * //     DateUpdated: new Date("TIMESTAMP"),
 * //     Versions: [ // VersionLabelsList
 * //       "STRING_VALUE",
 * //     ],
 * //     ConfigurationTemplates: [ // ConfigurationTemplateNamesList
 * //       "STRING_VALUE",
 * //     ],
 * //     ResourceLifecycleConfig: { // ApplicationResourceLifecycleConfig
 * //       ServiceRole: "STRING_VALUE",
 * //       VersionLifecycleConfig: { // ApplicationVersionLifecycleConfig
 * //         MaxCountRule: { // MaxCountRule
 * //           Enabled: true || false, // required
 * //           MaxCount: Number("int"),
 * //           DeleteSourceFromS3: true || false,
 * //         },
 * //         MaxAgeRule: { // MaxAgeRule
 * //           Enabled: true || false, // required
 * //           MaxAgeInDays: Number("int"),
 * //           DeleteSourceFromS3: true || false,
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateApplicationCommandInput - {@link UpdateApplicationCommandInput}
 * @returns {@link UpdateApplicationCommandOutput}
 * @see {@link UpdateApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @example To change an application's description
 * ```javascript
 * // The following operation updates the description of an application named my-app:
 * const input = {
 *   "ApplicationName": "my-app",
 *   "Description": "my Elastic Beanstalk application"
 * };
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Application": {
 *     "ApplicationName": "my-app",
 *     "ConfigurationTemplates": [],
 *     "DateCreated": "2015-08-13T19:15:50.449Z",
 *     "DateUpdated": "2015-08-20T22:34:56.195Z",
 *     "Description": "my Elastic Beanstalk application",
 *     "Versions": [
 *       "2fba-stage-150819_234450",
 *       "bf07-stage-150820_214945",
 *       "93f8",
 *       "fd7c-stage-150820_000431",
 *       "22a0-stage-150819_185942"
 *     ]
 *   }
 * }
 * *\/
 * // example id: to-change-an-applications-description-1456277957075
 * ```
 *
 */
export class UpdateApplicationCommand extends $Command<
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
  ElasticBeanstalkClientResolvedConfig
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
  constructor(readonly input: UpdateApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateApplicationCommandInput, UpdateApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "UpdateApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSElasticBeanstalkService",
        operation: "UpdateApplication",
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
  private serialize(input: UpdateApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateApplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateApplicationCommandOutput> {
    return de_UpdateApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
