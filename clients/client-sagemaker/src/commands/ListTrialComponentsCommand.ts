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

import { ListTrialComponentsRequest, ListTrialComponentsResponse } from "../models/models_3";
import { de_ListTrialComponentsCommand, se_ListTrialComponentsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTrialComponentsCommand}.
 */
export interface ListTrialComponentsCommandInput extends ListTrialComponentsRequest {}
/**
 * @public
 *
 * The output of {@link ListTrialComponentsCommand}.
 */
export interface ListTrialComponentsCommandOutput extends ListTrialComponentsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the trial components in your account. You can sort the list by trial component name
 *       or creation time. You can filter the list to show only components that were created in a
 *       specific time range. You can also filter on one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ExperimentName</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SourceArn</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TrialName</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTrialComponentsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTrialComponentsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListTrialComponentsRequest
 *   ExperimentName: "STRING_VALUE",
 *   TrialName: "STRING_VALUE",
 *   SourceArn: "STRING_VALUE",
 *   CreatedAfter: new Date("TIMESTAMP"),
 *   CreatedBefore: new Date("TIMESTAMP"),
 *   SortBy: "Name" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTrialComponentsCommand(input);
 * const response = await client.send(command);
 * // { // ListTrialComponentsResponse
 * //   TrialComponentSummaries: [ // TrialComponentSummaries
 * //     { // TrialComponentSummary
 * //       TrialComponentName: "STRING_VALUE",
 * //       TrialComponentArn: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       TrialComponentSource: { // TrialComponentSource
 * //         SourceArn: "STRING_VALUE", // required
 * //         SourceType: "STRING_VALUE",
 * //       },
 * //       Status: { // TrialComponentStatus
 * //         PrimaryStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       CreatedBy: { // UserContext
 * //         UserProfileArn: "STRING_VALUE",
 * //         UserProfileName: "STRING_VALUE",
 * //         DomainId: "STRING_VALUE",
 * //         IamIdentity: { // IamIdentity
 * //           Arn: "STRING_VALUE",
 * //           PrincipalId: "STRING_VALUE",
 * //           SourceIdentity: "STRING_VALUE",
 * //         },
 * //       },
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedBy: {
 * //         UserProfileArn: "STRING_VALUE",
 * //         UserProfileName: "STRING_VALUE",
 * //         DomainId: "STRING_VALUE",
 * //         IamIdentity: {
 * //           Arn: "STRING_VALUE",
 * //           PrincipalId: "STRING_VALUE",
 * //           SourceIdentity: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTrialComponentsCommandInput - {@link ListTrialComponentsCommandInput}
 * @returns {@link ListTrialComponentsCommandOutput}
 * @see {@link ListTrialComponentsCommandInput} for command's `input` shape.
 * @see {@link ListTrialComponentsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListTrialComponentsCommand extends $Command<
  ListTrialComponentsCommandInput,
  ListTrialComponentsCommandOutput,
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
  constructor(readonly input: ListTrialComponentsCommandInput) {
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
  ): Handler<ListTrialComponentsCommandInput, ListTrialComponentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTrialComponentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListTrialComponentsCommand";
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
  private serialize(input: ListTrialComponentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTrialComponentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTrialComponentsCommandOutput> {
    return de_ListTrialComponentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
