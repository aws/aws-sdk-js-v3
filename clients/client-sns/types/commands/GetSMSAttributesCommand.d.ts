import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { GetSMSAttributesInput, GetSMSAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSMSAttributesCommandInput = GetSMSAttributesInput;
export declare type GetSMSAttributesCommandOutput = GetSMSAttributesResponse & __MetadataBearer;
export declare class GetSMSAttributesCommand extends $Command<GetSMSAttributesCommandInput, GetSMSAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: GetSMSAttributesCommandInput;
    constructor(input: GetSMSAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSMSAttributesCommandInput, GetSMSAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
