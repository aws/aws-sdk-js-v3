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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListConflictingAliasesRequest, ListConflictingAliasesResult } from "../models/models_1";
import { de_ListConflictingAliasesCommand, se_ListConflictingAliasesCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListConflictingAliasesCommand}.
 */
export interface ListConflictingAliasesCommandInput extends ListConflictingAliasesRequest {}
/**
 * @public
 *
 * The output of {@link ListConflictingAliasesCommand}.
 */
export interface ListConflictingAliasesCommandOutput extends ListConflictingAliasesResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of aliases (also called CNAMEs or alternate domain names) that conflict or
 * 			overlap with the provided alias, and the associated CloudFront distributions and Amazon Web Services
 * 			accounts for each conflicting alias. In the returned list, the distribution and account
 * 			IDs are partially hidden, which allows you to identify the distributions and accounts
 * 			that you own, but helps to protect the information of ones that you don't own.</p>
 *          <p>Use this operation to find aliases that are in use in CloudFront that conflict or overlap
 * 			with the provided alias. For example, if you provide <code>www.example.com</code> as
 * 			input, the returned list can include <code>www.example.com</code> and the overlapping
 * 			wildcard alternate domain name (<code>*.example.com</code>), if they exist. If you
 * 			provide <code>*.example.com</code> as input, the returned list can include
 * 				<code>*.example.com</code> and any alternate domain names covered by that wildcard
 * 			(for example, <code>www.example.com</code>, <code>test.example.com</code>,
 * 				<code>dev.example.com</code>, and so on), if they exist.</p>
 *          <p>To list conflicting aliases, you provide the alias to search and the ID of a
 * 			distribution in your account that has an attached SSL/TLS certificate that includes the
 * 			provided alias. For more information, including how to set up the distribution and
 * 			certificate, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different
 * 				distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *          <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListConflictingAliasesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListConflictingAliasesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // ListConflictingAliasesRequest
 *   DistributionId: "STRING_VALUE", // required
 *   Alias: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListConflictingAliasesCommand(input);
 * const response = await client.send(command);
 * // { // ListConflictingAliasesResult
 * //   ConflictingAliasesList: { // ConflictingAliasesList
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"),
 * //     Quantity: Number("int"),
 * //     Items: [ // ConflictingAliases
 * //       { // ConflictingAlias
 * //         Alias: "STRING_VALUE",
 * //         DistributionId: "STRING_VALUE",
 * //         AccountId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListConflictingAliasesCommandInput - {@link ListConflictingAliasesCommandInput}
 * @returns {@link ListConflictingAliasesCommandOutput}
 * @see {@link ListConflictingAliasesCommandInput} for command's `input` shape.
 * @see {@link ListConflictingAliasesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchDistribution} (client fault)
 *  <p>The specified distribution does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class ListConflictingAliasesCommand extends $Command<
  ListConflictingAliasesCommandInput,
  ListConflictingAliasesCommandOutput,
  CloudFrontClientResolvedConfig
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
  constructor(readonly input: ListConflictingAliasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListConflictingAliasesCommandInput, ListConflictingAliasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListConflictingAliasesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListConflictingAliasesCommand";
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
  private serialize(input: ListConflictingAliasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListConflictingAliasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListConflictingAliasesCommandOutput> {
    return de_ListConflictingAliasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
