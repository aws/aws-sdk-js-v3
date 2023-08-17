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

import { ListModelPackagesInput, ListModelPackagesOutput } from "../models/models_3";
import { de_ListModelPackagesCommand, se_ListModelPackagesCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListModelPackagesCommand}.
 */
export interface ListModelPackagesCommandInput extends ListModelPackagesInput {}
/**
 * @public
 *
 * The output of {@link ListModelPackagesCommand}.
 */
export interface ListModelPackagesCommandOutput extends ListModelPackagesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the model packages that have been created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelPackagesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelPackagesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListModelPackagesInput
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NameContains: "STRING_VALUE",
 *   ModelApprovalStatus: "Approved" || "Rejected" || "PendingManualApproval",
 *   ModelPackageGroupName: "STRING_VALUE",
 *   ModelPackageType: "Versioned" || "Unversioned" || "Both",
 *   NextToken: "STRING_VALUE",
 *   SortBy: "Name" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListModelPackagesCommand(input);
 * const response = await client.send(command);
 * // { // ListModelPackagesOutput
 * //   ModelPackageSummaryList: [ // ModelPackageSummaryList // required
 * //     { // ModelPackageSummary
 * //       ModelPackageName: "STRING_VALUE", // required
 * //       ModelPackageGroupName: "STRING_VALUE",
 * //       ModelPackageVersion: Number("int"),
 * //       ModelPackageArn: "STRING_VALUE", // required
 * //       ModelPackageDescription: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       ModelPackageStatus: "Pending" || "InProgress" || "Completed" || "Failed" || "Deleting", // required
 * //       ModelApprovalStatus: "Approved" || "Rejected" || "PendingManualApproval",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListModelPackagesCommandInput - {@link ListModelPackagesCommandInput}
 * @returns {@link ListModelPackagesCommandOutput}
 * @see {@link ListModelPackagesCommandInput} for command's `input` shape.
 * @see {@link ListModelPackagesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListModelPackagesCommand extends $Command<
  ListModelPackagesCommandInput,
  ListModelPackagesCommandOutput,
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
  constructor(readonly input: ListModelPackagesCommandInput) {
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
  ): Handler<ListModelPackagesCommandInput, ListModelPackagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListModelPackagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListModelPackagesCommand";
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
  private serialize(input: ListModelPackagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListModelPackagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListModelPackagesCommandOutput> {
    return de_ListModelPackagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
