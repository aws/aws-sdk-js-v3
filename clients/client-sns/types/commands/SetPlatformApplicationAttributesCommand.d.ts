import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { SetPlatformApplicationAttributesInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetPlatformApplicationAttributesCommandInput = SetPlatformApplicationAttributesInput;
export declare type SetPlatformApplicationAttributesCommandOutput = __MetadataBearer;
export declare class SetPlatformApplicationAttributesCommand extends $Command<SetPlatformApplicationAttributesCommandInput, SetPlatformApplicationAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: SetPlatformApplicationAttributesCommandInput;
    constructor(input: SetPlatformApplicationAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetPlatformApplicationAttributesCommandInput, SetPlatformApplicationAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
