import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { DeleteTopicInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTopicCommandInput = DeleteTopicInput;
export declare type DeleteTopicCommandOutput = __MetadataBearer;
export declare class DeleteTopicCommand extends $Command<DeleteTopicCommandInput, DeleteTopicCommandOutput, SNSClientResolvedConfig> {
    readonly input: DeleteTopicCommandInput;
    constructor(input: DeleteTopicCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTopicCommandInput, DeleteTopicCommandOutput>;
    private serialize;
    private deserialize;
}
