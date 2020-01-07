import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { ListIPSetsRequest, ListIPSetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListIPSetsCommandInput = ListIPSetsRequest;
export declare type ListIPSetsCommandOutput = ListIPSetsResponse & __MetadataBearer;
export declare class ListIPSetsCommand extends $Command<ListIPSetsCommandInput, ListIPSetsCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: ListIPSetsCommandInput;
    constructor(input: ListIPSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIPSetsCommandInput, ListIPSetsCommandOutput>;
    private serialize;
    private deserialize;
}
