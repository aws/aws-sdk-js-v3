import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { UpdateDomainEndpointOptionsRequest, UpdateDomainEndpointOptionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDomainEndpointOptionsCommandInput = UpdateDomainEndpointOptionsRequest;
export declare type UpdateDomainEndpointOptionsCommandOutput = UpdateDomainEndpointOptionsResponse & __MetadataBearer;
export declare class UpdateDomainEndpointOptionsCommand extends $Command<UpdateDomainEndpointOptionsCommandInput, UpdateDomainEndpointOptionsCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: UpdateDomainEndpointOptionsCommandInput;
    constructor(input: UpdateDomainEndpointOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDomainEndpointOptionsCommandInput, UpdateDomainEndpointOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
