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

import { GetReadSetMetadataRequest, GetReadSetMetadataResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetReadSetMetadataCommand, se_GetReadSetMetadataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetReadSetMetadataCommand}.
 */
export interface GetReadSetMetadataCommandInput extends GetReadSetMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetReadSetMetadataCommand}.
 */
export interface GetReadSetMetadataCommandOutput extends GetReadSetMetadataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets details about a read set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetReadSetMetadataCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetReadSetMetadataCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // GetReadSetMetadataRequest
 *   id: "STRING_VALUE", // required
 *   sequenceStoreId: "STRING_VALUE", // required
 * };
 * const command = new GetReadSetMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetReadSetMetadataResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   sequenceStoreId: "STRING_VALUE", // required
 * //   subjectId: "STRING_VALUE",
 * //   sampleId: "STRING_VALUE",
 * //   status: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   fileType: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   sequenceInformation: { // SequenceInformation
 * //     totalReadCount: Number("long"),
 * //     totalBaseCount: Number("long"),
 * //     generatedFrom: "STRING_VALUE",
 * //     alignment: "STRING_VALUE",
 * //   },
 * //   referenceArn: "STRING_VALUE",
 * //   files: { // ReadSetFiles
 * //     source1: { // FileInformation
 * //       totalParts: Number("int"),
 * //       partSize: Number("long"),
 * //       contentLength: Number("long"),
 * //     },
 * //     source2: {
 * //       totalParts: Number("int"),
 * //       partSize: Number("long"),
 * //       contentLength: Number("long"),
 * //     },
 * //     index: {
 * //       totalParts: Number("int"),
 * //       partSize: Number("long"),
 * //       contentLength: Number("long"),
 * //     },
 * //   },
 * //   statusMessage: "STRING_VALUE",
 * //   creationType: "STRING_VALUE",
 * //   etag: { // ETag
 * //     algorithm: "STRING_VALUE",
 * //     source1: "STRING_VALUE",
 * //     source2: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetReadSetMetadataCommandInput - {@link GetReadSetMetadataCommandInput}
 * @returns {@link GetReadSetMetadataCommandOutput}
 * @see {@link GetReadSetMetadataCommandInput} for command's `input` shape.
 * @see {@link GetReadSetMetadataCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 */
export class GetReadSetMetadataCommand extends $Command<
  GetReadSetMetadataCommandInput,
  GetReadSetMetadataCommandOutput,
  OmicsClientResolvedConfig
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
  constructor(readonly input: GetReadSetMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OmicsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReadSetMetadataCommandInput, GetReadSetMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReadSetMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "GetReadSetMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Omics",
        operation: "GetReadSetMetadata",
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
  private serialize(input: GetReadSetMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetReadSetMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetReadSetMetadataCommandOutput> {
    return de_GetReadSetMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
