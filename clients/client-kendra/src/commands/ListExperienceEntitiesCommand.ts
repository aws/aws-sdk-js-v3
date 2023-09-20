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
import {
  ListExperienceEntitiesRequest,
  ListExperienceEntitiesResponse,
  ListExperienceEntitiesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListExperienceEntitiesCommand, se_ListExperienceEntitiesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListExperienceEntitiesCommand}.
 */
export interface ListExperienceEntitiesCommandInput extends ListExperienceEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListExperienceEntitiesCommand}.
 */
export interface ListExperienceEntitiesCommandOutput extends ListExperienceEntitiesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists users or groups in your IAM Identity Center identity source that are
 *             granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience
 *             such as a search application. For more information on creating a search
 *             application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building
 *                 a search experience with no code</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListExperienceEntitiesCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListExperienceEntitiesCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // ListExperienceEntitiesRequest
 *   Id: "STRING_VALUE", // required
 *   IndexId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListExperienceEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListExperienceEntitiesResponse
 * //   SummaryItems: [ // ExperienceEntitiesSummaryList
 * //     { // ExperienceEntitiesSummary
 * //       EntityId: "STRING_VALUE",
 * //       EntityType: "USER" || "GROUP",
 * //       DisplayData: { // EntityDisplayData
 * //         UserName: "STRING_VALUE",
 * //         GroupName: "STRING_VALUE",
 * //         IdentifiedUserName: "STRING_VALUE",
 * //         FirstName: "STRING_VALUE",
 * //         LastName: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExperienceEntitiesCommandInput - {@link ListExperienceEntitiesCommandInput}
 * @returns {@link ListExperienceEntitiesCommandOutput}
 * @see {@link ListExperienceEntitiesCommandInput} for command's `input` shape.
 * @see {@link ListExperienceEntitiesCommandOutput} for command's `response` shape.
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
export class ListExperienceEntitiesCommand extends $Command<
  ListExperienceEntitiesCommandInput,
  ListExperienceEntitiesCommandOutput,
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
  constructor(readonly input: ListExperienceEntitiesCommandInput) {
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
  ): Handler<ListExperienceEntitiesCommandInput, ListExperienceEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListExperienceEntitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "ListExperienceEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListExperienceEntitiesResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSKendraFrontendService",
        operation: "ListExperienceEntities",
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
  private serialize(input: ListExperienceEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListExperienceEntitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListExperienceEntitiesCommandOutput> {
    return de_ListExperienceEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
