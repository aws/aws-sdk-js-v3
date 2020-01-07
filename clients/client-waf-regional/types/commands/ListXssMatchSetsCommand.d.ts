import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { ListXssMatchSetsRequest, ListXssMatchSetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListXssMatchSetsCommandInput = ListXssMatchSetsRequest;
export declare type ListXssMatchSetsCommandOutput = ListXssMatchSetsResponse & __MetadataBearer;
export declare class ListXssMatchSetsCommand extends $Command<ListXssMatchSetsCommandInput, ListXssMatchSetsCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: ListXssMatchSetsCommandInput;
    constructor(input: ListXssMatchSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListXssMatchSetsCommandInput, ListXssMatchSetsCommandOutput>;
    private serialize;
    private deserialize;
}
