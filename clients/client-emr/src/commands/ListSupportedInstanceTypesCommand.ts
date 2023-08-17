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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListSupportedInstanceTypesInput, ListSupportedInstanceTypesOutput } from "../models/models_0";
import { de_ListSupportedInstanceTypesCommand, se_ListSupportedInstanceTypesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSupportedInstanceTypesCommand}.
 */
export interface ListSupportedInstanceTypesCommandInput extends ListSupportedInstanceTypesInput {}
/**
 * @public
 *
 * The output of {@link ListSupportedInstanceTypesCommand}.
 */
export interface ListSupportedInstanceTypesCommandOutput extends ListSupportedInstanceTypesOutput, __MetadataBearer {}

/**
 * @public
 * <p>A list of the instance types that Amazon EMR supports. You can filter the
 *          list by Amazon Web Services Region and Amazon EMR release. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListSupportedInstanceTypesCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListSupportedInstanceTypesCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ListSupportedInstanceTypesInput
 *   ReleaseLabel: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListSupportedInstanceTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListSupportedInstanceTypesOutput
 * //   SupportedInstanceTypes: [ // SupportedInstanceTypesList
 * //     { // SupportedInstanceType
 * //       Type: "STRING_VALUE",
 * //       MemoryGB: Number("float"),
 * //       StorageGB: Number("int"),
 * //       VCPU: Number("int"),
 * //       Is64BitsOnly: true || false,
 * //       InstanceFamilyId: "STRING_VALUE",
 * //       EbsOptimizedAvailable: true || false,
 * //       EbsOptimizedByDefault: true || false,
 * //       NumberOfDisks: Number("int"),
 * //       EbsStorageOnly: true || false,
 * //       Architecture: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSupportedInstanceTypesCommandInput - {@link ListSupportedInstanceTypesCommandInput}
 * @returns {@link ListSupportedInstanceTypesCommandOutput}
 * @see {@link ListSupportedInstanceTypesCommandInput} for command's `input` shape.
 * @see {@link ListSupportedInstanceTypesCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class ListSupportedInstanceTypesCommand extends $Command<
  ListSupportedInstanceTypesCommandInput,
  ListSupportedInstanceTypesCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: ListSupportedInstanceTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSupportedInstanceTypesCommandInput, ListSupportedInstanceTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSupportedInstanceTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListSupportedInstanceTypesCommand";
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
  private serialize(input: ListSupportedInstanceTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSupportedInstanceTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSupportedInstanceTypesCommandOutput> {
    return de_ListSupportedInstanceTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
