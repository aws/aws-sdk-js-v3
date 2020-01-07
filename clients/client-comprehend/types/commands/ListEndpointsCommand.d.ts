import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListEndpointsRequest, ListEndpointsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListEndpointsCommandInput = ListEndpointsRequest;
export declare type ListEndpointsCommandOutput = ListEndpointsResponse & __MetadataBearer;
export declare class ListEndpointsCommand extends $Command<ListEndpointsCommandInput, ListEndpointsCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: ListEndpointsCommandInput;
    constructor(input: ListEndpointsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEndpointsCommandInput, ListEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
