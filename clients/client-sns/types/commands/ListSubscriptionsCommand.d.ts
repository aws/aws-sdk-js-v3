import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ListSubscriptionsInput, ListSubscriptionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSubscriptionsCommandInput = ListSubscriptionsInput;
export declare type ListSubscriptionsCommandOutput = ListSubscriptionsResponse & __MetadataBearer;
export declare class ListSubscriptionsCommand extends $Command<ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput, SNSClientResolvedConfig> {
    readonly input: ListSubscriptionsCommandInput;
    constructor(input: ListSubscriptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput>;
    private serialize;
    private deserialize;
}
