// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { CreateExperienceRequest, CreateExperienceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateExperienceCommand,
  serializeAws_json1_1CreateExperienceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateExperienceCommand}.
 */
export interface CreateExperienceCommandInput extends CreateExperienceRequest {}
/**
 * @public
 *
 * The output of {@link CreateExperienceCommand}.
 */
export interface CreateExperienceCommandOutput extends CreateExperienceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Amazon Kendra experience such as a search application. For more information
 *             on creating a search application experience, including using the Python and Java SDKs,
 *             see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a
 *                 search experience with no code</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, CreateExperienceCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, CreateExperienceCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // CreateExperienceRequest
 *   Name: "STRING_VALUE", // required
 *   IndexId: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE",
 *   Configuration: { // ExperienceConfiguration
 *     ContentSourceConfiguration: { // ContentSourceConfiguration
 *       DataSourceIds: [ // DataSourceIdList
 *         "STRING_VALUE",
 *       ],
 *       FaqIds: [ // FaqIdsList
 *         "STRING_VALUE",
 *       ],
 *       DirectPutContent: true || false,
 *     },
 *     UserIdentityConfiguration: { // UserIdentityConfiguration
 *       IdentityAttributeName: "STRING_VALUE",
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateExperienceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateExperienceCommandInput - {@link CreateExperienceCommandInput}
 * @returns {@link CreateExperienceCommandOutput}
 * @see {@link CreateExperienceCommandInput} for command's `input` shape.
 * @see {@link CreateExperienceCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred with the request. Please fix any inconsistences with your
 *             resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/aws.amazon.com/contact-us"> Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Kendra service. Please see
 *             Quotas[hyperlink Kendra Quotas pg] for more information, or contact <a href="http://aws.amazon.com/aws.amazon.com/contact-us"> Support</a> to inquire about
 *             an increase of limits.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 *
 */
export class CreateExperienceCommand extends $Command<
  CreateExperienceCommandInput,
  CreateExperienceCommandOutput,
  KendraClientResolvedConfig
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
  constructor(readonly input: CreateExperienceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateExperienceCommandInput, CreateExperienceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateExperienceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "CreateExperienceCommand";
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
  private serialize(input: CreateExperienceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateExperienceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateExperienceCommandOutput> {
    return deserializeAws_json1_1CreateExperienceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
