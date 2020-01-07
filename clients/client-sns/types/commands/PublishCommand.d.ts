import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { PublishInput, PublishResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PublishCommandInput = PublishInput;
export declare type PublishCommandOutput = PublishResponse & __MetadataBearer;
export declare class PublishCommand extends $Command<PublishCommandInput, PublishCommandOutput, SNSClientResolvedConfig> {
    readonly input: PublishCommandInput;
    constructor(input: PublishCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PublishCommandInput, PublishCommandOutput>;
    private serialize;
    private deserialize;
}
