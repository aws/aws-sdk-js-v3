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

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { StartTransformerJobRequest, StartTransformerJobResponse } from "../models/models_0";
import { de_StartTransformerJobCommand, se_StartTransformerJobCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartTransformerJobCommand}.
 */
export interface StartTransformerJobCommandInput extends StartTransformerJobRequest {}
/**
 * @public
 *
 * The output of {@link StartTransformerJobCommand}.
 */
export interface StartTransformerJobCommandOutput extends StartTransformerJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Runs a job, using a transformer, to parse input EDI (electronic data interchange) file into the output structures used by Amazon Web Services B2BI Data Interchange.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, StartTransformerJobCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, StartTransformerJobCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // StartTransformerJobRequest
 *   inputFile: { // S3Location
 *     bucketName: "STRING_VALUE",
 *     key: "STRING_VALUE",
 *   },
 *   outputLocation: {
 *     bucketName: "STRING_VALUE",
 *     key: "STRING_VALUE",
 *   },
 *   transformerId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartTransformerJobCommand(input);
 * const response = await client.send(command);
 * // { // StartTransformerJobResponse
 * //   transformerJobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartTransformerJobCommandInput - {@link StartTransformerJobCommandInput}
 * @returns {@link StartTransformerJobCommandOutput}
 * @see {@link StartTransformerJobCommandInput} for command's `input` shape.
 * @see {@link StartTransformerJobCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 * @example Sample StartTransformerJob call
 * ```javascript
 * //
 * const input = {
 *   "clientToken": "foo",
 *   "inputFile": {
 *     "key": "input/inputFile.txt",
 *     "bucketName": "test-bucket"
 *   },
 *   "outputLocation": {
 *     "key": "output/",
 *     "bucketName": "test-bucket"
 *   },
 *   "transformerId": "tr-974c129999f84d8c9"
 * };
 * const command = new StartTransformerJobCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "transformerJobId": "tj-vpYxfV7yQOqjMSYllEslLw"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class StartTransformerJobCommand extends $Command<
  StartTransformerJobCommandInput,
  StartTransformerJobCommandOutput,
  B2biClientResolvedConfig
> {
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
  constructor(readonly input: StartTransformerJobCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: B2biClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartTransformerJobCommandInput, StartTransformerJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartTransformerJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "B2biClient";
    const commandName = "StartTransformerJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "B2BI",
        operation: "StartTransformerJob",
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
  private serialize(input: StartTransformerJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartTransformerJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTransformerJobCommandOutput> {
    return de_StartTransformerJobCommand(output, context);
  }
}
