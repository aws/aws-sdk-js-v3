import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ListSubscriptionsByTopicInput, ListSubscriptionsByTopicResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSubscriptionsByTopicCommandInput = ListSubscriptionsByTopicInput;
export declare type ListSubscriptionsByTopicCommandOutput = ListSubscriptionsByTopicResponse & __MetadataBearer;
export declare class ListSubscriptionsByTopicCommand extends $Command<ListSubscriptionsByTopicCommandInput, ListSubscriptionsByTopicCommandOutput, SNSClientResolvedConfig> {
    readonly input: ListSubscriptionsByTopicCommandInput;
    constructor(input: ListSubscriptionsByTopicCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSubscriptionsByTopicCommandInput, ListSubscriptionsByTopicCommandOutput>;
    private serialize;
    private deserialize;
}
