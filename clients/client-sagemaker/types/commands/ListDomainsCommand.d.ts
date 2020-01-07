import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListDomainsRequest, ListDomainsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDomainsCommandInput = ListDomainsRequest;
export declare type ListDomainsCommandOutput = ListDomainsResponse & __MetadataBearer;
export declare class ListDomainsCommand extends $Command<ListDomainsCommandInput, ListDomainsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListDomainsCommandInput;
    constructor(input: ListDomainsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDomainsCommandInput, ListDomainsCommandOutput>;
    private serialize;
    private deserialize;
}
