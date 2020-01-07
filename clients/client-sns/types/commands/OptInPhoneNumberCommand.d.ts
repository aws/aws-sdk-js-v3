import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { OptInPhoneNumberInput, OptInPhoneNumberResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type OptInPhoneNumberCommandInput = OptInPhoneNumberInput;
export declare type OptInPhoneNumberCommandOutput = OptInPhoneNumberResponse & __MetadataBearer;
export declare class OptInPhoneNumberCommand extends $Command<OptInPhoneNumberCommandInput, OptInPhoneNumberCommandOutput, SNSClientResolvedConfig> {
    readonly input: OptInPhoneNumberCommandInput;
    constructor(input: OptInPhoneNumberCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<OptInPhoneNumberCommandInput, OptInPhoneNumberCommandOutput>;
    private serialize;
    private deserialize;
}
