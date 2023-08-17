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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccessKeyLastUsedRequest, GetAccessKeyLastUsedResponse } from "../models/models_0";
import { de_GetAccessKeyLastUsedCommand, se_GetAccessKeyLastUsedCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAccessKeyLastUsedCommand}.
 */
export interface GetAccessKeyLastUsedCommandInput extends GetAccessKeyLastUsedRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessKeyLastUsedCommand}.
 */
export interface GetAccessKeyLastUsedCommandOutput extends GetAccessKeyLastUsedResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about when the specified access key was last used. The
 *             information includes the date and time of last use, along with the Amazon Web Services service and
 *             Region that were specified in the last request made with that key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetAccessKeyLastUsedCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetAccessKeyLastUsedCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetAccessKeyLastUsedRequest
 *   AccessKeyId: "STRING_VALUE", // required
 * };
 * const command = new GetAccessKeyLastUsedCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessKeyLastUsedResponse
 * //   UserName: "STRING_VALUE",
 * //   AccessKeyLastUsed: { // AccessKeyLastUsed
 * //     LastUsedDate: new Date("TIMESTAMP"), // required
 * //     ServiceName: "STRING_VALUE", // required
 * //     Region: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccessKeyLastUsedCommandInput - {@link GetAccessKeyLastUsedCommandInput}
 * @returns {@link GetAccessKeyLastUsedCommandOutput}
 * @see {@link GetAccessKeyLastUsedCommandInput} for command's `input` shape.
 * @see {@link GetAccessKeyLastUsedCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 */
export class GetAccessKeyLastUsedCommand extends $Command<
  GetAccessKeyLastUsedCommandInput,
  GetAccessKeyLastUsedCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: GetAccessKeyLastUsedCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccessKeyLastUsedCommandInput, GetAccessKeyLastUsedCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAccessKeyLastUsedCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetAccessKeyLastUsedCommand";
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
  private serialize(input: GetAccessKeyLastUsedCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAccessKeyLastUsedCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccessKeyLastUsedCommandOutput> {
    return de_GetAccessKeyLastUsedCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
