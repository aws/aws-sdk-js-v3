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

import {
  GetFaceLivenessSessionResultsRequest,
  GetFaceLivenessSessionResultsResponse,
  GetFaceLivenessSessionResultsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetFaceLivenessSessionResultsCommand,
  se_GetFaceLivenessSessionResultsCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFaceLivenessSessionResultsCommand}.
 */
export interface GetFaceLivenessSessionResultsCommandInput extends GetFaceLivenessSessionResultsRequest {}
/**
 * @public
 *
 * The output of {@link GetFaceLivenessSessionResultsCommand}.
 */
export interface GetFaceLivenessSessionResultsCommandOutput
  extends GetFaceLivenessSessionResultsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the results of a specific Face Liveness session. It requires the
 *         <code>sessionId</code> as input, which was created using
 *         <code>CreateFaceLivenessSession</code>. Returns the corresponding Face Liveness confidence
 *       score, a reference image that includes a face bounding box, and audit images that also contain
 *       face bounding boxes. The Face Liveness confidence score ranges from 0 to 100. The reference
 *       image can optionally be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetFaceLivenessSessionResultsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetFaceLivenessSessionResultsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // GetFaceLivenessSessionResultsRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new GetFaceLivenessSessionResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetFaceLivenessSessionResultsResponse
 * //   SessionId: "STRING_VALUE", // required
 * //   Status: "CREATED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "EXPIRED", // required
 * //   Confidence: Number("float"),
 * //   ReferenceImage: { // AuditImage
 * //     Bytes: "BLOB_VALUE",
 * //     S3Object: { // S3Object
 * //       Bucket: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //     },
 * //     BoundingBox: { // BoundingBox
 * //       Width: Number("float"),
 * //       Height: Number("float"),
 * //       Left: Number("float"),
 * //       Top: Number("float"),
 * //     },
 * //   },
 * //   AuditImages: [ // AuditImages
 * //     {
 * //       Bytes: "BLOB_VALUE",
 * //       S3Object: {
 * //         Bucket: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //       BoundingBox: {
 * //         Width: Number("float"),
 * //         Height: Number("float"),
 * //         Left: Number("float"),
 * //         Top: Number("float"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetFaceLivenessSessionResultsCommandInput - {@link GetFaceLivenessSessionResultsCommandInput}
 * @returns {@link GetFaceLivenessSessionResultsCommandOutput}
 * @see {@link GetFaceLivenessSessionResultsCommandInput} for command's `input` shape.
 * @see {@link GetFaceLivenessSessionResultsCommandOutput} for command's `response` shape.
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
 * @throws {@link SessionNotFoundException} (client fault)
 *  <p>Occurs when a given sessionId is not found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 */
export class GetFaceLivenessSessionResultsCommand extends $Command<
  GetFaceLivenessSessionResultsCommandInput,
  GetFaceLivenessSessionResultsCommandOutput,
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
  constructor(readonly input: GetFaceLivenessSessionResultsCommandInput) {
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
  ): Handler<GetFaceLivenessSessionResultsCommandInput, GetFaceLivenessSessionResultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFaceLivenessSessionResultsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "GetFaceLivenessSessionResultsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetFaceLivenessSessionResultsResponseFilterSensitiveLog,
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
  private serialize(input: GetFaceLivenessSessionResultsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetFaceLivenessSessionResultsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFaceLivenessSessionResultsCommandOutput> {
    return de_GetFaceLivenessSessionResultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
