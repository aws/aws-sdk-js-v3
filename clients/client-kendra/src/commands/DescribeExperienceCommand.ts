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

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DescribeExperienceRequest, DescribeExperienceResponse } from "../models/models_0";
import { de_DescribeExperienceCommand, se_DescribeExperienceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeExperienceCommand}.
 */
export interface DescribeExperienceCommandInput extends DescribeExperienceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeExperienceCommand}.
 */
export interface DescribeExperienceCommandOutput extends DescribeExperienceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about your Amazon Kendra experience such as a search application.
 *             For more information on creating a search application experience,
 *             see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building
 *                 a search experience with no code</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribeExperienceCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribeExperienceCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // DescribeExperienceRequest
 *   Id: "STRING_VALUE", // required
 *   IndexId: "STRING_VALUE", // required
 * };
 * const command = new DescribeExperienceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExperienceResponse
 * //   Id: "STRING_VALUE",
 * //   IndexId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Endpoints: [ // ExperienceEndpoints
 * //     { // ExperienceEndpoint
 * //       EndpointType: "HOME",
 * //       Endpoint: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Configuration: { // ExperienceConfiguration
 * //     ContentSourceConfiguration: { // ContentSourceConfiguration
 * //       DataSourceIds: [ // DataSourceIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       FaqIds: [ // FaqIdsList
 * //         "STRING_VALUE",
 * //       ],
 * //       DirectPutContent: true || false,
 * //     },
 * //     UserIdentityConfiguration: { // UserIdentityConfiguration
 * //       IdentityAttributeName: "STRING_VALUE",
 * //     },
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   Status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //   RoleArn: "STRING_VALUE",
 * //   ErrorMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeExperienceCommandInput - {@link DescribeExperienceCommandInput}
 * @returns {@link DescribeExperienceCommandOutput}
 * @see {@link DescribeExperienceCommandInput} for command's `input` shape.
 * @see {@link DescribeExperienceCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 */
export class DescribeExperienceCommand extends $Command<
  DescribeExperienceCommandInput,
  DescribeExperienceCommandOutput,
  KendraClientResolvedConfig
> {
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
  constructor(readonly input: DescribeExperienceCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeExperienceCommandInput, DescribeExperienceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeExperienceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "DescribeExperienceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSKendraFrontendService",
        operation: "DescribeExperience",
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
  private serialize(input: DescribeExperienceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeExperienceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeExperienceCommandOutput> {
    return de_DescribeExperienceCommand(output, context);
  }
}
