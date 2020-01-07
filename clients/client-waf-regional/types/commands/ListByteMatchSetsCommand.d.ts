import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { ListByteMatchSetsRequest, ListByteMatchSetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListByteMatchSetsCommandInput = ListByteMatchSetsRequest;
export declare type ListByteMatchSetsCommandOutput = ListByteMatchSetsResponse & __MetadataBearer;
export declare class ListByteMatchSetsCommand extends $Command<ListByteMatchSetsCommandInput, ListByteMatchSetsCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: ListByteMatchSetsCommandInput;
    constructor(input: ListByteMatchSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListByteMatchSetsCommandInput, ListByteMatchSetsCommandOutput>;
    private serialize;
    private deserialize;
}
