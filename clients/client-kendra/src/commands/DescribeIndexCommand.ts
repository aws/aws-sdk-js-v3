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
  DescribeIndexRequest,
  DescribeIndexResponse,
  DescribeIndexResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeIndexCommand, se_DescribeIndexCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeIndexCommand}.
 */
export interface DescribeIndexCommandInput extends DescribeIndexRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIndexCommand}.
 */
export interface DescribeIndexCommandOutput extends DescribeIndexResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about an existing Amazon Kendra index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribeIndexCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribeIndexCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // DescribeIndexRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DescribeIndexCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIndexResponse
 * //   Name: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Edition: "DEVELOPER_EDITION" || "ENTERPRISE_EDITION",
 * //   RoleArn: "STRING_VALUE",
 * //   ServerSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //     KmsKeyId: "STRING_VALUE",
 * //   },
 * //   Status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED" || "UPDATING" || "SYSTEM_UPDATING",
 * //   Description: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   DocumentMetadataConfigurations: [ // DocumentMetadataConfigurationList
 * //     { // DocumentMetadataConfiguration
 * //       Name: "STRING_VALUE", // required
 * //       Type: "STRING_VALUE" || "STRING_LIST_VALUE" || "LONG_VALUE" || "DATE_VALUE", // required
 * //       Relevance: { // Relevance
 * //         Freshness: true || false,
 * //         Importance: Number("int"),
 * //         Duration: "STRING_VALUE",
 * //         RankOrder: "ASCENDING" || "DESCENDING",
 * //         ValueImportanceMap: { // ValueImportanceMap
 * //           "<keys>": Number("int"),
 * //         },
 * //       },
 * //       Search: { // Search
 * //         Facetable: true || false,
 * //         Searchable: true || false,
 * //         Displayable: true || false,
 * //         Sortable: true || false,
 * //       },
 * //     },
 * //   ],
 * //   IndexStatistics: { // IndexStatistics
 * //     FaqStatistics: { // FaqStatistics
 * //       IndexedQuestionAnswersCount: Number("int"), // required
 * //     },
 * //     TextDocumentStatistics: { // TextDocumentStatistics
 * //       IndexedTextDocumentsCount: Number("int"), // required
 * //       IndexedTextBytes: Number("long"), // required
 * //     },
 * //   },
 * //   ErrorMessage: "STRING_VALUE",
 * //   CapacityUnits: { // CapacityUnitsConfiguration
 * //     StorageCapacityUnits: Number("int"), // required
 * //     QueryCapacityUnits: Number("int"), // required
 * //   },
 * //   UserTokenConfigurations: [ // UserTokenConfigurationList
 * //     { // UserTokenConfiguration
 * //       JwtTokenTypeConfiguration: { // JwtTokenTypeConfiguration
 * //         KeyLocation: "URL" || "SECRET_MANAGER", // required
 * //         URL: "STRING_VALUE",
 * //         SecretManagerArn: "STRING_VALUE",
 * //         UserNameAttributeField: "STRING_VALUE",
 * //         GroupAttributeField: "STRING_VALUE",
 * //         Issuer: "STRING_VALUE",
 * //         ClaimRegex: "STRING_VALUE",
 * //       },
 * //       JsonTokenTypeConfiguration: { // JsonTokenTypeConfiguration
 * //         UserNameAttributeField: "STRING_VALUE", // required
 * //         GroupAttributeField: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   UserContextPolicy: "ATTRIBUTE_FILTER" || "USER_TOKEN",
 * //   UserGroupResolutionConfiguration: { // UserGroupResolutionConfiguration
 * //     UserGroupResolutionMode: "AWS_SSO" || "NONE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeIndexCommandInput - {@link DescribeIndexCommandInput}
 * @returns {@link DescribeIndexCommandOutput}
 * @see {@link DescribeIndexCommandInput} for command's `input` shape.
 * @see {@link DescribeIndexCommandOutput} for command's `response` shape.
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
export class DescribeIndexCommand extends $Command<
  DescribeIndexCommandInput,
  DescribeIndexCommandOutput,
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
  constructor(readonly input: DescribeIndexCommandInput) {
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
  ): Handler<DescribeIndexCommandInput, DescribeIndexCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeIndexCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "DescribeIndexCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeIndexResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSKendraFrontendService",
        operation: "DescribeIndex",
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
  private serialize(input: DescribeIndexCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeIndexCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeIndexCommandOutput> {
    return de_DescribeIndexCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
