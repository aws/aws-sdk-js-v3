import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { ListAssociatedFleetsRequest, ListAssociatedFleetsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAssociatedFleetsCommandInput = ListAssociatedFleetsRequest;
export declare type ListAssociatedFleetsCommandOutput = ListAssociatedFleetsResult & __MetadataBearer;
export declare class ListAssociatedFleetsCommand extends $Command<ListAssociatedFleetsCommandInput, ListAssociatedFleetsCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: ListAssociatedFleetsCommandInput;
    constructor(input: ListAssociatedFleetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssociatedFleetsCommandInput, ListAssociatedFleetsCommandOutput>;
    private serialize;
    private deserialize;
}
