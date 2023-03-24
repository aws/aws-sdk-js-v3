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

import { CreateAddressRequest, CreateAddressResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateAddressCommand,
  serializeAws_json1_1CreateAddressCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 *
 * The input for {@link CreateAddressCommand}.
 */
export interface CreateAddressCommandInput extends CreateAddressRequest {}
/**
 * @public
 *
 * The output of {@link CreateAddressCommand}.
 */
export interface CreateAddressCommandOutput extends CreateAddressResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates an address for a Snow device to be shipped to. In most regions,
 *       addresses are validated at the time of creation. The address you provide must be located
 *       within the serviceable area of your region. If the address is invalid or unsupported, then an
 *       exception is thrown.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateAddressCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateAddressCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = {
 *   Address: {
 *     AddressId: "STRING_VALUE",
 *     Name: "STRING_VALUE",
 *     Company: "STRING_VALUE",
 *     Street1: "STRING_VALUE",
 *     Street2: "STRING_VALUE",
 *     Street3: "STRING_VALUE",
 *     City: "STRING_VALUE",
 *     StateOrProvince: "STRING_VALUE",
 *     PrefectureOrDistrict: "STRING_VALUE",
 *     Landmark: "STRING_VALUE",
 *     Country: "STRING_VALUE",
 *     PostalCode: "STRING_VALUE",
 *     PhoneNumber: "STRING_VALUE",
 *     IsRestricted: true || false,
 *   },
 * };
 * const command = new CreateAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateAddressCommandInput - {@link CreateAddressCommandInput}
 * @returns {@link CreateAddressCommandOutput}
 * @see {@link CreateAddressCommandInput} for command's `input` shape.
 * @see {@link CreateAddressCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidAddressException} (client fault)
 *  <p>The address provided was invalid. Check the address with your region's carrier, and try
 *       again.</p>
 *
 * @throws {@link UnsupportedAddressException} (client fault)
 *  <p>The address is either outside the serviceable area for your region, or an error
 *       occurred. Check the address with your region's carrier and try again. If the issue persists,
 *       contact Amazon Web Services Support.</p>
 *
 *
 * @example To create an address for a job
 * ```javascript
 * // This operation creates an address for a job. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown.
 * const input = {
 *   "Address": {
 *     "City": "Seattle",
 *     "Company": "My Company's Name",
 *     "Country": "USA",
 *     "Name": "My Name",
 *     "PhoneNumber": "425-555-5555",
 *     "PostalCode": "98101",
 *     "StateOrProvince": "WA",
 *     "Street1": "123 Main Street"
 *   }
 * };
 * const command = new CreateAddressCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AddressId": "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b"
 * }
 * *\/
 * // example id: to-create-an-address-for-a-job-1482535416294
 * ```
 *
 */
export class CreateAddressCommand extends $Command<
  CreateAddressCommandInput,
  CreateAddressCommandOutput,
  SnowballClientResolvedConfig
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
  constructor(readonly input: CreateAddressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAddressCommandInput, CreateAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateAddressCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "CreateAddressCommand";
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
  private serialize(input: CreateAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAddressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAddressCommandOutput> {
    return deserializeAws_json1_1CreateAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
