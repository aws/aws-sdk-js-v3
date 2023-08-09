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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListSkillsStoreSkillsByCategoryRequest, ListSkillsStoreSkillsByCategoryResponse } from "../models/models_0";
import {
  de_ListSkillsStoreSkillsByCategoryCommand,
  se_ListSkillsStoreSkillsByCategoryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSkillsStoreSkillsByCategoryCommand}.
 */
export interface ListSkillsStoreSkillsByCategoryCommandInput extends ListSkillsStoreSkillsByCategoryRequest {}
/**
 * @public
 *
 * The output of {@link ListSkillsStoreSkillsByCategoryCommand}.
 */
export interface ListSkillsStoreSkillsByCategoryCommandOutput
  extends ListSkillsStoreSkillsByCategoryResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Lists all skills in the Alexa skill store by category.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListSkillsStoreSkillsByCategoryCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListSkillsStoreSkillsByCategoryCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // ListSkillsStoreSkillsByCategoryRequest
 *   CategoryId: Number("long"), // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSkillsStoreSkillsByCategoryCommand(input);
 * const response = await client.send(command);
 * // { // ListSkillsStoreSkillsByCategoryResponse
 * //   SkillsStoreSkills: [ // SkillsStoreSkillList
 * //     { // SkillsStoreSkill
 * //       SkillId: "STRING_VALUE",
 * //       SkillName: "STRING_VALUE",
 * //       ShortDescription: "STRING_VALUE",
 * //       IconUrl: "STRING_VALUE",
 * //       SampleUtterances: [ // SampleUtterances
 * //         "STRING_VALUE",
 * //       ],
 * //       SkillDetails: { // SkillDetails
 * //         ProductDescription: "STRING_VALUE",
 * //         InvocationPhrase: "STRING_VALUE",
 * //         ReleaseDate: "STRING_VALUE",
 * //         EndUserLicenseAgreement: "STRING_VALUE",
 * //         GenericKeywords: [ // GenericKeywords
 * //           "STRING_VALUE",
 * //         ],
 * //         BulletPoints: [ // BulletPoints
 * //           "STRING_VALUE",
 * //         ],
 * //         NewInThisVersionBulletPoints: [ // NewInThisVersionBulletPoints
 * //           "STRING_VALUE",
 * //         ],
 * //         SkillTypes: [ // SkillTypes
 * //           "STRING_VALUE",
 * //         ],
 * //         Reviews: { // Reviews
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         DeveloperInfo: { // DeveloperInfo
 * //           DeveloperName: "STRING_VALUE",
 * //           PrivacyPolicy: "STRING_VALUE",
 * //           Email: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //         },
 * //       },
 * //       SupportsLinking: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSkillsStoreSkillsByCategoryCommandInput - {@link ListSkillsStoreSkillsByCategoryCommandInput}
 * @returns {@link ListSkillsStoreSkillsByCategoryCommandOutput}
 * @see {@link ListSkillsStoreSkillsByCategoryCommandInput} for command's `input` shape.
 * @see {@link ListSkillsStoreSkillsByCategoryCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class ListSkillsStoreSkillsByCategoryCommand extends $Command<
  ListSkillsStoreSkillsByCategoryCommandInput,
  ListSkillsStoreSkillsByCategoryCommandOutput,
  AlexaForBusinessClientResolvedConfig
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
  constructor(readonly input: ListSkillsStoreSkillsByCategoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSkillsStoreSkillsByCategoryCommandInput, ListSkillsStoreSkillsByCategoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSkillsStoreSkillsByCategoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ListSkillsStoreSkillsByCategoryCommand";
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
    input: ListSkillsStoreSkillsByCategoryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListSkillsStoreSkillsByCategoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSkillsStoreSkillsByCategoryCommandOutput> {
    return de_ListSkillsStoreSkillsByCategoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
