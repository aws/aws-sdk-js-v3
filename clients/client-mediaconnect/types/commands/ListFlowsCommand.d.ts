import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { ListFlowsRequest, ListFlowsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListFlowsCommandInput = ListFlowsRequest;
export declare type ListFlowsCommandOutput = ListFlowsResponse & __MetadataBearer;
export declare class ListFlowsCommand extends $Command<ListFlowsCommandInput, ListFlowsCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: ListFlowsCommandInput;
    constructor(input: ListFlowsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFlowsCommandInput, ListFlowsCommandOutput>;
    private serialize;
    private deserialize;
}
