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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeBundleTasksRequest,
  DescribeBundleTasksResult,
  DescribeBundleTasksResultFilterSensitiveLog,
} from "../models/models_3";
import { de_DescribeBundleTasksCommand, se_DescribeBundleTasksCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBundleTasksCommand}.
 */
export interface DescribeBundleTasksCommandInput extends DescribeBundleTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBundleTasksCommand}.
 */
export interface DescribeBundleTasksCommandOutput extends DescribeBundleTasksResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified bundle tasks or all of your bundle tasks.</p>
 *          <note>
 *             <p>Completed bundle tasks are listed for only a limited time. If your bundle task is no longer in the list, you can still register an AMI from it. Just use <code>RegisterImage</code> with the Amazon S3 bucket name and image manifest name you provided to the bundle task.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeBundleTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeBundleTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeBundleTasksRequest
 *   BundleIds: [ // BundleIdStringList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeBundleTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBundleTasksResult
 * //   BundleTasks: [ // BundleTaskList
 * //     { // BundleTask
 * //       BundleId: "STRING_VALUE",
 * //       BundleTaskError: { // BundleTaskError
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       InstanceId: "STRING_VALUE",
 * //       Progress: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       State: "pending" || "waiting-for-shutdown" || "bundling" || "storing" || "cancelling" || "complete" || "failed",
 * //       Storage: { // Storage
 * //         S3: { // S3Storage
 * //           AWSAccessKeyId: "STRING_VALUE",
 * //           Bucket: "STRING_VALUE",
 * //           Prefix: "STRING_VALUE",
 * //           UploadPolicy: "BLOB_VALUE",
 * //           UploadPolicySignature: "STRING_VALUE",
 * //         },
 * //       },
 * //       UpdateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeBundleTasksCommandInput - {@link DescribeBundleTasksCommandInput}
 * @returns {@link DescribeBundleTasksCommandOutput}
 * @see {@link DescribeBundleTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeBundleTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeBundleTasksCommand extends $Command<
  DescribeBundleTasksCommandInput,
  DescribeBundleTasksCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DescribeBundleTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBundleTasksCommandInput, DescribeBundleTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBundleTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeBundleTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeBundleTasksResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeBundleTasks",
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
  private serialize(input: DescribeBundleTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBundleTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBundleTasksCommandOutput> {
    return de_DescribeBundleTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
