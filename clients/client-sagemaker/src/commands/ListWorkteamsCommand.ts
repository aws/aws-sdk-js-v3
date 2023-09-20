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

import { ListWorkteamsRequest, ListWorkteamsResponse } from "../models/models_3";
import { de_ListWorkteamsCommand, se_ListWorkteamsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListWorkteamsCommand}.
 */
export interface ListWorkteamsCommandInput extends ListWorkteamsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkteamsCommand}.
 */
export interface ListWorkteamsCommandOutput extends ListWorkteamsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of private work teams that you have defined in a region. The list may be empty if
 *             no work team satisfies the filter specified in the <code>NameContains</code>
 *             parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListWorkteamsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListWorkteamsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListWorkteamsRequest
 *   SortBy: "Name" || "CreateDate",
 *   SortOrder: "Ascending" || "Descending",
 *   NameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListWorkteamsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkteamsResponse
 * //   Workteams: [ // Workteams // required
 * //     { // Workteam
 * //       WorkteamName: "STRING_VALUE", // required
 * //       MemberDefinitions: [ // MemberDefinitions // required
 * //         { // MemberDefinition
 * //           CognitoMemberDefinition: { // CognitoMemberDefinition
 * //             UserPool: "STRING_VALUE", // required
 * //             UserGroup: "STRING_VALUE", // required
 * //             ClientId: "STRING_VALUE", // required
 * //           },
 * //           OidcMemberDefinition: { // OidcMemberDefinition
 * //             Groups: [ // Groups // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       WorkteamArn: "STRING_VALUE", // required
 * //       WorkforceArn: "STRING_VALUE",
 * //       ProductListingIds: [ // ProductListings
 * //         "STRING_VALUE",
 * //       ],
 * //       Description: "STRING_VALUE", // required
 * //       SubDomain: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       LastUpdatedDate: new Date("TIMESTAMP"),
 * //       NotificationConfiguration: { // NotificationConfiguration
 * //         NotificationTopicArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkteamsCommandInput - {@link ListWorkteamsCommandInput}
 * @returns {@link ListWorkteamsCommandOutput}
 * @see {@link ListWorkteamsCommandInput} for command's `input` shape.
 * @see {@link ListWorkteamsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListWorkteamsCommand extends $Command<
  ListWorkteamsCommandInput,
  ListWorkteamsCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListWorkteamsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWorkteamsCommandInput, ListWorkteamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListWorkteamsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListWorkteamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListWorkteams",
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
  private serialize(input: ListWorkteamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListWorkteamsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorkteamsCommandOutput> {
    return de_ListWorkteamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
