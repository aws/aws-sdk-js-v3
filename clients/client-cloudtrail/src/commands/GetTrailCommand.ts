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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { GetTrailRequest, GetTrailResponse } from "../models/models_0";
import { de_GetTrailCommand, se_GetTrailCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTrailCommand}.
 */
export interface GetTrailCommandInput extends GetTrailRequest {}
/**
 * @public
 *
 * The output of {@link GetTrailCommand}.
 */
export interface GetTrailCommandOutput extends GetTrailResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns settings information for a specified trail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetTrailCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetTrailCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const input = { // GetTrailRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetTrailCommand(input);
 * const response = await client.send(command);
 * // { // GetTrailResponse
 * //   Trail: { // Trail
 * //     Name: "STRING_VALUE",
 * //     S3BucketName: "STRING_VALUE",
 * //     S3KeyPrefix: "STRING_VALUE",
 * //     SnsTopicName: "STRING_VALUE",
 * //     SnsTopicARN: "STRING_VALUE",
 * //     IncludeGlobalServiceEvents: true || false,
 * //     IsMultiRegionTrail: true || false,
 * //     HomeRegion: "STRING_VALUE",
 * //     TrailARN: "STRING_VALUE",
 * //     LogFileValidationEnabled: true || false,
 * //     CloudWatchLogsLogGroupArn: "STRING_VALUE",
 * //     CloudWatchLogsRoleArn: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //     HasCustomEventSelectors: true || false,
 * //     HasInsightSelectors: true || false,
 * //     IsOrganizationTrail: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTrailCommandInput - {@link GetTrailCommandInput}
 * @returns {@link GetTrailCommandOutput}
 * @see {@link GetTrailCommandInput} for command's `input` shape.
 * @see {@link GetTrailCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link CloudTrailARNInvalidException} (client fault)
 *  <p>This exception is thrown when an operation is called with a trail ARN that is not valid.
 *          The following is the format of a trail ARN.</p>
 *          <p>
 *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
 *          </p>
 *          <p>This exception is also thrown when you call <code>AddTags</code> or <code>RemoveTags</code> on a trail, event data store, or channel with a resource ARN that is not valid.</p>
 *          <p>The following is the format of an event data store ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
 *          </p>
 *          <p>The following is the format of a channel ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
 *          </p>
 *
 * @throws {@link InvalidTrailNameException} (client fault)
 *  <p>This exception is thrown when the provided trail name is not valid. Trail names must
 *          meet the following requirements:</p>
 *          <ul>
 *             <li>
 *                <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores
 *                (_), or dashes (-)</p>
 *             </li>
 *             <li>
 *                <p>Start with a letter or number, and end with a letter or number</p>
 *             </li>
 *             <li>
 *                <p>Be between 3 and 128 characters</p>
 *             </li>
 *             <li>
 *                <p>Have no adjacent periods, underscores or dashes. Names like
 *                   <code>my-_namespace</code> and <code>my--namespace</code> are not valid.</p>
 *             </li>
 *             <li>
 *                <p>Not be in IP address format (for example, 192.168.5.4)</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link TrailNotFoundException} (client fault)
 *  <p>This exception is thrown when the trail with the given name is not found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 */
export class GetTrailCommand extends $Command<
  GetTrailCommandInput,
  GetTrailCommandOutput,
  CloudTrailClientResolvedConfig
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
  constructor(readonly input: GetTrailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTrailCommandInput, GetTrailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetTrailCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "GetTrailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudTrail_20131101",
        operation: "GetTrail",
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
  private serialize(input: GetTrailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTrailCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTrailCommandOutput> {
    return de_GetTrailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
