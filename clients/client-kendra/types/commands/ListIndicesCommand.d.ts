import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { ListIndicesRequest, ListIndicesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListIndicesCommandInput = ListIndicesRequest;
export declare type ListIndicesCommandOutput = ListIndicesResponse & __MetadataBearer;
export declare class ListIndicesCommand extends $Command<ListIndicesCommandInput, ListIndicesCommandOutput, kendraClientResolvedConfig> {
    readonly input: ListIndicesCommandInput;
    constructor(input: ListIndicesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIndicesCommandInput, ListIndicesCommandOutput>;
    private serialize;
    private deserialize;
}
