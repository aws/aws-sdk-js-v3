import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListContainerInstancesRequest, ListContainerInstancesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListContainerInstancesCommandInput = ListContainerInstancesRequest;
export declare type ListContainerInstancesCommandOutput = ListContainerInstancesResponse & __MetadataBearer;
export declare class ListContainerInstancesCommand extends $Command<ListContainerInstancesCommandInput, ListContainerInstancesCommandOutput, ECSClientResolvedConfig> {
    readonly input: ListContainerInstancesCommandInput;
    constructor(input: ListContainerInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListContainerInstancesCommandInput, ListContainerInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
