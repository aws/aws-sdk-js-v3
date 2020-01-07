import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ListPhoneNumbersOptedOutInput, ListPhoneNumbersOptedOutResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPhoneNumbersOptedOutCommandInput = ListPhoneNumbersOptedOutInput;
export declare type ListPhoneNumbersOptedOutCommandOutput = ListPhoneNumbersOptedOutResponse & __MetadataBearer;
export declare class ListPhoneNumbersOptedOutCommand extends $Command<ListPhoneNumbersOptedOutCommandInput, ListPhoneNumbersOptedOutCommandOutput, SNSClientResolvedConfig> {
    readonly input: ListPhoneNumbersOptedOutCommandInput;
    constructor(input: ListPhoneNumbersOptedOutCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPhoneNumbersOptedOutCommandInput, ListPhoneNumbersOptedOutCommandOutput>;
    private serialize;
    private deserialize;
}
