import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListExclusionsRequest, ListExclusionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListExclusionsCommandInput = ListExclusionsRequest;
export declare type ListExclusionsCommandOutput = ListExclusionsResponse & __MetadataBearer;
export declare class ListExclusionsCommand extends $Command<ListExclusionsCommandInput, ListExclusionsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: ListExclusionsCommandInput;
    constructor(input: ListExclusionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListExclusionsCommandInput, ListExclusionsCommandOutput>;
    private serialize;
    private deserialize;
}
