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

import { GetFileUploadURLRequest, GetFileUploadURLResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_GetFileUploadURLCommand, se_GetFileUploadURLCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFileUploadURLCommand}.
 */
export interface GetFileUploadURLCommandInput extends GetFileUploadURLRequest {}
/**
 * @public
 *
 * The output of {@link GetFileUploadURLCommand}.
 */
export interface GetFileUploadURLCommandOutput extends GetFileUploadURLResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The
 *             <code>GetFileUploadURL</code>
 *             operation generates and returns a temporary URL. You use the
 *             temporary URL to retrieve a file uploaded by a Worker as an answer to
 *             a FileUploadAnswer question for a HIT. The temporary URL is generated
 *             the instant the GetFileUploadURL operation is called, and is valid
 *             for 60 seconds. You can get a temporary file upload URL any time
 *             until the HIT is disposed. After the HIT is disposed, any uploaded
 *             files are deleted, and cannot be retrieved.
 *
 *             Pending Deprecation on December 12, 2017. The Answer Specification
 *             structure will no longer  support the <code>FileUploadAnswer</code>
 *             element to be used for the QuestionForm data structure.
 *             Instead, we recommend that Requesters who want to create HITs asking
 *             Workers to upload files to use Amazon S3.
 *
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetFileUploadURLCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetFileUploadURLCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // GetFileUploadURLRequest
 *   AssignmentId: "STRING_VALUE", // required
 *   QuestionIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetFileUploadURLCommand(input);
 * const response = await client.send(command);
 * // { // GetFileUploadURLResponse
 * //   FileUploadURL: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFileUploadURLCommandInput - {@link GetFileUploadURLCommandInput}
 * @returns {@link GetFileUploadURLCommandOutput}
 * @see {@link GetFileUploadURLCommandInput} for command's `input` shape.
 * @see {@link GetFileUploadURLCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 */
export class GetFileUploadURLCommand extends $Command<
  GetFileUploadURLCommandInput,
  GetFileUploadURLCommandOutput,
  MTurkClientResolvedConfig
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
  constructor(readonly input: GetFileUploadURLCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFileUploadURLCommandInput, GetFileUploadURLCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFileUploadURLCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "GetFileUploadURLCommand";
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
  private serialize(input: GetFileUploadURLCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetFileUploadURLCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFileUploadURLCommandOutput> {
    return de_GetFileUploadURLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
