import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListTasksRequest, ListTasksResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTasksCommandInput = ListTasksRequest;
export declare type ListTasksCommandOutput = ListTasksResponse & __MetadataBearer;
export declare class ListTasksCommand extends $Command<ListTasksCommandInput, ListTasksCommandOutput, ECSClientResolvedConfig> {
    readonly input: ListTasksCommandInput;
    constructor(input: ListTasksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTasksCommandInput, ListTasksCommandOutput>;
    private serialize;
    private deserialize;
}
