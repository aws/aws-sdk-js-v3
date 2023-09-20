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

import { ListFeatureGroupsRequest, ListFeatureGroupsResponse } from "../models/models_3";
import { de_ListFeatureGroupsCommand, se_ListFeatureGroupsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFeatureGroupsCommand}.
 */
export interface ListFeatureGroupsCommandInput extends ListFeatureGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListFeatureGroupsCommand}.
 */
export interface ListFeatureGroupsCommandOutput extends ListFeatureGroupsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List <code>FeatureGroup</code>s based on given filter and order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListFeatureGroupsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListFeatureGroupsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListFeatureGroupsRequest
 *   NameContains: "STRING_VALUE",
 *   FeatureGroupStatusEquals: "Creating" || "Created" || "CreateFailed" || "Deleting" || "DeleteFailed",
 *   OfflineStoreStatusEquals: "Active" || "Blocked" || "Disabled",
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   SortOrder: "Ascending" || "Descending",
 *   SortBy: "Name" || "FeatureGroupStatus" || "OfflineStoreStatus" || "CreationTime",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFeatureGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListFeatureGroupsResponse
 * //   FeatureGroupSummaries: [ // FeatureGroupSummaries // required
 * //     { // FeatureGroupSummary
 * //       FeatureGroupName: "STRING_VALUE", // required
 * //       FeatureGroupArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       FeatureGroupStatus: "Creating" || "Created" || "CreateFailed" || "Deleting" || "DeleteFailed",
 * //       OfflineStoreStatus: { // OfflineStoreStatus
 * //         Status: "Active" || "Blocked" || "Disabled", // required
 * //         BlockedReason: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ListFeatureGroupsCommandInput - {@link ListFeatureGroupsCommandInput}
 * @returns {@link ListFeatureGroupsCommandOutput}
 * @see {@link ListFeatureGroupsCommandInput} for command's `input` shape.
 * @see {@link ListFeatureGroupsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListFeatureGroupsCommand extends $Command<
  ListFeatureGroupsCommandInput,
  ListFeatureGroupsCommandOutput,
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
  constructor(readonly input: ListFeatureGroupsCommandInput) {
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
  ): Handler<ListFeatureGroupsCommandInput, ListFeatureGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFeatureGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListFeatureGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListFeatureGroups",
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
  private serialize(input: ListFeatureGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListFeatureGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFeatureGroupsCommandOutput> {
    return de_ListFeatureGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
