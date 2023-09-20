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
import { GetTrailStatusRequest, GetTrailStatusResponse } from "../models/models_0";
import { de_GetTrailStatusCommand, se_GetTrailStatusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTrailStatusCommand}.
 */
export interface GetTrailStatusCommandInput extends GetTrailStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetTrailStatusCommand}.
 */
export interface GetTrailStatusCommandOutput extends GetTrailStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a JSON-formatted list of information about the specified trail. Fields include
 *          information on delivery errors, Amazon SNS and Amazon S3 errors, and start
 *          and stop logging times for each trail. This operation returns trail status from a single
 *          Region. To return trail status from all Regions, you must call the operation on each
 *          Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetTrailStatusCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetTrailStatusCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const input = { // GetTrailStatusRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetTrailStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetTrailStatusResponse
 * //   IsLogging: true || false,
 * //   LatestDeliveryError: "STRING_VALUE",
 * //   LatestNotificationError: "STRING_VALUE",
 * //   LatestDeliveryTime: new Date("TIMESTAMP"),
 * //   LatestNotificationTime: new Date("TIMESTAMP"),
 * //   StartLoggingTime: new Date("TIMESTAMP"),
 * //   StopLoggingTime: new Date("TIMESTAMP"),
 * //   LatestCloudWatchLogsDeliveryError: "STRING_VALUE",
 * //   LatestCloudWatchLogsDeliveryTime: new Date("TIMESTAMP"),
 * //   LatestDigestDeliveryTime: new Date("TIMESTAMP"),
 * //   LatestDigestDeliveryError: "STRING_VALUE",
 * //   LatestDeliveryAttemptTime: "STRING_VALUE",
 * //   LatestNotificationAttemptTime: "STRING_VALUE",
 * //   LatestNotificationAttemptSucceeded: "STRING_VALUE",
 * //   LatestDeliveryAttemptSucceeded: "STRING_VALUE",
 * //   TimeLoggingStarted: "STRING_VALUE",
 * //   TimeLoggingStopped: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTrailStatusCommandInput - {@link GetTrailStatusCommandInput}
 * @returns {@link GetTrailStatusCommandOutput}
 * @see {@link GetTrailStatusCommandInput} for command's `input` shape.
 * @see {@link GetTrailStatusCommandOutput} for command's `response` shape.
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
export class GetTrailStatusCommand extends $Command<
  GetTrailStatusCommandInput,
  GetTrailStatusCommandOutput,
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
  constructor(readonly input: GetTrailStatusCommandInput) {
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
  ): Handler<GetTrailStatusCommandInput, GetTrailStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTrailStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "GetTrailStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudTrail_20131101",
        operation: "GetTrailStatus",
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
  private serialize(input: GetTrailStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTrailStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTrailStatusCommandOutput> {
    return de_GetTrailStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
