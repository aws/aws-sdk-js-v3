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

import { CreateFaceLivenessSessionRequest, CreateFaceLivenessSessionResponse } from "../models/models_0";
import { de_CreateFaceLivenessSessionCommand, se_CreateFaceLivenessSessionCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 *
 * The input for {@link CreateFaceLivenessSessionCommand}.
 */
export interface CreateFaceLivenessSessionCommandInput extends CreateFaceLivenessSessionRequest {}
/**
 * @public
 *
 * The output of {@link CreateFaceLivenessSessionCommand}.
 */
export interface CreateFaceLivenessSessionCommandOutput extends CreateFaceLivenessSessionResponse, __MetadataBearer {}

/**
 * @public
 * <p>This API operation initiates a Face Liveness session. It returns a <code>SessionId</code>,
 *       which you can use to start streaming Face Liveness video and get the results for a Face
 *       Liveness session. You can use the <code>OutputConfig</code> option in the Settings parameter
 *       to provide an Amazon S3 bucket location. The Amazon S3 bucket stores reference images and audit images.
 *       You can use <code>AuditImagesLimit</code> to limit the number of audit images returned.  This
 *       number is between 0 and 4. By default, it is set to 0. The limit is best effort and based on
 *       the duration of the selfie-video. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, CreateFaceLivenessSessionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, CreateFaceLivenessSessionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // CreateFaceLivenessSessionRequest
 *   KmsKeyId: "STRING_VALUE",
 *   Settings: { // CreateFaceLivenessSessionRequestSettings
 *     OutputConfig: { // LivenessOutputConfig
 *       S3Bucket: "STRING_VALUE", // required
 *       S3KeyPrefix: "STRING_VALUE",
 *     },
 *     AuditImagesLimit: Number("int"),
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateFaceLivenessSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateFaceLivenessSessionCommandInput - {@link CreateFaceLivenessSessionCommandInput}
 * @returns {@link CreateFaceLivenessSessionCommandOutput}
 * @see {@link CreateFaceLivenessSessionCommandInput} for command's `input` shape.
 * @see {@link CreateFaceLivenessSessionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 *
 */
export class CreateFaceLivenessSessionCommand extends $Command<
  CreateFaceLivenessSessionCommandInput,
  CreateFaceLivenessSessionCommandOutput,
  RekognitionClientResolvedConfig
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
  constructor(readonly input: CreateFaceLivenessSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFaceLivenessSessionCommandInput, CreateFaceLivenessSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFaceLivenessSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "CreateFaceLivenessSessionCommand";
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
  private serialize(input: CreateFaceLivenessSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFaceLivenessSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateFaceLivenessSessionCommandOutput> {
    return de_CreateFaceLivenessSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
