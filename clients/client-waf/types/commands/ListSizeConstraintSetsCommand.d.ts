import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { ListSizeConstraintSetsRequest, ListSizeConstraintSetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSizeConstraintSetsCommandInput = ListSizeConstraintSetsRequest;
export declare type ListSizeConstraintSetsCommandOutput = ListSizeConstraintSetsResponse & __MetadataBearer;
export declare class ListSizeConstraintSetsCommand extends $Command<ListSizeConstraintSetsCommandInput, ListSizeConstraintSetsCommandOutput, WAFClientResolvedConfig> {
    readonly input: ListSizeConstraintSetsCommandInput;
    constructor(input: ListSizeConstraintSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSizeConstraintSetsCommandInput, ListSizeConstraintSetsCommandOutput>;
    private serialize;
    private deserialize;
}
