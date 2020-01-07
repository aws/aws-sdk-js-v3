import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { CheckIfPhoneNumberIsOptedOutInput, CheckIfPhoneNumberIsOptedOutResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CheckIfPhoneNumberIsOptedOutCommandInput = CheckIfPhoneNumberIsOptedOutInput;
export declare type CheckIfPhoneNumberIsOptedOutCommandOutput = CheckIfPhoneNumberIsOptedOutResponse & __MetadataBearer;
export declare class CheckIfPhoneNumberIsOptedOutCommand extends $Command<CheckIfPhoneNumberIsOptedOutCommandInput, CheckIfPhoneNumberIsOptedOutCommandOutput, SNSClientResolvedConfig> {
    readonly input: CheckIfPhoneNumberIsOptedOutCommandInput;
    constructor(input: CheckIfPhoneNumberIsOptedOutCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CheckIfPhoneNumberIsOptedOutCommandInput, CheckIfPhoneNumberIsOptedOutCommandOutput>;
    private serialize;
    private deserialize;
}
