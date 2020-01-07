import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { ListConfigurationsRequest, ListConfigurationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListConfigurationsCommandInput = ListConfigurationsRequest;
export declare type ListConfigurationsCommandOutput = ListConfigurationsResponse & __MetadataBearer;
export declare class ListConfigurationsCommand extends $Command<ListConfigurationsCommandInput, ListConfigurationsCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: ListConfigurationsCommandInput;
    constructor(input: ListConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConfigurationsCommandInput, ListConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
