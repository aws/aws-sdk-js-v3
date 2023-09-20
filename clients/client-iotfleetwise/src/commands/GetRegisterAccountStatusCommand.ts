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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { GetRegisterAccountStatusRequest, GetRegisterAccountStatusResponse } from "../models/models_0";
import { de_GetRegisterAccountStatusCommand, se_GetRegisterAccountStatusCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRegisterAccountStatusCommand}.
 */
export interface GetRegisterAccountStatusCommandInput extends GetRegisterAccountStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetRegisterAccountStatusCommand}.
 */
export interface GetRegisterAccountStatusCommandOutput extends GetRegisterAccountStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p> Retrieves information about the status of registering your Amazon Web Services account, IAM, and
 *             Amazon Timestream resources so that Amazon Web Services IoT FleetWise can transfer your vehicle data to the Amazon Web Services
 *             Cloud. </p>
 *         <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/setting-up.html">Setting up Amazon Web Services IoT FleetWise</a>. </p>
 *         <note>
 *             <p>This API operation doesn't require input parameters.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetRegisterAccountStatusCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetRegisterAccountStatusCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = {};
 * const command = new GetRegisterAccountStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetRegisterAccountStatusResponse
 * //   customerAccountId: "STRING_VALUE", // required
 * //   accountStatus: "STRING_VALUE", // required
 * //   timestreamRegistrationResponse: { // TimestreamRegistrationResponse
 * //     timestreamDatabaseName: "STRING_VALUE", // required
 * //     timestreamTableName: "STRING_VALUE", // required
 * //     timestreamDatabaseArn: "STRING_VALUE",
 * //     timestreamTableArn: "STRING_VALUE",
 * //     registrationStatus: "STRING_VALUE", // required
 * //     errorMessage: "STRING_VALUE",
 * //   },
 * //   iamRegistrationResponse: { // IamRegistrationResponse
 * //     roleArn: "STRING_VALUE", // required
 * //     registrationStatus: "STRING_VALUE", // required
 * //     errorMessage: "STRING_VALUE",
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastModificationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetRegisterAccountStatusCommandInput - {@link GetRegisterAccountStatusCommandInput}
 * @returns {@link GetRegisterAccountStatusCommandOutput}
 * @see {@link GetRegisterAccountStatusCommandInput} for command's `input` shape.
 * @see {@link GetRegisterAccountStatusCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 */
export class GetRegisterAccountStatusCommand extends $Command<
  GetRegisterAccountStatusCommandInput,
  GetRegisterAccountStatusCommandOutput,
  IoTFleetWiseClientResolvedConfig
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
  constructor(readonly input: GetRegisterAccountStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRegisterAccountStatusCommandInput, GetRegisterAccountStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRegisterAccountStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "GetRegisterAccountStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IoTAutobahnControlPlane",
        operation: "GetRegisterAccountStatus",
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
  private serialize(input: GetRegisterAccountStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRegisterAccountStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRegisterAccountStatusCommandOutput> {
    return de_GetRegisterAccountStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
