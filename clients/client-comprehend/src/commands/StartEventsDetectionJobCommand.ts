// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StartEventsDetectionJobRequest, StartEventsDetectionJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartEventsDetectionJobCommand,
  serializeAws_json1_1StartEventsDetectionJobCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link StartEventsDetectionJobCommand}.
 */
export interface StartEventsDetectionJobCommandInput extends StartEventsDetectionJobRequest {}
/**
 * @public
 *
 * The output of {@link StartEventsDetectionJobCommand}.
 */
export interface StartEventsDetectionJobCommandOutput extends StartEventsDetectionJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts an asynchronous event detection job for a collection of documents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StartEventsDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StartEventsDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = {
 *   InputDataConfig: {
 *     S3Uri: "STRING_VALUE", // required
 *     InputFormat: "ONE_DOC_PER_FILE" || "ONE_DOC_PER_LINE",
 *     DocumentReaderConfig: {
 *       DocumentReadAction: "TEXTRACT_DETECT_DOCUMENT_TEXT" || "TEXTRACT_ANALYZE_DOCUMENT", // required
 *       DocumentReadMode: "SERVICE_DEFAULT" || "FORCE_DOCUMENT_READ_ACTION",
 *       FeatureTypes: [
 *         "TABLES" || "FORMS",
 *       ],
 *     },
 *   },
 *   OutputDataConfig: {
 *     S3Uri: "STRING_VALUE", // required
 *     KmsKeyId: "STRING_VALUE",
 *   },
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   JobName: "STRING_VALUE",
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   TargetEventTypes: [ // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartEventsDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartEventsDetectionJobCommandInput - {@link StartEventsDetectionJobCommandInput}
 * @returns {@link StartEventsDetectionJobCommandOutput}
 * @see {@link StartEventsDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StartEventsDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link KmsKeyValidationException} (client fault)
 *  <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and
 *       re-enter it.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request contains more tags than can be associated with a resource (50 tags per
 *       resource). The maximum number of tags includes both existing tags and those included in your
 *       current request. </p>
 *
 *
 */
export class StartEventsDetectionJobCommand extends $Command<
  StartEventsDetectionJobCommandInput,
  StartEventsDetectionJobCommandOutput,
  ComprehendClientResolvedConfig
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
  constructor(readonly input: StartEventsDetectionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartEventsDetectionJobCommandInput, StartEventsDetectionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartEventsDetectionJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "StartEventsDetectionJobCommand";
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
  private serialize(input: StartEventsDetectionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartEventsDetectionJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartEventsDetectionJobCommandOutput> {
    return deserializeAws_json1_1StartEventsDetectionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
