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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListContactReferencesRequest, ListContactReferencesResponse } from "../models/models_1";
import { de_ListContactReferencesCommand, se_ListContactReferencesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListContactReferencesCommand}.
 */
export interface ListContactReferencesCommandInput extends ListContactReferencesRequest {}
/**
 * @public
 *
 * The output of {@link ListContactReferencesCommand}.
 */
export interface ListContactReferencesCommandOutput extends ListContactReferencesResponse, __MetadataBearer {}

/**
 * @public
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>For the specified <code>referenceTypes</code>, returns a list of references associated with
 *    the contact. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListContactReferencesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListContactReferencesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListContactReferencesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   ReferenceTypes: [ // ReferenceTypes // required
 *     "URL" || "ATTACHMENT" || "NUMBER" || "STRING" || "DATE" || "EMAIL",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListContactReferencesCommand(input);
 * const response = await client.send(command);
 * // { // ListContactReferencesResponse
 * //   ReferenceSummaryList: [ // ReferenceSummaryList
 * //     { // ReferenceSummary Union: only one key present
 * //       Url: { // UrlReference
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //       Attachment: { // AttachmentReference
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //         Status: "APPROVED" || "REJECTED",
 * //       },
 * //       String: { // StringReference
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //       Number: { // NumberReference
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //       Date: { // DateReference
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //       Email: { // EmailReference
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContactReferencesCommandInput - {@link ListContactReferencesCommandInput}
 * @returns {@link ListContactReferencesCommandOutput}
 * @see {@link ListContactReferencesCommandInput} for command's `input` shape.
 * @see {@link ListContactReferencesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class ListContactReferencesCommand extends $Command<
  ListContactReferencesCommandInput,
  ListContactReferencesCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: ListContactReferencesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListContactReferencesCommandInput, ListContactReferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListContactReferencesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListContactReferencesCommand";
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
  private serialize(input: ListContactReferencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListContactReferencesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListContactReferencesCommandOutput> {
    return de_ListContactReferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
