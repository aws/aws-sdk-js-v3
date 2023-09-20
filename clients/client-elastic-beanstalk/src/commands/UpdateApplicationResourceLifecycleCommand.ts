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
import {
  ApplicationResourceLifecycleDescriptionMessage,
  UpdateApplicationResourceLifecycleMessage,
} from "../models/models_0";
import {
  de_UpdateApplicationResourceLifecycleCommand,
  se_UpdateApplicationResourceLifecycleCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationResourceLifecycleCommand}.
 */
export interface UpdateApplicationResourceLifecycleCommandInput extends UpdateApplicationResourceLifecycleMessage {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationResourceLifecycleCommand}.
 */
export interface UpdateApplicationResourceLifecycleCommandOutput
  extends ApplicationResourceLifecycleDescriptionMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies lifecycle settings for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateApplicationResourceLifecycleCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateApplicationResourceLifecycleCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // UpdateApplicationResourceLifecycleMessage
 *   ApplicationName: "STRING_VALUE", // required
 *   ResourceLifecycleConfig: { // ApplicationResourceLifecycleConfig
 *     ServiceRole: "STRING_VALUE",
 *     VersionLifecycleConfig: { // ApplicationVersionLifecycleConfig
 *       MaxCountRule: { // MaxCountRule
 *         Enabled: true || false, // required
 *         MaxCount: Number("int"),
 *         DeleteSourceFromS3: true || false,
 *       },
 *       MaxAgeRule: { // MaxAgeRule
 *         Enabled: true || false, // required
 *         MaxAgeInDays: Number("int"),
 *         DeleteSourceFromS3: true || false,
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateApplicationResourceLifecycleCommand(input);
 * const response = await client.send(command);
 * // { // ApplicationResourceLifecycleDescriptionMessage
 * //   ApplicationName: "STRING_VALUE",
 * //   ResourceLifecycleConfig: { // ApplicationResourceLifecycleConfig
 * //     ServiceRole: "STRING_VALUE",
 * //     VersionLifecycleConfig: { // ApplicationVersionLifecycleConfig
 * //       MaxCountRule: { // MaxCountRule
 * //         Enabled: true || false, // required
 * //         MaxCount: Number("int"),
 * //         DeleteSourceFromS3: true || false,
 * //       },
 * //       MaxAgeRule: { // MaxAgeRule
 * //         Enabled: true || false, // required
 * //         MaxAgeInDays: Number("int"),
 * //         DeleteSourceFromS3: true || false,
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateApplicationResourceLifecycleCommandInput - {@link UpdateApplicationResourceLifecycleCommandInput}
 * @returns {@link UpdateApplicationResourceLifecycleCommandOutput}
 * @see {@link UpdateApplicationResourceLifecycleCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationResourceLifecycleCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 */
export class UpdateApplicationResourceLifecycleCommand extends $Command<
  UpdateApplicationResourceLifecycleCommandInput,
  UpdateApplicationResourceLifecycleCommandOutput,
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
  constructor(readonly input: UpdateApplicationResourceLifecycleCommandInput) {
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
  ): Handler<UpdateApplicationResourceLifecycleCommandInput, UpdateApplicationResourceLifecycleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateApplicationResourceLifecycleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "UpdateApplicationResourceLifecycleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSElasticBeanstalkService",
        operation: "UpdateApplicationResourceLifecycle",
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
    input: UpdateApplicationResourceLifecycleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateApplicationResourceLifecycleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateApplicationResourceLifecycleCommandOutput> {
    return de_UpdateApplicationResourceLifecycleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
