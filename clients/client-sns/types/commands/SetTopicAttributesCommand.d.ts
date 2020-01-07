import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { SetTopicAttributesInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetTopicAttributesCommandInput = SetTopicAttributesInput;
export declare type SetTopicAttributesCommandOutput = __MetadataBearer;
export declare class SetTopicAttributesCommand extends $Command<SetTopicAttributesCommandInput, SetTopicAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: SetTopicAttributesCommandInput;
    constructor(input: SetTopicAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetTopicAttributesCommandInput, SetTopicAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
