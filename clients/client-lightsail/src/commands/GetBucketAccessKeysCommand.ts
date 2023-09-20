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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  GetBucketAccessKeysRequest,
  GetBucketAccessKeysResult,
  GetBucketAccessKeysResultFilterSensitiveLog,
} from "../models/models_0";
import { de_GetBucketAccessKeysCommand, se_GetBucketAccessKeysCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBucketAccessKeysCommand}.
 */
export interface GetBucketAccessKeysCommandInput extends GetBucketAccessKeysRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketAccessKeysCommand}.
 */
export interface GetBucketAccessKeysCommandOutput extends GetBucketAccessKeysResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns the existing access key IDs for the specified Amazon Lightsail bucket.</p>
 *          <important>
 *             <p>This action does not return the secret access key value of an access key. You can get a
 *         secret access key only when you create it from the response of the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action. If you lose the secret access key, you must create
 *         a new access key.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBucketAccessKeysCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBucketAccessKeysCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetBucketAccessKeysRequest
 *   bucketName: "STRING_VALUE", // required
 * };
 * const command = new GetBucketAccessKeysCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketAccessKeysResult
 * //   accessKeys: [ // AccessKeyList
 * //     { // AccessKey
 * //       accessKeyId: "STRING_VALUE",
 * //       secretAccessKey: "STRING_VALUE",
 * //       status: "Active" || "Inactive",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUsed: { // AccessKeyLastUsed
 * //         lastUsedDate: new Date("TIMESTAMP"),
 * //         region: "STRING_VALUE",
 * //         serviceName: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBucketAccessKeysCommandInput - {@link GetBucketAccessKeysCommandInput}
 * @returns {@link GetBucketAccessKeysCommandOutput}
 * @see {@link GetBucketAccessKeysCommandInput} for command's `input` shape.
 * @see {@link GetBucketAccessKeysCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 */
export class GetBucketAccessKeysCommand extends $Command<
  GetBucketAccessKeysCommandInput,
  GetBucketAccessKeysCommandOutput,
  LightsailClientResolvedConfig
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
  constructor(readonly input: GetBucketAccessKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBucketAccessKeysCommandInput, GetBucketAccessKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBucketAccessKeysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetBucketAccessKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetBucketAccessKeysResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "Lightsail_20161128",
        operation: "GetBucketAccessKeys",
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
  private serialize(input: GetBucketAccessKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBucketAccessKeysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketAccessKeysCommandOutput> {
    return de_GetBucketAccessKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
