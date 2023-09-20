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

import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { UpdatePipelineStatusRequest, UpdatePipelineStatusResponse } from "../models/models_0";
import { de_UpdatePipelineStatusCommand, se_UpdatePipelineStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePipelineStatusCommand}.
 */
export interface UpdatePipelineStatusCommandInput extends UpdatePipelineStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePipelineStatusCommand}.
 */
export interface UpdatePipelineStatusCommandOutput extends UpdatePipelineStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline
 *             stops or restarts the processing of jobs.</p>
 *         <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't
 *             cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which
 *             you submitted the jobs, you have more time to get the job IDs for the jobs that you want
 *             to cancel, and to send a <a>CancelJob</a> request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, UpdatePipelineStatusCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, UpdatePipelineStatusCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const input = { // UpdatePipelineStatusRequest
 *   Id: "STRING_VALUE", // required
 *   Status: "STRING_VALUE", // required
 * };
 * const command = new UpdatePipelineStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePipelineStatusResponse
 * //   Pipeline: { // Pipeline
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     InputBucket: "STRING_VALUE",
 * //     OutputBucket: "STRING_VALUE",
 * //     Role: "STRING_VALUE",
 * //     AwsKmsKeyArn: "STRING_VALUE",
 * //     Notifications: { // Notifications
 * //       Progressing: "STRING_VALUE",
 * //       Completed: "STRING_VALUE",
 * //       Warning: "STRING_VALUE",
 * //       Error: "STRING_VALUE",
 * //     },
 * //     ContentConfig: { // PipelineOutputConfig
 * //       Bucket: "STRING_VALUE",
 * //       StorageClass: "STRING_VALUE",
 * //       Permissions: [ // Permissions
 * //         { // Permission
 * //           GranteeType: "STRING_VALUE",
 * //           Grantee: "STRING_VALUE",
 * //           Access: [ // AccessControls
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     ThumbnailConfig: {
 * //       Bucket: "STRING_VALUE",
 * //       StorageClass: "STRING_VALUE",
 * //       Permissions: [
 * //         {
 * //           GranteeType: "STRING_VALUE",
 * //           Grantee: "STRING_VALUE",
 * //           Access: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePipelineStatusCommandInput - {@link UpdatePipelineStatusCommandInput}
 * @returns {@link UpdatePipelineStatusCommandOutput}
 * @see {@link UpdatePipelineStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineStatusCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for ElasticTranscoderClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>General authentication failure. The request was not signed correctly.</p>
 *
 * @throws {@link IncompatibleVersionException} (client fault)
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource you are attempting to change is in use. For example, you are attempting
 *             to delete a pipeline that is currently in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist or is not available. For example, the pipeline
 *             to which you're trying to add a job doesn't exist or is still being created.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more required parameter values were not provided in the request.</p>
 *
 * @throws {@link ElasticTranscoderServiceException}
 * <p>Base exception class for all service exceptions from ElasticTranscoder service.</p>
 *
 */
export class UpdatePipelineStatusCommand extends $Command<
  UpdatePipelineStatusCommandInput,
  UpdatePipelineStatusCommandOutput,
  ElasticTranscoderClientResolvedConfig
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
  constructor(readonly input: UpdatePipelineStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePipelineStatusCommandInput, UpdatePipelineStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePipelineStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "UpdatePipelineStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "EtsCustomerService",
        operation: "UpdatePipelineStatus",
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
  private serialize(input: UpdatePipelineStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePipelineStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePipelineStatusCommandOutput> {
    return de_UpdatePipelineStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
