import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { ListIdentitiesRequest, ListIdentitiesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListIdentitiesCommandInput = ListIdentitiesRequest;
export declare type ListIdentitiesCommandOutput = ListIdentitiesResponse & __MetadataBearer;
export declare class ListIdentitiesCommand extends $Command<ListIdentitiesCommandInput, ListIdentitiesCommandOutput, SESClientResolvedConfig> {
    readonly input: ListIdentitiesCommandInput;
    constructor(input: ListIdentitiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIdentitiesCommandInput, ListIdentitiesCommandOutput>;
    private serialize;
    private deserialize;
}
