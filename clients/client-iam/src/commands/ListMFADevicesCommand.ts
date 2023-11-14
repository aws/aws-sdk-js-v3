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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListMFADevicesRequest, ListMFADevicesResponse } from "../models/models_0";
import { de_ListMFADevicesCommand, se_ListMFADevicesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMFADevicesCommand}.
 */
export interface ListMFADevicesCommandInput extends ListMFADevicesRequest {}
/**
 * @public
 *
 * The output of {@link ListMFADevicesCommand}.
 */
export interface ListMFADevicesCommandOutput extends ListMFADevicesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the MFA devices for an IAM user. If the request includes a IAM user name,
 *             then this operation lists all the MFA devices associated with the specified user. If you
 *             do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services
 *             access key ID signing the request for this operation.</p>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListMFADevicesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListMFADevicesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListMFADevicesRequest
 *   UserName: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListMFADevicesCommand(input);
 * const response = await client.send(command);
 * // { // ListMFADevicesResponse
 * //   MFADevices: [ // mfaDeviceListType // required
 * //     { // MFADevice
 * //       UserName: "STRING_VALUE", // required
 * //       SerialNumber: "STRING_VALUE", // required
 * //       EnableDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMFADevicesCommandInput - {@link ListMFADevicesCommandInput}
 * @returns {@link ListMFADevicesCommandOutput}
 * @see {@link ListMFADevicesCommandInput} for command's `input` shape.
 * @see {@link ListMFADevicesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 */
export class ListMFADevicesCommand extends $Command<
  ListMFADevicesCommandInput,
  ListMFADevicesCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: ListMFADevicesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMFADevicesCommandInput, ListMFADevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMFADevicesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListMFADevicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "ListMFADevices",
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
  private serialize(input: ListMFADevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMFADevicesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMFADevicesCommandOutput> {
    return de_ListMFADevicesCommand(output, context);
  }
}
