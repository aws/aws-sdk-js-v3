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

import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { CreateHsmRequest, CreateHsmResponse } from "../models/models_0";
import { de_CreateHsmCommand, se_CreateHsmCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateHsmCommand}.
 */
export interface CreateHsmCommandInput extends CreateHsmRequest {}
/**
 * @public
 *
 * The output of {@link CreateHsmCommand}.
 */
export interface CreateHsmCommandOutput extends CreateHsmResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new hardware security module (HSM) in the specified AWS CloudHSM
 *       cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, CreateHsmCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, CreateHsmCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const input = { // CreateHsmRequest
 *   ClusterId: "STRING_VALUE", // required
 *   AvailabilityZone: "STRING_VALUE", // required
 *   IpAddress: "STRING_VALUE",
 * };
 * const command = new CreateHsmCommand(input);
 * const response = await client.send(command);
 * // { // CreateHsmResponse
 * //   Hsm: { // Hsm
 * //     AvailabilityZone: "STRING_VALUE",
 * //     ClusterId: "STRING_VALUE",
 * //     SubnetId: "STRING_VALUE",
 * //     EniId: "STRING_VALUE",
 * //     EniIp: "STRING_VALUE",
 * //     HsmId: "STRING_VALUE", // required
 * //     State: "STRING_VALUE",
 * //     StateMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateHsmCommandInput - {@link CreateHsmCommandInput}
 * @returns {@link CreateHsmCommandOutput}
 * @see {@link CreateHsmCommandInput} for command's `input` shape.
 * @see {@link CreateHsmCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for CloudHSMV2Client's `config` shape.
 *
 * @throws {@link CloudHsmAccessDeniedException} (client fault)
 *  <p>The request was rejected because the requester does not have permission to perform the
 *       requested operation.</p>
 *
 * @throws {@link CloudHsmInternalFailureException} (server fault)
 *  <p>The request was rejected because of an AWS CloudHSM internal failure. The request can
 *       be retried.</p>
 *
 * @throws {@link CloudHsmInvalidRequestException} (client fault)
 *  <p>The request was rejected because it is not a valid request.</p>
 *
 * @throws {@link CloudHsmResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it refers to a resource that cannot be
 *       found.</p>
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *  <p>The request was rejected because an error occurred.</p>
 *
 * @throws {@link CloudHSMV2ServiceException}
 * <p>Base exception class for all service exceptions from CloudHSMV2 service.</p>
 *
 */
export class CreateHsmCommand extends $Command<
  CreateHsmCommandInput,
  CreateHsmCommandOutput,
  CloudHSMV2ClientResolvedConfig
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
  constructor(readonly input: CreateHsmCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHsmCommandInput, CreateHsmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateHsmCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMV2Client";
    const commandName = "CreateHsmCommand";
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
  private serialize(input: CreateHsmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateHsmCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHsmCommandOutput> {
    return de_CreateHsmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
