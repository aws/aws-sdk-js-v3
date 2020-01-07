import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { SetSMSAttributesInput, SetSMSAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetSMSAttributesCommandInput = SetSMSAttributesInput;
export declare type SetSMSAttributesCommandOutput = SetSMSAttributesResponse & __MetadataBearer;
export declare class SetSMSAttributesCommand extends $Command<SetSMSAttributesCommandInput, SetSMSAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: SetSMSAttributesCommandInput;
    constructor(input: SetSMSAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetSMSAttributesCommandInput, SetSMSAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
