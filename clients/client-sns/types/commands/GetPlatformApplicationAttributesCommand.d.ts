import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { GetPlatformApplicationAttributesInput, GetPlatformApplicationAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPlatformApplicationAttributesCommandInput = GetPlatformApplicationAttributesInput;
export declare type GetPlatformApplicationAttributesCommandOutput = GetPlatformApplicationAttributesResponse & __MetadataBearer;
export declare class GetPlatformApplicationAttributesCommand extends $Command<GetPlatformApplicationAttributesCommandInput, GetPlatformApplicationAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: GetPlatformApplicationAttributesCommandInput;
    constructor(input: GetPlatformApplicationAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPlatformApplicationAttributesCommandInput, GetPlatformApplicationAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
