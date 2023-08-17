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

import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { ListModelPackagingJobsRequest, ListModelPackagingJobsResponse } from "../models/models_0";
import { de_ListModelPackagingJobsCommand, se_ListModelPackagingJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListModelPackagingJobsCommand}.
 */
export interface ListModelPackagingJobsCommandInput extends ListModelPackagingJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelPackagingJobsCommand}.
 */
export interface ListModelPackagingJobsCommandOutput extends ListModelPackagingJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 * Lists the model packaging jobs created for an Amazon Lookout for Vision project.
 * </p>
 *          <p>This operation requires permissions to perform the
 *     <code>lookoutvision:ListModelPackagingJobs</code> operation.
 * </p>
 *
 *          <p>For more information, see
 *       <i>Using your Amazon Lookout for Vision model on an edge device</i> in the  Amazon Lookout for Vision Developer Guide. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, ListModelPackagingJobsCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, ListModelPackagingJobsCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const input = { // ListModelPackagingJobsRequest
 *   ProjectName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListModelPackagingJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelPackagingJobsResponse
 * //   ModelPackagingJobs: [ // ModelPackagingJobsList
 * //     { // ModelPackagingJobMetadata
 * //       JobName: "STRING_VALUE",
 * //       ProjectName: "STRING_VALUE",
 * //       ModelVersion: "STRING_VALUE",
 * //       ModelPackagingJobDescription: "STRING_VALUE",
 * //       ModelPackagingMethod: "STRING_VALUE",
 * //       Status: "CREATED" || "RUNNING" || "SUCCEEDED" || "FAILED",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreationTimestamp: new Date("TIMESTAMP"),
 * //       LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListModelPackagingJobsCommandInput - {@link ListModelPackagingJobsCommandInput}
 * @returns {@link ListModelPackagingJobsCommandOutput}
 * @see {@link ListModelPackagingJobsCommandInput} for command's `input` shape.
 * @see {@link ListModelPackagingJobsCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Lookout for Vision experienced a service issue. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Amazon Lookout for Vision is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occured. For example, invalid characters in a project name,
 *       or if a pagination token is invalid.</p>
 *
 * @throws {@link LookoutVisionServiceException}
 * <p>Base exception class for all service exceptions from LookoutVision service.</p>
 *
 */
export class ListModelPackagingJobsCommand extends $Command<
  ListModelPackagingJobsCommandInput,
  ListModelPackagingJobsCommandOutput,
  LookoutVisionClientResolvedConfig
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
  constructor(readonly input: ListModelPackagingJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutVisionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListModelPackagingJobsCommandInput, ListModelPackagingJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListModelPackagingJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "ListModelPackagingJobsCommand";
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
  private serialize(input: ListModelPackagingJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListModelPackagingJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListModelPackagingJobsCommandOutput> {
    return de_ListModelPackagingJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
