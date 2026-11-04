// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTestCaseRequest, CreateTestCaseResponse } from "../models/models_1";
import { CreateTestCase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTestCaseCommand}.
 */
export interface CreateTestCaseCommandInput extends CreateTestCaseRequest {}
/**
 * @public
 *
 * The output of {@link CreateTestCaseCommand}.
 */
export interface CreateTestCaseCommandOutput extends CreateTestCaseResponse, __MetadataBearer {}

/**
 * Creates a test case with its content and metadata for the specified Amazon Connect instance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateTestCaseCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateTestCaseCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateTestCaseRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Content: "STRING_VALUE", // required
 *   EntryPoint: { // TestCaseEntryPoint
 *     Type: "VOICE_CALL" || "CHAT",
 *     VoiceCallEntryPointParameters: { // VoiceCallEntryPointParameters
 *       SourcePhoneNumber: "STRING_VALUE",
 *       DestinationPhoneNumber: "STRING_VALUE",
 *       FlowId: "STRING_VALUE",
 *     },
 *     ChatEntryPointParameters: { // ChatEntryPointParameters
 *       FlowId: "STRING_VALUE",
 *     },
 *   },
 *   InitializationData: "STRING_VALUE",
 *   Status: "PUBLISHED" || "SAVED",
 *   TestCaseId: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   LastModifiedTime: new Date("TIMESTAMP"),
 *   LastModifiedRegion: "STRING_VALUE",
 * };
 * const command = new CreateTestCaseCommand(input);
 * const response = await client.send(command);
 * // { // CreateTestCaseResponse
 * //   TestCaseId: "STRING_VALUE",
 * //   TestCaseArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTestCaseCommandInput - {@link CreateTestCaseCommandInput}
 * @returns {@link CreateTestCaseCommandOutput}
 * @see {@link CreateTestCaseCommandInput} for command's `input` shape.
 * @see {@link CreateTestCaseCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * A resource with the specified name already exists.
 *
 * @throws {@link IdempotencyException} (client fault)
 *
 * An entity with the same name already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link InvalidTestCaseException} (client fault)
 *
 * The test is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The allowed limit for the resource has been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class CreateTestCaseCommand extends command<CreateTestCaseCommandInput, CreateTestCaseCommandOutput>(
  _ep0,
  _mw0,
  "CreateTestCase",
  CreateTestCase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTestCaseRequest;
      output: CreateTestCaseResponse;
    };
    sdk: {
      input: CreateTestCaseCommandInput;
      output: CreateTestCaseCommandOutput;
    };
  };
}
