import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ListTopicsInput, ListTopicsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTopicsCommandInput = ListTopicsInput;
export declare type ListTopicsCommandOutput = ListTopicsResponse & __MetadataBearer;
export declare class ListTopicsCommand extends $Command<ListTopicsCommandInput, ListTopicsCommandOutput, SNSClientResolvedConfig> {
    readonly input: ListTopicsCommandInput;
    constructor(input: ListTopicsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTopicsCommandInput, ListTopicsCommandOutput>;
    private serialize;
    private deserialize;
}
